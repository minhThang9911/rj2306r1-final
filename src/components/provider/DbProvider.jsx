import { Provider } from "use-pouchdb";
import PouchDb from "pouchdb-browser";
const localDb = new PouchDb("local");
function DbProvider({ children }) {
	return (
		<Provider
			default="local"
			databases={{
				local: localDb,
			}}>
			{children}
		</Provider>
	);
}

export default DbProvider;
