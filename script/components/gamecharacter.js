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
 

 // this is for the game to know which entities are the player or enemy characters
 // and whether they should interact with the player's presence, etc
 ECS.Components.GameCharacter = function GameCharacter() {
   
   return {
     health: 0,
     // other stuff relevant to game characters
     // such as a Sprite component, or a Position component
   };
 };