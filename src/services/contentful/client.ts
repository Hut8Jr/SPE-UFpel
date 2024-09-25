// use fetch api and graphql
export const contentfulFetch = ({
  query,
  tags,
}: {
  query: string
  tags: string
}) => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: {
        tags: [tags, 'contentful'],
        revalidate: 60 * 60 * 2,
      },
    }
  )
}
