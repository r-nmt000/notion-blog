import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  { label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} nomolog</title>
        <meta
          name="description"
          content="A blog"
        />
        <meta name="og:title" content="nomolog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="alternate" type="application/rss+xml" title="nomolog" href="https://feed43.com/7710286011533801.xml"/>
      </Head>
      <Link href={'/'}>
        <h1><a>nomolog</a></h1>
      </Link>
      <p>プロダクトマネジメント、技術、ビジネス、ときどきライフハック</p>
    </header>
  )
}
