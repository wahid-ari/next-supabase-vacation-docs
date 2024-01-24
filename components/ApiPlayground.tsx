import { ReactNode, useState } from "react";
import axios from "axios";
import cn from "clsx";
import formatHighlight from "json-format-highlight";

function MethodBadge(method: string) {
	let color = "text-red-600 bg-red-200 border border-red-500";
	if (method == "POST")
		color = "text-blue-600 bg-blue-200 border border-blue-500";
	if (method == "GET")
		color = "text-green-600 bg-green-200 border border-green-500";
	if (method == "PUT")
		color = "text-orange-600 bg-orange-200 border border-orange-500";
	if (method == "PATCH")
		color = "text-yellow-500 bg-yellow-200 border border-yellow-500";

	return (
		<div className={`rounded-lg px-1.5 font-medium ${color}`}>{method}</div>
	);
}

type Props = {
	method?: string;
	endpoint?: string;
	children?: ReactNode;
	param?: boolean;
	paramName?: string;
};

export default function ApiPlayground({
	method,
	endpoint,
	children,
	param = false,
	paramName = "Param",
}: Props) {
	const [fetched, setFetched] = useState(false);
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [value, setValue] = useState("");
	const methodUpperCase = method.toUpperCase();

	async function handleFetch(e: React.SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setFetched(false);
		try {
			const res = await axios.get(`${process.env.API_URL}/api/${endpoint}`, {
				params: { [paramName]: value },
			});
			setData(res.data);
		} catch (error) {
			setData(error.response?.data);
			console.error(error);
		} finally {
			setFetched(true);
			setLoading(false);
		}
	}

	const colorOptions = {
		keyColor: "#65a30d",
		numberColor: "#f59e0b",
		stringColor: "#10b891",
		trueColor: "#0284c7",
		falseColor: "#6366f1",
		nullColor: "#ef4444",
	};

	return (
		<div className="mt-8 rounded-md border p-4 dark:border-neutral-800">
			<div className={`flex items-center gap-4 ${param ? "-mb-2" : "mb-4"}`}>
				{MethodBadge(methodUpperCase)}
				<a
					href={`${process.env.API_URL}/api/${endpoint}`}
					target="_blank"
					className={cn(
						"m-0 font-medium text-neutral-700 transition-all duration-200 hover:underline dark:text-neutral-200",
						"focus-visible:!outline-none focus-visible:!ring-2 focus-visible:!ring-green-500 focus-visible:ring-offset-0"
					)}
				>
					/api/{endpoint}
				</a>
			</div>

			<form onSubmit={handleFetch}>
				{param ? (
					<div className="-mb-2 mt-6">
						<div className="mb-5 border-b dark:border-b-neutral-800">
							<button
								className={cn(
									"border-b-2 border-b-green-600 pb-2 text-sm font-medium text-green-600",
									"focus-visible:!outline-none focus-visible:!ring-2 focus-visible:!ring-green-500 focus-visible:ring-offset-0"
								)}
							>
								Query
							</button>
						</div>
						<div className="flex flex-wrap items-center gap-3">
							<p className="m-0 font-medium text-neutral-700 dark:text-neutral-200">
								{paramName}
							</p>
							<input
								required
								onChange={(e) => setValue(e.target.value)}
								type="text"
								className={cn(
									"rounded-md border border-neutral-300 bg-[#f7f7f7] px-2 py-0.5 dark:border-neutral-700 dark:bg-[#111]",
									"focus-visible:!outline-none focus-visible:!ring-2 focus-visible:!ring-green-500 focus-visible:ring-offset-0"
								)}
							/>
						</div>
					</div>
				) : null}

				{children}

				<button
					type="submit"
					className={cn(
						"flex items-center gap-2 px-2.5 py-1 text-sm font-medium",
						"rounded text-white transition-all duration-300 disabled:cursor-not-allowed",
						"focus-visible:!outline-none focus-visible:!ring focus-visible:!ring-green-500 focus-visible:ring-offset-0",
						children !== undefined ? "mt-4" : "mt-8",
						methodUpperCase == "GET" ? "bg-green-600 hover:bg-green-700" : "",
						methodUpperCase == "POST" ? "bg-blue-600 hover:bg-blue-700" : "",
						methodUpperCase == "PUT" ? "bg-orange-600 hover:bg-orange-700" : "",
						methodUpperCase == "PATCH"
							? "bg-yellow-500 hover:bg-yellow-600"
							: "",
						methodUpperCase == "DELETE" ? "bg-red-600 hover:bg-red-700" : ""
					)}
					disabled={loading}
				>
					{loading ? (
						<svg
							className="h-4 w-4 animate-spin text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					) : (
						<svg
							className="h-3 fill-white"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 384 512"
						>
							<path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path>
						</svg>
					)}
					{loading ? "Sending Request" : "Send Request"}
				</button>
			</form>

			{fetched ? (
				<div className="Code mt-5 border-t dark:border-t-neutral-800">
					<pre className="pt-3">
						<div
							dangerouslySetInnerHTML={{
								__html: formatHighlight(data, colorOptions),
							}}
						></div>
					</pre>
				</div>
			) : null}
		</div>
	);
}
