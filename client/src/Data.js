import config from './config';

export default class Data {

  api = (path, method = 'GET', body = null, requiresAuth = false, credentials = null) => {
    const url = `${config.apiBaseUrl}${path}`;
    const options = {
      method,
      cors: 'cors',
      headers: {}
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

  getAllCourses = async () => {
    const response = await this.api('/courses');
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Sorry. Something went wrong!');
    }
  }

  getCourse = async (courseId) => {
    return await this.api(`/courses/${courseId}`).then(res => res.json());
  } 

  // Below is for Sign In
  getUser = async (emailAddress, password) => {
    return await this.api('/users', 'GET', null, true, {emailAddress, password});
  }

  // Below is for Sign Up
  createUser = async (user) => {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      console.log(`User ${user.firstName} ${user.lastName} has been successfully signed up`)
      return response;
    } else if (response.status >= 400 && response.status < 500) {
      return await response.json().then(data => data)
    } else if (response.status === 500) {
      console.log(response.json());
    } else {
      throw new Error();
    }
  }

  createCourse = async (course, emailAddress, password) => {
    return await this.api('/courses', 'POST', course, true, {emailAddress, password});
  }

  updateCourse = async (course, emailAddress, password) => {
    return await this.api(`/courses/${course.id}`, 'PUT', course, true, {emailAddress, password});
  }

  deleteCourse = async (courseId, emailAddress, password) => {
    const response = await this.api(`/courses/${courseId}`, 'DELETE', null, true, {emailAddress, password});
    if ('status' in response) {
      if (response.status !== 204) {
        return response.json();
      }
    }
    return null
  }
}