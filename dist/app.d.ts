/// <reference types="node" />
import { ForgeVersion, MinecraftVersion } from "./utils/Versions";
import { LibraryManager } from "./utils/Libraries";
import { AssetManager } from "./utils/Assets";
import { child_process } from 'mz';
import { AuthenticationResult } from "./utils/Authentication";
import { ForgeVersionDescription, ForgeVersionType } from "./utils/Manifests";
import { ForgeMod } from "./utils/Mods";
import { InstallationProgress } from "./utils/InstallationProgress";
export { Authentication, AuthenticationResult } from "./utils/Authentication";
export { ForgeVersion, MinecraftVersion } from "./utils/Versions";
export { InstallationProgress } from "./utils/InstallationProgress";
export { CurseForgeMod, CustomForgeMod, ForgeMod } from "./utils/Mods";
export { ForgeVersionDescription, ForgeVersionType } from "./utils/Manifests";
export declare class MinecraftClient {
    version: MinecraftVersion;
    options: ClientOptions;
    forge: ForgeVersion;
    nativeDir: string;
    progress: InstallationProgress;
    libraryManager: LibraryManager;
    assetManager: AssetManager;
    private constructor();
    private static readonly defaultConfig;
    static getMinecraftClient(version: string | MinecraftVersion, options: ClientOptions, progress?: InstallationProgress): Promise<MinecraftClient | null>;
    static getForgeClient(version: string | MinecraftVersion, forge: ForgeVersionType | ForgeVersionDescription, options: ClientOptions, progress?: InstallationProgress): Promise<MinecraftClient | null>;
    static getClient(version: string | MinecraftVersion, forge: ForgeVersionType | ForgeVersionDescription, options: ClientOptions, progress?: InstallationProgress): Promise<MinecraftClient | null>;
    checkInstallation(): Promise<void>;
    checkMods(mods: ForgeMod[], exclusive: boolean): Promise<void>;
    launch(auth: AuthenticationResult, redirectOutput?: boolean): Promise<child_process.ChildProcess>;
}
export declare type ClientOptions = {
    gameDir?: string;
    javaExecutable?: string;
    features?: {
        redirect_output?: boolean;
        has_custom_resoution?: number[];
        custom_server?: {
            host: string;
            port: number;
        };
    };
};
