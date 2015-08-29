/**
 * This file is part of the wraith package.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

module.exports = require("yargs")
    .usage("Usage: wraith [OPTIONS]...")

    .option("c", {
        alias: "config",
        demand: true,
        describe: "Config to load (e.g. 'foo/**/*.cson')",
        type: "string"
    })

    .option("p", {
        alias: "port",
        default: 3000,
        describe: "Port to listen on",
        type: "number"
    })

    .help("help")
;