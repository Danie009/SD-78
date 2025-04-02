import * as React from 'react';
import styles from './TextAndVideo.module.scss';
import type { ITextAndVideoProps } from './ITextAndVideoProps';

export default class TextAndVideo extends React.Component<ITextAndVideoProps> {
  private sanitizeEmbedCode(embedCode: string): string {
    if (!embedCode) return '';

    // Remove width and height attributes
    return embedCode
      .replace(/width="\d+"/g, '')
      .replace(/height="\d+"/g, '');
  }

  public render(): React.ReactElement<ITextAndVideoProps> {
    const { title, embedCode } = this.props;

    // Default embed code if none is provided
    const defaultEmbedCode = `<iframe width="100%" height="320" src="https://www.youtube.com/embed/XGD0eGfKwlE" title="🤷‍♂️ What is Microsoft 365 - Explained" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

    const sanitizedEmbedCode = this.sanitizeEmbedCode(embedCode || defaultEmbedCode);

    return (
      <section className={styles.textAndVideo}>
        <div className={styles.textSection}>
          <h2>{title}</h2>
        </div>
        <div className={styles.videoSection}>
          <div className={styles.videoWrapper} dangerouslySetInnerHTML={{ __html: sanitizedEmbedCode }} />
        </div>
      </section>
    );
  }
}
