/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = `<div class="modal-header">
  <h3 class="modal-title">{{ 'BATCHES_DELETE_TITLE' | translate }}</h3>
</div>
<div class="modal-body">
  {{ 'BATCHES_DELETE_LEGEND' | translate }}<br />
  <br />
  <input type="radio" ng-model="ctrl.cascade" ng-value="false" ng-disabled="ctrl.disable" /> {{ 'BATCHES_DELETE_INPUT_KEEP' | translate }}<br />
  <input type="radio" ng-model="ctrl.cascade" ng-value="true" ng-disabled="ctrl.disable" /> {{ 'BATCHES_DELETE_INPUT_DELETE' | translate }}
</div>
<div class="modal-footer">
    <button class="btn btn-default" ng-click="ctrl.cancel()" ng-disabled="ctrl.disable">{{ 'BATCHES_DELETE_BTN_CANCEL'  | translate }}</button>
    <button class="btn btn-primary" ng-click="ctrl.confirm()" ng-disabled="ctrl.disable">{{ 'BATCHES_DELETE_BTN_CONFIRM' | translate }}</button>
</div>
`;