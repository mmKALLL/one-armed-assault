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
 
 
ECS.Entity = function Entity() {
  // TODO: Generate a proper ID
  this.id = (+new Date()).toString(16) +
  (Math.random() * 100000000 | 0).toString(16) +
  ECS.Entity.prototype._count;
  
  // increment counter
  ECS.Entity.prototype._count++;
  
  // The component data will live in this object
  this.components = {};
  
  return this;
};