# Notes on MDX Tutorial

- Since this article is tags for `#beginners` you might want to include the URL for the GraphQL Explorer. I have used Gatsby for about a year and know where it is, but beginners may not.
- In the section where you create the post for testing the code box. In keeping with the folder structure for the posts, you may want to prefix with the `2019` directory.
```
mkdir posts/2019/2019-07-01-code-blocks
touch posts/2019/2019-07-01-code-blocks/index.mdx
```
- In section about code boxes, the second code box after the image of the sample article, the first two lines are missing from `const components`, which are present in the previous and following code boxes:
```
const components = {
  h2: ({ children }) => <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>,
  'p.inlineCode': props => <code style={{ backgroundColor: 'lightgray' }} {...props} />,
  ```

These lines

