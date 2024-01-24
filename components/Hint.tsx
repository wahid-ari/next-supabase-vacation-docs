import { ReactNode } from "react";
import {
	AlertCircleIcon,
	CheckCircle2Icon,
	InfoIcon,
	XCircleIcon,
} from "lucide-react";

export default function Hint({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) {
	return (
		<div
			className={`flex items-center gap-3 rounded border-l-4 border-l-sky-500 bg-sky-100/50 p-3 dark:bg-sky-900/20 ${className}`}
		>
			<InfoIcon className="h-6 w-6 text-sky-500" />
			<div>{children}</div>
		</div>
	);
}

Hint.success = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div
			className={`flex items-center gap-3 rounded border-l-4 border-l-emerald-500 bg-emerald-100/50 p-3 dark:bg-emerald-900/20 ${className}`}
		>
			<CheckCircle2Icon className="h-6 w-6 text-emerald-500" />
			<div>{children}</div>
		</div>
	);
};

Hint.warning = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div
			className={`flex items-center gap-3 rounded border-l-4 border-l-yellow-500 bg-yellow-100/50 p-3 dark:bg-yellow-900/20 ${className}`}
		>
			<AlertCircleIcon className="h-6 w-6 text-yellow-500" />
			<div>{children}</div>
		</div>
	);
};

Hint.danger = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div
			className={`flex items-center gap-3 rounded border-l-4 border-l-red-500 bg-red-100/50 p-3 dark:bg-red-900/20 ${className}`}
		>
			<XCircleIcon className="h-6 w-6 text-red-500" />
			<div>{children}</div>
		</div>
	);
};
