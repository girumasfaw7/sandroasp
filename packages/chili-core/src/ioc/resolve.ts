// Copyright 2022-2023 the Chili authors. All rights reserved. MPL-2.0 license.

import { Token } from "../decorators/token";

export interface IResolve {
    has(token: Token): boolean;
    resolve<T>(token: Token): T | undefined;
}
