import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { markdownToHtml } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: { title: post.title, description: post.description, type: 'article', publishedTime: post.date, locale: 'de_DE' },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const contentHtml = await markdownToHtml(post.content)
  const allPosts = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    publisher: { '@type': 'Organization', name: 'Atlas Market', url: 'https://atlasmarkets.de' },
    keywords: post.keywords.join(', '),
    inLanguage: 'de',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Article header */}
      <section style={{ paddingTop: '100px', paddingBottom: '3rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.8125rem' }}>
            <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#D1D5DB' }}>/</span>
            <span style={{ color: '#9CA3AF' }}>Blog</span>
            <span style={{ color: '#D1D5DB' }}>/</span>
            <span style={{ color: '#6B7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>{post.title}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span className="tag-pill">{post.category}</span>
          </div>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1A1A1A', marginBottom: '1rem' }}
          >
            {post.title}
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '1.5rem' }}>{post.description}</p>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9CA3AF' }}>
            {formatDate(post.date)} · {post.readTime} Min. Lesezeit
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.25rem 4rem' }}>
        {post.heroImage && (
          <div style={{ position: 'relative', width: '100%', paddingBottom: '52.5%', borderRadius: '12px', overflow: 'hidden', background: '#F3F3EE', marginBottom: '2rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.heroImage}
              alt={post.title}
              loading="lazy"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
        <div className="divider" style={{ marginBottom: '3rem' }} />
        <div className="article-prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {/* CTA box */}
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>⚡</div>
          <h3
            className="font-serif"
            style={{ color: '#1A1A1A', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.25rem' }}
          >
            Bereit für echte Prediction Markets?
          </h3>
          <p style={{ color: '#6B7280', marginBottom: '1.25rem', fontSize: '0.9375rem', lineHeight: 1.7 }}>
            Erlebe Bundesliga und Champions League auf Atlas Market – fair, transparent, ohne Buchmacher-Marge.
          </p>
          <a href="https://atlasmarkets.de" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Zu atlasmarkets.de →
          </a>
        </div>

        {post.keywords.length > 0 && (
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {post.keywords.map((kw) => (
              <span key={kw} className="tag-pill">{kw}</span>
            ))}
          </div>
        )}
      </div>

      {allPosts.length > 0 && (
        <section style={{ borderTop: '1px solid #E5E5E0', padding: '3rem 1.25rem', backgroundColor: '#F3F3EE' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2
              className="font-serif"
              style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
            >
              Weitere Artikel
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {allPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#FFFFFF', border: '1px solid #E5E5E0', borderRadius: '10px', padding: '1.25rem' }}>
                    <span className="tag-pill">{p.category}</span>
                    <h3
                      className="font-serif"
                      style={{ color: '#1A1A1A', fontWeight: 600, marginTop: '0.5rem', fontSize: '0.9375rem', lineHeight: 1.4 }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
