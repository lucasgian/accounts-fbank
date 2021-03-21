import Container from '../components/container'
import HeroPost from '../components/hero-post'
import SignIn from '../components/sign-in'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import * as infoUser from '../lib/info-user'
import { useSelector } from 'react-redux'

const Index = () => {
  const { language } = useSelector((state: any) => state.settings)

  infoUser.ipUser()

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {language === 'pt-br' && (<Intro />)}
          {language === 'pt-br' && (
            <HeroPost
            />
          )}

          {language === 'en' && (
            <SignIn
            />
          )}
          
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
