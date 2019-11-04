# Notes on MDX Tutorial

Scott, most of the issues with the tutorial I had or noticed where inconsistencies between the article text, codesandbox, and videos. Below are a few suggestions to streamline the tutorial for beginners.
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
- Add:
```
yarn add react-seo-component
```
- I had difficulty in the cover image area based on the article. I was able to look at the video, which are wonderful by the way, and figure out the problem.
  - The article does not mention to add the `cover` to the `frontmatter`. After IU watched the video and noticed, it was an easy fix to get up and running.

