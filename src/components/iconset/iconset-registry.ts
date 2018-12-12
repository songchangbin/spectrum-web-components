/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { SpectrumIconset } from './iconset';

export class IconsetRegistry {
    private iconsetMap = new Map<string, SpectrumIconset>();
    public addIconset(name: string, iconset: SpectrumIconset) {
        this.iconsetMap.set(name, iconset);

        // dispatch a spectrum-iconset-added event on window to let everyone know we have a new iconset
        // note we're using window here for efficiency since we don't need to bubble through the dom since everyone
        // will know where to look for this eventU
        const event = new CustomEvent('spectrum-iconset-added', {
            detail: { name, iconset },
        });
        window.dispatchEvent(event);
    }
    public removeIconset(name: string) {
        this.iconsetMap.delete(name);
        // dispatch a spectrum-iconset-removed event on window to let everyone know we have a new iconset
        // note we're using window here for efficiency since we don't need to bubble through the dom since everyone
        // will know where to look for this eventU
        const event = new CustomEvent('spectrum-iconset-removed', {
            detail: { name },
        });
        window.dispatchEvent(event);
    }
    public getIconset(name: string) {
        return this.iconsetMap.get(name);
    }
}

// create singleton instance of the iconset registry
const registry = new IconsetRegistry();
export { registry };
