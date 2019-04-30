const componentDocs = require.context('../components', true, /\.md$/);

const components = {};

for (const key of componentDocs.keys()) {
    const componentName = /([a-zA-Z-]+)\.md$/.exec(key)[1];
    components[componentName] = componentDocs(key);
}

export default components;
