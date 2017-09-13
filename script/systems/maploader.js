"use strict";

/* *****************************************************************************
 * One-Armed Assault - Game about travelling a hostile world.
 * Author: Esa Koskinen (mmKALLL)
 *
 * Copyright (c) 2017 Esa Koskinen, all rights reserved
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * *****************************************************************************/

// Load terrain by parsing external static file describing the map, then generating the entities.
 
 ECS.Systems.MapLoader = (function () {
   
   return {
     loadMapFile: function(filename, filepath) {
       // load map file with specified name and filepath (path presumably in constants.js),
     },
          
     parseMapString: function(inputString) {
       // then parse it to create a terrain data array for use in entity generation
     },
     
     generateMapEntities: function(inputArray) {
       // finally generate terrain entities and attach components, such as type, location
       // presumably call other functions which create a single entity of specified type each
     },
   };
 })();