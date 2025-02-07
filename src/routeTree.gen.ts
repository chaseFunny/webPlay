/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DemosIndexImport } from './routes/demos/index'
import { Route as DemosDemoIdDemoIdImport } from './routes/demos/$demoId/$demoId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DemosIndexRoute = DemosIndexImport.update({
  id: '/demos/',
  path: '/demos/',
  getParentRoute: () => rootRoute,
} as any)

const DemosDemoIdDemoIdRoute = DemosDemoIdDemoIdImport.update({
  id: '/demos/$demoId/$demoId',
  path: '/demos/$demoId/$demoId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/demos/': {
      id: '/demos/'
      path: '/demos'
      fullPath: '/demos'
      preLoaderRoute: typeof DemosIndexImport
      parentRoute: typeof rootRoute
    }
    '/demos/$demoId/$demoId': {
      id: '/demos/$demoId/$demoId'
      path: '/demos/$demoId/$demoId'
      fullPath: '/demos/$demoId/$demoId'
      preLoaderRoute: typeof DemosDemoIdDemoIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/demos': typeof DemosIndexRoute
  '/demos/$demoId/$demoId': typeof DemosDemoIdDemoIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/demos': typeof DemosIndexRoute
  '/demos/$demoId/$demoId': typeof DemosDemoIdDemoIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/demos/': typeof DemosIndexRoute
  '/demos/$demoId/$demoId': typeof DemosDemoIdDemoIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/demos' | '/demos/$demoId/$demoId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/demos' | '/demos/$demoId/$demoId'
  id: '__root__' | '/' | '/demos/' | '/demos/$demoId/$demoId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DemosIndexRoute: typeof DemosIndexRoute
  DemosDemoIdDemoIdRoute: typeof DemosDemoIdDemoIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DemosIndexRoute: DemosIndexRoute,
  DemosDemoIdDemoIdRoute: DemosDemoIdDemoIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/demos/",
        "/demos/$demoId/$demoId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/demos/": {
      "filePath": "demos/index.tsx"
    },
    "/demos/$demoId/$demoId": {
      "filePath": "demos/$demoId/$demoId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
