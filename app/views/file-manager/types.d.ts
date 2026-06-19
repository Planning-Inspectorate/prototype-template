/**
 * A single file within a folder.
 */
export interface FileItem {
	/** Unique identifier used in links */
	id: string;
	/** Display name of the file */
	name: string;
	/** Human readable file size, e.g. "1.2 MB" */
	size: string;
	/** Last modified date, e.g. "12 May 2026" */
	modified: string;
}

/**
 * A folder in the file tree. Folders may contain sub-folders and files.
 */
export interface Folder {
	/** Unique identifier used in links/query string */
	id: string;
	/** Display name of the folder */
	name: string;
	/** Child folders */
	folders: Folder[];
	/** Files contained directly in this folder */
	files: FileItem[];
}

