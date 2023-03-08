import css from "@about/page.module.css";
import { cn } from "@utils/classnames";
import Image from "next/image";

export const metadata = {
  title: "About Ariana",
};

export default function About() {
  return (
    <>
      <section className={css.section}>
        <picture className={cn(css.pic_bg1, "left")}>
          <Image
            src="/about/bg_1.avif"
            alt=""
            sizes="(max-width: 768px) 100vw, 320px"
            style={{ objectFit: "cover", objectPosition: "center bottom" }}
            fill
          />
        </picture>
        <h1>Background</h1>
        <p>
          Ariana Martinez is a Bay Area native, Benicia High School graduate,
          and Licensed Clinical Social Worker. She was a student of Vallejo
          Unified School District and charter schools, before her family moved
          to Benicia in support of scholastic success for both herself and her
          two younger sisters.
        </p>
        <p>
          She has always had the heart to serve others, serving in the children
          {"'"}s ministry by teaching preschoolers on Sundays monthly throughout
          middle school and high school. Ariana took this passion for helping
          others into her volunteering, collegiate studies, and professional
          pursuits.
        </p>
        <p>
          She worked for the Department of Veterans Affairs Northern California
          Health Care System as part of their Student Temporary Employment
          program throughout college. As an alumna of the University of
          California Irvine with a Bachelor of Arts in Psychology, she gained
          statistical, research, and leadership experience in the areas of
          cognitive psychology, social sciences, organizational development, and
          education. This experience helped her better advocate for her younger
          sister{"'"}s mental health and special education needs within the
          Benicia Unified School District. Ariana also continued to show support
          for the arts in Benicia schools through the years and coached Benicia
          Middle School students as a Colorguard Instructor.
        </p>

        <div className={css.film_strip}>
          <picture className={css.pic_bg2}>
            <Image
              src="/about/bg_2.avif"
              alt=""
              sizes="(max-width: 768px) 100vw, 320px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              fill
            />
          </picture>
          <picture className={css.pic_bg3}>
            <Image
              src="/about/bg_3.avif"
              alt=""
              sizes="(max-width: 768px) 100vw, 320px"
              style={{ objectFit: "cover", objectPosition: "bottom center" }}
              fill
            />
          </picture>
          <picture className={css.pic_bg4}>
            <Image
              src="/about/bg_4.avif"
              alt=""
              sizes="(max-width: 768px) 100vw, 320px"
              style={{ objectFit: "cover", objectPosition: "center left" }}
              fill
            />
          </picture>
        </div>
      </section>

      <section className={cn(css.section, css.edu, "full_bleed", "fill")}>
        <div>
          <picture className={cn(css.pic_edu, "right")}>
            <Image
              src="/about/education.avif"
              alt=""
              sizes="(max-width: 768px) 100vw, 320px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              fill
            />
          </picture>
          <h1>Education</h1>
          <p>
            She went on to further her academic pursuit by earning a Master of
            Social Work from the University of Southern California with a
            concentration in Community Organization, Planning and Administration
            and a Human Services Management Certificate.
          </p>
          <p>
            During her time as a graduate student, Ariana worked with different
            programs in a variety of health care and agency settings such as
            Kaiser Permanente, Orange County Department of Education (OCDE), and
            school districts. She applied evidenced based,
            person-in-environment, and problem solving approaches to program
            evaluation, crisis response, and providing mental health services to
            students. During her time working at OCDE - Safe Schools & Support
            Services, she gained experience working with students, parents,
            teachers, and school administrators to support Alcohol, Tobacco, and
            Other Drug prevention, Anti-Bullying, Individual and Group Crisis
            Response, and Gang Intervention across schools in Orange County.
          </p>
        </div>
      </section>

      <section className={cn(css.section, css.exp)}>
        <picture className={cn(css.pic_exp, "left")}>
          <Image
            src="/about/experience.avif"
            alt=""
            sizes="(max-width: 768px) 100vw, 320px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            fill
          />
        </picture>
        <h1>Professional Experience</h1>
        <p>
          After graduating, Ariana worked as a Social Worker for Contra Costa
          County Children and Family Services and has since been promoted to a
          Staff Development Specialist, applying her child welfare experience to
          train new Social Workers and support the workforce in serving
          children, families, and communities through the pandemic. She learned
          to quickly pivot to meet the needs of her staff from various
          backgrounds and levels of experiences by adapting curriculum to a
          hybrid training model and developing new simulation curriculum to
          better prepare them for the field.
        </p>
        <p>
          While working full time, Ariana has continued her professional
          development as a Licensed Clinical Social Worker, keeping her clinical
          skills sharp on the most recent research and best practices for
          serving children and youth to support their social, emotional, and
          behavioral health. Outside of work, Ariana helped her local community
          by developing and facilitating the Understanding Mental Health class
          for Northgate Church. This class opened her eyes to the changes that
          are possible in people{"'"}s lives when they come together to share
          their experiences with one another.
        </p>
        <p>
          As a Social Worker caring for foster and at-risk youth, Ariana worked
          one-on-one with children and youth from ages 0 to 21 and their parents
          as they navigated the child welfare system. She assessed and supported
          the safety, permanency, and well-being of the children and youth she
          served. She has established successful working relationships with
          various stakeholders including parents, school staff, service
          providers, and community members to assess and support specialized
          needs of children and families. Her hope is through collaboration and
          transparency, she can support our public schools to work towards
          creative solutions that ensure success for all students within the
          community.
        </p>
      </section>
    </>
  );
}
