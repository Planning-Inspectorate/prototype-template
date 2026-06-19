import { Router as createRouter } from 'express';

/**
 * @typedef {import('./types.js').Folder} Folder
 * @typedef {import('./types.js').FileItem} FileItem
 */

/**
 * Dummy folder/file structure (maximum nesting of 3 folders).
 *
 * Each folder has:
 *  - id:       unique identifier used in links/query string
 *  - name:     display name
 *  - folders:  array of child folders
 *  - files:    array of files in that folder
 *
 * Each file has:
 *  - id:       unique identifier
 *  - name:     display name
 *  - size:     human readable size
 *  - modified: last modified date
 *
 * @type {Folder}
 */
const fileTree = {
    id: 'root',
    name: 'Case 12345',
    folders: [
        {
            id: 'application',
            name: 'Application',
            files: [
                { id: 'f-app-form', name: 'Application form.pdf', size: '1.2 MB', modified: '12 May 2026' },
                { id: 'f-app-cover', name: 'Cover letter.docx', size: '88 KB', modified: '12 May 2026' }
            ],
            folders: [
                {
                    id: 'application-plans',
                    name: 'Plans and drawings',
                    files: [
                        { id: 'f-site-plan', name: 'Site plan.pdf', size: '4.5 MB', modified: '13 May 2026' },
                        { id: 'f-elevations', name: 'Elevations.pdf', size: '3.1 MB', modified: '13 May 2026' }
                    ],
                    folders: [
                        {
                            id: 'application-plans-revised',
                            name: 'Revised drawings',
                            folders: [],
                            files: [
                                { id: 'f-rev-1', name: 'Revised site plan v2.pdf', size: '4.8 MB', modified: '02 Jun 2026' }
                            ]
                        }
                    ]
                },
                {
                    id: 'application-supporting',
                    name: 'Supporting documents',
                    folders: [],
                    files: [
                        { id: 'f-design', name: 'Design and access statement.pdf', size: '2.0 MB', modified: '14 May 2026' }
                    ]
                }
            ]
        },
        {
            id: 'representations',
            name: 'Representations',
            folders: [
                {
                    id: 'representations-public',
                    name: 'Public comments',
                    folders: [],
                    files: [
                        { id: 'f-rep-1', name: 'Comment 001.pdf', size: '120 KB', modified: '20 May 2026' },
                        { id: 'f-rep-2', name: 'Comment 002.pdf', size: '96 KB', modified: '21 May 2026' }
                    ]
                }
            ],
            files: [
                { id: 'f-rep-summary', name: 'Representations summary.xlsx', size: '64 KB', modified: '22 May 2026' }
            ]
        },
        {
            id: 'decision',
            name: 'Decision',
            folders: [],
            files: [
                { id: 'f-decision', name: 'Decision notice.pdf', size: '340 KB', modified: '18 Jun 2026' }
            ]
        }
    ],
    files: [
        { id: 'f-readme', name: 'Case overview.txt', size: '2 KB', modified: '01 May 2026' }
    ]
};

/**
 * Find a folder by its id by walking the tree.
 * @param {Folder} folder - folder to search from
 * @param {string} id - folder id to find
 * @returns {Folder|null}
 */
function findFolder(folder, id) {
    if (folder.id === id) return folder;
    for (const child of folder.folders || []) {
        const found = findFolder(child, id);
        if (found) return found;
    }
    return null;
}

/**
 * Build a breadcrumb trail of folders from the root to the target id.
 * @param {Folder} folder - folder to search from
 * @param {string} id - folder id to find
 * @param {Folder[]} trail - accumulator
 * @returns {Folder[]|null}
 */
function findTrail(folder, id, trail = []) {
    const nextTrail = [...trail, folder];
    if (folder.id === id) return nextTrail;
    for (const child of folder.folders || []) {
        const found = findTrail(child, id, nextTrail);
        if (found) return found;
    }
    return null;
}

export function createRoutes() {
    const router = createRouter({ mergeParams: true });

    router.get('/', (req, res) => {
        const currentId = req.query.folder || fileTree.id;
        const currentFolder = findFolder(fileTree, currentId) || fileTree;
        const breadcrumb = findTrail(fileTree, currentFolder.id) || [fileTree];

        const viewData = {
            pageTitle: 'File manager',
            fileTree,
            currentFolder,
            breadcrumb
        };
        res.render('file-manager/main.njk', viewData);
    });

    return router;
}
