export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-29'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const token = 
  process.env.SANITY_SECRET_TOKEN || "skji9nA2fSOhhHj4ETcDX6ZbfiSYW6YPtZ3a9nmU9BeLAemVWMJKGxbVhWQwkvc9t0y1bxBYu0toZJCkjAOswwi0TabzQGp6uHgbyTTE9VBbTb8mTGym6CiHcoArXW7vaOViJ1DvpBOXdAwwogcQOG1JmpKs1SfmRlxxFziNaQ2M1C8hwhgS"


export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
