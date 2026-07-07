import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { growth } from "../data/content";

const tooltipStyle = {
  background: "rgba(255,255,255,0.97)",
  border: "1px solid rgba(27,27,24,0.08)",
  borderRadius: 12,
  color: "#1B1B18",
  fontFamily: "Inter, sans-serif",
  fontSize: 13,
};

/** Three interconnected data visualizations proving business growth on PraTej. */
export default function GrowthChart() {
  return (
    <section id="growth" className="relative py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold text-ink text-center tracking-tight"
        >
          {growth.heading}
        </motion.h2>
        <p className="text-center text-inksoft max-w-2xl mx-auto mt-4 font-body">{growth.description}</p>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 shadow-card"
          >
            <h3 className="font-ui font-semibold mb-4 text-ink">Revenue &amp; Efficiency Over Time</h3>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={growth.lineData}>
                <CartesianGrid stroke="rgba(27,27,24,0.08)" vertical={false} />
                <XAxis dataKey="month" stroke="#54524A" fontSize={12} />
                <YAxis stroke="#54524A" fontSize={12} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#7C6CF6" strokeWidth={3} dot={{ r: 4 }} name="Revenue Index" />
                <Line type="monotone" dataKey="efficiency" stroke="#3DD9B3" strokeWidth={3} dot={{ r: 4 }} name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-6 shadow-card"
          >
            <h3 className="font-ui font-semibold mb-4 text-ink">Before vs. After PraTej</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={growth.barData}>
                <CartesianGrid stroke="rgba(27,27,24,0.08)" vertical={false} />
                <XAxis dataKey="metric" stroke="#54524A" fontSize={11} interval={0} angle={-10} textAnchor="end" height={50} />
                <YAxis stroke="#54524A" fontSize={12} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />
                <Bar dataKey="before" fill="#D8D4C8" name="Before" radius={[6, 6, 0, 0]} />
                <Bar dataKey="after" fill="#FF7A59" name="After" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-6 shadow-card lg:col-span-2 lg:max-w-md lg:mx-auto"
          >
            <h3 className="font-ui font-semibold mb-4 text-center text-ink">Client Segment Distribution</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={growth.pieData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={95} paddingAngle={3}>
                  {growth.pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
