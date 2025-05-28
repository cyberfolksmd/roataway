import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next", "next/core-web-vitals"),
  {
    rules: {
     
      "react/react-in-jsx-scope": "off", // Отключено, React автоматически импортируется в Next
      "no-unused-vars": "warn", // Предупреждение для неиспользуемых переменных
      "semi": ["error", "always"], // Точка с запятой
    },
  },
];