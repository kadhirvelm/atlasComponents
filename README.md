# Atlas Components

Public components for React

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/atlas-components)

[![CodeFactor](https://www.codefactor.io/repository/github/kadhirvelm/atlascomponents/badge)](https://www.codefactor.io/repository/github/kadhirvelm/atlascomponents) [![CircleCI](https://circleci.com/gh/kadhirvelm/atlasComponents.svg?style=svg)](https://circleci.com/gh/kadhirvelm/atlasComponents)

### Installation

`yarn add atlas-components`

### Basic Usage

`import { AtlasButton } from "atlas-components";`

In render:

```
public render() {
    return <AtlasButton label="Test Button" />
}
```

### Contributing

1.  Create a new component folder in `src/components`
2.  Follow the format of AtlasButton (index.ts, full sass file, and no default exporting) and add your component to AtlasC
3.  Create a file called exactly what your exported component is called in `src/componentDemos`
4.  It should automatically be picked up and added to the docs
5.  Submit and PR!
