import ROUTE_INFOS from "../routes";

function findRoute(level, names, routeInfo, prefix = "") {
  const currentPath = names[level];
  console.log(`current path = ${currentPath}`);
  if (currentPath && routeInfo.path === prefix + currentPath) {
    const children = routeInfo.children;

    console.log(`in ${routeInfo.path}`);
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
    const foundRouteInfo = findRoute(level, names, routeInfo, "/");

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
