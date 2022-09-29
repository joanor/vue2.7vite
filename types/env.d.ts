/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

interface ViteEnv {
  VITE_PORT: number
  VITE_USE_MOCK: boolean
  VITE_USE_PWA: boolean
  VITE_PUBLIC_PATH: string
  VITE_PROXY: [string, string][]
  VITE_GLOB_APP_TITLE: string
  VITE_GLOB_APP_SHORT_NAME: string
  VITE_USE_CDN: boolean
  VITE_DROP_CONSOLE: boolean
  VITE_BUILD_COMPRESS: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  VITE_LEGACY: boolean
  VITE_USE_IMAGEMIN: boolean
  VITE_GENERATE_UI: string
}

interface ImportMetaEnv extends ViteEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASEAPI_DEV: string
  readonly VITE_APP_BASEAPI_PROD: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  NProgress: typeof import('nprogress')
  dayjs: typeof import('dayjs')
  readonly config: {
    projectName: string
    whiteList: string[]
    // uaa_url: string
    // project_url: string
    // basic_url: string
    [propName: string]: string | string[]
  }
  gsap: typeof import('gsap')
  Flip: typeof import('gsap/Flip').Flip
  Power0: {
    easeIn: AnyFunction
    easeInOut: AnyFunction
    easeNone: AnyFunction
    easeOut: AnyFunction
  }
  Power1: {
    easeIn: AnyFunction
    easeInOut: AnyFunction
    easeOut: AnyFunction
  }
  Power2: {
    easeIn: AnyFunction
    easeInOut: AnyFunction
    easeOut: AnyFunction
  }
  Power3: {
    easeIn: AnyFunction
    easeInOut: AnyFunction
    easeOut: AnyFunction
  }
  Power4: {
    easeIn: AnyFunction
    easeInOut: AnyFunction
    easeOut: AnyFunction
  }
}

declare type Recordable<T = any> = Record<string, T>
declare type AnyFunction = (...args: any[]) => any
declare type ConstructorFunction = new (...args: any[]) => any
declare type Values<T> = T[keyof T]
