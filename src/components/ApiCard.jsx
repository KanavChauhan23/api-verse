import { motion } from "framer-motion"

const ApiCard = ({ api }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/10 transition"
    >
      <h2 className="text-xl font-semibold text-indigo-400 mb-2">
        {api.name}
      </h2>

      <div className="space-y-2 text-sm text-gray-400">
        <p>Category: {api.category}</p>

        <div className="flex gap-2 flex-wrap mt-2">
          <span className="px-2 py-1 text-xs bg-indigo-600/20 text-indigo-400 rounded-lg">
            Auth: {api.auth}
          </span>

          <span className="px-2 py-1 text-xs bg-green-600/20 text-green-400 rounded-lg">
            HTTPS: {api.https ? "Yes" : "No"}
          </span>

          <span className="px-2 py-1 text-xs bg-yellow-600/20 text-yellow-400 rounded-lg">
            CORS: {api.cors}
          </span>
        </div>
      </div>

      <a
        href={api.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm text-indigo-400 hover:underline"
      >
        Visit Documentation →
      </a>
    </motion.div>
  )
}

export default ApiCard
