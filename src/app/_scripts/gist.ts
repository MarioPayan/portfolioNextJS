//eslint-disable

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const PROJECTS = {
  TS: 'TeamSense',
  WP: 'WellPlayed',
  AL: 'Alert Logic',
  ODS: 'One Data Source',
  P: 'Personal',
  R: 'Redux',
}

const TYPE = {
  S: 'Script',
  D: 'Document',
  TA: 'Technical Assessment',
  O: 'Other',
  U: 'Unknown',
}

const STATUS = {
  A: 'Active',
  I: 'INACTIVE',
}

const GistClient = class {
  urls: {[key: string]: () => string} | {[key: string]: (id: string) => string} // TODO: Fix this
  username: string
  token: string
  constructor() {
    this.username = 'MarioPayan'
    this.token = process.env.GIST_TOKEN || ''
    this.urls = {
      userGists: () => `https://api.github.com/users/${this.username}/gists`,
      gistId: (id: string) => `https://api.github.com/gists/${id}`,
      gist: () => 'https://api.github.com/gists',
    }
  }

  call = async (httpMethod: HttpMethod, url: string, body: unknown = undefined) => {
    const response = await fetch(url, {
      method: httpMethod,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${this.token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: body ? JSON.stringify(body) : undefined,
    })
    if (!response.ok) {
      console.error('GIST API Error:', response.statusText)
    }
    return await response.json()
  }

  getAllGists = (): Promise<Gist[]> => this.call(HttpMethod.GET, this.urls.userGists())
  getGist = (id: string): Promise<Gist> => this.call(HttpMethod.GET, this.urls.gistId(id))
  createGist = (filename: string, content: string, description: string): Promise<Gist> =>
    this.call(HttpMethod.POST, this.urls.gist(), {
      description: description,
      public: false,
      files: {[filename]: {content: content}},
    })
  updateGist = (
    id: string,
    filename: string,
    content: string,
    description: string
  ): Promise<Gist> =>
    this.call(HttpMethod.PUT, this.urls.gistId(id), {
      description: description,
      files: {[filename]: {content: content}},
    })
}

const gitClient = new GistClient()
const regex = /#\{(\w{1,3})\|(\w{1,3})\|(\w{1,3})\}#/

const getDescriptionData = (gist: Gist): {project: string; type: string; status: string} => {
  const matches = gist.description.match(regex)
  if (!matches || matches.length !== 4) {
    return {project: '', type: '', status: ''}
  }
  return {project: matches?.[1], type: matches?.[2], status: matches?.[2]}
}

const createOrUpdateIndexGist = async (content: string) => {
  const filename = 'index.md'
  const description = 'Index Gist #{P|D|A}#'
  const gists = await gitClient.getAllGists()
  const indexGist = gists.find(gist => Object.keys(gist.files)[0] === filename)
  if (indexGist) {
    await gitClient.updateGist(indexGist.id, filename, content, description)
  } else {
    await gitClient.createGist(filename, content, description)
  }
}

const getMarkdownTable = (gists: {
  [key: string]: {project: string; type: string; status: string; gist: Gist}
}) => {
  let markdown = '| Name | Project | Type | Status | Description | Link |\n'
  markdown += '| --- | --- | --- | --- | --- | --- |\n'
  Object.values(gists).forEach(gist => {
    const filename = Object.keys(gist.gist.files)[0]
    const project = PROJECTS[gist.project as keyof typeof PROJECTS] || ''
    const type = TYPE[gist.gist.description as keyof typeof TYPE] || ''
    const status = STATUS[gist.status as keyof typeof STATUS] || ''
    const description = gist.gist.description.replace(regex, '')
    const link = `[Link](${gist.gist.html_url})`
    markdown += `| ${filename} | ${project} | ${type} | ${status} | ${description} | ${link} |\n`
  })
  return markdown
}

const updateIndexGist = async () => {
  const gistsIds = (await gitClient.getAllGists()).map(gist => gist.id)
  const gists = await Promise.all(gistsIds.map(async gistId => await gitClient.getGist(gistId)))
  const gistData: {[key: string]: {project: string; type: string; status: string; gist: Gist}} = {}
  gists.forEach(gist => {
    const {project, type, status} = getDescriptionData(gist)
    gistData[gist.id] = {project: project, type: type, status: status, gist}
  })
  const sortedGistData = Object.fromEntries(
    Object.entries(gistData).sort((a, b) => {
      if (a[1].status === b[1].status) {
        return a[1].project.localeCompare(b[1].project)
      }
      return a[1].status.localeCompare(b[1].status)
    })
  )
  const mdTable = getMarkdownTable(sortedGistData)
  createOrUpdateIndexGist(mdTable)
}

export {updateIndexGist}
