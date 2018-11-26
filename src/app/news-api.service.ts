import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  API_KEY = 'fd1c78d090494e4d92b4316bfe482f2e'
  API_BASE_URL = 'https://newsapi.org/v2'

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      `${this.API_BASE_URL}/sources?language=en&apiKey=${this.API_KEY}`,
    )
  }

  initArticles() {
    return this.http.get(
      `${this.API_BASE_URL}/top-headlines?sources=techcrunch&apiKey=${
        this.API_KEY
      }`,
    )
  }

  getArticlesByID(source: string) {
    return this.http.get(
      `${this.API_BASE_URL}/top-headlines?sources=${source}&apiKey=${
        this.API_KEY
      }`,
    )
  }
}
