import config from './config';

export default class Data {

  /**
   * creates an HTTP request
   * @param {String} path - pathname to add to url
   * @param {String} [method='GET'] - HTTP request verb
   * @param {Object} [body=null] - body for HTTP headers object
   * @param {Boolean} [requiresAuth=false] - determines whether HTTP Authorization header is needed
   * @param {Object} [credentials=null] - contains emailAddress and password
   * @returns {Function} - fetch request
   */
  api = (path, method = 'GET', body = null, requiresAuth = false, credentials = null) => {
    const url = `${config.apiBaseUrl}${path}`;
    const options = {
      method,
      cors: 'cors',
      headers: {},
    }
    if (body !== null) {
      options.headers['Content-Type'] = 'application/json; charset=utf-8'
      options.body = JSON.stringify(body)
    }
    if (requiresAuth) {
      const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`)
      options.headers['Authorization'] = `Basic ${encodedCredentials}`
    }
    return fetch(url, options)
  }

  /**
   * sends a request to rest api for a list of courses
   * @returns {Promise} - a list of courses in json
   */
  getAllCourses = async () => {
    try {
      const response = await this.api('/courses');
      if (response.status === 200) {
        return response.json()
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * sends a request to rest api for a course
   * @param {Integer} courseId -
   * @returns {Promise} - a course in json
   */
  getCourse = async (courseId) => {
    try {
      return await this.api(`/courses/${courseId}`);
    } catch (error) {
      return error;
    }
  } 

  /**
   * sends a request to api for user
   * @param {String} emailAddress
   * @param {String} password
   * @returns {Promise} - a user in json
   */
  getUser = async (emailAddress, password) => {
    return await this.api('/users', 'GET', null, true, {emailAddress, password});
  }
  
  /**
   * sends a user to api be added to database
   * @param {Object} user - a new user
   * @returns {Promise}
   */
  createUser = async (user) => {
    return await this.api('/users', 'POST', user);
  }

  /**
   * sends a course to api to be added to database
   * @param {Object} course - a new course
   * @param {String} emailAddress
   * @param {String} password
   * @returns {Promise}
   */
  createCourse = async (course, emailAddress, password) => {
    return await this.api('/courses', 'POST', course, true, {emailAddress, password});
  }

  /**
   * sends updated course information to database
   * @param {Object} course - updated course info
   * @param {String} emailAddress
   * @param {String} password
   * @returns {Promise}
   */
  updateCourse = async (course, emailAddress, password) => {
    return await this.api(`/courses/${course.id}`, 'PUT', course, true, {emailAddress, password});
  }

  /**
   * sends request to api to delete course
   * @param {Integer} courseId - ID for course to be updated
   * @param {String} emailAddress
   * @param {String} password
   * @returns {Promise}
   */
  deleteCourse = async (courseId, emailAddress, password) => {
    return await this.api(`/courses/${courseId}`, 'DELETE', null, true, {emailAddress, password});
  }
}