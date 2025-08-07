"use client";

import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug;

  const blogContent: Record<
    string,
    { title: string; body: { type: 'paragraph' | 'image'; content: string }[] }
  > = {
    "seo-tips": {
      title: "Top SEO Tips for Local Businesses",
      body: [
        { type: "paragraph", content: "Ranking locally isn't just about keywords. Ensure your Google Business Profile is up to date, get local backlinks, and gather customer reviews." },
        { type: "image", content: "/images/seo-strategy.jpg" },
        { type: "paragraph", content: "Use structured data to help search engines understand your business type and location. Don't forget to include your city or neighborhood in your page titles, headers, and meta descriptions." },
        { type: "paragraph", content: "Fast-loading websites and mobile responsiveness also impact your rankings. Test your speed on PageSpeed Insights and fix issues immediately." },
        { type: "paragraph", content: "Creating consistent local content like blog posts or community events can attract local traffic. Feature customer stories, local partnerships, or insights into your industry." },
        { type: "paragraph", content: "Make sure your NAP (Name, Address, Phone Number) is consistent across all directories and citations online. Discrepancies hurt trust and ranking." },
        { type: "paragraph", content: "Optimize for voice search by using conversational queries and answering common questions in your niche." },
        { type: "image", content: "/images/local-seo-map.jpg" },
        { type: "paragraph", content: "Encourage satisfied customers to leave Google reviews. Respond to every review to show you’re active and engaged." },
        { type: "paragraph", content: "Use local business schema markup to make your business stand out in search results with rich snippets like hours, reviews, and address." },
        { type: "paragraph", content: "Backlinks from other local businesses, newspapers, and directories still work wonders. Offer guest blogs or sponsorships to build these links." },
        { type: "paragraph", content: "Mobile optimization is crucial as many local searches happen on smartphones. Ensure your site is responsive and loads quickly on mobile devices." },
        { type: "paragraph", content: "Leverage social media to connect with your local audience. Share updates, promotions, and engage with followers to boost your brand presence." },
        { type: "image", content: "/images/seo-mobile.jpg" },
        { type: "paragraph", content: "Monitor your local search rankings regularly and adjust your strategy based on what works and what doesn’t." },
        { type: "paragraph", content: "Use Google My Business insights to understand how customers find and interact with your listing." },
        { type: "paragraph", content: "Participate in local community events and sponsorships to increase brand visibility and earn quality backlinks." },
        { type: "paragraph", content: "Regularly update your website with fresh, relevant local content to keep your audience engaged and improve SEO." },
        { type: "image", content: "/images/community-event.jpg" },
        { type: "paragraph", content: "Consider creating location-specific landing pages if your business serves multiple areas to target each market effectively." },
      ],
    },
    "landing-page-hacks": {
      title: "Landing Page Hacks That Convert",
      body: [
        { type: "paragraph", content: "To convert more visitors, use a strong headline, compelling visuals, and a single clear call-to-action." },
        { type: "image", content: "/images/landing-page-example.jpg" },
        { type: "paragraph", content: "Social proof such as testimonials, trust badges, or user count increases credibility. Keep the layout minimal and lead-focused." },
        { type: "paragraph", content: "Clarity beats cleverness. Use concise language and avoid jargon to help users quickly understand your offer." },
        { type: "paragraph", content: "Limit distractions. Avoid unnecessary navigation or external links. Focus on one goal: conversion." },
        { type: "image", content: "/images/conversion-tips.jpg" },
        { type: "paragraph", content: "Use A/B testing tools to experiment with headlines, colors, button placements, and form lengths. Optimize continuously." },
        { type: "paragraph", content: "Implement heatmaps and session recordings to see how users interact with your page. Learn what draws attention and where they drop off." },
        { type: "paragraph", content: "Keep forms short. Only ask for essential info. Consider multi-step forms for better engagement." },
        { type: "paragraph", content: "Use urgency and scarcity: limited-time offers, countdown timers, or limited spots available can boost action." },
        { type: "paragraph", content: "Mobile-first is a must. Test your page on various screen sizes and ensure lightning-fast load times." },
        { type: "paragraph", content: "Use contrasting colors for your call-to-action buttons to make them stand out and attract clicks." },
        { type: "paragraph", content: "Incorporate directional cues like arrows or images of people looking towards your CTA to guide user attention." },
        { type: "image", content: "/images/cta-button.jpg" },
        { type: "paragraph", content: "Add trust signals like security badges, money-back guarantees, or privacy assurances to reduce user hesitation." },
        { type: "paragraph", content: "Personalize content based on user behavior or demographics to increase relevance and conversion rates." },
        { type: "paragraph", content: "Use video testimonials or explainer videos to build trust and clearly communicate your value proposition." },
        { type: "paragraph", content: "Optimize your page load speed by compressing images and minimizing code to prevent user drop-off." },
        { type: "paragraph", content: "Avoid jargon and technical terms; speak in the language your audience understands." },
        { type: "paragraph", content: "Test different headline structures: questions, statements, or benefits to see what resonates best." },
      ],
    },
    "paid-ads-2025": {
      title: "The Power of Paid Ads in 2025",
      body: [
        { type: "paragraph", content: "Paid ads remain one of the fastest ways to scale. Use compelling ad copy, clear CTAs, and appealing creatives to drive engagement." },
        { type: "image", content: "/images/ads-dashboard.png" },
        { type: "paragraph", content: "Target audiences precisely using interests, behaviors, and demographics. Use lookalike audiences to scale successful campaigns." },
        { type: "paragraph", content: "Retarget users who already visited your site. Remind them of your value and push them toward conversion." },
        { type: "paragraph", content: "Test different ad formats: video, carousel, static, and lead forms. Some work better depending on the offer and audience." },
        { type: "paragraph", content: "Use automation and AI-powered bidding strategies to optimize ad spend and performance in real time." },
        { type: "image", content: "/images/retargeting-tips.jpg" },
        { type: "paragraph", content: "Optimize your landing page for each campaign. Relevance between ad and landing experience is critical for conversion." },
        { type: "paragraph", content: "Track metrics beyond just clicks: cost per acquisition, ROAS (return on ad spend), and lifetime value." },
        { type: "paragraph", content: "Diversify platforms: experiment with TikTok Ads, YouTube Shorts, and influencer partnerships." },
        { type: "paragraph", content: "2025 trends show a shift toward native and immersive ad experiences. Interactive stories and gamified ads are rising." },
        { type: "paragraph", content: "Leverage data analytics to continuously refine targeting and creative elements for better ROI." },
        { type: "paragraph", content: "Integrate your paid ads strategy with organic marketing efforts for a cohesive brand message." },
        { type: "image", content: "/images/ad-analytics.jpg" },
        { type: "paragraph", content: "Use storytelling in your ads to emotionally connect with your audience and improve engagement." },
        { type: "paragraph", content: "Capitalize on emerging platforms early to gain a competitive advantage before the market saturates." },
        { type: "paragraph", content: "Ensure your ads are accessible with captions, alt text, and clear visuals to reach a broader audience." },
        { type: "paragraph", content: "Regularly refresh your creatives to avoid ad fatigue and keep your audience engaged." },
        { type: "paragraph", content: "Combine retargeting with personalized offers or discounts to increase conversion rates." },
        { type: "paragraph", content: "Stay updated with platform policy changes to avoid ad disapprovals or account suspensions." },
      ],
    },
  };

  const post = blogContent[slug as string];

  return (
    <main className="min-h-screen p-8 bg-white text-gray-800">
      {post ? (
        <>
          <h1 className="text-4xl font-bold mb-6 text-blue-800">{post.title}</h1>
          <article className="prose lg:prose-lg max-w-3xl mx-auto">
            {post.body.map((block, idx) =>
              block.type === "paragraph" ? (
                <p key={idx}>{block.content}</p>
              ) : block.type === "image" ? (
                <img
                  key={idx}
                  src={block.content}
                  alt="Blog illustration"
                  className="rounded-xl my-8 shadow-lg"
                />
              ) : null
            )}
          </article>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-red-600 mb-4">Post Not Found</h1>
          <p className="text-gray-600">
            We couldn't find a blog post with the slug: <strong>{slug}</strong>
          </p>
        </>
      )}
    </main>
  );
}