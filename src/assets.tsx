import img_url_1 from "./assets/pic1.svg";
import img_url_2 from "./assets/pic2.jpg";
import img_url_3 from "./assets/pic3.jpg";
import img_url_4 from "./assets/pic4.jpg";

import { asset_registry } from "./asset-registry";


asset_registry.__registerAssetPath("asset://images/1",img_url_1);
asset_registry.__registerAssetPath("asset://images/2",img_url_2);
asset_registry.__registerAssetPath("asset://images/3",img_url_3);
asset_registry.__registerAssetPath("asset://images/4",img_url_4);