import { Provider } from "use-pouchdb";
import PouchDb from "pouchdb-browser";
import config from "~/config";
const localDb = new PouchDb(config.db.localDb);
const remoteDb = new PouchDb(config.db.remoteUrl)
function DbProvider({ children }) {
	return (
		<Provider
			default={config.db.localDb}
			databases={{
				local: localDb,
				remote: remoteDb
			}}>
			{children}
		</Provider>
	);
}

export default DbProvider;
