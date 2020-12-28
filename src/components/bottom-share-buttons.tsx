import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  HatenaIcon,
  HatenaShareButton,
} from 'react-share'

type Props = {
  text: string
  url: string
}

const BottomShareButtons = ({ text, url }: Props) => {
  return (
    <div className="container">
      <p>
        気に入ったら、以下からシェアや<a href="https://twitter.com/r_nmt000" target="_blank" rel="noopener noreferrer">フォロー</a>いただけると嬉しいです！
      </p>
      <div className="share-button-container">
        <div className="share-button">
          <TwitterShareButton url={url} title={text}>
            <TwitterIcon size={32} round={true}/>
          </TwitterShareButton>
        </div>
        <div className="share-button">
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round={true}/>
          </FacebookShareButton>
        </div>
        <div className="share-button">
          <HatenaShareButton url={url}>
            <HatenaIcon size={32} round={true}/>
          </HatenaShareButton>
        </div>
      </div>
      <style jsx>{`
      .container {
        text-align: center;
      }
      .container a {
        text-decoration: underline;
        color: #2b91af;
      }
      .share-button-container {
        display: flex;
        justify-content: center;
        margin-top: 8px;
      }
      .share-button {
        margin: 0 4px;
      }
      `}</style>
    </div>
  )
}

export default BottomShareButtons
