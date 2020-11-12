import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <p>
        <span>POWERED BY </span>
        <ExtLink href="https://github.com/ijjk/notion-blog">
           Notion Blog
        </ExtLink>
      </p>
      <span>
        このサイトはGoogle Analyticsを使用しています。
        <ExtLink href="https://policies.google.com/technologies/partner-sites?hl=ja">
          詳しく見る
        </ExtLink>
      </span>
    </footer>
  </>
)
