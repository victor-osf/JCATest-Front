const url = 'http://localhost:8000';

const config = {
  headers: {
    Authorization: "Basic " + btoa("jca:jca")
  }
}

export default { url, config }