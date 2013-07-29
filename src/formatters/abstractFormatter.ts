/*
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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

/// <reference path='../typescript/src/compiler/core/errors.ts' />
/// <reference path='formatter.ts' />

module Lint.Formatters {

    export class AbstractFormatter implements Lint.Formatter {
        private name: string;

        constructor(name) {
            this.name = name;
        }

        public getName() {
            return this.name;
        }

        public format(syntaxTree: TypeScript.SyntaxTree, failures: Lint.RuleFailure[]): string {
            throw TypeScript.Errors.abstract();
        }
    }

}
