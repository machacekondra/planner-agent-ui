import "@patternfly/react-core/dist/styles/base.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Configuration } from "@migration-planner-ui/api-client/runtime";
import { SourceApi } from "@migration-planner-ui/api-client/apis";
import { Spinner } from "@patternfly/react-core";
import { Container, Provider as DependencyInjectionProvider } from "@migration-planner-ui/ioc";
import { PLANNER_BASEPATH } from "./Constants";
import { router } from "./Router";
import { Symbols } from "./Symbols";
import { MockSourceApi } from "#/apis/MockSourceApi"; // TODO(jkilzi): REMOVE!!!

function getConfiguredContainer(): Container {
  const plannerApiConfig = new Configuration({
    basePath: PLANNER_BASEPATH,
  });
  const container = new Container();
  // container.register(Symbols.SourceApi, new SourceApi(plannerApiConfig));
  container.register(Symbols.SourceApi, new MockSourceApi(plannerApiConfig));

  return container;
}

function main(): void {
  const root = document.getElementById("root");
  if (root) {
    root.style.height = "inherit";
    const container = getConfiguredContainer();
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <DependencyInjectionProvider container={container}>
          <React.Suspense fallback={<Spinner />}>
            <RouterProvider router={router} />
          </React.Suspense>
        </DependencyInjectionProvider>
      </React.StrictMode>
    );
  }
}

main();
