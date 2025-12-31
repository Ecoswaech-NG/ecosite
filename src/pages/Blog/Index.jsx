import React from "react";
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import styles from './Blog.module.css';
import land1 from '../../assets/land1.png';
import land2 from '../../assets/land2.png';
import land3 from '../../assets/land3.png';
import land4 from '../../assets/land4.png';
import land5 from '../../assets/land5.png';
import land6 from '../../assets/land6.png';

function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: "Why Organizers Think They Got Creamed",
            author: "Ricky",
            date: "January 29, 2024",
            category: "VIDEO",
            excerpt: "Tuesday's primary is the first big test of the legislation, which was opposed by voting rights groups and Democrats. Struggling to sell one multi-million dollar home currently on the market won't stop.",
            image: land1,
            featured: true
        },
        {
            id: 2,
            title: "Our company creates with a hobby",
            author: "Ricky",
            date: "January 29, 2024",
            category: "SPORTS",
            excerpt: "Tuesday's primary is the first big test of the legislation, which was opposed by voting rights groups and Democrats. Struggling to sell one multi-million dollar home currently on the market won't stop.",
            image: land2,
            featured: true
        },
        {
            id: 3,
            title: "The surprising benefit of Scary play on way out",
            author: "Ricky",
            date: "January 29, 2024",
            category: "TECH",
            excerpt: "Discover how innovative approaches are transforming the industry landscape.",
            image: land3,
            featured: false
        },
        {
            id: 4,
            title: "12 food you can eat lot of without getting",
            author: "Ricky",
            date: "January 29, 2024",
            category: "HEALTH",
            excerpt: "Learn about healthy eating habits and foods that keep you satisfied.",
            image: land4,
            featured: false
        }
    ];

    const trendingPosts = [
        {
            id: 1,
            title: "Why Organizers Think They Got Creamed",
            date: "January 29, 2024",
            image: land1
        },
        {
            id: 2,
            title: "The surprising benefit of Scary play on way out",
            date: "January 29, 2024",
            image: land5
        },
        {
            id: 3,
            title: "12 food you can eat lot of without getting",
            date: "January 29, 2024",
            image: land6
        }
    ];

    return (
        <div>
            <Nav />
            <div className={styles.blog_wrapper}>
                <div className={styles.blog_container}>
                    {/* Main Content */}
                    <div className={styles.main_content}>
                        {blogPosts.map((post) => (
                            <article key={post.id} className={styles.blog_post}>
                                {post.featured && (
                                    <div className={styles.featured_image_wrapper}>
                                        <img src={post.image} alt={post.title} className={styles.featured_image} />
                                        <span className={styles.category_tag}>{post.category}</span>
                                    </div>
                                )}
                                <div className={styles.post_content}>
                                    <h2 className={styles.post_title}>{post.title}</h2>
                                    <div className={styles.post_meta}>
                                        <span>by {post.author}</span>
                                        <span className={styles.meta_separator}>-</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <p className={styles.post_excerpt}>{post.excerpt}</p>
                                    <Link to={`/blog/${post.id}`} className={styles.read_more}>
                                        <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        {/* Advertisement */}
                        <div className={styles.ad_box}>
                            <div className={styles.ad_content}>
                                <div className={styles.ad_icon}>P</div>
                                <h3>Posty - News & Magazine Blog WordPress Theme</h3>
                                <button className={styles.buy_now_btn}>BUY NOW</button>
                            </div>
                            <div className={styles.ad_illustration}>
                                <i className="ri-computer-line"></i>
                            </div>
                        </div>

                        {/* Trending Posts */}
                        <div className={styles.trending_section}>
                            <h3 className={styles.trending_title}>Trending Posts</h3>
                            <div className={styles.trending_posts}>
                                {trendingPosts.map((post) => (
                                    <div key={post.id} className={styles.trending_post}>
                                        <img src={post.image} alt={post.title} className={styles.trending_image} />
                                        <div className={styles.trending_content}>
                                            <h4 className={styles.trending_post_title}>{post.title}</h4>
                                            <span className={styles.trending_date}>{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
