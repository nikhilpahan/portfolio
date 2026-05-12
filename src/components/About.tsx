import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-10 max-w-6xl mx-auto py-16 md:py-32">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4"
        >
          <p className="text-sm text-muted-foreground font-body tracking-wide uppercase mb-2">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            How I think<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="md:col-span-8 space-y-6"
        >
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            I believe great design happens when you understand the problem deeply enough
            that the solution feels obvious. I spend most of my time listening — to users,
            to data, to the quiet friction in an experience.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            My process is iterative and collaborative. I sketch quickly, prototype often,
            and test early. I care about systems thinking, accessibility, and the small
            details that compound into trust.
          </p>
          <div className="pt-4 flex gap-8">
            {[
              { num: "5+", label: "Years designing" },
              { num: "20+", label: "Products shipped" },
              { num: "3", label: "Design systems built" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {stat.num}
                </p>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
