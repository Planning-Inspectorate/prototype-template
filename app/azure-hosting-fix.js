import plugins from "govuk-prototype-kit/lib/plugins/plugins.js";
import govukPrototypeKit from "govuk-prototype-kit";

/**
 * fix for running in Azure - handle assets with % in the URL which get decoded by Azure App Service
 * https://learn.microsoft.com/en-us/answers/questions/2007707/azure-app-services-decodes-2f-in-a-inbound-request
 * https://stackoverflow.com/questions/69495150/disable-automatic-url-un-escaping-on-azure-web-apps-for-containers
 */
export function applyAzureHostingFix() {
    const pluginPaths = [
        ...plugins.getPublicUrlAndFileSystemPaths('scripts'),
        ...plugins.getPublicUrlAndFileSystemPaths('stylesheets'),
        ...plugins.getPublicUrlAndFileSystemPaths('assets')
    ]
    for (const paths of pluginPaths) {
        if (paths.publicUrl.includes('%')) {
            const publicUrl = decodeURIComponent(paths.publicUrl);
            console.log('serving plugin assets from', publicUrl, paths.fileSystemPath);
            govukPrototypeKit.requests.serveDirectory(publicUrl, paths.fileSystemPath);
        }
    }
}