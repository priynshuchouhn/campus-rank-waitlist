import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Link from "next/link";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

    <Link href="https://campus-rank.priynshuchouhn.engineer" target="_blank">
      <motion.img
        src="https://campus-rank.priynshuchouhn.engineer/logo.jpg"
        alt="Campus Rank Logo"
        className="mx-auto h-20 w-20 rounded-full"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tighter sm:text-5xl"
          text="Campus Rank - Your College Ranking Platform"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Join the waitlist to get early access to Campus Rank, where you can discover, compare, and rank colleges based on real student experiences and data!"
          duration={0.8}
        />
      </motion.div>
    </Link>
    </motion.div>
  );
}
