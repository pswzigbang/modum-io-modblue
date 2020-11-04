import { Noble } from '../../models';

import { HciAdapter } from './Adapter';
import { Hci } from './misc';

export class HciNoble extends Noble {
	private adapters: Map<number, HciAdapter> = new Map();

	public async init() {
		// NO-OP
	}

	public async dispose() {
		for (const adapter of this.adapters.values()) {
			adapter.dispose();
		}
		this.adapters = new Map();
	}

	public async getAdapters(): Promise<HciAdapter[]> {
		const adapters = Hci.getDeviceList();
		for (const rawAdapter of adapters) {
			let adapter = this.adapters.get(rawAdapter.devId);
			if (!adapter) {
				adapter = new HciAdapter(this, `hci${rawAdapter.devId}`, rawAdapter.name, rawAdapter.address?.toUpperCase());
				this.adapters.set(rawAdapter.devId, adapter);
			}
		}
		return [...this.adapters.values()];
	}
}
