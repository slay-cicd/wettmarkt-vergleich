'use client'
import Link from 'next/link'
import { PostMeta } from '@/lib/posts'

interface ArticleCardProps {
  post: PostMeta
  featured?: boolean
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <div style={{ marginBottom: '0' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '1.25rem' }}>
          Empfohlener Artikel
        </p>
        <Link href={`/blog/${post.slug}`} className="group block" style={{ textDecoration: 'none' }} aria-label={`Artikel lesen: ${post.title}`}>
          {post.heroImage && (
            <div style={{ position: 'relative', width: '100%', paddingBottom: '42%', borderRadius: '10px', overflow: 'hidden', background: '#F3F3EE', marginBottom: '1.25rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.heroImage}
                alt={post.title}
                loading="lazy"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
              />
            </div>
          )}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="tag-pill">{post.category}</span>
          </div>
          <h2
            className="font-serif group-hover:text-[#16a34a] transition-colors duration-200"
            style={{ fontSize: '1.375rem', fontWeight: 700, lineHeight: 1.35, color: '#1A1A1A', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}
          >
            {post.title}
          </h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6B7280', marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
            {post.description}
          </p>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9CA3AF' }}>
            {formatDate(post.date)} · {post.readTime} Min. Lesezeit
          </p>
        </Link>
      </div>
    )
  }

  return (
    <article style={{ borderBottom: '1px solid #E5E5E0', paddingBottom: '2rem' }}>
      <Link href={`/blog/${post.slug}`} className="group block" style={{ textDecoration: 'none' }} aria-label={`Artikel lesen: ${post.title}`}>
        {post.heroImage && (
          <div style={{ position: 'relative', width: '100%', paddingBottom: '52%', borderRadius: '8px', overflow: 'hidden', background: '#F3F3EE', marginBottom: '1rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.heroImage}
              alt={post.title}
              loading="lazy"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
            />
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span className="tag-pill">{post.category}</span>
        </div>
        <h3
          className="font-serif group-hover:text-[#16a34a] transition-colors duration-200"
          style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.35, color: '#1A1A1A', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}
        >
          {post.title}
        </h3>
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#6B7280', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
          {post.description}
        </p>
        <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9CA3AF' }}>
          {formatDate(post.date)}<span style={{ margin: '0 0.5rem' }}>·</span>{post.readTime} Min. Lesezeit
        </p>
      </Link>
    </article>
  )
}
