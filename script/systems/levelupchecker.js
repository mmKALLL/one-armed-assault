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
 * ****************************************************************************/
 
/* The levelupchecker is similar to healthchecker.
   It is a system goes through every entity with "gainlevels" component, then
   checks if their XP is higher than XP needed. If it is, the entity gains a
   has its XP decreased, gains a level, and the system notifies the rendering
   system to show a visual effect around the character.
 */
 
 // calculate new xp with OAA.Constants.neededXPCalculation(this.level, this.experienceCurve);
 
 // also check for Player's weapon skills