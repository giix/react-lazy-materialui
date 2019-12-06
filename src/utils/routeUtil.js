import ROUTE_INFOS from "../routes";
import last from "lodash/last";

function findRoute(level, names, routeInfo) {
  const currentPathName = names[level];
  const routeInfoPathName = last(routeInfo.path.split("/"));

  // console.log(`pathname of current route = ${routeInfoPathName}`);
  // console.log(`current path name = ${currentPathName}`);

  if (currentPathName && routeInfoPathName === currentPathName) {
    const children = routeInfo.children;

    // console.log(`in ${routeInfo.path}`);
    const nextLevel = level + 1;
    if (children && nextLevel < names.length) {
      for (let i = 0; i < children.length; ++i) {
        const child = children[i];
        const obj = findRoute(nextLevel, names, child);
        if (obj) {
          return obj;
        }
      }
    }

    return routeInfo;
  }
  return null;
}

function internalGetRoutes(start, routeInfos) {
  if (!start || start.length === 0) {
    return [...routeInfos];
  }

  const names = start.split("/");

  let level = 1;
  for (let i = 0; i < routeInfos.length; ++i) {
    const routeInfo = routeInfos[i];
    const foundRouteInfo = findRoute(level, names, routeInfo);

    if (foundRouteInfo) {
      return foundRouteInfo;
    }
  }

  return [];
}

/**
 *
 * @param {string} start
 */
export function getRoutes(start) {
  return internalGetRoutes(start, ROUTE_INFOS);
}
