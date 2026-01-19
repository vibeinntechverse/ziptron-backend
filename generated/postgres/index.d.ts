
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VehicleCatalog
 * 
 */
export type VehicleCatalog = $Result.DefaultSelection<Prisma.$VehicleCatalogPayload>
/**
 * Model UserVehicle
 * 
 */
export type UserVehicle = $Result.DefaultSelection<Prisma.$UserVehiclePayload>
/**
 * Model ChargingStation
 * 
 */
export type ChargingStation = $Result.DefaultSelection<Prisma.$ChargingStationPayload>
/**
 * Model Charger
 * 
 */
export type Charger = $Result.DefaultSelection<Prisma.$ChargerPayload>
/**
 * Model ChargingGun
 * 
 */
export type ChargingGun = $Result.DefaultSelection<Prisma.$ChargingGunPayload>
/**
 * Model ChargingSession
 * 
 */
export type ChargingSession = $Result.DefaultSelection<Prisma.$ChargingSessionPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  STATION_OWNER: 'STATION_OWNER',
  ADMIN: 'ADMIN',
  SUPPORT: 'SUPPORT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VehicleType: {
  SEDAN: 'SEDAN',
  HATCHBACK: 'HATCHBACK',
  SUV: 'SUV',
  CROSSOVER: 'CROSSOVER',
  COUPE: 'COUPE'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const ChargingSessionStatus: {
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ChargingSessionStatus = (typeof ChargingSessionStatus)[keyof typeof ChargingSessionStatus]


export const TransactionType: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const ConnectorType: {
  CCS2: 'CCS2',
  TYPE2: 'TYPE2',
  CHADEMO: 'CHADEMO',
  GB_T: 'GB_T'
};

export type ConnectorType = (typeof ConnectorType)[keyof typeof ConnectorType]


export const ChargingGunStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE',
  OFFLINE: 'OFFLINE'
};

export type ChargingGunStatus = (typeof ChargingGunStatus)[keyof typeof ChargingGunStatus]


export const TicketStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type ChargingSessionStatus = $Enums.ChargingSessionStatus

export const ChargingSessionStatus: typeof $Enums.ChargingSessionStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type ConnectorType = $Enums.ConnectorType

export const ConnectorType: typeof $Enums.ConnectorType

export type ChargingGunStatus = $Enums.ChargingGunStatus

export const ChargingGunStatus: typeof $Enums.ChargingGunStatus

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleCatalog`: Exposes CRUD operations for the **VehicleCatalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleCatalogs
    * const vehicleCatalogs = await prisma.vehicleCatalog.findMany()
    * ```
    */
  get vehicleCatalog(): Prisma.VehicleCatalogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userVehicle`: Exposes CRUD operations for the **UserVehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVehicles
    * const userVehicles = await prisma.userVehicle.findMany()
    * ```
    */
  get userVehicle(): Prisma.UserVehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chargingStation`: Exposes CRUD operations for the **ChargingStation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChargingStations
    * const chargingStations = await prisma.chargingStation.findMany()
    * ```
    */
  get chargingStation(): Prisma.ChargingStationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charger`: Exposes CRUD operations for the **Charger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chargers
    * const chargers = await prisma.charger.findMany()
    * ```
    */
  get charger(): Prisma.ChargerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chargingGun`: Exposes CRUD operations for the **ChargingGun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChargingGuns
    * const chargingGuns = await prisma.chargingGun.findMany()
    * ```
    */
  get chargingGun(): Prisma.ChargingGunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chargingSession`: Exposes CRUD operations for the **ChargingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChargingSessions
    * const chargingSessions = await prisma.chargingSession.findMany()
    * ```
    */
  get chargingSession(): Prisma.ChargingSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VehicleCatalog: 'VehicleCatalog',
    UserVehicle: 'UserVehicle',
    ChargingStation: 'ChargingStation',
    Charger: 'Charger',
    ChargingGun: 'ChargingGun',
    ChargingSession: 'ChargingSession',
    Transaction: 'Transaction',
    Ticket: 'Ticket',
    ChatSession: 'ChatSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgres?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicleCatalog" | "userVehicle" | "chargingStation" | "charger" | "chargingGun" | "chargingSession" | "transaction" | "ticket" | "chatSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VehicleCatalog: {
        payload: Prisma.$VehicleCatalogPayload<ExtArgs>
        fields: Prisma.VehicleCatalogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleCatalogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleCatalogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>
          }
          findFirst: {
            args: Prisma.VehicleCatalogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleCatalogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>
          }
          findMany: {
            args: Prisma.VehicleCatalogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>[]
          }
          create: {
            args: Prisma.VehicleCatalogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>
          }
          createMany: {
            args: Prisma.VehicleCatalogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCatalogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>[]
          }
          delete: {
            args: Prisma.VehicleCatalogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>
          }
          update: {
            args: Prisma.VehicleCatalogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>
          }
          deleteMany: {
            args: Prisma.VehicleCatalogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleCatalogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleCatalogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>[]
          }
          upsert: {
            args: Prisma.VehicleCatalogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCatalogPayload>
          }
          aggregate: {
            args: Prisma.VehicleCatalogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleCatalog>
          }
          groupBy: {
            args: Prisma.VehicleCatalogGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleCatalogGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCatalogCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCatalogCountAggregateOutputType> | number
          }
        }
      }
      UserVehicle: {
        payload: Prisma.$UserVehiclePayload<ExtArgs>
        fields: Prisma.UserVehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>
          }
          findFirst: {
            args: Prisma.UserVehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>
          }
          findMany: {
            args: Prisma.UserVehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>[]
          }
          create: {
            args: Prisma.UserVehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>
          }
          createMany: {
            args: Prisma.UserVehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>[]
          }
          delete: {
            args: Prisma.UserVehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>
          }
          update: {
            args: Prisma.UserVehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>
          }
          deleteMany: {
            args: Prisma.UserVehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserVehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>[]
          }
          upsert: {
            args: Prisma.UserVehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclePayload>
          }
          aggregate: {
            args: Prisma.UserVehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVehicle>
          }
          groupBy: {
            args: Prisma.UserVehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVehicleCountArgs<ExtArgs>
            result: $Utils.Optional<UserVehicleCountAggregateOutputType> | number
          }
        }
      }
      ChargingStation: {
        payload: Prisma.$ChargingStationPayload<ExtArgs>
        fields: Prisma.ChargingStationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargingStationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargingStationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>
          }
          findFirst: {
            args: Prisma.ChargingStationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargingStationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>
          }
          findMany: {
            args: Prisma.ChargingStationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>[]
          }
          create: {
            args: Prisma.ChargingStationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>
          }
          createMany: {
            args: Prisma.ChargingStationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargingStationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>[]
          }
          delete: {
            args: Prisma.ChargingStationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>
          }
          update: {
            args: Prisma.ChargingStationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>
          }
          deleteMany: {
            args: Prisma.ChargingStationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargingStationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargingStationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>[]
          }
          upsert: {
            args: Prisma.ChargingStationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingStationPayload>
          }
          aggregate: {
            args: Prisma.ChargingStationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChargingStation>
          }
          groupBy: {
            args: Prisma.ChargingStationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargingStationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargingStationCountArgs<ExtArgs>
            result: $Utils.Optional<ChargingStationCountAggregateOutputType> | number
          }
        }
      }
      Charger: {
        payload: Prisma.$ChargerPayload<ExtArgs>
        fields: Prisma.ChargerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          findFirst: {
            args: Prisma.ChargerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          findMany: {
            args: Prisma.ChargerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          create: {
            args: Prisma.ChargerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          createMany: {
            args: Prisma.ChargerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          delete: {
            args: Prisma.ChargerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          update: {
            args: Prisma.ChargerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          deleteMany: {
            args: Prisma.ChargerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          upsert: {
            args: Prisma.ChargerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          aggregate: {
            args: Prisma.ChargerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharger>
          }
          groupBy: {
            args: Prisma.ChargerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargerCountArgs<ExtArgs>
            result: $Utils.Optional<ChargerCountAggregateOutputType> | number
          }
        }
      }
      ChargingGun: {
        payload: Prisma.$ChargingGunPayload<ExtArgs>
        fields: Prisma.ChargingGunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargingGunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargingGunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>
          }
          findFirst: {
            args: Prisma.ChargingGunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargingGunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>
          }
          findMany: {
            args: Prisma.ChargingGunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>[]
          }
          create: {
            args: Prisma.ChargingGunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>
          }
          createMany: {
            args: Prisma.ChargingGunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargingGunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>[]
          }
          delete: {
            args: Prisma.ChargingGunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>
          }
          update: {
            args: Prisma.ChargingGunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>
          }
          deleteMany: {
            args: Prisma.ChargingGunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargingGunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargingGunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>[]
          }
          upsert: {
            args: Prisma.ChargingGunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingGunPayload>
          }
          aggregate: {
            args: Prisma.ChargingGunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChargingGun>
          }
          groupBy: {
            args: Prisma.ChargingGunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargingGunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargingGunCountArgs<ExtArgs>
            result: $Utils.Optional<ChargingGunCountAggregateOutputType> | number
          }
        }
      }
      ChargingSession: {
        payload: Prisma.$ChargingSessionPayload<ExtArgs>
        fields: Prisma.ChargingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>
          }
          findFirst: {
            args: Prisma.ChargingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>
          }
          findMany: {
            args: Prisma.ChargingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>[]
          }
          create: {
            args: Prisma.ChargingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>
          }
          createMany: {
            args: Prisma.ChargingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>[]
          }
          delete: {
            args: Prisma.ChargingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>
          }
          update: {
            args: Prisma.ChargingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChargingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChargingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargingSessionPayload>
          }
          aggregate: {
            args: Prisma.ChargingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChargingSession>
          }
          groupBy: {
            args: Prisma.ChargingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChargingSessionCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicleCatalog?: VehicleCatalogOmit
    userVehicle?: UserVehicleOmit
    chargingStation?: ChargingStationOmit
    charger?: ChargerOmit
    chargingGun?: ChargingGunOmit
    chargingSession?: ChargingSessionOmit
    transaction?: TransactionOmit
    ticket?: TicketOmit
    chatSession?: ChatSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    transactions: number
    stations: number
    tickets: number
    chats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    stations?: boolean | UserCountOutputTypeCountStationsArgs
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
    chats?: boolean | UserCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargingStationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }


  /**
   * Count Type VehicleCatalogCountOutputType
   */

  export type VehicleCatalogCountOutputType = {
    vehicles: number
  }

  export type VehicleCatalogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | VehicleCatalogCountOutputTypeCountVehiclesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCatalogCountOutputType without action
   */
  export type VehicleCatalogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalogCountOutputType
     */
    select?: VehicleCatalogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCatalogCountOutputType without action
   */
  export type VehicleCatalogCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVehicleWhereInput
  }


  /**
   * Count Type UserVehicleCountOutputType
   */

  export type UserVehicleCountOutputType = {
    sessions: number
  }

  export type UserVehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserVehicleCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserVehicleCountOutputType without action
   */
  export type UserVehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicleCountOutputType
     */
    select?: UserVehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserVehicleCountOutputType without action
   */
  export type UserVehicleCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargingSessionWhereInput
  }


  /**
   * Count Type ChargingStationCountOutputType
   */

  export type ChargingStationCountOutputType = {
    chargers: number
    tickets: number
  }

  export type ChargingStationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chargers?: boolean | ChargingStationCountOutputTypeCountChargersArgs
    tickets?: boolean | ChargingStationCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * ChargingStationCountOutputType without action
   */
  export type ChargingStationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStationCountOutputType
     */
    select?: ChargingStationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChargingStationCountOutputType without action
   */
  export type ChargingStationCountOutputTypeCountChargersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargerWhereInput
  }

  /**
   * ChargingStationCountOutputType without action
   */
  export type ChargingStationCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type ChargerCountOutputType
   */

  export type ChargerCountOutputType = {
    guns: number
  }

  export type ChargerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guns?: boolean | ChargerCountOutputTypeCountGunsArgs
  }

  // Custom InputTypes
  /**
   * ChargerCountOutputType without action
   */
  export type ChargerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerCountOutputType
     */
    select?: ChargerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChargerCountOutputType without action
   */
  export type ChargerCountOutputTypeCountGunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargingGunWhereInput
  }


  /**
   * Count Type ChargingGunCountOutputType
   */

  export type ChargingGunCountOutputType = {
    sessions: number
  }

  export type ChargingGunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | ChargingGunCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * ChargingGunCountOutputType without action
   */
  export type ChargingGunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGunCountOutputType
     */
    select?: ChargingGunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChargingGunCountOutputType without action
   */
  export type ChargingGunCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargingSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    walletBalance: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    walletBalance: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    role: $Enums.UserRole | null
    email: string | null
    phone: string | null
    walletBalance: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    role: $Enums.UserRole | null
    email: string | null
    phone: string | null
    walletBalance: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    role: number
    email: number
    phone: number
    walletBalance: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    walletBalance?: true
  }

  export type UserSumAggregateInputType = {
    walletBalance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    email?: true
    phone?: true
    walletBalance?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    email?: true
    phone?: true
    walletBalance?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    email?: true
    phone?: true
    walletBalance?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    role: $Enums.UserRole
    email: string
    phone: string | null
    walletBalance: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
    walletBalance?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    stations?: boolean | User$stationsArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
    walletBalance?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
    walletBalance?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    role?: boolean
    email?: boolean
    phone?: boolean
    walletBalance?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "role" | "email" | "phone" | "walletBalance" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    stations?: boolean | User$stationsArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$UserVehiclePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      stations: Prisma.$ChargingStationPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      chats: Prisma.$ChatSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      role: $Enums.UserRole
      email: string
      phone: string | null
      walletBalance: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stations<T extends User$stationsArgs<ExtArgs> = {}>(args?: Subset<T, User$stationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly walletBalance: FieldRef<"User", 'Decimal'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    where?: UserVehicleWhereInput
    orderBy?: UserVehicleOrderByWithRelationInput | UserVehicleOrderByWithRelationInput[]
    cursor?: UserVehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVehicleScalarFieldEnum | UserVehicleScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.stations
   */
  export type User$stationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    where?: ChargingStationWhereInput
    orderBy?: ChargingStationOrderByWithRelationInput | ChargingStationOrderByWithRelationInput[]
    cursor?: ChargingStationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VehicleCatalog
   */

  export type AggregateVehicleCatalog = {
    _count: VehicleCatalogCountAggregateOutputType | null
    _avg: VehicleCatalogAvgAggregateOutputType | null
    _sum: VehicleCatalogSumAggregateOutputType | null
    _min: VehicleCatalogMinAggregateOutputType | null
    _max: VehicleCatalogMaxAggregateOutputType | null
  }

  export type VehicleCatalogAvgAggregateOutputType = {
    id: number | null
    year: number | null
    batteryCapacity: number | null
  }

  export type VehicleCatalogSumAggregateOutputType = {
    id: number | null
    year: number | null
    batteryCapacity: number | null
  }

  export type VehicleCatalogMinAggregateOutputType = {
    id: number | null
    brand: string | null
    model: string | null
    year: number | null
    batteryCapacity: number | null
    vehicleType: $Enums.VehicleType | null
    isActive: boolean | null
  }

  export type VehicleCatalogMaxAggregateOutputType = {
    id: number | null
    brand: string | null
    model: string | null
    year: number | null
    batteryCapacity: number | null
    vehicleType: $Enums.VehicleType | null
    isActive: boolean | null
  }

  export type VehicleCatalogCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    year: number
    batteryCapacity: number
    vehicleType: number
    isActive: number
    _all: number
  }


  export type VehicleCatalogAvgAggregateInputType = {
    id?: true
    year?: true
    batteryCapacity?: true
  }

  export type VehicleCatalogSumAggregateInputType = {
    id?: true
    year?: true
    batteryCapacity?: true
  }

  export type VehicleCatalogMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    batteryCapacity?: true
    vehicleType?: true
    isActive?: true
  }

  export type VehicleCatalogMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    batteryCapacity?: true
    vehicleType?: true
    isActive?: true
  }

  export type VehicleCatalogCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    batteryCapacity?: true
    vehicleType?: true
    isActive?: true
    _all?: true
  }

  export type VehicleCatalogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleCatalog to aggregate.
     */
    where?: VehicleCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleCatalogs to fetch.
     */
    orderBy?: VehicleCatalogOrderByWithRelationInput | VehicleCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleCatalogs
    **/
    _count?: true | VehicleCatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleCatalogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleCatalogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleCatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleCatalogMaxAggregateInputType
  }

  export type GetVehicleCatalogAggregateType<T extends VehicleCatalogAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleCatalog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleCatalog[P]>
      : GetScalarType<T[P], AggregateVehicleCatalog[P]>
  }




  export type VehicleCatalogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleCatalogWhereInput
    orderBy?: VehicleCatalogOrderByWithAggregationInput | VehicleCatalogOrderByWithAggregationInput[]
    by: VehicleCatalogScalarFieldEnum[] | VehicleCatalogScalarFieldEnum
    having?: VehicleCatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCatalogCountAggregateInputType | true
    _avg?: VehicleCatalogAvgAggregateInputType
    _sum?: VehicleCatalogSumAggregateInputType
    _min?: VehicleCatalogMinAggregateInputType
    _max?: VehicleCatalogMaxAggregateInputType
  }

  export type VehicleCatalogGroupByOutputType = {
    id: number
    brand: string
    model: string
    year: number
    batteryCapacity: number
    vehicleType: $Enums.VehicleType
    isActive: boolean
    _count: VehicleCatalogCountAggregateOutputType | null
    _avg: VehicleCatalogAvgAggregateOutputType | null
    _sum: VehicleCatalogSumAggregateOutputType | null
    _min: VehicleCatalogMinAggregateOutputType | null
    _max: VehicleCatalogMaxAggregateOutputType | null
  }

  type GetVehicleCatalogGroupByPayload<T extends VehicleCatalogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleCatalogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleCatalogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleCatalogGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleCatalogGroupByOutputType[P]>
        }
      >
    >


  export type VehicleCatalogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    batteryCapacity?: boolean
    vehicleType?: boolean
    isActive?: boolean
    vehicles?: boolean | VehicleCatalog$vehiclesArgs<ExtArgs>
    _count?: boolean | VehicleCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleCatalog"]>

  export type VehicleCatalogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    batteryCapacity?: boolean
    vehicleType?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["vehicleCatalog"]>

  export type VehicleCatalogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    batteryCapacity?: boolean
    vehicleType?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["vehicleCatalog"]>

  export type VehicleCatalogSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    batteryCapacity?: boolean
    vehicleType?: boolean
    isActive?: boolean
  }

  export type VehicleCatalogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "model" | "year" | "batteryCapacity" | "vehicleType" | "isActive", ExtArgs["result"]["vehicleCatalog"]>
  export type VehicleCatalogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | VehicleCatalog$vehiclesArgs<ExtArgs>
    _count?: boolean | VehicleCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleCatalogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleCatalogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehicleCatalogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleCatalog"
    objects: {
      vehicles: Prisma.$UserVehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brand: string
      model: string
      year: number
      batteryCapacity: number
      vehicleType: $Enums.VehicleType
      isActive: boolean
    }, ExtArgs["result"]["vehicleCatalog"]>
    composites: {}
  }

  type VehicleCatalogGetPayload<S extends boolean | null | undefined | VehicleCatalogDefaultArgs> = $Result.GetResult<Prisma.$VehicleCatalogPayload, S>

  type VehicleCatalogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCatalogCountAggregateInputType | true
    }

  export interface VehicleCatalogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleCatalog'], meta: { name: 'VehicleCatalog' } }
    /**
     * Find zero or one VehicleCatalog that matches the filter.
     * @param {VehicleCatalogFindUniqueArgs} args - Arguments to find a VehicleCatalog
     * @example
     * // Get one VehicleCatalog
     * const vehicleCatalog = await prisma.vehicleCatalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleCatalogFindUniqueArgs>(args: SelectSubset<T, VehicleCatalogFindUniqueArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleCatalog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleCatalogFindUniqueOrThrowArgs} args - Arguments to find a VehicleCatalog
     * @example
     * // Get one VehicleCatalog
     * const vehicleCatalog = await prisma.vehicleCatalog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleCatalogFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleCatalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCatalogFindFirstArgs} args - Arguments to find a VehicleCatalog
     * @example
     * // Get one VehicleCatalog
     * const vehicleCatalog = await prisma.vehicleCatalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleCatalogFindFirstArgs>(args?: SelectSubset<T, VehicleCatalogFindFirstArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleCatalog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCatalogFindFirstOrThrowArgs} args - Arguments to find a VehicleCatalog
     * @example
     * // Get one VehicleCatalog
     * const vehicleCatalog = await prisma.vehicleCatalog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleCatalogFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleCatalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCatalogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleCatalogs
     * const vehicleCatalogs = await prisma.vehicleCatalog.findMany()
     * 
     * // Get first 10 VehicleCatalogs
     * const vehicleCatalogs = await prisma.vehicleCatalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleCatalogWithIdOnly = await prisma.vehicleCatalog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleCatalogFindManyArgs>(args?: SelectSubset<T, VehicleCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleCatalog.
     * @param {VehicleCatalogCreateArgs} args - Arguments to create a VehicleCatalog.
     * @example
     * // Create one VehicleCatalog
     * const VehicleCatalog = await prisma.vehicleCatalog.create({
     *   data: {
     *     // ... data to create a VehicleCatalog
     *   }
     * })
     * 
     */
    create<T extends VehicleCatalogCreateArgs>(args: SelectSubset<T, VehicleCatalogCreateArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleCatalogs.
     * @param {VehicleCatalogCreateManyArgs} args - Arguments to create many VehicleCatalogs.
     * @example
     * // Create many VehicleCatalogs
     * const vehicleCatalog = await prisma.vehicleCatalog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCatalogCreateManyArgs>(args?: SelectSubset<T, VehicleCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleCatalogs and returns the data saved in the database.
     * @param {VehicleCatalogCreateManyAndReturnArgs} args - Arguments to create many VehicleCatalogs.
     * @example
     * // Create many VehicleCatalogs
     * const vehicleCatalog = await prisma.vehicleCatalog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleCatalogs and only return the `id`
     * const vehicleCatalogWithIdOnly = await prisma.vehicleCatalog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCatalogCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleCatalog.
     * @param {VehicleCatalogDeleteArgs} args - Arguments to delete one VehicleCatalog.
     * @example
     * // Delete one VehicleCatalog
     * const VehicleCatalog = await prisma.vehicleCatalog.delete({
     *   where: {
     *     // ... filter to delete one VehicleCatalog
     *   }
     * })
     * 
     */
    delete<T extends VehicleCatalogDeleteArgs>(args: SelectSubset<T, VehicleCatalogDeleteArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleCatalog.
     * @param {VehicleCatalogUpdateArgs} args - Arguments to update one VehicleCatalog.
     * @example
     * // Update one VehicleCatalog
     * const vehicleCatalog = await prisma.vehicleCatalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleCatalogUpdateArgs>(args: SelectSubset<T, VehicleCatalogUpdateArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleCatalogs.
     * @param {VehicleCatalogDeleteManyArgs} args - Arguments to filter VehicleCatalogs to delete.
     * @example
     * // Delete a few VehicleCatalogs
     * const { count } = await prisma.vehicleCatalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleCatalogDeleteManyArgs>(args?: SelectSubset<T, VehicleCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleCatalogs
     * const vehicleCatalog = await prisma.vehicleCatalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleCatalogUpdateManyArgs>(args: SelectSubset<T, VehicleCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleCatalogs and returns the data updated in the database.
     * @param {VehicleCatalogUpdateManyAndReturnArgs} args - Arguments to update many VehicleCatalogs.
     * @example
     * // Update many VehicleCatalogs
     * const vehicleCatalog = await prisma.vehicleCatalog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleCatalogs and only return the `id`
     * const vehicleCatalogWithIdOnly = await prisma.vehicleCatalog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleCatalogUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleCatalog.
     * @param {VehicleCatalogUpsertArgs} args - Arguments to update or create a VehicleCatalog.
     * @example
     * // Update or create a VehicleCatalog
     * const vehicleCatalog = await prisma.vehicleCatalog.upsert({
     *   create: {
     *     // ... data to create a VehicleCatalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleCatalog we want to update
     *   }
     * })
     */
    upsert<T extends VehicleCatalogUpsertArgs>(args: SelectSubset<T, VehicleCatalogUpsertArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCatalogCountArgs} args - Arguments to filter VehicleCatalogs to count.
     * @example
     * // Count the number of VehicleCatalogs
     * const count = await prisma.vehicleCatalog.count({
     *   where: {
     *     // ... the filter for the VehicleCatalogs we want to count
     *   }
     * })
    **/
    count<T extends VehicleCatalogCountArgs>(
      args?: Subset<T, VehicleCatalogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleCatalogAggregateArgs>(args: Subset<T, VehicleCatalogAggregateArgs>): Prisma.PrismaPromise<GetVehicleCatalogAggregateType<T>>

    /**
     * Group by VehicleCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCatalogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleCatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleCatalogGroupByArgs['orderBy'] }
        : { orderBy?: VehicleCatalogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleCatalog model
   */
  readonly fields: VehicleCatalogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleCatalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleCatalogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends VehicleCatalog$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, VehicleCatalog$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleCatalog model
   */
  interface VehicleCatalogFieldRefs {
    readonly id: FieldRef<"VehicleCatalog", 'Int'>
    readonly brand: FieldRef<"VehicleCatalog", 'String'>
    readonly model: FieldRef<"VehicleCatalog", 'String'>
    readonly year: FieldRef<"VehicleCatalog", 'Int'>
    readonly batteryCapacity: FieldRef<"VehicleCatalog", 'Float'>
    readonly vehicleType: FieldRef<"VehicleCatalog", 'VehicleType'>
    readonly isActive: FieldRef<"VehicleCatalog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VehicleCatalog findUnique
   */
  export type VehicleCatalogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCatalog to fetch.
     */
    where: VehicleCatalogWhereUniqueInput
  }

  /**
   * VehicleCatalog findUniqueOrThrow
   */
  export type VehicleCatalogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCatalog to fetch.
     */
    where: VehicleCatalogWhereUniqueInput
  }

  /**
   * VehicleCatalog findFirst
   */
  export type VehicleCatalogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCatalog to fetch.
     */
    where?: VehicleCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleCatalogs to fetch.
     */
    orderBy?: VehicleCatalogOrderByWithRelationInput | VehicleCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleCatalogs.
     */
    cursor?: VehicleCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleCatalogs.
     */
    distinct?: VehicleCatalogScalarFieldEnum | VehicleCatalogScalarFieldEnum[]
  }

  /**
   * VehicleCatalog findFirstOrThrow
   */
  export type VehicleCatalogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCatalog to fetch.
     */
    where?: VehicleCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleCatalogs to fetch.
     */
    orderBy?: VehicleCatalogOrderByWithRelationInput | VehicleCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleCatalogs.
     */
    cursor?: VehicleCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleCatalogs.
     */
    distinct?: VehicleCatalogScalarFieldEnum | VehicleCatalogScalarFieldEnum[]
  }

  /**
   * VehicleCatalog findMany
   */
  export type VehicleCatalogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCatalogs to fetch.
     */
    where?: VehicleCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleCatalogs to fetch.
     */
    orderBy?: VehicleCatalogOrderByWithRelationInput | VehicleCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleCatalogs.
     */
    cursor?: VehicleCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleCatalogs.
     */
    skip?: number
    distinct?: VehicleCatalogScalarFieldEnum | VehicleCatalogScalarFieldEnum[]
  }

  /**
   * VehicleCatalog create
   */
  export type VehicleCatalogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleCatalog.
     */
    data: XOR<VehicleCatalogCreateInput, VehicleCatalogUncheckedCreateInput>
  }

  /**
   * VehicleCatalog createMany
   */
  export type VehicleCatalogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleCatalogs.
     */
    data: VehicleCatalogCreateManyInput | VehicleCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleCatalog createManyAndReturn
   */
  export type VehicleCatalogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleCatalogs.
     */
    data: VehicleCatalogCreateManyInput | VehicleCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleCatalog update
   */
  export type VehicleCatalogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleCatalog.
     */
    data: XOR<VehicleCatalogUpdateInput, VehicleCatalogUncheckedUpdateInput>
    /**
     * Choose, which VehicleCatalog to update.
     */
    where: VehicleCatalogWhereUniqueInput
  }

  /**
   * VehicleCatalog updateMany
   */
  export type VehicleCatalogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleCatalogs.
     */
    data: XOR<VehicleCatalogUpdateManyMutationInput, VehicleCatalogUncheckedUpdateManyInput>
    /**
     * Filter which VehicleCatalogs to update
     */
    where?: VehicleCatalogWhereInput
    /**
     * Limit how many VehicleCatalogs to update.
     */
    limit?: number
  }

  /**
   * VehicleCatalog updateManyAndReturn
   */
  export type VehicleCatalogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * The data used to update VehicleCatalogs.
     */
    data: XOR<VehicleCatalogUpdateManyMutationInput, VehicleCatalogUncheckedUpdateManyInput>
    /**
     * Filter which VehicleCatalogs to update
     */
    where?: VehicleCatalogWhereInput
    /**
     * Limit how many VehicleCatalogs to update.
     */
    limit?: number
  }

  /**
   * VehicleCatalog upsert
   */
  export type VehicleCatalogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleCatalog to update in case it exists.
     */
    where: VehicleCatalogWhereUniqueInput
    /**
     * In case the VehicleCatalog found by the `where` argument doesn't exist, create a new VehicleCatalog with this data.
     */
    create: XOR<VehicleCatalogCreateInput, VehicleCatalogUncheckedCreateInput>
    /**
     * In case the VehicleCatalog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleCatalogUpdateInput, VehicleCatalogUncheckedUpdateInput>
  }

  /**
   * VehicleCatalog delete
   */
  export type VehicleCatalogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
    /**
     * Filter which VehicleCatalog to delete.
     */
    where: VehicleCatalogWhereUniqueInput
  }

  /**
   * VehicleCatalog deleteMany
   */
  export type VehicleCatalogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleCatalogs to delete
     */
    where?: VehicleCatalogWhereInput
    /**
     * Limit how many VehicleCatalogs to delete.
     */
    limit?: number
  }

  /**
   * VehicleCatalog.vehicles
   */
  export type VehicleCatalog$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    where?: UserVehicleWhereInput
    orderBy?: UserVehicleOrderByWithRelationInput | UserVehicleOrderByWithRelationInput[]
    cursor?: UserVehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVehicleScalarFieldEnum | UserVehicleScalarFieldEnum[]
  }

  /**
   * VehicleCatalog without action
   */
  export type VehicleCatalogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCatalog
     */
    select?: VehicleCatalogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCatalog
     */
    omit?: VehicleCatalogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCatalogInclude<ExtArgs> | null
  }


  /**
   * Model UserVehicle
   */

  export type AggregateUserVehicle = {
    _count: UserVehicleCountAggregateOutputType | null
    _avg: UserVehicleAvgAggregateOutputType | null
    _sum: UserVehicleSumAggregateOutputType | null
    _min: UserVehicleMinAggregateOutputType | null
    _max: UserVehicleMaxAggregateOutputType | null
  }

  export type UserVehicleAvgAggregateOutputType = {
    catalogId: number | null
  }

  export type UserVehicleSumAggregateOutputType = {
    catalogId: number | null
  }

  export type UserVehicleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    catalogId: number | null
    vehicleNo: string | null
    nickname: string | null
    createdAt: Date | null
  }

  export type UserVehicleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    catalogId: number | null
    vehicleNo: string | null
    nickname: string | null
    createdAt: Date | null
  }

  export type UserVehicleCountAggregateOutputType = {
    id: number
    userId: number
    catalogId: number
    vehicleNo: number
    nickname: number
    createdAt: number
    _all: number
  }


  export type UserVehicleAvgAggregateInputType = {
    catalogId?: true
  }

  export type UserVehicleSumAggregateInputType = {
    catalogId?: true
  }

  export type UserVehicleMinAggregateInputType = {
    id?: true
    userId?: true
    catalogId?: true
    vehicleNo?: true
    nickname?: true
    createdAt?: true
  }

  export type UserVehicleMaxAggregateInputType = {
    id?: true
    userId?: true
    catalogId?: true
    vehicleNo?: true
    nickname?: true
    createdAt?: true
  }

  export type UserVehicleCountAggregateInputType = {
    id?: true
    userId?: true
    catalogId?: true
    vehicleNo?: true
    nickname?: true
    createdAt?: true
    _all?: true
  }

  export type UserVehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVehicle to aggregate.
     */
    where?: UserVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVehicles to fetch.
     */
    orderBy?: UserVehicleOrderByWithRelationInput | UserVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVehicles
    **/
    _count?: true | UserVehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVehicleMaxAggregateInputType
  }

  export type GetUserVehicleAggregateType<T extends UserVehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVehicle[P]>
      : GetScalarType<T[P], AggregateUserVehicle[P]>
  }




  export type UserVehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVehicleWhereInput
    orderBy?: UserVehicleOrderByWithAggregationInput | UserVehicleOrderByWithAggregationInput[]
    by: UserVehicleScalarFieldEnum[] | UserVehicleScalarFieldEnum
    having?: UserVehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVehicleCountAggregateInputType | true
    _avg?: UserVehicleAvgAggregateInputType
    _sum?: UserVehicleSumAggregateInputType
    _min?: UserVehicleMinAggregateInputType
    _max?: UserVehicleMaxAggregateInputType
  }

  export type UserVehicleGroupByOutputType = {
    id: string
    userId: string
    catalogId: number
    vehicleNo: string
    nickname: string | null
    createdAt: Date
    _count: UserVehicleCountAggregateOutputType | null
    _avg: UserVehicleAvgAggregateOutputType | null
    _sum: UserVehicleSumAggregateOutputType | null
    _min: UserVehicleMinAggregateOutputType | null
    _max: UserVehicleMaxAggregateOutputType | null
  }

  type GetUserVehicleGroupByPayload<T extends UserVehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVehicleGroupByOutputType[P]>
            : GetScalarType<T[P], UserVehicleGroupByOutputType[P]>
        }
      >
    >


  export type UserVehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    catalogId?: boolean
    vehicleNo?: boolean
    nickname?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    catalog?: boolean | VehicleCatalogDefaultArgs<ExtArgs>
    sessions?: boolean | UserVehicle$sessionsArgs<ExtArgs>
    _count?: boolean | UserVehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVehicle"]>

  export type UserVehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    catalogId?: boolean
    vehicleNo?: boolean
    nickname?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    catalog?: boolean | VehicleCatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVehicle"]>

  export type UserVehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    catalogId?: boolean
    vehicleNo?: boolean
    nickname?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    catalog?: boolean | VehicleCatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVehicle"]>

  export type UserVehicleSelectScalar = {
    id?: boolean
    userId?: boolean
    catalogId?: boolean
    vehicleNo?: boolean
    nickname?: boolean
    createdAt?: boolean
  }

  export type UserVehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "catalogId" | "vehicleNo" | "nickname" | "createdAt", ExtArgs["result"]["userVehicle"]>
  export type UserVehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    catalog?: boolean | VehicleCatalogDefaultArgs<ExtArgs>
    sessions?: boolean | UserVehicle$sessionsArgs<ExtArgs>
    _count?: boolean | UserVehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserVehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    catalog?: boolean | VehicleCatalogDefaultArgs<ExtArgs>
  }
  export type UserVehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    catalog?: boolean | VehicleCatalogDefaultArgs<ExtArgs>
  }

  export type $UserVehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVehicle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      catalog: Prisma.$VehicleCatalogPayload<ExtArgs>
      sessions: Prisma.$ChargingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      catalogId: number
      vehicleNo: string
      nickname: string | null
      createdAt: Date
    }, ExtArgs["result"]["userVehicle"]>
    composites: {}
  }

  type UserVehicleGetPayload<S extends boolean | null | undefined | UserVehicleDefaultArgs> = $Result.GetResult<Prisma.$UserVehiclePayload, S>

  type UserVehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVehicleCountAggregateInputType | true
    }

  export interface UserVehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVehicle'], meta: { name: 'UserVehicle' } }
    /**
     * Find zero or one UserVehicle that matches the filter.
     * @param {UserVehicleFindUniqueArgs} args - Arguments to find a UserVehicle
     * @example
     * // Get one UserVehicle
     * const userVehicle = await prisma.userVehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVehicleFindUniqueArgs>(args: SelectSubset<T, UserVehicleFindUniqueArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVehicleFindUniqueOrThrowArgs} args - Arguments to find a UserVehicle
     * @example
     * // Get one UserVehicle
     * const userVehicle = await prisma.userVehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehicleFindFirstArgs} args - Arguments to find a UserVehicle
     * @example
     * // Get one UserVehicle
     * const userVehicle = await prisma.userVehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVehicleFindFirstArgs>(args?: SelectSubset<T, UserVehicleFindFirstArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehicleFindFirstOrThrowArgs} args - Arguments to find a UserVehicle
     * @example
     * // Get one UserVehicle
     * const userVehicle = await prisma.userVehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVehicles
     * const userVehicles = await prisma.userVehicle.findMany()
     * 
     * // Get first 10 UserVehicles
     * const userVehicles = await prisma.userVehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVehicleWithIdOnly = await prisma.userVehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVehicleFindManyArgs>(args?: SelectSubset<T, UserVehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVehicle.
     * @param {UserVehicleCreateArgs} args - Arguments to create a UserVehicle.
     * @example
     * // Create one UserVehicle
     * const UserVehicle = await prisma.userVehicle.create({
     *   data: {
     *     // ... data to create a UserVehicle
     *   }
     * })
     * 
     */
    create<T extends UserVehicleCreateArgs>(args: SelectSubset<T, UserVehicleCreateArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVehicles.
     * @param {UserVehicleCreateManyArgs} args - Arguments to create many UserVehicles.
     * @example
     * // Create many UserVehicles
     * const userVehicle = await prisma.userVehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVehicleCreateManyArgs>(args?: SelectSubset<T, UserVehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVehicles and returns the data saved in the database.
     * @param {UserVehicleCreateManyAndReturnArgs} args - Arguments to create many UserVehicles.
     * @example
     * // Create many UserVehicles
     * const userVehicle = await prisma.userVehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVehicles and only return the `id`
     * const userVehicleWithIdOnly = await prisma.userVehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserVehicle.
     * @param {UserVehicleDeleteArgs} args - Arguments to delete one UserVehicle.
     * @example
     * // Delete one UserVehicle
     * const UserVehicle = await prisma.userVehicle.delete({
     *   where: {
     *     // ... filter to delete one UserVehicle
     *   }
     * })
     * 
     */
    delete<T extends UserVehicleDeleteArgs>(args: SelectSubset<T, UserVehicleDeleteArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVehicle.
     * @param {UserVehicleUpdateArgs} args - Arguments to update one UserVehicle.
     * @example
     * // Update one UserVehicle
     * const userVehicle = await prisma.userVehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVehicleUpdateArgs>(args: SelectSubset<T, UserVehicleUpdateArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVehicles.
     * @param {UserVehicleDeleteManyArgs} args - Arguments to filter UserVehicles to delete.
     * @example
     * // Delete a few UserVehicles
     * const { count } = await prisma.userVehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVehicleDeleteManyArgs>(args?: SelectSubset<T, UserVehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVehicles
     * const userVehicle = await prisma.userVehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVehicleUpdateManyArgs>(args: SelectSubset<T, UserVehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVehicles and returns the data updated in the database.
     * @param {UserVehicleUpdateManyAndReturnArgs} args - Arguments to update many UserVehicles.
     * @example
     * // Update many UserVehicles
     * const userVehicle = await prisma.userVehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserVehicles and only return the `id`
     * const userVehicleWithIdOnly = await prisma.userVehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserVehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserVehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserVehicle.
     * @param {UserVehicleUpsertArgs} args - Arguments to update or create a UserVehicle.
     * @example
     * // Update or create a UserVehicle
     * const userVehicle = await prisma.userVehicle.upsert({
     *   create: {
     *     // ... data to create a UserVehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVehicle we want to update
     *   }
     * })
     */
    upsert<T extends UserVehicleUpsertArgs>(args: SelectSubset<T, UserVehicleUpsertArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehicleCountArgs} args - Arguments to filter UserVehicles to count.
     * @example
     * // Count the number of UserVehicles
     * const count = await prisma.userVehicle.count({
     *   where: {
     *     // ... the filter for the UserVehicles we want to count
     *   }
     * })
    **/
    count<T extends UserVehicleCountArgs>(
      args?: Subset<T, UserVehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserVehicleAggregateArgs>(args: Subset<T, UserVehicleAggregateArgs>): Prisma.PrismaPromise<GetUserVehicleAggregateType<T>>

    /**
     * Group by UserVehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserVehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVehicleGroupByArgs['orderBy'] }
        : { orderBy?: UserVehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserVehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVehicle model
   */
  readonly fields: UserVehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    catalog<T extends VehicleCatalogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleCatalogDefaultArgs<ExtArgs>>): Prisma__VehicleCatalogClient<$Result.GetResult<Prisma.$VehicleCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends UserVehicle$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, UserVehicle$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserVehicle model
   */
  interface UserVehicleFieldRefs {
    readonly id: FieldRef<"UserVehicle", 'String'>
    readonly userId: FieldRef<"UserVehicle", 'String'>
    readonly catalogId: FieldRef<"UserVehicle", 'Int'>
    readonly vehicleNo: FieldRef<"UserVehicle", 'String'>
    readonly nickname: FieldRef<"UserVehicle", 'String'>
    readonly createdAt: FieldRef<"UserVehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVehicle findUnique
   */
  export type UserVehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicle to fetch.
     */
    where: UserVehicleWhereUniqueInput
  }

  /**
   * UserVehicle findUniqueOrThrow
   */
  export type UserVehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicle to fetch.
     */
    where: UserVehicleWhereUniqueInput
  }

  /**
   * UserVehicle findFirst
   */
  export type UserVehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicle to fetch.
     */
    where?: UserVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVehicles to fetch.
     */
    orderBy?: UserVehicleOrderByWithRelationInput | UserVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVehicles.
     */
    cursor?: UserVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVehicles.
     */
    distinct?: UserVehicleScalarFieldEnum | UserVehicleScalarFieldEnum[]
  }

  /**
   * UserVehicle findFirstOrThrow
   */
  export type UserVehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicle to fetch.
     */
    where?: UserVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVehicles to fetch.
     */
    orderBy?: UserVehicleOrderByWithRelationInput | UserVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVehicles.
     */
    cursor?: UserVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVehicles.
     */
    distinct?: UserVehicleScalarFieldEnum | UserVehicleScalarFieldEnum[]
  }

  /**
   * UserVehicle findMany
   */
  export type UserVehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicles to fetch.
     */
    where?: UserVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVehicles to fetch.
     */
    orderBy?: UserVehicleOrderByWithRelationInput | UserVehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVehicles.
     */
    cursor?: UserVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVehicles.
     */
    skip?: number
    distinct?: UserVehicleScalarFieldEnum | UserVehicleScalarFieldEnum[]
  }

  /**
   * UserVehicle create
   */
  export type UserVehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVehicle.
     */
    data: XOR<UserVehicleCreateInput, UserVehicleUncheckedCreateInput>
  }

  /**
   * UserVehicle createMany
   */
  export type UserVehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVehicles.
     */
    data: UserVehicleCreateManyInput | UserVehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVehicle createManyAndReturn
   */
  export type UserVehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * The data used to create many UserVehicles.
     */
    data: UserVehicleCreateManyInput | UserVehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVehicle update
   */
  export type UserVehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVehicle.
     */
    data: XOR<UserVehicleUpdateInput, UserVehicleUncheckedUpdateInput>
    /**
     * Choose, which UserVehicle to update.
     */
    where: UserVehicleWhereUniqueInput
  }

  /**
   * UserVehicle updateMany
   */
  export type UserVehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVehicles.
     */
    data: XOR<UserVehicleUpdateManyMutationInput, UserVehicleUncheckedUpdateManyInput>
    /**
     * Filter which UserVehicles to update
     */
    where?: UserVehicleWhereInput
    /**
     * Limit how many UserVehicles to update.
     */
    limit?: number
  }

  /**
   * UserVehicle updateManyAndReturn
   */
  export type UserVehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * The data used to update UserVehicles.
     */
    data: XOR<UserVehicleUpdateManyMutationInput, UserVehicleUncheckedUpdateManyInput>
    /**
     * Filter which UserVehicles to update
     */
    where?: UserVehicleWhereInput
    /**
     * Limit how many UserVehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVehicle upsert
   */
  export type UserVehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVehicle to update in case it exists.
     */
    where: UserVehicleWhereUniqueInput
    /**
     * In case the UserVehicle found by the `where` argument doesn't exist, create a new UserVehicle with this data.
     */
    create: XOR<UserVehicleCreateInput, UserVehicleUncheckedCreateInput>
    /**
     * In case the UserVehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVehicleUpdateInput, UserVehicleUncheckedUpdateInput>
  }

  /**
   * UserVehicle delete
   */
  export type UserVehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
    /**
     * Filter which UserVehicle to delete.
     */
    where: UserVehicleWhereUniqueInput
  }

  /**
   * UserVehicle deleteMany
   */
  export type UserVehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVehicles to delete
     */
    where?: UserVehicleWhereInput
    /**
     * Limit how many UserVehicles to delete.
     */
    limit?: number
  }

  /**
   * UserVehicle.sessions
   */
  export type UserVehicle$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    where?: ChargingSessionWhereInput
    orderBy?: ChargingSessionOrderByWithRelationInput | ChargingSessionOrderByWithRelationInput[]
    cursor?: ChargingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargingSessionScalarFieldEnum | ChargingSessionScalarFieldEnum[]
  }

  /**
   * UserVehicle without action
   */
  export type UserVehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicle
     */
    select?: UserVehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicle
     */
    omit?: UserVehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehicleInclude<ExtArgs> | null
  }


  /**
   * Model ChargingStation
   */

  export type AggregateChargingStation = {
    _count: ChargingStationCountAggregateOutputType | null
    _avg: ChargingStationAvgAggregateOutputType | null
    _sum: ChargingStationSumAggregateOutputType | null
    _min: ChargingStationMinAggregateOutputType | null
    _max: ChargingStationMaxAggregateOutputType | null
  }

  export type ChargingStationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ChargingStationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ChargingStationMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ChargingStationMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ChargingStationCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    address: number
    latitude: number
    longitude: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ChargingStationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ChargingStationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ChargingStationMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    isActive?: true
    createdAt?: true
  }

  export type ChargingStationMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    isActive?: true
    createdAt?: true
  }

  export type ChargingStationCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ChargingStationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargingStation to aggregate.
     */
    where?: ChargingStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingStations to fetch.
     */
    orderBy?: ChargingStationOrderByWithRelationInput | ChargingStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargingStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChargingStations
    **/
    _count?: true | ChargingStationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargingStationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargingStationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargingStationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargingStationMaxAggregateInputType
  }

  export type GetChargingStationAggregateType<T extends ChargingStationAggregateArgs> = {
        [P in keyof T & keyof AggregateChargingStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChargingStation[P]>
      : GetScalarType<T[P], AggregateChargingStation[P]>
  }




  export type ChargingStationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargingStationWhereInput
    orderBy?: ChargingStationOrderByWithAggregationInput | ChargingStationOrderByWithAggregationInput[]
    by: ChargingStationScalarFieldEnum[] | ChargingStationScalarFieldEnum
    having?: ChargingStationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargingStationCountAggregateInputType | true
    _avg?: ChargingStationAvgAggregateInputType
    _sum?: ChargingStationSumAggregateInputType
    _min?: ChargingStationMinAggregateInputType
    _max?: ChargingStationMaxAggregateInputType
  }

  export type ChargingStationGroupByOutputType = {
    id: string
    ownerId: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive: boolean
    createdAt: Date
    _count: ChargingStationCountAggregateOutputType | null
    _avg: ChargingStationAvgAggregateOutputType | null
    _sum: ChargingStationSumAggregateOutputType | null
    _min: ChargingStationMinAggregateOutputType | null
    _max: ChargingStationMaxAggregateOutputType | null
  }

  type GetChargingStationGroupByPayload<T extends ChargingStationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargingStationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargingStationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargingStationGroupByOutputType[P]>
            : GetScalarType<T[P], ChargingStationGroupByOutputType[P]>
        }
      >
    >


  export type ChargingStationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    chargers?: boolean | ChargingStation$chargersArgs<ExtArgs>
    tickets?: boolean | ChargingStation$ticketsArgs<ExtArgs>
    _count?: boolean | ChargingStationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingStation"]>

  export type ChargingStationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingStation"]>

  export type ChargingStationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingStation"]>

  export type ChargingStationSelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ChargingStationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "address" | "latitude" | "longitude" | "isActive" | "createdAt", ExtArgs["result"]["chargingStation"]>
  export type ChargingStationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    chargers?: boolean | ChargingStation$chargersArgs<ExtArgs>
    tickets?: boolean | ChargingStation$ticketsArgs<ExtArgs>
    _count?: boolean | ChargingStationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChargingStationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChargingStationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChargingStationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChargingStation"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      chargers: Prisma.$ChargerPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      name: string
      address: string
      latitude: number
      longitude: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["chargingStation"]>
    composites: {}
  }

  type ChargingStationGetPayload<S extends boolean | null | undefined | ChargingStationDefaultArgs> = $Result.GetResult<Prisma.$ChargingStationPayload, S>

  type ChargingStationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargingStationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargingStationCountAggregateInputType | true
    }

  export interface ChargingStationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChargingStation'], meta: { name: 'ChargingStation' } }
    /**
     * Find zero or one ChargingStation that matches the filter.
     * @param {ChargingStationFindUniqueArgs} args - Arguments to find a ChargingStation
     * @example
     * // Get one ChargingStation
     * const chargingStation = await prisma.chargingStation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargingStationFindUniqueArgs>(args: SelectSubset<T, ChargingStationFindUniqueArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChargingStation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargingStationFindUniqueOrThrowArgs} args - Arguments to find a ChargingStation
     * @example
     * // Get one ChargingStation
     * const chargingStation = await prisma.chargingStation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargingStationFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargingStationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargingStation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingStationFindFirstArgs} args - Arguments to find a ChargingStation
     * @example
     * // Get one ChargingStation
     * const chargingStation = await prisma.chargingStation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargingStationFindFirstArgs>(args?: SelectSubset<T, ChargingStationFindFirstArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargingStation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingStationFindFirstOrThrowArgs} args - Arguments to find a ChargingStation
     * @example
     * // Get one ChargingStation
     * const chargingStation = await prisma.chargingStation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargingStationFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargingStationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChargingStations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingStationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChargingStations
     * const chargingStations = await prisma.chargingStation.findMany()
     * 
     * // Get first 10 ChargingStations
     * const chargingStations = await prisma.chargingStation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargingStationWithIdOnly = await prisma.chargingStation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargingStationFindManyArgs>(args?: SelectSubset<T, ChargingStationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChargingStation.
     * @param {ChargingStationCreateArgs} args - Arguments to create a ChargingStation.
     * @example
     * // Create one ChargingStation
     * const ChargingStation = await prisma.chargingStation.create({
     *   data: {
     *     // ... data to create a ChargingStation
     *   }
     * })
     * 
     */
    create<T extends ChargingStationCreateArgs>(args: SelectSubset<T, ChargingStationCreateArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChargingStations.
     * @param {ChargingStationCreateManyArgs} args - Arguments to create many ChargingStations.
     * @example
     * // Create many ChargingStations
     * const chargingStation = await prisma.chargingStation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargingStationCreateManyArgs>(args?: SelectSubset<T, ChargingStationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChargingStations and returns the data saved in the database.
     * @param {ChargingStationCreateManyAndReturnArgs} args - Arguments to create many ChargingStations.
     * @example
     * // Create many ChargingStations
     * const chargingStation = await prisma.chargingStation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChargingStations and only return the `id`
     * const chargingStationWithIdOnly = await prisma.chargingStation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargingStationCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargingStationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChargingStation.
     * @param {ChargingStationDeleteArgs} args - Arguments to delete one ChargingStation.
     * @example
     * // Delete one ChargingStation
     * const ChargingStation = await prisma.chargingStation.delete({
     *   where: {
     *     // ... filter to delete one ChargingStation
     *   }
     * })
     * 
     */
    delete<T extends ChargingStationDeleteArgs>(args: SelectSubset<T, ChargingStationDeleteArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChargingStation.
     * @param {ChargingStationUpdateArgs} args - Arguments to update one ChargingStation.
     * @example
     * // Update one ChargingStation
     * const chargingStation = await prisma.chargingStation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargingStationUpdateArgs>(args: SelectSubset<T, ChargingStationUpdateArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChargingStations.
     * @param {ChargingStationDeleteManyArgs} args - Arguments to filter ChargingStations to delete.
     * @example
     * // Delete a few ChargingStations
     * const { count } = await prisma.chargingStation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargingStationDeleteManyArgs>(args?: SelectSubset<T, ChargingStationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargingStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingStationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChargingStations
     * const chargingStation = await prisma.chargingStation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargingStationUpdateManyArgs>(args: SelectSubset<T, ChargingStationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargingStations and returns the data updated in the database.
     * @param {ChargingStationUpdateManyAndReturnArgs} args - Arguments to update many ChargingStations.
     * @example
     * // Update many ChargingStations
     * const chargingStation = await prisma.chargingStation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChargingStations and only return the `id`
     * const chargingStationWithIdOnly = await prisma.chargingStation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargingStationUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargingStationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChargingStation.
     * @param {ChargingStationUpsertArgs} args - Arguments to update or create a ChargingStation.
     * @example
     * // Update or create a ChargingStation
     * const chargingStation = await prisma.chargingStation.upsert({
     *   create: {
     *     // ... data to create a ChargingStation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChargingStation we want to update
     *   }
     * })
     */
    upsert<T extends ChargingStationUpsertArgs>(args: SelectSubset<T, ChargingStationUpsertArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChargingStations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingStationCountArgs} args - Arguments to filter ChargingStations to count.
     * @example
     * // Count the number of ChargingStations
     * const count = await prisma.chargingStation.count({
     *   where: {
     *     // ... the filter for the ChargingStations we want to count
     *   }
     * })
    **/
    count<T extends ChargingStationCountArgs>(
      args?: Subset<T, ChargingStationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargingStationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChargingStation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingStationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargingStationAggregateArgs>(args: Subset<T, ChargingStationAggregateArgs>): Prisma.PrismaPromise<GetChargingStationAggregateType<T>>

    /**
     * Group by ChargingStation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingStationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargingStationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargingStationGroupByArgs['orderBy'] }
        : { orderBy?: ChargingStationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargingStationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargingStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChargingStation model
   */
  readonly fields: ChargingStationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChargingStation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargingStationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chargers<T extends ChargingStation$chargersArgs<ExtArgs> = {}>(args?: Subset<T, ChargingStation$chargersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends ChargingStation$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, ChargingStation$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChargingStation model
   */
  interface ChargingStationFieldRefs {
    readonly id: FieldRef<"ChargingStation", 'String'>
    readonly ownerId: FieldRef<"ChargingStation", 'String'>
    readonly name: FieldRef<"ChargingStation", 'String'>
    readonly address: FieldRef<"ChargingStation", 'String'>
    readonly latitude: FieldRef<"ChargingStation", 'Float'>
    readonly longitude: FieldRef<"ChargingStation", 'Float'>
    readonly isActive: FieldRef<"ChargingStation", 'Boolean'>
    readonly createdAt: FieldRef<"ChargingStation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChargingStation findUnique
   */
  export type ChargingStationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * Filter, which ChargingStation to fetch.
     */
    where: ChargingStationWhereUniqueInput
  }

  /**
   * ChargingStation findUniqueOrThrow
   */
  export type ChargingStationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * Filter, which ChargingStation to fetch.
     */
    where: ChargingStationWhereUniqueInput
  }

  /**
   * ChargingStation findFirst
   */
  export type ChargingStationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * Filter, which ChargingStation to fetch.
     */
    where?: ChargingStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingStations to fetch.
     */
    orderBy?: ChargingStationOrderByWithRelationInput | ChargingStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargingStations.
     */
    cursor?: ChargingStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargingStations.
     */
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * ChargingStation findFirstOrThrow
   */
  export type ChargingStationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * Filter, which ChargingStation to fetch.
     */
    where?: ChargingStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingStations to fetch.
     */
    orderBy?: ChargingStationOrderByWithRelationInput | ChargingStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargingStations.
     */
    cursor?: ChargingStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingStations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargingStations.
     */
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * ChargingStation findMany
   */
  export type ChargingStationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * Filter, which ChargingStations to fetch.
     */
    where?: ChargingStationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingStations to fetch.
     */
    orderBy?: ChargingStationOrderByWithRelationInput | ChargingStationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChargingStations.
     */
    cursor?: ChargingStationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingStations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingStations.
     */
    skip?: number
    distinct?: ChargingStationScalarFieldEnum | ChargingStationScalarFieldEnum[]
  }

  /**
   * ChargingStation create
   */
  export type ChargingStationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * The data needed to create a ChargingStation.
     */
    data: XOR<ChargingStationCreateInput, ChargingStationUncheckedCreateInput>
  }

  /**
   * ChargingStation createMany
   */
  export type ChargingStationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChargingStations.
     */
    data: ChargingStationCreateManyInput | ChargingStationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChargingStation createManyAndReturn
   */
  export type ChargingStationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * The data used to create many ChargingStations.
     */
    data: ChargingStationCreateManyInput | ChargingStationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargingStation update
   */
  export type ChargingStationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * The data needed to update a ChargingStation.
     */
    data: XOR<ChargingStationUpdateInput, ChargingStationUncheckedUpdateInput>
    /**
     * Choose, which ChargingStation to update.
     */
    where: ChargingStationWhereUniqueInput
  }

  /**
   * ChargingStation updateMany
   */
  export type ChargingStationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChargingStations.
     */
    data: XOR<ChargingStationUpdateManyMutationInput, ChargingStationUncheckedUpdateManyInput>
    /**
     * Filter which ChargingStations to update
     */
    where?: ChargingStationWhereInput
    /**
     * Limit how many ChargingStations to update.
     */
    limit?: number
  }

  /**
   * ChargingStation updateManyAndReturn
   */
  export type ChargingStationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * The data used to update ChargingStations.
     */
    data: XOR<ChargingStationUpdateManyMutationInput, ChargingStationUncheckedUpdateManyInput>
    /**
     * Filter which ChargingStations to update
     */
    where?: ChargingStationWhereInput
    /**
     * Limit how many ChargingStations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargingStation upsert
   */
  export type ChargingStationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * The filter to search for the ChargingStation to update in case it exists.
     */
    where: ChargingStationWhereUniqueInput
    /**
     * In case the ChargingStation found by the `where` argument doesn't exist, create a new ChargingStation with this data.
     */
    create: XOR<ChargingStationCreateInput, ChargingStationUncheckedCreateInput>
    /**
     * In case the ChargingStation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargingStationUpdateInput, ChargingStationUncheckedUpdateInput>
  }

  /**
   * ChargingStation delete
   */
  export type ChargingStationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    /**
     * Filter which ChargingStation to delete.
     */
    where: ChargingStationWhereUniqueInput
  }

  /**
   * ChargingStation deleteMany
   */
  export type ChargingStationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargingStations to delete
     */
    where?: ChargingStationWhereInput
    /**
     * Limit how many ChargingStations to delete.
     */
    limit?: number
  }

  /**
   * ChargingStation.chargers
   */
  export type ChargingStation$chargersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    where?: ChargerWhereInput
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    cursor?: ChargerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * ChargingStation.tickets
   */
  export type ChargingStation$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ChargingStation without action
   */
  export type ChargingStationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
  }


  /**
   * Model Charger
   */

  export type AggregateCharger = {
    _count: ChargerCountAggregateOutputType | null
    _avg: ChargerAvgAggregateOutputType | null
    _sum: ChargerSumAggregateOutputType | null
    _min: ChargerMinAggregateOutputType | null
    _max: ChargerMaxAggregateOutputType | null
  }

  export type ChargerAvgAggregateOutputType = {
    powerKW: number | null
  }

  export type ChargerSumAggregateOutputType = {
    powerKW: number | null
  }

  export type ChargerMinAggregateOutputType = {
    id: string | null
    stationId: string | null
    powerKW: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ChargerMaxAggregateOutputType = {
    id: string | null
    stationId: string | null
    powerKW: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ChargerCountAggregateOutputType = {
    id: number
    stationId: number
    powerKW: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ChargerAvgAggregateInputType = {
    powerKW?: true
  }

  export type ChargerSumAggregateInputType = {
    powerKW?: true
  }

  export type ChargerMinAggregateInputType = {
    id?: true
    stationId?: true
    powerKW?: true
    isActive?: true
    createdAt?: true
  }

  export type ChargerMaxAggregateInputType = {
    id?: true
    stationId?: true
    powerKW?: true
    isActive?: true
    createdAt?: true
  }

  export type ChargerCountAggregateInputType = {
    id?: true
    stationId?: true
    powerKW?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ChargerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charger to aggregate.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chargers
    **/
    _count?: true | ChargerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargerMaxAggregateInputType
  }

  export type GetChargerAggregateType<T extends ChargerAggregateArgs> = {
        [P in keyof T & keyof AggregateCharger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharger[P]>
      : GetScalarType<T[P], AggregateCharger[P]>
  }




  export type ChargerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargerWhereInput
    orderBy?: ChargerOrderByWithAggregationInput | ChargerOrderByWithAggregationInput[]
    by: ChargerScalarFieldEnum[] | ChargerScalarFieldEnum
    having?: ChargerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargerCountAggregateInputType | true
    _avg?: ChargerAvgAggregateInputType
    _sum?: ChargerSumAggregateInputType
    _min?: ChargerMinAggregateInputType
    _max?: ChargerMaxAggregateInputType
  }

  export type ChargerGroupByOutputType = {
    id: string
    stationId: string
    powerKW: number
    isActive: boolean
    createdAt: Date
    _count: ChargerCountAggregateOutputType | null
    _avg: ChargerAvgAggregateOutputType | null
    _sum: ChargerSumAggregateOutputType | null
    _min: ChargerMinAggregateOutputType | null
    _max: ChargerMaxAggregateOutputType | null
  }

  type GetChargerGroupByPayload<T extends ChargerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargerGroupByOutputType[P]>
            : GetScalarType<T[P], ChargerGroupByOutputType[P]>
        }
      >
    >


  export type ChargerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    powerKW?: boolean
    isActive?: boolean
    createdAt?: boolean
    station?: boolean | ChargingStationDefaultArgs<ExtArgs>
    guns?: boolean | Charger$gunsArgs<ExtArgs>
    _count?: boolean | ChargerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    powerKW?: boolean
    isActive?: boolean
    createdAt?: boolean
    station?: boolean | ChargingStationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    powerKW?: boolean
    isActive?: boolean
    createdAt?: boolean
    station?: boolean | ChargingStationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectScalar = {
    id?: boolean
    stationId?: boolean
    powerKW?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ChargerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stationId" | "powerKW" | "isActive" | "createdAt", ExtArgs["result"]["charger"]>
  export type ChargerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | ChargingStationDefaultArgs<ExtArgs>
    guns?: boolean | Charger$gunsArgs<ExtArgs>
    _count?: boolean | ChargerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChargerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | ChargingStationDefaultArgs<ExtArgs>
  }
  export type ChargerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | ChargingStationDefaultArgs<ExtArgs>
  }

  export type $ChargerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charger"
    objects: {
      station: Prisma.$ChargingStationPayload<ExtArgs>
      guns: Prisma.$ChargingGunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stationId: string
      powerKW: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["charger"]>
    composites: {}
  }

  type ChargerGetPayload<S extends boolean | null | undefined | ChargerDefaultArgs> = $Result.GetResult<Prisma.$ChargerPayload, S>

  type ChargerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargerCountAggregateInputType | true
    }

  export interface ChargerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charger'], meta: { name: 'Charger' } }
    /**
     * Find zero or one Charger that matches the filter.
     * @param {ChargerFindUniqueArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargerFindUniqueArgs>(args: SelectSubset<T, ChargerFindUniqueArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargerFindUniqueOrThrowArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargerFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindFirstArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargerFindFirstArgs>(args?: SelectSubset<T, ChargerFindFirstArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindFirstOrThrowArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargerFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chargers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chargers
     * const chargers = await prisma.charger.findMany()
     * 
     * // Get first 10 Chargers
     * const chargers = await prisma.charger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargerWithIdOnly = await prisma.charger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargerFindManyArgs>(args?: SelectSubset<T, ChargerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charger.
     * @param {ChargerCreateArgs} args - Arguments to create a Charger.
     * @example
     * // Create one Charger
     * const Charger = await prisma.charger.create({
     *   data: {
     *     // ... data to create a Charger
     *   }
     * })
     * 
     */
    create<T extends ChargerCreateArgs>(args: SelectSubset<T, ChargerCreateArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chargers.
     * @param {ChargerCreateManyArgs} args - Arguments to create many Chargers.
     * @example
     * // Create many Chargers
     * const charger = await prisma.charger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargerCreateManyArgs>(args?: SelectSubset<T, ChargerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chargers and returns the data saved in the database.
     * @param {ChargerCreateManyAndReturnArgs} args - Arguments to create many Chargers.
     * @example
     * // Create many Chargers
     * const charger = await prisma.charger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chargers and only return the `id`
     * const chargerWithIdOnly = await prisma.charger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargerCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Charger.
     * @param {ChargerDeleteArgs} args - Arguments to delete one Charger.
     * @example
     * // Delete one Charger
     * const Charger = await prisma.charger.delete({
     *   where: {
     *     // ... filter to delete one Charger
     *   }
     * })
     * 
     */
    delete<T extends ChargerDeleteArgs>(args: SelectSubset<T, ChargerDeleteArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charger.
     * @param {ChargerUpdateArgs} args - Arguments to update one Charger.
     * @example
     * // Update one Charger
     * const charger = await prisma.charger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargerUpdateArgs>(args: SelectSubset<T, ChargerUpdateArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chargers.
     * @param {ChargerDeleteManyArgs} args - Arguments to filter Chargers to delete.
     * @example
     * // Delete a few Chargers
     * const { count } = await prisma.charger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargerDeleteManyArgs>(args?: SelectSubset<T, ChargerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chargers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chargers
     * const charger = await prisma.charger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargerUpdateManyArgs>(args: SelectSubset<T, ChargerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chargers and returns the data updated in the database.
     * @param {ChargerUpdateManyAndReturnArgs} args - Arguments to update many Chargers.
     * @example
     * // Update many Chargers
     * const charger = await prisma.charger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chargers and only return the `id`
     * const chargerWithIdOnly = await prisma.charger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargerUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Charger.
     * @param {ChargerUpsertArgs} args - Arguments to update or create a Charger.
     * @example
     * // Update or create a Charger
     * const charger = await prisma.charger.upsert({
     *   create: {
     *     // ... data to create a Charger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charger we want to update
     *   }
     * })
     */
    upsert<T extends ChargerUpsertArgs>(args: SelectSubset<T, ChargerUpsertArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chargers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerCountArgs} args - Arguments to filter Chargers to count.
     * @example
     * // Count the number of Chargers
     * const count = await prisma.charger.count({
     *   where: {
     *     // ... the filter for the Chargers we want to count
     *   }
     * })
    **/
    count<T extends ChargerCountArgs>(
      args?: Subset<T, ChargerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargerAggregateArgs>(args: Subset<T, ChargerAggregateArgs>): Prisma.PrismaPromise<GetChargerAggregateType<T>>

    /**
     * Group by Charger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargerGroupByArgs['orderBy'] }
        : { orderBy?: ChargerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charger model
   */
  readonly fields: ChargerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends ChargingStationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChargingStationDefaultArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guns<T extends Charger$gunsArgs<ExtArgs> = {}>(args?: Subset<T, Charger$gunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Charger model
   */
  interface ChargerFieldRefs {
    readonly id: FieldRef<"Charger", 'String'>
    readonly stationId: FieldRef<"Charger", 'String'>
    readonly powerKW: FieldRef<"Charger", 'Float'>
    readonly isActive: FieldRef<"Charger", 'Boolean'>
    readonly createdAt: FieldRef<"Charger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Charger findUnique
   */
  export type ChargerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger findUniqueOrThrow
   */
  export type ChargerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger findFirst
   */
  export type ChargerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargers.
     */
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger findFirstOrThrow
   */
  export type ChargerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargers.
     */
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger findMany
   */
  export type ChargerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Chargers to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger create
   */
  export type ChargerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The data needed to create a Charger.
     */
    data: XOR<ChargerCreateInput, ChargerUncheckedCreateInput>
  }

  /**
   * Charger createMany
   */
  export type ChargerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chargers.
     */
    data: ChargerCreateManyInput | ChargerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charger createManyAndReturn
   */
  export type ChargerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * The data used to create many Chargers.
     */
    data: ChargerCreateManyInput | ChargerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Charger update
   */
  export type ChargerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The data needed to update a Charger.
     */
    data: XOR<ChargerUpdateInput, ChargerUncheckedUpdateInput>
    /**
     * Choose, which Charger to update.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger updateMany
   */
  export type ChargerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chargers.
     */
    data: XOR<ChargerUpdateManyMutationInput, ChargerUncheckedUpdateManyInput>
    /**
     * Filter which Chargers to update
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to update.
     */
    limit?: number
  }

  /**
   * Charger updateManyAndReturn
   */
  export type ChargerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * The data used to update Chargers.
     */
    data: XOR<ChargerUpdateManyMutationInput, ChargerUncheckedUpdateManyInput>
    /**
     * Filter which Chargers to update
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Charger upsert
   */
  export type ChargerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The filter to search for the Charger to update in case it exists.
     */
    where: ChargerWhereUniqueInput
    /**
     * In case the Charger found by the `where` argument doesn't exist, create a new Charger with this data.
     */
    create: XOR<ChargerCreateInput, ChargerUncheckedCreateInput>
    /**
     * In case the Charger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargerUpdateInput, ChargerUncheckedUpdateInput>
  }

  /**
   * Charger delete
   */
  export type ChargerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter which Charger to delete.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger deleteMany
   */
  export type ChargerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chargers to delete
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to delete.
     */
    limit?: number
  }

  /**
   * Charger.guns
   */
  export type Charger$gunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    where?: ChargingGunWhereInput
    orderBy?: ChargingGunOrderByWithRelationInput | ChargingGunOrderByWithRelationInput[]
    cursor?: ChargingGunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargingGunScalarFieldEnum | ChargingGunScalarFieldEnum[]
  }

  /**
   * Charger without action
   */
  export type ChargerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
  }


  /**
   * Model ChargingGun
   */

  export type AggregateChargingGun = {
    _count: ChargingGunCountAggregateOutputType | null
    _avg: ChargingGunAvgAggregateOutputType | null
    _sum: ChargingGunSumAggregateOutputType | null
    _min: ChargingGunMinAggregateOutputType | null
    _max: ChargingGunMaxAggregateOutputType | null
  }

  export type ChargingGunAvgAggregateOutputType = {
    pricePerKwh: Decimal | null
  }

  export type ChargingGunSumAggregateOutputType = {
    pricePerKwh: Decimal | null
  }

  export type ChargingGunMinAggregateOutputType = {
    id: string | null
    chargerId: string | null
    connectorType: $Enums.ConnectorType | null
    status: $Enums.ChargingGunStatus | null
    pricePerKwh: Decimal | null
    lastStatusUpdate: Date | null
  }

  export type ChargingGunMaxAggregateOutputType = {
    id: string | null
    chargerId: string | null
    connectorType: $Enums.ConnectorType | null
    status: $Enums.ChargingGunStatus | null
    pricePerKwh: Decimal | null
    lastStatusUpdate: Date | null
  }

  export type ChargingGunCountAggregateOutputType = {
    id: number
    chargerId: number
    connectorType: number
    status: number
    pricePerKwh: number
    lastStatusUpdate: number
    _all: number
  }


  export type ChargingGunAvgAggregateInputType = {
    pricePerKwh?: true
  }

  export type ChargingGunSumAggregateInputType = {
    pricePerKwh?: true
  }

  export type ChargingGunMinAggregateInputType = {
    id?: true
    chargerId?: true
    connectorType?: true
    status?: true
    pricePerKwh?: true
    lastStatusUpdate?: true
  }

  export type ChargingGunMaxAggregateInputType = {
    id?: true
    chargerId?: true
    connectorType?: true
    status?: true
    pricePerKwh?: true
    lastStatusUpdate?: true
  }

  export type ChargingGunCountAggregateInputType = {
    id?: true
    chargerId?: true
    connectorType?: true
    status?: true
    pricePerKwh?: true
    lastStatusUpdate?: true
    _all?: true
  }

  export type ChargingGunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargingGun to aggregate.
     */
    where?: ChargingGunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingGuns to fetch.
     */
    orderBy?: ChargingGunOrderByWithRelationInput | ChargingGunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargingGunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingGuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingGuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChargingGuns
    **/
    _count?: true | ChargingGunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargingGunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargingGunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargingGunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargingGunMaxAggregateInputType
  }

  export type GetChargingGunAggregateType<T extends ChargingGunAggregateArgs> = {
        [P in keyof T & keyof AggregateChargingGun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChargingGun[P]>
      : GetScalarType<T[P], AggregateChargingGun[P]>
  }




  export type ChargingGunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargingGunWhereInput
    orderBy?: ChargingGunOrderByWithAggregationInput | ChargingGunOrderByWithAggregationInput[]
    by: ChargingGunScalarFieldEnum[] | ChargingGunScalarFieldEnum
    having?: ChargingGunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargingGunCountAggregateInputType | true
    _avg?: ChargingGunAvgAggregateInputType
    _sum?: ChargingGunSumAggregateInputType
    _min?: ChargingGunMinAggregateInputType
    _max?: ChargingGunMaxAggregateInputType
  }

  export type ChargingGunGroupByOutputType = {
    id: string
    chargerId: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal
    lastStatusUpdate: Date
    _count: ChargingGunCountAggregateOutputType | null
    _avg: ChargingGunAvgAggregateOutputType | null
    _sum: ChargingGunSumAggregateOutputType | null
    _min: ChargingGunMinAggregateOutputType | null
    _max: ChargingGunMaxAggregateOutputType | null
  }

  type GetChargingGunGroupByPayload<T extends ChargingGunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargingGunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargingGunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargingGunGroupByOutputType[P]>
            : GetScalarType<T[P], ChargingGunGroupByOutputType[P]>
        }
      >
    >


  export type ChargingGunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorType?: boolean
    status?: boolean
    pricePerKwh?: boolean
    lastStatusUpdate?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
    sessions?: boolean | ChargingGun$sessionsArgs<ExtArgs>
    _count?: boolean | ChargingGunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingGun"]>

  export type ChargingGunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorType?: boolean
    status?: boolean
    pricePerKwh?: boolean
    lastStatusUpdate?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingGun"]>

  export type ChargingGunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorType?: boolean
    status?: boolean
    pricePerKwh?: boolean
    lastStatusUpdate?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingGun"]>

  export type ChargingGunSelectScalar = {
    id?: boolean
    chargerId?: boolean
    connectorType?: boolean
    status?: boolean
    pricePerKwh?: boolean
    lastStatusUpdate?: boolean
  }

  export type ChargingGunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chargerId" | "connectorType" | "status" | "pricePerKwh" | "lastStatusUpdate", ExtArgs["result"]["chargingGun"]>
  export type ChargingGunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
    sessions?: boolean | ChargingGun$sessionsArgs<ExtArgs>
    _count?: boolean | ChargingGunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChargingGunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }
  export type ChargingGunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }

  export type $ChargingGunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChargingGun"
    objects: {
      charger: Prisma.$ChargerPayload<ExtArgs>
      sessions: Prisma.$ChargingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chargerId: string
      connectorType: $Enums.ConnectorType
      status: $Enums.ChargingGunStatus
      pricePerKwh: Prisma.Decimal
      lastStatusUpdate: Date
    }, ExtArgs["result"]["chargingGun"]>
    composites: {}
  }

  type ChargingGunGetPayload<S extends boolean | null | undefined | ChargingGunDefaultArgs> = $Result.GetResult<Prisma.$ChargingGunPayload, S>

  type ChargingGunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargingGunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargingGunCountAggregateInputType | true
    }

  export interface ChargingGunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChargingGun'], meta: { name: 'ChargingGun' } }
    /**
     * Find zero or one ChargingGun that matches the filter.
     * @param {ChargingGunFindUniqueArgs} args - Arguments to find a ChargingGun
     * @example
     * // Get one ChargingGun
     * const chargingGun = await prisma.chargingGun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargingGunFindUniqueArgs>(args: SelectSubset<T, ChargingGunFindUniqueArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChargingGun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargingGunFindUniqueOrThrowArgs} args - Arguments to find a ChargingGun
     * @example
     * // Get one ChargingGun
     * const chargingGun = await prisma.chargingGun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargingGunFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargingGunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargingGun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingGunFindFirstArgs} args - Arguments to find a ChargingGun
     * @example
     * // Get one ChargingGun
     * const chargingGun = await prisma.chargingGun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargingGunFindFirstArgs>(args?: SelectSubset<T, ChargingGunFindFirstArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargingGun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingGunFindFirstOrThrowArgs} args - Arguments to find a ChargingGun
     * @example
     * // Get one ChargingGun
     * const chargingGun = await prisma.chargingGun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargingGunFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargingGunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChargingGuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingGunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChargingGuns
     * const chargingGuns = await prisma.chargingGun.findMany()
     * 
     * // Get first 10 ChargingGuns
     * const chargingGuns = await prisma.chargingGun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargingGunWithIdOnly = await prisma.chargingGun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargingGunFindManyArgs>(args?: SelectSubset<T, ChargingGunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChargingGun.
     * @param {ChargingGunCreateArgs} args - Arguments to create a ChargingGun.
     * @example
     * // Create one ChargingGun
     * const ChargingGun = await prisma.chargingGun.create({
     *   data: {
     *     // ... data to create a ChargingGun
     *   }
     * })
     * 
     */
    create<T extends ChargingGunCreateArgs>(args: SelectSubset<T, ChargingGunCreateArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChargingGuns.
     * @param {ChargingGunCreateManyArgs} args - Arguments to create many ChargingGuns.
     * @example
     * // Create many ChargingGuns
     * const chargingGun = await prisma.chargingGun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargingGunCreateManyArgs>(args?: SelectSubset<T, ChargingGunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChargingGuns and returns the data saved in the database.
     * @param {ChargingGunCreateManyAndReturnArgs} args - Arguments to create many ChargingGuns.
     * @example
     * // Create many ChargingGuns
     * const chargingGun = await prisma.chargingGun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChargingGuns and only return the `id`
     * const chargingGunWithIdOnly = await prisma.chargingGun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargingGunCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargingGunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChargingGun.
     * @param {ChargingGunDeleteArgs} args - Arguments to delete one ChargingGun.
     * @example
     * // Delete one ChargingGun
     * const ChargingGun = await prisma.chargingGun.delete({
     *   where: {
     *     // ... filter to delete one ChargingGun
     *   }
     * })
     * 
     */
    delete<T extends ChargingGunDeleteArgs>(args: SelectSubset<T, ChargingGunDeleteArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChargingGun.
     * @param {ChargingGunUpdateArgs} args - Arguments to update one ChargingGun.
     * @example
     * // Update one ChargingGun
     * const chargingGun = await prisma.chargingGun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargingGunUpdateArgs>(args: SelectSubset<T, ChargingGunUpdateArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChargingGuns.
     * @param {ChargingGunDeleteManyArgs} args - Arguments to filter ChargingGuns to delete.
     * @example
     * // Delete a few ChargingGuns
     * const { count } = await prisma.chargingGun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargingGunDeleteManyArgs>(args?: SelectSubset<T, ChargingGunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargingGuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingGunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChargingGuns
     * const chargingGun = await prisma.chargingGun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargingGunUpdateManyArgs>(args: SelectSubset<T, ChargingGunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargingGuns and returns the data updated in the database.
     * @param {ChargingGunUpdateManyAndReturnArgs} args - Arguments to update many ChargingGuns.
     * @example
     * // Update many ChargingGuns
     * const chargingGun = await prisma.chargingGun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChargingGuns and only return the `id`
     * const chargingGunWithIdOnly = await prisma.chargingGun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargingGunUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargingGunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChargingGun.
     * @param {ChargingGunUpsertArgs} args - Arguments to update or create a ChargingGun.
     * @example
     * // Update or create a ChargingGun
     * const chargingGun = await prisma.chargingGun.upsert({
     *   create: {
     *     // ... data to create a ChargingGun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChargingGun we want to update
     *   }
     * })
     */
    upsert<T extends ChargingGunUpsertArgs>(args: SelectSubset<T, ChargingGunUpsertArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChargingGuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingGunCountArgs} args - Arguments to filter ChargingGuns to count.
     * @example
     * // Count the number of ChargingGuns
     * const count = await prisma.chargingGun.count({
     *   where: {
     *     // ... the filter for the ChargingGuns we want to count
     *   }
     * })
    **/
    count<T extends ChargingGunCountArgs>(
      args?: Subset<T, ChargingGunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargingGunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChargingGun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingGunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargingGunAggregateArgs>(args: Subset<T, ChargingGunAggregateArgs>): Prisma.PrismaPromise<GetChargingGunAggregateType<T>>

    /**
     * Group by ChargingGun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingGunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargingGunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargingGunGroupByArgs['orderBy'] }
        : { orderBy?: ChargingGunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargingGunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargingGunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChargingGun model
   */
  readonly fields: ChargingGunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChargingGun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargingGunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    charger<T extends ChargerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChargerDefaultArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends ChargingGun$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, ChargingGun$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChargingGun model
   */
  interface ChargingGunFieldRefs {
    readonly id: FieldRef<"ChargingGun", 'String'>
    readonly chargerId: FieldRef<"ChargingGun", 'String'>
    readonly connectorType: FieldRef<"ChargingGun", 'ConnectorType'>
    readonly status: FieldRef<"ChargingGun", 'ChargingGunStatus'>
    readonly pricePerKwh: FieldRef<"ChargingGun", 'Decimal'>
    readonly lastStatusUpdate: FieldRef<"ChargingGun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChargingGun findUnique
   */
  export type ChargingGunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * Filter, which ChargingGun to fetch.
     */
    where: ChargingGunWhereUniqueInput
  }

  /**
   * ChargingGun findUniqueOrThrow
   */
  export type ChargingGunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * Filter, which ChargingGun to fetch.
     */
    where: ChargingGunWhereUniqueInput
  }

  /**
   * ChargingGun findFirst
   */
  export type ChargingGunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * Filter, which ChargingGun to fetch.
     */
    where?: ChargingGunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingGuns to fetch.
     */
    orderBy?: ChargingGunOrderByWithRelationInput | ChargingGunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargingGuns.
     */
    cursor?: ChargingGunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingGuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingGuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargingGuns.
     */
    distinct?: ChargingGunScalarFieldEnum | ChargingGunScalarFieldEnum[]
  }

  /**
   * ChargingGun findFirstOrThrow
   */
  export type ChargingGunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * Filter, which ChargingGun to fetch.
     */
    where?: ChargingGunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingGuns to fetch.
     */
    orderBy?: ChargingGunOrderByWithRelationInput | ChargingGunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargingGuns.
     */
    cursor?: ChargingGunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingGuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingGuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargingGuns.
     */
    distinct?: ChargingGunScalarFieldEnum | ChargingGunScalarFieldEnum[]
  }

  /**
   * ChargingGun findMany
   */
  export type ChargingGunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * Filter, which ChargingGuns to fetch.
     */
    where?: ChargingGunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingGuns to fetch.
     */
    orderBy?: ChargingGunOrderByWithRelationInput | ChargingGunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChargingGuns.
     */
    cursor?: ChargingGunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingGuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingGuns.
     */
    skip?: number
    distinct?: ChargingGunScalarFieldEnum | ChargingGunScalarFieldEnum[]
  }

  /**
   * ChargingGun create
   */
  export type ChargingGunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * The data needed to create a ChargingGun.
     */
    data: XOR<ChargingGunCreateInput, ChargingGunUncheckedCreateInput>
  }

  /**
   * ChargingGun createMany
   */
  export type ChargingGunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChargingGuns.
     */
    data: ChargingGunCreateManyInput | ChargingGunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChargingGun createManyAndReturn
   */
  export type ChargingGunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * The data used to create many ChargingGuns.
     */
    data: ChargingGunCreateManyInput | ChargingGunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargingGun update
   */
  export type ChargingGunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * The data needed to update a ChargingGun.
     */
    data: XOR<ChargingGunUpdateInput, ChargingGunUncheckedUpdateInput>
    /**
     * Choose, which ChargingGun to update.
     */
    where: ChargingGunWhereUniqueInput
  }

  /**
   * ChargingGun updateMany
   */
  export type ChargingGunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChargingGuns.
     */
    data: XOR<ChargingGunUpdateManyMutationInput, ChargingGunUncheckedUpdateManyInput>
    /**
     * Filter which ChargingGuns to update
     */
    where?: ChargingGunWhereInput
    /**
     * Limit how many ChargingGuns to update.
     */
    limit?: number
  }

  /**
   * ChargingGun updateManyAndReturn
   */
  export type ChargingGunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * The data used to update ChargingGuns.
     */
    data: XOR<ChargingGunUpdateManyMutationInput, ChargingGunUncheckedUpdateManyInput>
    /**
     * Filter which ChargingGuns to update
     */
    where?: ChargingGunWhereInput
    /**
     * Limit how many ChargingGuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargingGun upsert
   */
  export type ChargingGunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * The filter to search for the ChargingGun to update in case it exists.
     */
    where: ChargingGunWhereUniqueInput
    /**
     * In case the ChargingGun found by the `where` argument doesn't exist, create a new ChargingGun with this data.
     */
    create: XOR<ChargingGunCreateInput, ChargingGunUncheckedCreateInput>
    /**
     * In case the ChargingGun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargingGunUpdateInput, ChargingGunUncheckedUpdateInput>
  }

  /**
   * ChargingGun delete
   */
  export type ChargingGunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
    /**
     * Filter which ChargingGun to delete.
     */
    where: ChargingGunWhereUniqueInput
  }

  /**
   * ChargingGun deleteMany
   */
  export type ChargingGunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargingGuns to delete
     */
    where?: ChargingGunWhereInput
    /**
     * Limit how many ChargingGuns to delete.
     */
    limit?: number
  }

  /**
   * ChargingGun.sessions
   */
  export type ChargingGun$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    where?: ChargingSessionWhereInput
    orderBy?: ChargingSessionOrderByWithRelationInput | ChargingSessionOrderByWithRelationInput[]
    cursor?: ChargingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargingSessionScalarFieldEnum | ChargingSessionScalarFieldEnum[]
  }

  /**
   * ChargingGun without action
   */
  export type ChargingGunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingGun
     */
    select?: ChargingGunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingGun
     */
    omit?: ChargingGunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingGunInclude<ExtArgs> | null
  }


  /**
   * Model ChargingSession
   */

  export type AggregateChargingSession = {
    _count: ChargingSessionCountAggregateOutputType | null
    _avg: ChargingSessionAvgAggregateOutputType | null
    _sum: ChargingSessionSumAggregateOutputType | null
    _min: ChargingSessionMinAggregateOutputType | null
    _max: ChargingSessionMaxAggregateOutputType | null
  }

  export type ChargingSessionAvgAggregateOutputType = {
    energyUsed: number | null
    totalCost: Decimal | null
  }

  export type ChargingSessionSumAggregateOutputType = {
    energyUsed: number | null
    totalCost: Decimal | null
  }

  export type ChargingSessionMinAggregateOutputType = {
    id: string | null
    userVehicleId: string | null
    gunId: string | null
    startTime: Date | null
    endTime: Date | null
    energyUsed: number | null
    totalCost: Decimal | null
    status: $Enums.ChargingSessionStatus | null
    createdAt: Date | null
  }

  export type ChargingSessionMaxAggregateOutputType = {
    id: string | null
    userVehicleId: string | null
    gunId: string | null
    startTime: Date | null
    endTime: Date | null
    energyUsed: number | null
    totalCost: Decimal | null
    status: $Enums.ChargingSessionStatus | null
    createdAt: Date | null
  }

  export type ChargingSessionCountAggregateOutputType = {
    id: number
    userVehicleId: number
    gunId: number
    startTime: number
    endTime: number
    energyUsed: number
    totalCost: number
    status: number
    createdAt: number
    _all: number
  }


  export type ChargingSessionAvgAggregateInputType = {
    energyUsed?: true
    totalCost?: true
  }

  export type ChargingSessionSumAggregateInputType = {
    energyUsed?: true
    totalCost?: true
  }

  export type ChargingSessionMinAggregateInputType = {
    id?: true
    userVehicleId?: true
    gunId?: true
    startTime?: true
    endTime?: true
    energyUsed?: true
    totalCost?: true
    status?: true
    createdAt?: true
  }

  export type ChargingSessionMaxAggregateInputType = {
    id?: true
    userVehicleId?: true
    gunId?: true
    startTime?: true
    endTime?: true
    energyUsed?: true
    totalCost?: true
    status?: true
    createdAt?: true
  }

  export type ChargingSessionCountAggregateInputType = {
    id?: true
    userVehicleId?: true
    gunId?: true
    startTime?: true
    endTime?: true
    energyUsed?: true
    totalCost?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ChargingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargingSession to aggregate.
     */
    where?: ChargingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingSessions to fetch.
     */
    orderBy?: ChargingSessionOrderByWithRelationInput | ChargingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChargingSessions
    **/
    _count?: true | ChargingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargingSessionMaxAggregateInputType
  }

  export type GetChargingSessionAggregateType<T extends ChargingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChargingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChargingSession[P]>
      : GetScalarType<T[P], AggregateChargingSession[P]>
  }




  export type ChargingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargingSessionWhereInput
    orderBy?: ChargingSessionOrderByWithAggregationInput | ChargingSessionOrderByWithAggregationInput[]
    by: ChargingSessionScalarFieldEnum[] | ChargingSessionScalarFieldEnum
    having?: ChargingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargingSessionCountAggregateInputType | true
    _avg?: ChargingSessionAvgAggregateInputType
    _sum?: ChargingSessionSumAggregateInputType
    _min?: ChargingSessionMinAggregateInputType
    _max?: ChargingSessionMaxAggregateInputType
  }

  export type ChargingSessionGroupByOutputType = {
    id: string
    userVehicleId: string
    gunId: string
    startTime: Date
    endTime: Date | null
    energyUsed: number | null
    totalCost: Decimal | null
    status: $Enums.ChargingSessionStatus
    createdAt: Date
    _count: ChargingSessionCountAggregateOutputType | null
    _avg: ChargingSessionAvgAggregateOutputType | null
    _sum: ChargingSessionSumAggregateOutputType | null
    _min: ChargingSessionMinAggregateOutputType | null
    _max: ChargingSessionMaxAggregateOutputType | null
  }

  type GetChargingSessionGroupByPayload<T extends ChargingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChargingSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChargingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userVehicleId?: boolean
    gunId?: boolean
    startTime?: boolean
    endTime?: boolean
    energyUsed?: boolean
    totalCost?: boolean
    status?: boolean
    createdAt?: boolean
    vehicle?: boolean | UserVehicleDefaultArgs<ExtArgs>
    gun?: boolean | ChargingGunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingSession"]>

  export type ChargingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userVehicleId?: boolean
    gunId?: boolean
    startTime?: boolean
    endTime?: boolean
    energyUsed?: boolean
    totalCost?: boolean
    status?: boolean
    createdAt?: boolean
    vehicle?: boolean | UserVehicleDefaultArgs<ExtArgs>
    gun?: boolean | ChargingGunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingSession"]>

  export type ChargingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userVehicleId?: boolean
    gunId?: boolean
    startTime?: boolean
    endTime?: boolean
    energyUsed?: boolean
    totalCost?: boolean
    status?: boolean
    createdAt?: boolean
    vehicle?: boolean | UserVehicleDefaultArgs<ExtArgs>
    gun?: boolean | ChargingGunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargingSession"]>

  export type ChargingSessionSelectScalar = {
    id?: boolean
    userVehicleId?: boolean
    gunId?: boolean
    startTime?: boolean
    endTime?: boolean
    energyUsed?: boolean
    totalCost?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ChargingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userVehicleId" | "gunId" | "startTime" | "endTime" | "energyUsed" | "totalCost" | "status" | "createdAt", ExtArgs["result"]["chargingSession"]>
  export type ChargingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | UserVehicleDefaultArgs<ExtArgs>
    gun?: boolean | ChargingGunDefaultArgs<ExtArgs>
  }
  export type ChargingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | UserVehicleDefaultArgs<ExtArgs>
    gun?: boolean | ChargingGunDefaultArgs<ExtArgs>
  }
  export type ChargingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | UserVehicleDefaultArgs<ExtArgs>
    gun?: boolean | ChargingGunDefaultArgs<ExtArgs>
  }

  export type $ChargingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChargingSession"
    objects: {
      vehicle: Prisma.$UserVehiclePayload<ExtArgs>
      gun: Prisma.$ChargingGunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userVehicleId: string
      gunId: string
      startTime: Date
      endTime: Date | null
      energyUsed: number | null
      totalCost: Prisma.Decimal | null
      status: $Enums.ChargingSessionStatus
      createdAt: Date
    }, ExtArgs["result"]["chargingSession"]>
    composites: {}
  }

  type ChargingSessionGetPayload<S extends boolean | null | undefined | ChargingSessionDefaultArgs> = $Result.GetResult<Prisma.$ChargingSessionPayload, S>

  type ChargingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargingSessionCountAggregateInputType | true
    }

  export interface ChargingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChargingSession'], meta: { name: 'ChargingSession' } }
    /**
     * Find zero or one ChargingSession that matches the filter.
     * @param {ChargingSessionFindUniqueArgs} args - Arguments to find a ChargingSession
     * @example
     * // Get one ChargingSession
     * const chargingSession = await prisma.chargingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargingSessionFindUniqueArgs>(args: SelectSubset<T, ChargingSessionFindUniqueArgs<ExtArgs>>): Prisma__ChargingSessionClient<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChargingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargingSessionFindUniqueOrThrowArgs} args - Arguments to find a ChargingSession
     * @example
     * // Get one ChargingSession
     * const chargingSession = await prisma.chargingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargingSessionClient<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingSessionFindFirstArgs} args - Arguments to find a ChargingSession
     * @example
     * // Get one ChargingSession
     * const chargingSession = await prisma.chargingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargingSessionFindFirstArgs>(args?: SelectSubset<T, ChargingSessionFindFirstArgs<ExtArgs>>): Prisma__ChargingSessionClient<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingSessionFindFirstOrThrowArgs} args - Arguments to find a ChargingSession
     * @example
     * // Get one ChargingSession
     * const chargingSession = await prisma.chargingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargingSessionClient<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChargingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChargingSessions
     * const chargingSessions = await prisma.chargingSession.findMany()
     * 
     * // Get first 10 ChargingSessions
     * const chargingSessions = await prisma.chargingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargingSessionWithIdOnly = await prisma.chargingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargingSessionFindManyArgs>(args?: SelectSubset<T, ChargingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChargingSession.
     * @param {ChargingSessionCreateArgs} args - Arguments to create a ChargingSession.
     * @example
     * // Create one ChargingSession
     * const ChargingSession = await prisma.chargingSession.create({
     *   data: {
     *     // ... data to create a ChargingSession
     *   }
     * })
     * 
     */
    create<T extends ChargingSessionCreateArgs>(args: SelectSubset<T, ChargingSessionCreateArgs<ExtArgs>>): Prisma__ChargingSessionClient<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChargingSessions.
     * @param {ChargingSessionCreateManyArgs} args - Arguments to create many ChargingSessions.
     * @example
     * // Create many ChargingSessions
     * const chargingSession = await prisma.chargingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargingSessionCreateManyArgs>(args?: SelectSubset<T, ChargingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChargingSessions and returns the data saved in the database.
     * @param {ChargingSessionCreateManyAndReturnArgs} args - Arguments to create many ChargingSessions.
     * @example
     * // Create many ChargingSessions
     * const chargingSession = await prisma.chargingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChargingSessions and only return the `id`
     * const chargingSessionWithIdOnly = await prisma.chargingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChargingSession.
     * @param {ChargingSessionDeleteArgs} args - Arguments to delete one ChargingSession.
     * @example
     * // Delete one ChargingSession
     * const ChargingSession = await prisma.chargingSession.delete({
     *   where: {
     *     // ... filter to delete one ChargingSession
     *   }
     * })
     * 
     */
    delete<T extends ChargingSessionDeleteArgs>(args: SelectSubset<T, ChargingSessionDeleteArgs<ExtArgs>>): Prisma__ChargingSessionClient<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChargingSession.
     * @param {ChargingSessionUpdateArgs} args - Arguments to update one ChargingSession.
     * @example
     * // Update one ChargingSession
     * const chargingSession = await prisma.chargingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargingSessionUpdateArgs>(args: SelectSubset<T, ChargingSessionUpdateArgs<ExtArgs>>): Prisma__ChargingSessionClient<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChargingSessions.
     * @param {ChargingSessionDeleteManyArgs} args - Arguments to filter ChargingSessions to delete.
     * @example
     * // Delete a few ChargingSessions
     * const { count } = await prisma.chargingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargingSessionDeleteManyArgs>(args?: SelectSubset<T, ChargingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChargingSessions
     * const chargingSession = await prisma.chargingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargingSessionUpdateManyArgs>(args: SelectSubset<T, ChargingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargingSessions and returns the data updated in the database.
     * @param {ChargingSessionUpdateManyAndReturnArgs} args - Arguments to update many ChargingSessions.
     * @example
     * // Update many ChargingSessions
     * const chargingSession = await prisma.chargingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChargingSessions and only return the `id`
     * const chargingSessionWithIdOnly = await prisma.chargingSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChargingSession.
     * @param {ChargingSessionUpsertArgs} args - Arguments to update or create a ChargingSession.
     * @example
     * // Update or create a ChargingSession
     * const chargingSession = await prisma.chargingSession.upsert({
     *   create: {
     *     // ... data to create a ChargingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChargingSession we want to update
     *   }
     * })
     */
    upsert<T extends ChargingSessionUpsertArgs>(args: SelectSubset<T, ChargingSessionUpsertArgs<ExtArgs>>): Prisma__ChargingSessionClient<$Result.GetResult<Prisma.$ChargingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChargingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingSessionCountArgs} args - Arguments to filter ChargingSessions to count.
     * @example
     * // Count the number of ChargingSessions
     * const count = await prisma.chargingSession.count({
     *   where: {
     *     // ... the filter for the ChargingSessions we want to count
     *   }
     * })
    **/
    count<T extends ChargingSessionCountArgs>(
      args?: Subset<T, ChargingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChargingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargingSessionAggregateArgs>(args: Subset<T, ChargingSessionAggregateArgs>): Prisma.PrismaPromise<GetChargingSessionAggregateType<T>>

    /**
     * Group by ChargingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargingSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargingSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChargingSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChargingSession model
   */
  readonly fields: ChargingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChargingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends UserVehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserVehicleDefaultArgs<ExtArgs>>): Prisma__UserVehicleClient<$Result.GetResult<Prisma.$UserVehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gun<T extends ChargingGunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChargingGunDefaultArgs<ExtArgs>>): Prisma__ChargingGunClient<$Result.GetResult<Prisma.$ChargingGunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChargingSession model
   */
  interface ChargingSessionFieldRefs {
    readonly id: FieldRef<"ChargingSession", 'String'>
    readonly userVehicleId: FieldRef<"ChargingSession", 'String'>
    readonly gunId: FieldRef<"ChargingSession", 'String'>
    readonly startTime: FieldRef<"ChargingSession", 'DateTime'>
    readonly endTime: FieldRef<"ChargingSession", 'DateTime'>
    readonly energyUsed: FieldRef<"ChargingSession", 'Float'>
    readonly totalCost: FieldRef<"ChargingSession", 'Decimal'>
    readonly status: FieldRef<"ChargingSession", 'ChargingSessionStatus'>
    readonly createdAt: FieldRef<"ChargingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChargingSession findUnique
   */
  export type ChargingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChargingSession to fetch.
     */
    where: ChargingSessionWhereUniqueInput
  }

  /**
   * ChargingSession findUniqueOrThrow
   */
  export type ChargingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChargingSession to fetch.
     */
    where: ChargingSessionWhereUniqueInput
  }

  /**
   * ChargingSession findFirst
   */
  export type ChargingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChargingSession to fetch.
     */
    where?: ChargingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingSessions to fetch.
     */
    orderBy?: ChargingSessionOrderByWithRelationInput | ChargingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargingSessions.
     */
    cursor?: ChargingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargingSessions.
     */
    distinct?: ChargingSessionScalarFieldEnum | ChargingSessionScalarFieldEnum[]
  }

  /**
   * ChargingSession findFirstOrThrow
   */
  export type ChargingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChargingSession to fetch.
     */
    where?: ChargingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingSessions to fetch.
     */
    orderBy?: ChargingSessionOrderByWithRelationInput | ChargingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargingSessions.
     */
    cursor?: ChargingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargingSessions.
     */
    distinct?: ChargingSessionScalarFieldEnum | ChargingSessionScalarFieldEnum[]
  }

  /**
   * ChargingSession findMany
   */
  export type ChargingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChargingSessions to fetch.
     */
    where?: ChargingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargingSessions to fetch.
     */
    orderBy?: ChargingSessionOrderByWithRelationInput | ChargingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChargingSessions.
     */
    cursor?: ChargingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargingSessions.
     */
    skip?: number
    distinct?: ChargingSessionScalarFieldEnum | ChargingSessionScalarFieldEnum[]
  }

  /**
   * ChargingSession create
   */
  export type ChargingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChargingSession.
     */
    data: XOR<ChargingSessionCreateInput, ChargingSessionUncheckedCreateInput>
  }

  /**
   * ChargingSession createMany
   */
  export type ChargingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChargingSessions.
     */
    data: ChargingSessionCreateManyInput | ChargingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChargingSession createManyAndReturn
   */
  export type ChargingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChargingSessions.
     */
    data: ChargingSessionCreateManyInput | ChargingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargingSession update
   */
  export type ChargingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChargingSession.
     */
    data: XOR<ChargingSessionUpdateInput, ChargingSessionUncheckedUpdateInput>
    /**
     * Choose, which ChargingSession to update.
     */
    where: ChargingSessionWhereUniqueInput
  }

  /**
   * ChargingSession updateMany
   */
  export type ChargingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChargingSessions.
     */
    data: XOR<ChargingSessionUpdateManyMutationInput, ChargingSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChargingSessions to update
     */
    where?: ChargingSessionWhereInput
    /**
     * Limit how many ChargingSessions to update.
     */
    limit?: number
  }

  /**
   * ChargingSession updateManyAndReturn
   */
  export type ChargingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChargingSessions.
     */
    data: XOR<ChargingSessionUpdateManyMutationInput, ChargingSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChargingSessions to update
     */
    where?: ChargingSessionWhereInput
    /**
     * Limit how many ChargingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChargingSession upsert
   */
  export type ChargingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChargingSession to update in case it exists.
     */
    where: ChargingSessionWhereUniqueInput
    /**
     * In case the ChargingSession found by the `where` argument doesn't exist, create a new ChargingSession with this data.
     */
    create: XOR<ChargingSessionCreateInput, ChargingSessionUncheckedCreateInput>
    /**
     * In case the ChargingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargingSessionUpdateInput, ChargingSessionUncheckedUpdateInput>
  }

  /**
   * ChargingSession delete
   */
  export type ChargingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
    /**
     * Filter which ChargingSession to delete.
     */
    where: ChargingSessionWhereUniqueInput
  }

  /**
   * ChargingSession deleteMany
   */
  export type ChargingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargingSessions to delete
     */
    where?: ChargingSessionWhereInput
    /**
     * Limit how many ChargingSessions to delete.
     */
    limit?: number
  }

  /**
   * ChargingSession without action
   */
  export type ChargingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingSession
     */
    select?: ChargingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingSession
     */
    omit?: ChargingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingSessionInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    reference: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    reference: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    type: number
    status: number
    reference: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    amount: Decimal
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    reference: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "type" | "status" | "reference" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: Prisma.Decimal
      type: $Enums.TransactionType
      status: $Enums.TransactionStatus
      reference: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly reference: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stationId: string | null
    subject: string | null
    description: string | null
    status: $Enums.TicketStatus | null
    priority: $Enums.TicketPriority | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stationId: string | null
    subject: string | null
    description: string | null
    status: $Enums.TicketStatus | null
    priority: $Enums.TicketPriority | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    userId: number
    stationId: number
    subject: number
    description: number
    status: number
    priority: number
    createdAt: number
    updatedAt: number
    resolvedAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    userId?: true
    stationId?: true
    subject?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    userId?: true
    stationId?: true
    subject?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    userId?: true
    stationId?: true
    subject?: true
    description?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    userId: string
    stationId: string | null
    subject: string
    description: string
    status: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    createdAt: Date
    updatedAt: Date
    resolvedAt: Date | null
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stationId?: boolean
    subject?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    station?: boolean | Ticket$stationArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stationId?: boolean
    subject?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    station?: boolean | Ticket$stationArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stationId?: boolean
    subject?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    station?: boolean | Ticket$stationArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    userId?: boolean
    stationId?: boolean
    subject?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stationId" | "subject" | "description" | "status" | "priority" | "createdAt" | "updatedAt" | "resolvedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    station?: boolean | Ticket$stationArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    station?: boolean | Ticket$stationArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    station?: boolean | Ticket$stationArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      station: Prisma.$ChargingStationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stationId: string | null
      subject: string
      description: string
      status: $Enums.TicketStatus
      priority: $Enums.TicketPriority
      createdAt: Date
      updatedAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    station<T extends Ticket$stationArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$stationArgs<ExtArgs>>): Prisma__ChargingStationClient<$Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly userId: FieldRef<"Ticket", 'String'>
    readonly stationId: FieldRef<"Ticket", 'String'>
    readonly subject: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly priority: FieldRef<"Ticket", 'TicketPriority'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly resolvedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.station
   */
  export type Ticket$stationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargingStation
     */
    select?: ChargingStationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargingStation
     */
    omit?: ChargingStationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargingStationInclude<ExtArgs> | null
    where?: ChargingStationWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    userId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    userId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    userId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly userId: FieldRef<"ChatSession", 'String'>
    readonly isActive: FieldRef<"ChatSession", 'Boolean'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    role: 'role',
    email: 'email',
    phone: 'phone',
    walletBalance: 'walletBalance',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleCatalogScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    year: 'year',
    batteryCapacity: 'batteryCapacity',
    vehicleType: 'vehicleType',
    isActive: 'isActive'
  };

  export type VehicleCatalogScalarFieldEnum = (typeof VehicleCatalogScalarFieldEnum)[keyof typeof VehicleCatalogScalarFieldEnum]


  export const UserVehicleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    catalogId: 'catalogId',
    vehicleNo: 'vehicleNo',
    nickname: 'nickname',
    createdAt: 'createdAt'
  };

  export type UserVehicleScalarFieldEnum = (typeof UserVehicleScalarFieldEnum)[keyof typeof UserVehicleScalarFieldEnum]


  export const ChargingStationScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ChargingStationScalarFieldEnum = (typeof ChargingStationScalarFieldEnum)[keyof typeof ChargingStationScalarFieldEnum]


  export const ChargerScalarFieldEnum: {
    id: 'id',
    stationId: 'stationId',
    powerKW: 'powerKW',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ChargerScalarFieldEnum = (typeof ChargerScalarFieldEnum)[keyof typeof ChargerScalarFieldEnum]


  export const ChargingGunScalarFieldEnum: {
    id: 'id',
    chargerId: 'chargerId',
    connectorType: 'connectorType',
    status: 'status',
    pricePerKwh: 'pricePerKwh',
    lastStatusUpdate: 'lastStatusUpdate'
  };

  export type ChargingGunScalarFieldEnum = (typeof ChargingGunScalarFieldEnum)[keyof typeof ChargingGunScalarFieldEnum]


  export const ChargingSessionScalarFieldEnum: {
    id: 'id',
    userVehicleId: 'userVehicleId',
    gunId: 'gunId',
    startTime: 'startTime',
    endTime: 'endTime',
    energyUsed: 'energyUsed',
    totalCost: 'totalCost',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ChargingSessionScalarFieldEnum = (typeof ChargingSessionScalarFieldEnum)[keyof typeof ChargingSessionScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    type: 'type',
    status: 'status',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stationId: 'stationId',
    subject: 'subject',
    description: 'description',
    status: 'status',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resolvedAt: 'resolvedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'ConnectorType'
   */
  export type EnumConnectorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectorType'>
    


  /**
   * Reference to a field of type 'ConnectorType[]'
   */
  export type ListEnumConnectorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectorType[]'>
    


  /**
   * Reference to a field of type 'ChargingGunStatus'
   */
  export type EnumChargingGunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargingGunStatus'>
    


  /**
   * Reference to a field of type 'ChargingGunStatus[]'
   */
  export type ListEnumChargingGunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargingGunStatus[]'>
    


  /**
   * Reference to a field of type 'ChargingSessionStatus'
   */
  export type EnumChargingSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargingSessionStatus'>
    


  /**
   * Reference to a field of type 'ChargingSessionStatus[]'
   */
  export type ListEnumChargingSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChargingSessionStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    walletBalance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: UserVehicleListRelationFilter
    transactions?: TransactionListRelationFilter
    stations?: ChargingStationListRelationFilter
    tickets?: TicketListRelationFilter
    chats?: ChatSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    walletBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicles?: UserVehicleOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    stations?: ChargingStationOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    chats?: ChatSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phone?: StringNullableFilter<"User"> | string | null
    walletBalance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: UserVehicleListRelationFilter
    transactions?: TransactionListRelationFilter
    stations?: ChargingStationListRelationFilter
    tickets?: TicketListRelationFilter
    chats?: ChatSessionListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    walletBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    walletBalance?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleCatalogWhereInput = {
    AND?: VehicleCatalogWhereInput | VehicleCatalogWhereInput[]
    OR?: VehicleCatalogWhereInput[]
    NOT?: VehicleCatalogWhereInput | VehicleCatalogWhereInput[]
    id?: IntFilter<"VehicleCatalog"> | number
    brand?: StringFilter<"VehicleCatalog"> | string
    model?: StringFilter<"VehicleCatalog"> | string
    year?: IntFilter<"VehicleCatalog"> | number
    batteryCapacity?: FloatFilter<"VehicleCatalog"> | number
    vehicleType?: EnumVehicleTypeFilter<"VehicleCatalog"> | $Enums.VehicleType
    isActive?: BoolFilter<"VehicleCatalog"> | boolean
    vehicles?: UserVehicleListRelationFilter
  }

  export type VehicleCatalogOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    batteryCapacity?: SortOrder
    vehicleType?: SortOrder
    isActive?: SortOrder
    vehicles?: UserVehicleOrderByRelationAggregateInput
  }

  export type VehicleCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VehicleCatalogWhereInput | VehicleCatalogWhereInput[]
    OR?: VehicleCatalogWhereInput[]
    NOT?: VehicleCatalogWhereInput | VehicleCatalogWhereInput[]
    brand?: StringFilter<"VehicleCatalog"> | string
    model?: StringFilter<"VehicleCatalog"> | string
    year?: IntFilter<"VehicleCatalog"> | number
    batteryCapacity?: FloatFilter<"VehicleCatalog"> | number
    vehicleType?: EnumVehicleTypeFilter<"VehicleCatalog"> | $Enums.VehicleType
    isActive?: BoolFilter<"VehicleCatalog"> | boolean
    vehicles?: UserVehicleListRelationFilter
  }, "id">

  export type VehicleCatalogOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    batteryCapacity?: SortOrder
    vehicleType?: SortOrder
    isActive?: SortOrder
    _count?: VehicleCatalogCountOrderByAggregateInput
    _avg?: VehicleCatalogAvgOrderByAggregateInput
    _max?: VehicleCatalogMaxOrderByAggregateInput
    _min?: VehicleCatalogMinOrderByAggregateInput
    _sum?: VehicleCatalogSumOrderByAggregateInput
  }

  export type VehicleCatalogScalarWhereWithAggregatesInput = {
    AND?: VehicleCatalogScalarWhereWithAggregatesInput | VehicleCatalogScalarWhereWithAggregatesInput[]
    OR?: VehicleCatalogScalarWhereWithAggregatesInput[]
    NOT?: VehicleCatalogScalarWhereWithAggregatesInput | VehicleCatalogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VehicleCatalog"> | number
    brand?: StringWithAggregatesFilter<"VehicleCatalog"> | string
    model?: StringWithAggregatesFilter<"VehicleCatalog"> | string
    year?: IntWithAggregatesFilter<"VehicleCatalog"> | number
    batteryCapacity?: FloatWithAggregatesFilter<"VehicleCatalog"> | number
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"VehicleCatalog"> | $Enums.VehicleType
    isActive?: BoolWithAggregatesFilter<"VehicleCatalog"> | boolean
  }

  export type UserVehicleWhereInput = {
    AND?: UserVehicleWhereInput | UserVehicleWhereInput[]
    OR?: UserVehicleWhereInput[]
    NOT?: UserVehicleWhereInput | UserVehicleWhereInput[]
    id?: UuidFilter<"UserVehicle"> | string
    userId?: StringFilter<"UserVehicle"> | string
    catalogId?: IntFilter<"UserVehicle"> | number
    vehicleNo?: StringFilter<"UserVehicle"> | string
    nickname?: StringNullableFilter<"UserVehicle"> | string | null
    createdAt?: DateTimeFilter<"UserVehicle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    catalog?: XOR<VehicleCatalogScalarRelationFilter, VehicleCatalogWhereInput>
    sessions?: ChargingSessionListRelationFilter
  }

  export type UserVehicleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    catalogId?: SortOrder
    vehicleNo?: SortOrder
    nickname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    catalog?: VehicleCatalogOrderByWithRelationInput
    sessions?: ChargingSessionOrderByRelationAggregateInput
  }

  export type UserVehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehicleNo?: string
    AND?: UserVehicleWhereInput | UserVehicleWhereInput[]
    OR?: UserVehicleWhereInput[]
    NOT?: UserVehicleWhereInput | UserVehicleWhereInput[]
    userId?: StringFilter<"UserVehicle"> | string
    catalogId?: IntFilter<"UserVehicle"> | number
    nickname?: StringNullableFilter<"UserVehicle"> | string | null
    createdAt?: DateTimeFilter<"UserVehicle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    catalog?: XOR<VehicleCatalogScalarRelationFilter, VehicleCatalogWhereInput>
    sessions?: ChargingSessionListRelationFilter
  }, "id" | "vehicleNo">

  export type UserVehicleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    catalogId?: SortOrder
    vehicleNo?: SortOrder
    nickname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserVehicleCountOrderByAggregateInput
    _avg?: UserVehicleAvgOrderByAggregateInput
    _max?: UserVehicleMaxOrderByAggregateInput
    _min?: UserVehicleMinOrderByAggregateInput
    _sum?: UserVehicleSumOrderByAggregateInput
  }

  export type UserVehicleScalarWhereWithAggregatesInput = {
    AND?: UserVehicleScalarWhereWithAggregatesInput | UserVehicleScalarWhereWithAggregatesInput[]
    OR?: UserVehicleScalarWhereWithAggregatesInput[]
    NOT?: UserVehicleScalarWhereWithAggregatesInput | UserVehicleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserVehicle"> | string
    userId?: StringWithAggregatesFilter<"UserVehicle"> | string
    catalogId?: IntWithAggregatesFilter<"UserVehicle"> | number
    vehicleNo?: StringWithAggregatesFilter<"UserVehicle"> | string
    nickname?: StringNullableWithAggregatesFilter<"UserVehicle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserVehicle"> | Date | string
  }

  export type ChargingStationWhereInput = {
    AND?: ChargingStationWhereInput | ChargingStationWhereInput[]
    OR?: ChargingStationWhereInput[]
    NOT?: ChargingStationWhereInput | ChargingStationWhereInput[]
    id?: UuidFilter<"ChargingStation"> | string
    ownerId?: StringFilter<"ChargingStation"> | string
    name?: StringFilter<"ChargingStation"> | string
    address?: StringFilter<"ChargingStation"> | string
    latitude?: FloatFilter<"ChargingStation"> | number
    longitude?: FloatFilter<"ChargingStation"> | number
    isActive?: BoolFilter<"ChargingStation"> | boolean
    createdAt?: DateTimeFilter<"ChargingStation"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    chargers?: ChargerListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type ChargingStationOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    chargers?: ChargerOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type ChargingStationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargingStationWhereInput | ChargingStationWhereInput[]
    OR?: ChargingStationWhereInput[]
    NOT?: ChargingStationWhereInput | ChargingStationWhereInput[]
    ownerId?: StringFilter<"ChargingStation"> | string
    name?: StringFilter<"ChargingStation"> | string
    address?: StringFilter<"ChargingStation"> | string
    latitude?: FloatFilter<"ChargingStation"> | number
    longitude?: FloatFilter<"ChargingStation"> | number
    isActive?: BoolFilter<"ChargingStation"> | boolean
    createdAt?: DateTimeFilter<"ChargingStation"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    chargers?: ChargerListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id">

  export type ChargingStationOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ChargingStationCountOrderByAggregateInput
    _avg?: ChargingStationAvgOrderByAggregateInput
    _max?: ChargingStationMaxOrderByAggregateInput
    _min?: ChargingStationMinOrderByAggregateInput
    _sum?: ChargingStationSumOrderByAggregateInput
  }

  export type ChargingStationScalarWhereWithAggregatesInput = {
    AND?: ChargingStationScalarWhereWithAggregatesInput | ChargingStationScalarWhereWithAggregatesInput[]
    OR?: ChargingStationScalarWhereWithAggregatesInput[]
    NOT?: ChargingStationScalarWhereWithAggregatesInput | ChargingStationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChargingStation"> | string
    ownerId?: StringWithAggregatesFilter<"ChargingStation"> | string
    name?: StringWithAggregatesFilter<"ChargingStation"> | string
    address?: StringWithAggregatesFilter<"ChargingStation"> | string
    latitude?: FloatWithAggregatesFilter<"ChargingStation"> | number
    longitude?: FloatWithAggregatesFilter<"ChargingStation"> | number
    isActive?: BoolWithAggregatesFilter<"ChargingStation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChargingStation"> | Date | string
  }

  export type ChargerWhereInput = {
    AND?: ChargerWhereInput | ChargerWhereInput[]
    OR?: ChargerWhereInput[]
    NOT?: ChargerWhereInput | ChargerWhereInput[]
    id?: UuidFilter<"Charger"> | string
    stationId?: UuidFilter<"Charger"> | string
    powerKW?: FloatFilter<"Charger"> | number
    isActive?: BoolFilter<"Charger"> | boolean
    createdAt?: DateTimeFilter<"Charger"> | Date | string
    station?: XOR<ChargingStationScalarRelationFilter, ChargingStationWhereInput>
    guns?: ChargingGunListRelationFilter
  }

  export type ChargerOrderByWithRelationInput = {
    id?: SortOrder
    stationId?: SortOrder
    powerKW?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    station?: ChargingStationOrderByWithRelationInput
    guns?: ChargingGunOrderByRelationAggregateInput
  }

  export type ChargerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargerWhereInput | ChargerWhereInput[]
    OR?: ChargerWhereInput[]
    NOT?: ChargerWhereInput | ChargerWhereInput[]
    stationId?: UuidFilter<"Charger"> | string
    powerKW?: FloatFilter<"Charger"> | number
    isActive?: BoolFilter<"Charger"> | boolean
    createdAt?: DateTimeFilter<"Charger"> | Date | string
    station?: XOR<ChargingStationScalarRelationFilter, ChargingStationWhereInput>
    guns?: ChargingGunListRelationFilter
  }, "id">

  export type ChargerOrderByWithAggregationInput = {
    id?: SortOrder
    stationId?: SortOrder
    powerKW?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ChargerCountOrderByAggregateInput
    _avg?: ChargerAvgOrderByAggregateInput
    _max?: ChargerMaxOrderByAggregateInput
    _min?: ChargerMinOrderByAggregateInput
    _sum?: ChargerSumOrderByAggregateInput
  }

  export type ChargerScalarWhereWithAggregatesInput = {
    AND?: ChargerScalarWhereWithAggregatesInput | ChargerScalarWhereWithAggregatesInput[]
    OR?: ChargerScalarWhereWithAggregatesInput[]
    NOT?: ChargerScalarWhereWithAggregatesInput | ChargerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Charger"> | string
    stationId?: UuidWithAggregatesFilter<"Charger"> | string
    powerKW?: FloatWithAggregatesFilter<"Charger"> | number
    isActive?: BoolWithAggregatesFilter<"Charger"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Charger"> | Date | string
  }

  export type ChargingGunWhereInput = {
    AND?: ChargingGunWhereInput | ChargingGunWhereInput[]
    OR?: ChargingGunWhereInput[]
    NOT?: ChargingGunWhereInput | ChargingGunWhereInput[]
    id?: UuidFilter<"ChargingGun"> | string
    chargerId?: UuidFilter<"ChargingGun"> | string
    connectorType?: EnumConnectorTypeFilter<"ChargingGun"> | $Enums.ConnectorType
    status?: EnumChargingGunStatusFilter<"ChargingGun"> | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFilter<"ChargingGun"> | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFilter<"ChargingGun"> | Date | string
    charger?: XOR<ChargerScalarRelationFilter, ChargerWhereInput>
    sessions?: ChargingSessionListRelationFilter
  }

  export type ChargingGunOrderByWithRelationInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    pricePerKwh?: SortOrder
    lastStatusUpdate?: SortOrder
    charger?: ChargerOrderByWithRelationInput
    sessions?: ChargingSessionOrderByRelationAggregateInput
  }

  export type ChargingGunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargingGunWhereInput | ChargingGunWhereInput[]
    OR?: ChargingGunWhereInput[]
    NOT?: ChargingGunWhereInput | ChargingGunWhereInput[]
    chargerId?: UuidFilter<"ChargingGun"> | string
    connectorType?: EnumConnectorTypeFilter<"ChargingGun"> | $Enums.ConnectorType
    status?: EnumChargingGunStatusFilter<"ChargingGun"> | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFilter<"ChargingGun"> | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFilter<"ChargingGun"> | Date | string
    charger?: XOR<ChargerScalarRelationFilter, ChargerWhereInput>
    sessions?: ChargingSessionListRelationFilter
  }, "id">

  export type ChargingGunOrderByWithAggregationInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    pricePerKwh?: SortOrder
    lastStatusUpdate?: SortOrder
    _count?: ChargingGunCountOrderByAggregateInput
    _avg?: ChargingGunAvgOrderByAggregateInput
    _max?: ChargingGunMaxOrderByAggregateInput
    _min?: ChargingGunMinOrderByAggregateInput
    _sum?: ChargingGunSumOrderByAggregateInput
  }

  export type ChargingGunScalarWhereWithAggregatesInput = {
    AND?: ChargingGunScalarWhereWithAggregatesInput | ChargingGunScalarWhereWithAggregatesInput[]
    OR?: ChargingGunScalarWhereWithAggregatesInput[]
    NOT?: ChargingGunScalarWhereWithAggregatesInput | ChargingGunScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChargingGun"> | string
    chargerId?: UuidWithAggregatesFilter<"ChargingGun"> | string
    connectorType?: EnumConnectorTypeWithAggregatesFilter<"ChargingGun"> | $Enums.ConnectorType
    status?: EnumChargingGunStatusWithAggregatesFilter<"ChargingGun"> | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalWithAggregatesFilter<"ChargingGun"> | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeWithAggregatesFilter<"ChargingGun"> | Date | string
  }

  export type ChargingSessionWhereInput = {
    AND?: ChargingSessionWhereInput | ChargingSessionWhereInput[]
    OR?: ChargingSessionWhereInput[]
    NOT?: ChargingSessionWhereInput | ChargingSessionWhereInput[]
    id?: UuidFilter<"ChargingSession"> | string
    userVehicleId?: UuidFilter<"ChargingSession"> | string
    gunId?: UuidFilter<"ChargingSession"> | string
    startTime?: DateTimeFilter<"ChargingSession"> | Date | string
    endTime?: DateTimeNullableFilter<"ChargingSession"> | Date | string | null
    energyUsed?: FloatNullableFilter<"ChargingSession"> | number | null
    totalCost?: DecimalNullableFilter<"ChargingSession"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFilter<"ChargingSession"> | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFilter<"ChargingSession"> | Date | string
    vehicle?: XOR<UserVehicleScalarRelationFilter, UserVehicleWhereInput>
    gun?: XOR<ChargingGunScalarRelationFilter, ChargingGunWhereInput>
  }

  export type ChargingSessionOrderByWithRelationInput = {
    id?: SortOrder
    userVehicleId?: SortOrder
    gunId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    energyUsed?: SortOrderInput | SortOrder
    totalCost?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    vehicle?: UserVehicleOrderByWithRelationInput
    gun?: ChargingGunOrderByWithRelationInput
  }

  export type ChargingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargingSessionWhereInput | ChargingSessionWhereInput[]
    OR?: ChargingSessionWhereInput[]
    NOT?: ChargingSessionWhereInput | ChargingSessionWhereInput[]
    userVehicleId?: UuidFilter<"ChargingSession"> | string
    gunId?: UuidFilter<"ChargingSession"> | string
    startTime?: DateTimeFilter<"ChargingSession"> | Date | string
    endTime?: DateTimeNullableFilter<"ChargingSession"> | Date | string | null
    energyUsed?: FloatNullableFilter<"ChargingSession"> | number | null
    totalCost?: DecimalNullableFilter<"ChargingSession"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFilter<"ChargingSession"> | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFilter<"ChargingSession"> | Date | string
    vehicle?: XOR<UserVehicleScalarRelationFilter, UserVehicleWhereInput>
    gun?: XOR<ChargingGunScalarRelationFilter, ChargingGunWhereInput>
  }, "id">

  export type ChargingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userVehicleId?: SortOrder
    gunId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    energyUsed?: SortOrderInput | SortOrder
    totalCost?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ChargingSessionCountOrderByAggregateInput
    _avg?: ChargingSessionAvgOrderByAggregateInput
    _max?: ChargingSessionMaxOrderByAggregateInput
    _min?: ChargingSessionMinOrderByAggregateInput
    _sum?: ChargingSessionSumOrderByAggregateInput
  }

  export type ChargingSessionScalarWhereWithAggregatesInput = {
    AND?: ChargingSessionScalarWhereWithAggregatesInput | ChargingSessionScalarWhereWithAggregatesInput[]
    OR?: ChargingSessionScalarWhereWithAggregatesInput[]
    NOT?: ChargingSessionScalarWhereWithAggregatesInput | ChargingSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChargingSession"> | string
    userVehicleId?: UuidWithAggregatesFilter<"ChargingSession"> | string
    gunId?: UuidWithAggregatesFilter<"ChargingSession"> | string
    startTime?: DateTimeWithAggregatesFilter<"ChargingSession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"ChargingSession"> | Date | string | null
    energyUsed?: FloatNullableWithAggregatesFilter<"ChargingSession"> | number | null
    totalCost?: DecimalNullableWithAggregatesFilter<"ChargingSession"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusWithAggregatesFilter<"ChargingSession"> | $Enums.ChargingSessionStatus
    createdAt?: DateTimeWithAggregatesFilter<"ChargingSession"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: UuidFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    reference?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    reference?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    reference?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: UuidFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    stationId?: UuidNullableFilter<"Ticket"> | string | null
    subject?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    station?: XOR<ChargingStationNullableScalarRelationFilter, ChargingStationWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stationId?: SortOrderInput | SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    station?: ChargingStationOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    userId?: StringFilter<"Ticket"> | string
    stationId?: UuidNullableFilter<"Ticket"> | string | null
    subject?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    station?: XOR<ChargingStationNullableScalarRelationFilter, ChargingStationWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stationId?: SortOrderInput | SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Ticket"> | string
    userId?: StringWithAggregatesFilter<"Ticket"> | string
    stationId?: UuidNullableWithAggregatesFilter<"Ticket"> | string | null
    subject?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringWithAggregatesFilter<"Ticket"> | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.TicketPriority
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: UuidFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    isActive?: BoolFilter<"ChatSession"> | boolean
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    userId?: StringFilter<"ChatSession"> | string
    isActive?: BoolFilter<"ChatSession"> | boolean
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChatSession"> | string
    userId?: StringWithAggregatesFilter<"ChatSession"> | string
    isActive?: BoolWithAggregatesFilter<"ChatSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    stations?: ChargingStationCreateNestedManyWithoutOwnerInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    stations?: ChargingStationUncheckedCreateNestedManyWithoutOwnerInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUpdateManyWithoutOwnerNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUncheckedUpdateManyWithoutOwnerNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCatalogCreateInput = {
    brand: string
    model: string
    year: number
    batteryCapacity: number
    vehicleType: $Enums.VehicleType
    isActive?: boolean
    vehicles?: UserVehicleCreateNestedManyWithoutCatalogInput
  }

  export type VehicleCatalogUncheckedCreateInput = {
    id?: number
    brand: string
    model: string
    year: number
    batteryCapacity: number
    vehicleType: $Enums.VehicleType
    isActive?: boolean
    vehicles?: UserVehicleUncheckedCreateNestedManyWithoutCatalogInput
  }

  export type VehicleCatalogUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    batteryCapacity?: FloatFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vehicles?: UserVehicleUpdateManyWithoutCatalogNestedInput
  }

  export type VehicleCatalogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    batteryCapacity?: FloatFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vehicles?: UserVehicleUncheckedUpdateManyWithoutCatalogNestedInput
  }

  export type VehicleCatalogCreateManyInput = {
    id?: number
    brand: string
    model: string
    year: number
    batteryCapacity: number
    vehicleType: $Enums.VehicleType
    isActive?: boolean
  }

  export type VehicleCatalogUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    batteryCapacity?: FloatFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleCatalogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    batteryCapacity?: FloatFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserVehicleCreateInput = {
    id?: string
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    catalog: VehicleCatalogCreateNestedOneWithoutVehiclesInput
    sessions?: ChargingSessionCreateNestedManyWithoutVehicleInput
  }

  export type UserVehicleUncheckedCreateInput = {
    id?: string
    userId: string
    catalogId: number
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
    sessions?: ChargingSessionUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type UserVehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    catalog?: VehicleCatalogUpdateOneRequiredWithoutVehiclesNestedInput
    sessions?: ChargingSessionUpdateManyWithoutVehicleNestedInput
  }

  export type UserVehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    catalogId?: IntFieldUpdateOperationsInput | number
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ChargingSessionUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserVehicleCreateManyInput = {
    id?: string
    userId: string
    catalogId: number
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
  }

  export type UserVehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    catalogId?: IntFieldUpdateOperationsInput | number
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingStationCreateInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutStationsInput
    chargers?: ChargerCreateNestedManyWithoutStationInput
    tickets?: TicketCreateNestedManyWithoutStationInput
  }

  export type ChargingStationUncheckedCreateInput = {
    id?: string
    ownerId: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
    chargers?: ChargerUncheckedCreateNestedManyWithoutStationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutStationInput
  }

  export type ChargingStationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStationsNestedInput
    chargers?: ChargerUpdateManyWithoutStationNestedInput
    tickets?: TicketUpdateManyWithoutStationNestedInput
  }

  export type ChargingStationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chargers?: ChargerUncheckedUpdateManyWithoutStationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutStationNestedInput
  }

  export type ChargingStationCreateManyInput = {
    id?: string
    ownerId: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ChargingStationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingStationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargerCreateInput = {
    id?: string
    powerKW: number
    isActive?: boolean
    createdAt?: Date | string
    station: ChargingStationCreateNestedOneWithoutChargersInput
    guns?: ChargingGunCreateNestedManyWithoutChargerInput
  }

  export type ChargerUncheckedCreateInput = {
    id?: string
    stationId: string
    powerKW: number
    isActive?: boolean
    createdAt?: Date | string
    guns?: ChargingGunUncheckedCreateNestedManyWithoutChargerInput
  }

  export type ChargerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    station?: ChargingStationUpdateOneRequiredWithoutChargersNestedInput
    guns?: ChargingGunUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guns?: ChargingGunUncheckedUpdateManyWithoutChargerNestedInput
  }

  export type ChargerCreateManyInput = {
    id?: string
    stationId: string
    powerKW: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ChargerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingGunCreateInput = {
    id?: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: Date | string
    charger: ChargerCreateNestedOneWithoutGunsInput
    sessions?: ChargingSessionCreateNestedManyWithoutGunInput
  }

  export type ChargingGunUncheckedCreateInput = {
    id?: string
    chargerId: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: Date | string
    sessions?: ChargingSessionUncheckedCreateNestedManyWithoutGunInput
  }

  export type ChargingGunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    charger?: ChargerUpdateOneRequiredWithoutGunsNestedInput
    sessions?: ChargingSessionUpdateManyWithoutGunNestedInput
  }

  export type ChargingGunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chargerId?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ChargingSessionUncheckedUpdateManyWithoutGunNestedInput
  }

  export type ChargingGunCreateManyInput = {
    id?: string
    chargerId: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: Date | string
  }

  export type ChargingGunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingGunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chargerId?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingSessionCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
    vehicle: UserVehicleCreateNestedOneWithoutSessionsInput
    gun: ChargingGunCreateNestedOneWithoutSessionsInput
  }

  export type ChargingSessionUncheckedCreateInput = {
    id?: string
    userVehicleId: string
    gunId: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
  }

  export type ChargingSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: UserVehicleUpdateOneRequiredWithoutSessionsNestedInput
    gun?: ChargingGunUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ChargingSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userVehicleId?: StringFieldUpdateOperationsInput | string
    gunId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingSessionCreateManyInput = {
    id?: string
    userVehicleId: string
    gunId: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
  }

  export type ChargingSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userVehicleId?: StringFieldUpdateOperationsInput | string
    gunId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTicketsInput
    station?: ChargingStationCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    userId: string
    stationId?: string | null
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    station?: ChargingStationUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stationId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketCreateManyInput = {
    id?: string
    userId: string
    stationId?: string | null
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stationId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatSessionCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatsInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    userId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserVehicleListRelationFilter = {
    every?: UserVehicleWhereInput
    some?: UserVehicleWhereInput
    none?: UserVehicleWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type ChargingStationListRelationFilter = {
    every?: ChargingStationWhereInput
    some?: ChargingStationWhereInput
    none?: ChargingStationWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserVehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChargingStationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    walletBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    walletBalance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    walletBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    walletBalance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    walletBalance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type VehicleCatalogCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    batteryCapacity?: SortOrder
    vehicleType?: SortOrder
    isActive?: SortOrder
  }

  export type VehicleCatalogAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    batteryCapacity?: SortOrder
  }

  export type VehicleCatalogMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    batteryCapacity?: SortOrder
    vehicleType?: SortOrder
    isActive?: SortOrder
  }

  export type VehicleCatalogMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    batteryCapacity?: SortOrder
    vehicleType?: SortOrder
    isActive?: SortOrder
  }

  export type VehicleCatalogSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    batteryCapacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleCatalogScalarRelationFilter = {
    is?: VehicleCatalogWhereInput
    isNot?: VehicleCatalogWhereInput
  }

  export type ChargingSessionListRelationFilter = {
    every?: ChargingSessionWhereInput
    some?: ChargingSessionWhereInput
    none?: ChargingSessionWhereInput
  }

  export type ChargingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserVehicleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    catalogId?: SortOrder
    vehicleNo?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVehicleAvgOrderByAggregateInput = {
    catalogId?: SortOrder
  }

  export type UserVehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    catalogId?: SortOrder
    vehicleNo?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVehicleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    catalogId?: SortOrder
    vehicleNo?: SortOrder
    nickname?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVehicleSumOrderByAggregateInput = {
    catalogId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ChargerListRelationFilter = {
    every?: ChargerWhereInput
    some?: ChargerWhereInput
    none?: ChargerWhereInput
  }

  export type ChargerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChargingStationCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargingStationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ChargingStationMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargingStationMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargingStationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ChargingStationScalarRelationFilter = {
    is?: ChargingStationWhereInput
    isNot?: ChargingStationWhereInput
  }

  export type ChargingGunListRelationFilter = {
    every?: ChargingGunWhereInput
    some?: ChargingGunWhereInput
    none?: ChargingGunWhereInput
  }

  export type ChargingGunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChargerCountOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    powerKW?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargerAvgOrderByAggregateInput = {
    powerKW?: SortOrder
  }

  export type ChargerMaxOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    powerKW?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargerMinOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    powerKW?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargerSumOrderByAggregateInput = {
    powerKW?: SortOrder
  }

  export type EnumConnectorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectorType | EnumConnectorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectorType[] | ListEnumConnectorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectorType[] | ListEnumConnectorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectorTypeFilter<$PrismaModel> | $Enums.ConnectorType
  }

  export type EnumChargingGunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargingGunStatus | EnumChargingGunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChargingGunStatus[] | ListEnumChargingGunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargingGunStatus[] | ListEnumChargingGunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChargingGunStatusFilter<$PrismaModel> | $Enums.ChargingGunStatus
  }

  export type ChargerScalarRelationFilter = {
    is?: ChargerWhereInput
    isNot?: ChargerWhereInput
  }

  export type ChargingGunCountOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    pricePerKwh?: SortOrder
    lastStatusUpdate?: SortOrder
  }

  export type ChargingGunAvgOrderByAggregateInput = {
    pricePerKwh?: SortOrder
  }

  export type ChargingGunMaxOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    pricePerKwh?: SortOrder
    lastStatusUpdate?: SortOrder
  }

  export type ChargingGunMinOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorType?: SortOrder
    status?: SortOrder
    pricePerKwh?: SortOrder
    lastStatusUpdate?: SortOrder
  }

  export type ChargingGunSumOrderByAggregateInput = {
    pricePerKwh?: SortOrder
  }

  export type EnumConnectorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectorType | EnumConnectorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectorType[] | ListEnumConnectorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectorType[] | ListEnumConnectorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConnectorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectorTypeFilter<$PrismaModel>
    _max?: NestedEnumConnectorTypeFilter<$PrismaModel>
  }

  export type EnumChargingGunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargingGunStatus | EnumChargingGunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChargingGunStatus[] | ListEnumChargingGunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargingGunStatus[] | ListEnumChargingGunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChargingGunStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChargingGunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargingGunStatusFilter<$PrismaModel>
    _max?: NestedEnumChargingGunStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumChargingSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargingSessionStatus | EnumChargingSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChargingSessionStatus[] | ListEnumChargingSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargingSessionStatus[] | ListEnumChargingSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChargingSessionStatusFilter<$PrismaModel> | $Enums.ChargingSessionStatus
  }

  export type UserVehicleScalarRelationFilter = {
    is?: UserVehicleWhereInput
    isNot?: UserVehicleWhereInput
  }

  export type ChargingGunScalarRelationFilter = {
    is?: ChargingGunWhereInput
    isNot?: ChargingGunWhereInput
  }

  export type ChargingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userVehicleId?: SortOrder
    gunId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    energyUsed?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargingSessionAvgOrderByAggregateInput = {
    energyUsed?: SortOrder
    totalCost?: SortOrder
  }

  export type ChargingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userVehicleId?: SortOrder
    gunId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    energyUsed?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userVehicleId?: SortOrder
    gunId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    energyUsed?: SortOrder
    totalCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargingSessionSumOrderByAggregateInput = {
    energyUsed?: SortOrder
    totalCost?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumChargingSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargingSessionStatus | EnumChargingSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChargingSessionStatus[] | ListEnumChargingSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargingSessionStatus[] | ListEnumChargingSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChargingSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChargingSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargingSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumChargingSessionStatusFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type ChargingStationNullableScalarRelationFilter = {
    is?: ChargingStationWhereInput | null
    isNot?: ChargingStationWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stationId?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stationId?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stationId?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVehicleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVehicleCreateWithoutUserInput, UserVehicleUncheckedCreateWithoutUserInput> | UserVehicleCreateWithoutUserInput[] | UserVehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVehicleCreateOrConnectWithoutUserInput | UserVehicleCreateOrConnectWithoutUserInput[]
    createMany?: UserVehicleCreateManyUserInputEnvelope
    connect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ChargingStationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ChargingStationCreateWithoutOwnerInput, ChargingStationUncheckedCreateWithoutOwnerInput> | ChargingStationCreateWithoutOwnerInput[] | ChargingStationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChargingStationCreateOrConnectWithoutOwnerInput | ChargingStationCreateOrConnectWithoutOwnerInput[]
    createMany?: ChargingStationCreateManyOwnerInputEnvelope
    connect?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type UserVehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVehicleCreateWithoutUserInput, UserVehicleUncheckedCreateWithoutUserInput> | UserVehicleCreateWithoutUserInput[] | UserVehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVehicleCreateOrConnectWithoutUserInput | UserVehicleCreateOrConnectWithoutUserInput[]
    createMany?: UserVehicleCreateManyUserInputEnvelope
    connect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ChargingStationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ChargingStationCreateWithoutOwnerInput, ChargingStationUncheckedCreateWithoutOwnerInput> | ChargingStationCreateWithoutOwnerInput[] | ChargingStationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChargingStationCreateOrConnectWithoutOwnerInput | ChargingStationCreateOrConnectWithoutOwnerInput[]
    createMany?: ChargingStationCreateManyOwnerInputEnvelope
    connect?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserVehicleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVehicleCreateWithoutUserInput, UserVehicleUncheckedCreateWithoutUserInput> | UserVehicleCreateWithoutUserInput[] | UserVehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVehicleCreateOrConnectWithoutUserInput | UserVehicleCreateOrConnectWithoutUserInput[]
    upsert?: UserVehicleUpsertWithWhereUniqueWithoutUserInput | UserVehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVehicleCreateManyUserInputEnvelope
    set?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    disconnect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    delete?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    connect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    update?: UserVehicleUpdateWithWhereUniqueWithoutUserInput | UserVehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVehicleUpdateManyWithWhereWithoutUserInput | UserVehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVehicleScalarWhereInput | UserVehicleScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ChargingStationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ChargingStationCreateWithoutOwnerInput, ChargingStationUncheckedCreateWithoutOwnerInput> | ChargingStationCreateWithoutOwnerInput[] | ChargingStationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChargingStationCreateOrConnectWithoutOwnerInput | ChargingStationCreateOrConnectWithoutOwnerInput[]
    upsert?: ChargingStationUpsertWithWhereUniqueWithoutOwnerInput | ChargingStationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ChargingStationCreateManyOwnerInputEnvelope
    set?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
    disconnect?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
    delete?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
    connect?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
    update?: ChargingStationUpdateWithWhereUniqueWithoutOwnerInput | ChargingStationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ChargingStationUpdateManyWithWhereWithoutOwnerInput | ChargingStationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ChargingStationScalarWhereInput | ChargingStationScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type UserVehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVehicleCreateWithoutUserInput, UserVehicleUncheckedCreateWithoutUserInput> | UserVehicleCreateWithoutUserInput[] | UserVehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVehicleCreateOrConnectWithoutUserInput | UserVehicleCreateOrConnectWithoutUserInput[]
    upsert?: UserVehicleUpsertWithWhereUniqueWithoutUserInput | UserVehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVehicleCreateManyUserInputEnvelope
    set?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    disconnect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    delete?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    connect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    update?: UserVehicleUpdateWithWhereUniqueWithoutUserInput | UserVehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVehicleUpdateManyWithWhereWithoutUserInput | UserVehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVehicleScalarWhereInput | UserVehicleScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ChargingStationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ChargingStationCreateWithoutOwnerInput, ChargingStationUncheckedCreateWithoutOwnerInput> | ChargingStationCreateWithoutOwnerInput[] | ChargingStationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChargingStationCreateOrConnectWithoutOwnerInput | ChargingStationCreateOrConnectWithoutOwnerInput[]
    upsert?: ChargingStationUpsertWithWhereUniqueWithoutOwnerInput | ChargingStationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ChargingStationCreateManyOwnerInputEnvelope
    set?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
    disconnect?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
    delete?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
    connect?: ChargingStationWhereUniqueInput | ChargingStationWhereUniqueInput[]
    update?: ChargingStationUpdateWithWhereUniqueWithoutOwnerInput | ChargingStationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ChargingStationUpdateManyWithWhereWithoutOwnerInput | ChargingStationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ChargingStationScalarWhereInput | ChargingStationScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput> | ChatSessionCreateWithoutUserInput[] | ChatSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutUserInput | ChatSessionCreateOrConnectWithoutUserInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutUserInput | ChatSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatSessionCreateManyUserInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutUserInput | ChatSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutUserInput | ChatSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type UserVehicleCreateNestedManyWithoutCatalogInput = {
    create?: XOR<UserVehicleCreateWithoutCatalogInput, UserVehicleUncheckedCreateWithoutCatalogInput> | UserVehicleCreateWithoutCatalogInput[] | UserVehicleUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: UserVehicleCreateOrConnectWithoutCatalogInput | UserVehicleCreateOrConnectWithoutCatalogInput[]
    createMany?: UserVehicleCreateManyCatalogInputEnvelope
    connect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
  }

  export type UserVehicleUncheckedCreateNestedManyWithoutCatalogInput = {
    create?: XOR<UserVehicleCreateWithoutCatalogInput, UserVehicleUncheckedCreateWithoutCatalogInput> | UserVehicleCreateWithoutCatalogInput[] | UserVehicleUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: UserVehicleCreateOrConnectWithoutCatalogInput | UserVehicleCreateOrConnectWithoutCatalogInput[]
    createMany?: UserVehicleCreateManyCatalogInputEnvelope
    connect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type UserVehicleUpdateManyWithoutCatalogNestedInput = {
    create?: XOR<UserVehicleCreateWithoutCatalogInput, UserVehicleUncheckedCreateWithoutCatalogInput> | UserVehicleCreateWithoutCatalogInput[] | UserVehicleUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: UserVehicleCreateOrConnectWithoutCatalogInput | UserVehicleCreateOrConnectWithoutCatalogInput[]
    upsert?: UserVehicleUpsertWithWhereUniqueWithoutCatalogInput | UserVehicleUpsertWithWhereUniqueWithoutCatalogInput[]
    createMany?: UserVehicleCreateManyCatalogInputEnvelope
    set?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    disconnect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    delete?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    connect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    update?: UserVehicleUpdateWithWhereUniqueWithoutCatalogInput | UserVehicleUpdateWithWhereUniqueWithoutCatalogInput[]
    updateMany?: UserVehicleUpdateManyWithWhereWithoutCatalogInput | UserVehicleUpdateManyWithWhereWithoutCatalogInput[]
    deleteMany?: UserVehicleScalarWhereInput | UserVehicleScalarWhereInput[]
  }

  export type UserVehicleUncheckedUpdateManyWithoutCatalogNestedInput = {
    create?: XOR<UserVehicleCreateWithoutCatalogInput, UserVehicleUncheckedCreateWithoutCatalogInput> | UserVehicleCreateWithoutCatalogInput[] | UserVehicleUncheckedCreateWithoutCatalogInput[]
    connectOrCreate?: UserVehicleCreateOrConnectWithoutCatalogInput | UserVehicleCreateOrConnectWithoutCatalogInput[]
    upsert?: UserVehicleUpsertWithWhereUniqueWithoutCatalogInput | UserVehicleUpsertWithWhereUniqueWithoutCatalogInput[]
    createMany?: UserVehicleCreateManyCatalogInputEnvelope
    set?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    disconnect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    delete?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    connect?: UserVehicleWhereUniqueInput | UserVehicleWhereUniqueInput[]
    update?: UserVehicleUpdateWithWhereUniqueWithoutCatalogInput | UserVehicleUpdateWithWhereUniqueWithoutCatalogInput[]
    updateMany?: UserVehicleUpdateManyWithWhereWithoutCatalogInput | UserVehicleUpdateManyWithWhereWithoutCatalogInput[]
    deleteMany?: UserVehicleScalarWhereInput | UserVehicleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCatalogCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<VehicleCatalogCreateWithoutVehiclesInput, VehicleCatalogUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: VehicleCatalogCreateOrConnectWithoutVehiclesInput
    connect?: VehicleCatalogWhereUniqueInput
  }

  export type ChargingSessionCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ChargingSessionCreateWithoutVehicleInput, ChargingSessionUncheckedCreateWithoutVehicleInput> | ChargingSessionCreateWithoutVehicleInput[] | ChargingSessionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ChargingSessionCreateOrConnectWithoutVehicleInput | ChargingSessionCreateOrConnectWithoutVehicleInput[]
    createMany?: ChargingSessionCreateManyVehicleInputEnvelope
    connect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
  }

  export type ChargingSessionUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ChargingSessionCreateWithoutVehicleInput, ChargingSessionUncheckedCreateWithoutVehicleInput> | ChargingSessionCreateWithoutVehicleInput[] | ChargingSessionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ChargingSessionCreateOrConnectWithoutVehicleInput | ChargingSessionCreateOrConnectWithoutVehicleInput[]
    createMany?: ChargingSessionCreateManyVehicleInputEnvelope
    connect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type VehicleCatalogUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<VehicleCatalogCreateWithoutVehiclesInput, VehicleCatalogUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: VehicleCatalogCreateOrConnectWithoutVehiclesInput
    upsert?: VehicleCatalogUpsertWithoutVehiclesInput
    connect?: VehicleCatalogWhereUniqueInput
    update?: XOR<XOR<VehicleCatalogUpdateToOneWithWhereWithoutVehiclesInput, VehicleCatalogUpdateWithoutVehiclesInput>, VehicleCatalogUncheckedUpdateWithoutVehiclesInput>
  }

  export type ChargingSessionUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ChargingSessionCreateWithoutVehicleInput, ChargingSessionUncheckedCreateWithoutVehicleInput> | ChargingSessionCreateWithoutVehicleInput[] | ChargingSessionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ChargingSessionCreateOrConnectWithoutVehicleInput | ChargingSessionCreateOrConnectWithoutVehicleInput[]
    upsert?: ChargingSessionUpsertWithWhereUniqueWithoutVehicleInput | ChargingSessionUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ChargingSessionCreateManyVehicleInputEnvelope
    set?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    disconnect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    delete?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    connect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    update?: ChargingSessionUpdateWithWhereUniqueWithoutVehicleInput | ChargingSessionUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ChargingSessionUpdateManyWithWhereWithoutVehicleInput | ChargingSessionUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ChargingSessionScalarWhereInput | ChargingSessionScalarWhereInput[]
  }

  export type ChargingSessionUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ChargingSessionCreateWithoutVehicleInput, ChargingSessionUncheckedCreateWithoutVehicleInput> | ChargingSessionCreateWithoutVehicleInput[] | ChargingSessionUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ChargingSessionCreateOrConnectWithoutVehicleInput | ChargingSessionCreateOrConnectWithoutVehicleInput[]
    upsert?: ChargingSessionUpsertWithWhereUniqueWithoutVehicleInput | ChargingSessionUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ChargingSessionCreateManyVehicleInputEnvelope
    set?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    disconnect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    delete?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    connect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    update?: ChargingSessionUpdateWithWhereUniqueWithoutVehicleInput | ChargingSessionUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ChargingSessionUpdateManyWithWhereWithoutVehicleInput | ChargingSessionUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ChargingSessionScalarWhereInput | ChargingSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStationsInput = {
    create?: XOR<UserCreateWithoutStationsInput, UserUncheckedCreateWithoutStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStationsInput
    connect?: UserWhereUniqueInput
  }

  export type ChargerCreateNestedManyWithoutStationInput = {
    create?: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput> | ChargerCreateWithoutStationInput[] | ChargerUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ChargerCreateOrConnectWithoutStationInput | ChargerCreateOrConnectWithoutStationInput[]
    createMany?: ChargerCreateManyStationInputEnvelope
    connect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutStationInput = {
    create?: XOR<TicketCreateWithoutStationInput, TicketUncheckedCreateWithoutStationInput> | TicketCreateWithoutStationInput[] | TicketUncheckedCreateWithoutStationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutStationInput | TicketCreateOrConnectWithoutStationInput[]
    createMany?: TicketCreateManyStationInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ChargerUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput> | ChargerCreateWithoutStationInput[] | ChargerUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ChargerCreateOrConnectWithoutStationInput | ChargerCreateOrConnectWithoutStationInput[]
    createMany?: ChargerCreateManyStationInputEnvelope
    connect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<TicketCreateWithoutStationInput, TicketUncheckedCreateWithoutStationInput> | TicketCreateWithoutStationInput[] | TicketUncheckedCreateWithoutStationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutStationInput | TicketCreateOrConnectWithoutStationInput[]
    createMany?: TicketCreateManyStationInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStationsNestedInput = {
    create?: XOR<UserCreateWithoutStationsInput, UserUncheckedCreateWithoutStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStationsInput
    upsert?: UserUpsertWithoutStationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStationsInput, UserUpdateWithoutStationsInput>, UserUncheckedUpdateWithoutStationsInput>
  }

  export type ChargerUpdateManyWithoutStationNestedInput = {
    create?: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput> | ChargerCreateWithoutStationInput[] | ChargerUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ChargerCreateOrConnectWithoutStationInput | ChargerCreateOrConnectWithoutStationInput[]
    upsert?: ChargerUpsertWithWhereUniqueWithoutStationInput | ChargerUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: ChargerCreateManyStationInputEnvelope
    set?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    disconnect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    delete?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    connect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    update?: ChargerUpdateWithWhereUniqueWithoutStationInput | ChargerUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: ChargerUpdateManyWithWhereWithoutStationInput | ChargerUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: ChargerScalarWhereInput | ChargerScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutStationNestedInput = {
    create?: XOR<TicketCreateWithoutStationInput, TicketUncheckedCreateWithoutStationInput> | TicketCreateWithoutStationInput[] | TicketUncheckedCreateWithoutStationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutStationInput | TicketCreateOrConnectWithoutStationInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutStationInput | TicketUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: TicketCreateManyStationInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutStationInput | TicketUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutStationInput | TicketUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ChargerUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput> | ChargerCreateWithoutStationInput[] | ChargerUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ChargerCreateOrConnectWithoutStationInput | ChargerCreateOrConnectWithoutStationInput[]
    upsert?: ChargerUpsertWithWhereUniqueWithoutStationInput | ChargerUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: ChargerCreateManyStationInputEnvelope
    set?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    disconnect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    delete?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    connect?: ChargerWhereUniqueInput | ChargerWhereUniqueInput[]
    update?: ChargerUpdateWithWhereUniqueWithoutStationInput | ChargerUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: ChargerUpdateManyWithWhereWithoutStationInput | ChargerUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: ChargerScalarWhereInput | ChargerScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<TicketCreateWithoutStationInput, TicketUncheckedCreateWithoutStationInput> | TicketCreateWithoutStationInput[] | TicketUncheckedCreateWithoutStationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutStationInput | TicketCreateOrConnectWithoutStationInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutStationInput | TicketUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: TicketCreateManyStationInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutStationInput | TicketUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutStationInput | TicketUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ChargingStationCreateNestedOneWithoutChargersInput = {
    create?: XOR<ChargingStationCreateWithoutChargersInput, ChargingStationUncheckedCreateWithoutChargersInput>
    connectOrCreate?: ChargingStationCreateOrConnectWithoutChargersInput
    connect?: ChargingStationWhereUniqueInput
  }

  export type ChargingGunCreateNestedManyWithoutChargerInput = {
    create?: XOR<ChargingGunCreateWithoutChargerInput, ChargingGunUncheckedCreateWithoutChargerInput> | ChargingGunCreateWithoutChargerInput[] | ChargingGunUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: ChargingGunCreateOrConnectWithoutChargerInput | ChargingGunCreateOrConnectWithoutChargerInput[]
    createMany?: ChargingGunCreateManyChargerInputEnvelope
    connect?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
  }

  export type ChargingGunUncheckedCreateNestedManyWithoutChargerInput = {
    create?: XOR<ChargingGunCreateWithoutChargerInput, ChargingGunUncheckedCreateWithoutChargerInput> | ChargingGunCreateWithoutChargerInput[] | ChargingGunUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: ChargingGunCreateOrConnectWithoutChargerInput | ChargingGunCreateOrConnectWithoutChargerInput[]
    createMany?: ChargingGunCreateManyChargerInputEnvelope
    connect?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
  }

  export type ChargingStationUpdateOneRequiredWithoutChargersNestedInput = {
    create?: XOR<ChargingStationCreateWithoutChargersInput, ChargingStationUncheckedCreateWithoutChargersInput>
    connectOrCreate?: ChargingStationCreateOrConnectWithoutChargersInput
    upsert?: ChargingStationUpsertWithoutChargersInput
    connect?: ChargingStationWhereUniqueInput
    update?: XOR<XOR<ChargingStationUpdateToOneWithWhereWithoutChargersInput, ChargingStationUpdateWithoutChargersInput>, ChargingStationUncheckedUpdateWithoutChargersInput>
  }

  export type ChargingGunUpdateManyWithoutChargerNestedInput = {
    create?: XOR<ChargingGunCreateWithoutChargerInput, ChargingGunUncheckedCreateWithoutChargerInput> | ChargingGunCreateWithoutChargerInput[] | ChargingGunUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: ChargingGunCreateOrConnectWithoutChargerInput | ChargingGunCreateOrConnectWithoutChargerInput[]
    upsert?: ChargingGunUpsertWithWhereUniqueWithoutChargerInput | ChargingGunUpsertWithWhereUniqueWithoutChargerInput[]
    createMany?: ChargingGunCreateManyChargerInputEnvelope
    set?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
    disconnect?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
    delete?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
    connect?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
    update?: ChargingGunUpdateWithWhereUniqueWithoutChargerInput | ChargingGunUpdateWithWhereUniqueWithoutChargerInput[]
    updateMany?: ChargingGunUpdateManyWithWhereWithoutChargerInput | ChargingGunUpdateManyWithWhereWithoutChargerInput[]
    deleteMany?: ChargingGunScalarWhereInput | ChargingGunScalarWhereInput[]
  }

  export type ChargingGunUncheckedUpdateManyWithoutChargerNestedInput = {
    create?: XOR<ChargingGunCreateWithoutChargerInput, ChargingGunUncheckedCreateWithoutChargerInput> | ChargingGunCreateWithoutChargerInput[] | ChargingGunUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: ChargingGunCreateOrConnectWithoutChargerInput | ChargingGunCreateOrConnectWithoutChargerInput[]
    upsert?: ChargingGunUpsertWithWhereUniqueWithoutChargerInput | ChargingGunUpsertWithWhereUniqueWithoutChargerInput[]
    createMany?: ChargingGunCreateManyChargerInputEnvelope
    set?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
    disconnect?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
    delete?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
    connect?: ChargingGunWhereUniqueInput | ChargingGunWhereUniqueInput[]
    update?: ChargingGunUpdateWithWhereUniqueWithoutChargerInput | ChargingGunUpdateWithWhereUniqueWithoutChargerInput[]
    updateMany?: ChargingGunUpdateManyWithWhereWithoutChargerInput | ChargingGunUpdateManyWithWhereWithoutChargerInput[]
    deleteMany?: ChargingGunScalarWhereInput | ChargingGunScalarWhereInput[]
  }

  export type ChargerCreateNestedOneWithoutGunsInput = {
    create?: XOR<ChargerCreateWithoutGunsInput, ChargerUncheckedCreateWithoutGunsInput>
    connectOrCreate?: ChargerCreateOrConnectWithoutGunsInput
    connect?: ChargerWhereUniqueInput
  }

  export type ChargingSessionCreateNestedManyWithoutGunInput = {
    create?: XOR<ChargingSessionCreateWithoutGunInput, ChargingSessionUncheckedCreateWithoutGunInput> | ChargingSessionCreateWithoutGunInput[] | ChargingSessionUncheckedCreateWithoutGunInput[]
    connectOrCreate?: ChargingSessionCreateOrConnectWithoutGunInput | ChargingSessionCreateOrConnectWithoutGunInput[]
    createMany?: ChargingSessionCreateManyGunInputEnvelope
    connect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
  }

  export type ChargingSessionUncheckedCreateNestedManyWithoutGunInput = {
    create?: XOR<ChargingSessionCreateWithoutGunInput, ChargingSessionUncheckedCreateWithoutGunInput> | ChargingSessionCreateWithoutGunInput[] | ChargingSessionUncheckedCreateWithoutGunInput[]
    connectOrCreate?: ChargingSessionCreateOrConnectWithoutGunInput | ChargingSessionCreateOrConnectWithoutGunInput[]
    createMany?: ChargingSessionCreateManyGunInputEnvelope
    connect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
  }

  export type EnumConnectorTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConnectorType
  }

  export type EnumChargingGunStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChargingGunStatus
  }

  export type ChargerUpdateOneRequiredWithoutGunsNestedInput = {
    create?: XOR<ChargerCreateWithoutGunsInput, ChargerUncheckedCreateWithoutGunsInput>
    connectOrCreate?: ChargerCreateOrConnectWithoutGunsInput
    upsert?: ChargerUpsertWithoutGunsInput
    connect?: ChargerWhereUniqueInput
    update?: XOR<XOR<ChargerUpdateToOneWithWhereWithoutGunsInput, ChargerUpdateWithoutGunsInput>, ChargerUncheckedUpdateWithoutGunsInput>
  }

  export type ChargingSessionUpdateManyWithoutGunNestedInput = {
    create?: XOR<ChargingSessionCreateWithoutGunInput, ChargingSessionUncheckedCreateWithoutGunInput> | ChargingSessionCreateWithoutGunInput[] | ChargingSessionUncheckedCreateWithoutGunInput[]
    connectOrCreate?: ChargingSessionCreateOrConnectWithoutGunInput | ChargingSessionCreateOrConnectWithoutGunInput[]
    upsert?: ChargingSessionUpsertWithWhereUniqueWithoutGunInput | ChargingSessionUpsertWithWhereUniqueWithoutGunInput[]
    createMany?: ChargingSessionCreateManyGunInputEnvelope
    set?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    disconnect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    delete?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    connect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    update?: ChargingSessionUpdateWithWhereUniqueWithoutGunInput | ChargingSessionUpdateWithWhereUniqueWithoutGunInput[]
    updateMany?: ChargingSessionUpdateManyWithWhereWithoutGunInput | ChargingSessionUpdateManyWithWhereWithoutGunInput[]
    deleteMany?: ChargingSessionScalarWhereInput | ChargingSessionScalarWhereInput[]
  }

  export type ChargingSessionUncheckedUpdateManyWithoutGunNestedInput = {
    create?: XOR<ChargingSessionCreateWithoutGunInput, ChargingSessionUncheckedCreateWithoutGunInput> | ChargingSessionCreateWithoutGunInput[] | ChargingSessionUncheckedCreateWithoutGunInput[]
    connectOrCreate?: ChargingSessionCreateOrConnectWithoutGunInput | ChargingSessionCreateOrConnectWithoutGunInput[]
    upsert?: ChargingSessionUpsertWithWhereUniqueWithoutGunInput | ChargingSessionUpsertWithWhereUniqueWithoutGunInput[]
    createMany?: ChargingSessionCreateManyGunInputEnvelope
    set?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    disconnect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    delete?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    connect?: ChargingSessionWhereUniqueInput | ChargingSessionWhereUniqueInput[]
    update?: ChargingSessionUpdateWithWhereUniqueWithoutGunInput | ChargingSessionUpdateWithWhereUniqueWithoutGunInput[]
    updateMany?: ChargingSessionUpdateManyWithWhereWithoutGunInput | ChargingSessionUpdateManyWithWhereWithoutGunInput[]
    deleteMany?: ChargingSessionScalarWhereInput | ChargingSessionScalarWhereInput[]
  }

  export type UserVehicleCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserVehicleCreateWithoutSessionsInput, UserVehicleUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserVehicleCreateOrConnectWithoutSessionsInput
    connect?: UserVehicleWhereUniqueInput
  }

  export type ChargingGunCreateNestedOneWithoutSessionsInput = {
    create?: XOR<ChargingGunCreateWithoutSessionsInput, ChargingGunUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ChargingGunCreateOrConnectWithoutSessionsInput
    connect?: ChargingGunWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumChargingSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChargingSessionStatus
  }

  export type UserVehicleUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserVehicleCreateWithoutSessionsInput, UserVehicleUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserVehicleCreateOrConnectWithoutSessionsInput
    upsert?: UserVehicleUpsertWithoutSessionsInput
    connect?: UserVehicleWhereUniqueInput
    update?: XOR<XOR<UserVehicleUpdateToOneWithWhereWithoutSessionsInput, UserVehicleUpdateWithoutSessionsInput>, UserVehicleUncheckedUpdateWithoutSessionsInput>
  }

  export type ChargingGunUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<ChargingGunCreateWithoutSessionsInput, ChargingGunUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ChargingGunCreateOrConnectWithoutSessionsInput
    upsert?: ChargingGunUpsertWithoutSessionsInput
    connect?: ChargingGunWhereUniqueInput
    update?: XOR<XOR<ChargingGunUpdateToOneWithWhereWithoutSessionsInput, ChargingGunUpdateWithoutSessionsInput>, ChargingGunUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type ChargingStationCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ChargingStationCreateWithoutTicketsInput, ChargingStationUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ChargingStationCreateOrConnectWithoutTicketsInput
    connect?: ChargingStationWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type ChargingStationUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<ChargingStationCreateWithoutTicketsInput, ChargingStationUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ChargingStationCreateOrConnectWithoutTicketsInput
    upsert?: ChargingStationUpsertWithoutTicketsInput
    disconnect?: ChargingStationWhereInput | boolean
    delete?: ChargingStationWhereInput | boolean
    connect?: ChargingStationWhereUniqueInput
    update?: XOR<XOR<ChargingStationUpdateToOneWithWhereWithoutTicketsInput, ChargingStationUpdateWithoutTicketsInput>, ChargingStationUncheckedUpdateWithoutTicketsInput>
  }

  export type UserCreateNestedOneWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    upsert?: UserUpsertWithoutChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsInput, UserUpdateWithoutChatsInput>, UserUncheckedUpdateWithoutChatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumConnectorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectorType | EnumConnectorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectorType[] | ListEnumConnectorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectorType[] | ListEnumConnectorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectorTypeFilter<$PrismaModel> | $Enums.ConnectorType
  }

  export type NestedEnumChargingGunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargingGunStatus | EnumChargingGunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChargingGunStatus[] | ListEnumChargingGunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargingGunStatus[] | ListEnumChargingGunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChargingGunStatusFilter<$PrismaModel> | $Enums.ChargingGunStatus
  }

  export type NestedEnumConnectorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectorType | EnumConnectorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectorType[] | ListEnumConnectorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectorType[] | ListEnumConnectorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectorTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConnectorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectorTypeFilter<$PrismaModel>
    _max?: NestedEnumConnectorTypeFilter<$PrismaModel>
  }

  export type NestedEnumChargingGunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargingGunStatus | EnumChargingGunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChargingGunStatus[] | ListEnumChargingGunStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargingGunStatus[] | ListEnumChargingGunStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChargingGunStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChargingGunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargingGunStatusFilter<$PrismaModel>
    _max?: NestedEnumChargingGunStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumChargingSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargingSessionStatus | EnumChargingSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChargingSessionStatus[] | ListEnumChargingSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargingSessionStatus[] | ListEnumChargingSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChargingSessionStatusFilter<$PrismaModel> | $Enums.ChargingSessionStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumChargingSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChargingSessionStatus | EnumChargingSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChargingSessionStatus[] | ListEnumChargingSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChargingSessionStatus[] | ListEnumChargingSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChargingSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChargingSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChargingSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumChargingSessionStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type UserVehicleCreateWithoutUserInput = {
    id?: string
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
    catalog: VehicleCatalogCreateNestedOneWithoutVehiclesInput
    sessions?: ChargingSessionCreateNestedManyWithoutVehicleInput
  }

  export type UserVehicleUncheckedCreateWithoutUserInput = {
    id?: string
    catalogId: number
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
    sessions?: ChargingSessionUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type UserVehicleCreateOrConnectWithoutUserInput = {
    where: UserVehicleWhereUniqueInput
    create: XOR<UserVehicleCreateWithoutUserInput, UserVehicleUncheckedCreateWithoutUserInput>
  }

  export type UserVehicleCreateManyUserInputEnvelope = {
    data: UserVehicleCreateManyUserInput | UserVehicleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChargingStationCreateWithoutOwnerInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
    chargers?: ChargerCreateNestedManyWithoutStationInput
    tickets?: TicketCreateNestedManyWithoutStationInput
  }

  export type ChargingStationUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
    chargers?: ChargerUncheckedCreateNestedManyWithoutStationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutStationInput
  }

  export type ChargingStationCreateOrConnectWithoutOwnerInput = {
    where: ChargingStationWhereUniqueInput
    create: XOR<ChargingStationCreateWithoutOwnerInput, ChargingStationUncheckedCreateWithoutOwnerInput>
  }

  export type ChargingStationCreateManyOwnerInputEnvelope = {
    data: ChargingStationCreateManyOwnerInput | ChargingStationCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutUserInput = {
    id?: string
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    station?: ChargingStationCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: string
    stationId?: string | null
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionUncheckedCreateWithoutUserInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionCreateManyUserInputEnvelope = {
    data: ChatSessionCreateManyUserInput | ChatSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserVehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserVehicleWhereUniqueInput
    update: XOR<UserVehicleUpdateWithoutUserInput, UserVehicleUncheckedUpdateWithoutUserInput>
    create: XOR<UserVehicleCreateWithoutUserInput, UserVehicleUncheckedCreateWithoutUserInput>
  }

  export type UserVehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserVehicleWhereUniqueInput
    data: XOR<UserVehicleUpdateWithoutUserInput, UserVehicleUncheckedUpdateWithoutUserInput>
  }

  export type UserVehicleUpdateManyWithWhereWithoutUserInput = {
    where: UserVehicleScalarWhereInput
    data: XOR<UserVehicleUpdateManyMutationInput, UserVehicleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserVehicleScalarWhereInput = {
    AND?: UserVehicleScalarWhereInput | UserVehicleScalarWhereInput[]
    OR?: UserVehicleScalarWhereInput[]
    NOT?: UserVehicleScalarWhereInput | UserVehicleScalarWhereInput[]
    id?: UuidFilter<"UserVehicle"> | string
    userId?: StringFilter<"UserVehicle"> | string
    catalogId?: IntFilter<"UserVehicle"> | number
    vehicleNo?: StringFilter<"UserVehicle"> | string
    nickname?: StringNullableFilter<"UserVehicle"> | string | null
    createdAt?: DateTimeFilter<"UserVehicle"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: UuidFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    reference?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type ChargingStationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ChargingStationWhereUniqueInput
    update: XOR<ChargingStationUpdateWithoutOwnerInput, ChargingStationUncheckedUpdateWithoutOwnerInput>
    create: XOR<ChargingStationCreateWithoutOwnerInput, ChargingStationUncheckedCreateWithoutOwnerInput>
  }

  export type ChargingStationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ChargingStationWhereUniqueInput
    data: XOR<ChargingStationUpdateWithoutOwnerInput, ChargingStationUncheckedUpdateWithoutOwnerInput>
  }

  export type ChargingStationUpdateManyWithWhereWithoutOwnerInput = {
    where: ChargingStationScalarWhereInput
    data: XOR<ChargingStationUpdateManyMutationInput, ChargingStationUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ChargingStationScalarWhereInput = {
    AND?: ChargingStationScalarWhereInput | ChargingStationScalarWhereInput[]
    OR?: ChargingStationScalarWhereInput[]
    NOT?: ChargingStationScalarWhereInput | ChargingStationScalarWhereInput[]
    id?: UuidFilter<"ChargingStation"> | string
    ownerId?: StringFilter<"ChargingStation"> | string
    name?: StringFilter<"ChargingStation"> | string
    address?: StringFilter<"ChargingStation"> | string
    latitude?: FloatFilter<"ChargingStation"> | number
    longitude?: FloatFilter<"ChargingStation"> | number
    isActive?: BoolFilter<"ChargingStation"> | boolean
    createdAt?: DateTimeFilter<"ChargingStation"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: UuidFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    stationId?: UuidNullableFilter<"Ticket"> | string | null
    subject?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatSessionCreateWithoutUserInput, ChatSessionUncheckedCreateWithoutUserInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutUserInput, ChatSessionUncheckedUpdateWithoutUserInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutUserInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: UuidFilter<"ChatSession"> | string
    userId?: StringFilter<"ChatSession"> | string
    isActive?: BoolFilter<"ChatSession"> | boolean
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type UserVehicleCreateWithoutCatalogInput = {
    id?: string
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    sessions?: ChargingSessionCreateNestedManyWithoutVehicleInput
  }

  export type UserVehicleUncheckedCreateWithoutCatalogInput = {
    id?: string
    userId: string
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
    sessions?: ChargingSessionUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type UserVehicleCreateOrConnectWithoutCatalogInput = {
    where: UserVehicleWhereUniqueInput
    create: XOR<UserVehicleCreateWithoutCatalogInput, UserVehicleUncheckedCreateWithoutCatalogInput>
  }

  export type UserVehicleCreateManyCatalogInputEnvelope = {
    data: UserVehicleCreateManyCatalogInput | UserVehicleCreateManyCatalogInput[]
    skipDuplicates?: boolean
  }

  export type UserVehicleUpsertWithWhereUniqueWithoutCatalogInput = {
    where: UserVehicleWhereUniqueInput
    update: XOR<UserVehicleUpdateWithoutCatalogInput, UserVehicleUncheckedUpdateWithoutCatalogInput>
    create: XOR<UserVehicleCreateWithoutCatalogInput, UserVehicleUncheckedCreateWithoutCatalogInput>
  }

  export type UserVehicleUpdateWithWhereUniqueWithoutCatalogInput = {
    where: UserVehicleWhereUniqueInput
    data: XOR<UserVehicleUpdateWithoutCatalogInput, UserVehicleUncheckedUpdateWithoutCatalogInput>
  }

  export type UserVehicleUpdateManyWithWhereWithoutCatalogInput = {
    where: UserVehicleScalarWhereInput
    data: XOR<UserVehicleUpdateManyMutationInput, UserVehicleUncheckedUpdateManyWithoutCatalogInput>
  }

  export type UserCreateWithoutVehiclesInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    stations?: ChargingStationCreateNestedManyWithoutOwnerInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    stations?: ChargingStationUncheckedCreateNestedManyWithoutOwnerInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type VehicleCatalogCreateWithoutVehiclesInput = {
    brand: string
    model: string
    year: number
    batteryCapacity: number
    vehicleType: $Enums.VehicleType
    isActive?: boolean
  }

  export type VehicleCatalogUncheckedCreateWithoutVehiclesInput = {
    id?: number
    brand: string
    model: string
    year: number
    batteryCapacity: number
    vehicleType: $Enums.VehicleType
    isActive?: boolean
  }

  export type VehicleCatalogCreateOrConnectWithoutVehiclesInput = {
    where: VehicleCatalogWhereUniqueInput
    create: XOR<VehicleCatalogCreateWithoutVehiclesInput, VehicleCatalogUncheckedCreateWithoutVehiclesInput>
  }

  export type ChargingSessionCreateWithoutVehicleInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
    gun: ChargingGunCreateNestedOneWithoutSessionsInput
  }

  export type ChargingSessionUncheckedCreateWithoutVehicleInput = {
    id?: string
    gunId: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
  }

  export type ChargingSessionCreateOrConnectWithoutVehicleInput = {
    where: ChargingSessionWhereUniqueInput
    create: XOR<ChargingSessionCreateWithoutVehicleInput, ChargingSessionUncheckedCreateWithoutVehicleInput>
  }

  export type ChargingSessionCreateManyVehicleInputEnvelope = {
    data: ChargingSessionCreateManyVehicleInput | ChargingSessionCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUpdateManyWithoutOwnerNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUncheckedUpdateManyWithoutOwnerNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VehicleCatalogUpsertWithoutVehiclesInput = {
    update: XOR<VehicleCatalogUpdateWithoutVehiclesInput, VehicleCatalogUncheckedUpdateWithoutVehiclesInput>
    create: XOR<VehicleCatalogCreateWithoutVehiclesInput, VehicleCatalogUncheckedCreateWithoutVehiclesInput>
    where?: VehicleCatalogWhereInput
  }

  export type VehicleCatalogUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: VehicleCatalogWhereInput
    data: XOR<VehicleCatalogUpdateWithoutVehiclesInput, VehicleCatalogUncheckedUpdateWithoutVehiclesInput>
  }

  export type VehicleCatalogUpdateWithoutVehiclesInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    batteryCapacity?: FloatFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleCatalogUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    batteryCapacity?: FloatFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChargingSessionUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ChargingSessionWhereUniqueInput
    update: XOR<ChargingSessionUpdateWithoutVehicleInput, ChargingSessionUncheckedUpdateWithoutVehicleInput>
    create: XOR<ChargingSessionCreateWithoutVehicleInput, ChargingSessionUncheckedCreateWithoutVehicleInput>
  }

  export type ChargingSessionUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ChargingSessionWhereUniqueInput
    data: XOR<ChargingSessionUpdateWithoutVehicleInput, ChargingSessionUncheckedUpdateWithoutVehicleInput>
  }

  export type ChargingSessionUpdateManyWithWhereWithoutVehicleInput = {
    where: ChargingSessionScalarWhereInput
    data: XOR<ChargingSessionUpdateManyMutationInput, ChargingSessionUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ChargingSessionScalarWhereInput = {
    AND?: ChargingSessionScalarWhereInput | ChargingSessionScalarWhereInput[]
    OR?: ChargingSessionScalarWhereInput[]
    NOT?: ChargingSessionScalarWhereInput | ChargingSessionScalarWhereInput[]
    id?: UuidFilter<"ChargingSession"> | string
    userVehicleId?: UuidFilter<"ChargingSession"> | string
    gunId?: UuidFilter<"ChargingSession"> | string
    startTime?: DateTimeFilter<"ChargingSession"> | Date | string
    endTime?: DateTimeNullableFilter<"ChargingSession"> | Date | string | null
    energyUsed?: FloatNullableFilter<"ChargingSession"> | number | null
    totalCost?: DecimalNullableFilter<"ChargingSession"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFilter<"ChargingSession"> | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFilter<"ChargingSession"> | Date | string
  }

  export type UserCreateWithoutStationsInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStationsInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStationsInput, UserUncheckedCreateWithoutStationsInput>
  }

  export type ChargerCreateWithoutStationInput = {
    id?: string
    powerKW: number
    isActive?: boolean
    createdAt?: Date | string
    guns?: ChargingGunCreateNestedManyWithoutChargerInput
  }

  export type ChargerUncheckedCreateWithoutStationInput = {
    id?: string
    powerKW: number
    isActive?: boolean
    createdAt?: Date | string
    guns?: ChargingGunUncheckedCreateNestedManyWithoutChargerInput
  }

  export type ChargerCreateOrConnectWithoutStationInput = {
    where: ChargerWhereUniqueInput
    create: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput>
  }

  export type ChargerCreateManyStationInputEnvelope = {
    data: ChargerCreateManyStationInput | ChargerCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutStationInput = {
    id?: string
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutStationInput = {
    id?: string
    userId: string
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutStationInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutStationInput, TicketUncheckedCreateWithoutStationInput>
  }

  export type TicketCreateManyStationInputEnvelope = {
    data: TicketCreateManyStationInput | TicketCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStationsInput = {
    update: XOR<UserUpdateWithoutStationsInput, UserUncheckedUpdateWithoutStationsInput>
    create: XOR<UserCreateWithoutStationsInput, UserUncheckedCreateWithoutStationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStationsInput, UserUncheckedUpdateWithoutStationsInput>
  }

  export type UserUpdateWithoutStationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChargerUpsertWithWhereUniqueWithoutStationInput = {
    where: ChargerWhereUniqueInput
    update: XOR<ChargerUpdateWithoutStationInput, ChargerUncheckedUpdateWithoutStationInput>
    create: XOR<ChargerCreateWithoutStationInput, ChargerUncheckedCreateWithoutStationInput>
  }

  export type ChargerUpdateWithWhereUniqueWithoutStationInput = {
    where: ChargerWhereUniqueInput
    data: XOR<ChargerUpdateWithoutStationInput, ChargerUncheckedUpdateWithoutStationInput>
  }

  export type ChargerUpdateManyWithWhereWithoutStationInput = {
    where: ChargerScalarWhereInput
    data: XOR<ChargerUpdateManyMutationInput, ChargerUncheckedUpdateManyWithoutStationInput>
  }

  export type ChargerScalarWhereInput = {
    AND?: ChargerScalarWhereInput | ChargerScalarWhereInput[]
    OR?: ChargerScalarWhereInput[]
    NOT?: ChargerScalarWhereInput | ChargerScalarWhereInput[]
    id?: UuidFilter<"Charger"> | string
    stationId?: UuidFilter<"Charger"> | string
    powerKW?: FloatFilter<"Charger"> | number
    isActive?: BoolFilter<"Charger"> | boolean
    createdAt?: DateTimeFilter<"Charger"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutStationInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutStationInput, TicketUncheckedUpdateWithoutStationInput>
    create: XOR<TicketCreateWithoutStationInput, TicketUncheckedCreateWithoutStationInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutStationInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutStationInput, TicketUncheckedUpdateWithoutStationInput>
  }

  export type TicketUpdateManyWithWhereWithoutStationInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutStationInput>
  }

  export type ChargingStationCreateWithoutChargersInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutStationsInput
    tickets?: TicketCreateNestedManyWithoutStationInput
  }

  export type ChargingStationUncheckedCreateWithoutChargersInput = {
    id?: string
    ownerId: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutStationInput
  }

  export type ChargingStationCreateOrConnectWithoutChargersInput = {
    where: ChargingStationWhereUniqueInput
    create: XOR<ChargingStationCreateWithoutChargersInput, ChargingStationUncheckedCreateWithoutChargersInput>
  }

  export type ChargingGunCreateWithoutChargerInput = {
    id?: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: Date | string
    sessions?: ChargingSessionCreateNestedManyWithoutGunInput
  }

  export type ChargingGunUncheckedCreateWithoutChargerInput = {
    id?: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: Date | string
    sessions?: ChargingSessionUncheckedCreateNestedManyWithoutGunInput
  }

  export type ChargingGunCreateOrConnectWithoutChargerInput = {
    where: ChargingGunWhereUniqueInput
    create: XOR<ChargingGunCreateWithoutChargerInput, ChargingGunUncheckedCreateWithoutChargerInput>
  }

  export type ChargingGunCreateManyChargerInputEnvelope = {
    data: ChargingGunCreateManyChargerInput | ChargingGunCreateManyChargerInput[]
    skipDuplicates?: boolean
  }

  export type ChargingStationUpsertWithoutChargersInput = {
    update: XOR<ChargingStationUpdateWithoutChargersInput, ChargingStationUncheckedUpdateWithoutChargersInput>
    create: XOR<ChargingStationCreateWithoutChargersInput, ChargingStationUncheckedCreateWithoutChargersInput>
    where?: ChargingStationWhereInput
  }

  export type ChargingStationUpdateToOneWithWhereWithoutChargersInput = {
    where?: ChargingStationWhereInput
    data: XOR<ChargingStationUpdateWithoutChargersInput, ChargingStationUncheckedUpdateWithoutChargersInput>
  }

  export type ChargingStationUpdateWithoutChargersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStationsNestedInput
    tickets?: TicketUpdateManyWithoutStationNestedInput
  }

  export type ChargingStationUncheckedUpdateWithoutChargersInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutStationNestedInput
  }

  export type ChargingGunUpsertWithWhereUniqueWithoutChargerInput = {
    where: ChargingGunWhereUniqueInput
    update: XOR<ChargingGunUpdateWithoutChargerInput, ChargingGunUncheckedUpdateWithoutChargerInput>
    create: XOR<ChargingGunCreateWithoutChargerInput, ChargingGunUncheckedCreateWithoutChargerInput>
  }

  export type ChargingGunUpdateWithWhereUniqueWithoutChargerInput = {
    where: ChargingGunWhereUniqueInput
    data: XOR<ChargingGunUpdateWithoutChargerInput, ChargingGunUncheckedUpdateWithoutChargerInput>
  }

  export type ChargingGunUpdateManyWithWhereWithoutChargerInput = {
    where: ChargingGunScalarWhereInput
    data: XOR<ChargingGunUpdateManyMutationInput, ChargingGunUncheckedUpdateManyWithoutChargerInput>
  }

  export type ChargingGunScalarWhereInput = {
    AND?: ChargingGunScalarWhereInput | ChargingGunScalarWhereInput[]
    OR?: ChargingGunScalarWhereInput[]
    NOT?: ChargingGunScalarWhereInput | ChargingGunScalarWhereInput[]
    id?: UuidFilter<"ChargingGun"> | string
    chargerId?: UuidFilter<"ChargingGun"> | string
    connectorType?: EnumConnectorTypeFilter<"ChargingGun"> | $Enums.ConnectorType
    status?: EnumChargingGunStatusFilter<"ChargingGun"> | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFilter<"ChargingGun"> | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFilter<"ChargingGun"> | Date | string
  }

  export type ChargerCreateWithoutGunsInput = {
    id?: string
    powerKW: number
    isActive?: boolean
    createdAt?: Date | string
    station: ChargingStationCreateNestedOneWithoutChargersInput
  }

  export type ChargerUncheckedCreateWithoutGunsInput = {
    id?: string
    stationId: string
    powerKW: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ChargerCreateOrConnectWithoutGunsInput = {
    where: ChargerWhereUniqueInput
    create: XOR<ChargerCreateWithoutGunsInput, ChargerUncheckedCreateWithoutGunsInput>
  }

  export type ChargingSessionCreateWithoutGunInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
    vehicle: UserVehicleCreateNestedOneWithoutSessionsInput
  }

  export type ChargingSessionUncheckedCreateWithoutGunInput = {
    id?: string
    userVehicleId: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
  }

  export type ChargingSessionCreateOrConnectWithoutGunInput = {
    where: ChargingSessionWhereUniqueInput
    create: XOR<ChargingSessionCreateWithoutGunInput, ChargingSessionUncheckedCreateWithoutGunInput>
  }

  export type ChargingSessionCreateManyGunInputEnvelope = {
    data: ChargingSessionCreateManyGunInput | ChargingSessionCreateManyGunInput[]
    skipDuplicates?: boolean
  }

  export type ChargerUpsertWithoutGunsInput = {
    update: XOR<ChargerUpdateWithoutGunsInput, ChargerUncheckedUpdateWithoutGunsInput>
    create: XOR<ChargerCreateWithoutGunsInput, ChargerUncheckedCreateWithoutGunsInput>
    where?: ChargerWhereInput
  }

  export type ChargerUpdateToOneWithWhereWithoutGunsInput = {
    where?: ChargerWhereInput
    data: XOR<ChargerUpdateWithoutGunsInput, ChargerUncheckedUpdateWithoutGunsInput>
  }

  export type ChargerUpdateWithoutGunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    station?: ChargingStationUpdateOneRequiredWithoutChargersNestedInput
  }

  export type ChargerUncheckedUpdateWithoutGunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingSessionUpsertWithWhereUniqueWithoutGunInput = {
    where: ChargingSessionWhereUniqueInput
    update: XOR<ChargingSessionUpdateWithoutGunInput, ChargingSessionUncheckedUpdateWithoutGunInput>
    create: XOR<ChargingSessionCreateWithoutGunInput, ChargingSessionUncheckedCreateWithoutGunInput>
  }

  export type ChargingSessionUpdateWithWhereUniqueWithoutGunInput = {
    where: ChargingSessionWhereUniqueInput
    data: XOR<ChargingSessionUpdateWithoutGunInput, ChargingSessionUncheckedUpdateWithoutGunInput>
  }

  export type ChargingSessionUpdateManyWithWhereWithoutGunInput = {
    where: ChargingSessionScalarWhereInput
    data: XOR<ChargingSessionUpdateManyMutationInput, ChargingSessionUncheckedUpdateManyWithoutGunInput>
  }

  export type UserVehicleCreateWithoutSessionsInput = {
    id?: string
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    catalog: VehicleCatalogCreateNestedOneWithoutVehiclesInput
  }

  export type UserVehicleUncheckedCreateWithoutSessionsInput = {
    id?: string
    userId: string
    catalogId: number
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
  }

  export type UserVehicleCreateOrConnectWithoutSessionsInput = {
    where: UserVehicleWhereUniqueInput
    create: XOR<UserVehicleCreateWithoutSessionsInput, UserVehicleUncheckedCreateWithoutSessionsInput>
  }

  export type ChargingGunCreateWithoutSessionsInput = {
    id?: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: Date | string
    charger: ChargerCreateNestedOneWithoutGunsInput
  }

  export type ChargingGunUncheckedCreateWithoutSessionsInput = {
    id?: string
    chargerId: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: Date | string
  }

  export type ChargingGunCreateOrConnectWithoutSessionsInput = {
    where: ChargingGunWhereUniqueInput
    create: XOR<ChargingGunCreateWithoutSessionsInput, ChargingGunUncheckedCreateWithoutSessionsInput>
  }

  export type UserVehicleUpsertWithoutSessionsInput = {
    update: XOR<UserVehicleUpdateWithoutSessionsInput, UserVehicleUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserVehicleCreateWithoutSessionsInput, UserVehicleUncheckedCreateWithoutSessionsInput>
    where?: UserVehicleWhereInput
  }

  export type UserVehicleUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserVehicleWhereInput
    data: XOR<UserVehicleUpdateWithoutSessionsInput, UserVehicleUncheckedUpdateWithoutSessionsInput>
  }

  export type UserVehicleUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    catalog?: VehicleCatalogUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type UserVehicleUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    catalogId?: IntFieldUpdateOperationsInput | number
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingGunUpsertWithoutSessionsInput = {
    update: XOR<ChargingGunUpdateWithoutSessionsInput, ChargingGunUncheckedUpdateWithoutSessionsInput>
    create: XOR<ChargingGunCreateWithoutSessionsInput, ChargingGunUncheckedCreateWithoutSessionsInput>
    where?: ChargingGunWhereInput
  }

  export type ChargingGunUpdateToOneWithWhereWithoutSessionsInput = {
    where?: ChargingGunWhereInput
    data: XOR<ChargingGunUpdateWithoutSessionsInput, ChargingGunUncheckedUpdateWithoutSessionsInput>
  }

  export type ChargingGunUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    charger?: ChargerUpdateOneRequiredWithoutGunsNestedInput
  }

  export type ChargingGunUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    chargerId?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTransactionsInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleCreateNestedManyWithoutUserInput
    stations?: ChargingStationCreateNestedManyWithoutOwnerInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleUncheckedCreateNestedManyWithoutUserInput
    stations?: ChargingStationUncheckedCreateNestedManyWithoutOwnerInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUpdateManyWithoutOwnerNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUncheckedUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUncheckedUpdateManyWithoutOwnerNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTicketsInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    stations?: ChargingStationCreateNestedManyWithoutOwnerInput
    chats?: ChatSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    stations?: ChargingStationUncheckedCreateNestedManyWithoutOwnerInput
    chats?: ChatSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type ChargingStationCreateWithoutTicketsInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutStationsInput
    chargers?: ChargerCreateNestedManyWithoutStationInput
  }

  export type ChargingStationUncheckedCreateWithoutTicketsInput = {
    id?: string
    ownerId: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
    chargers?: ChargerUncheckedCreateNestedManyWithoutStationInput
  }

  export type ChargingStationCreateOrConnectWithoutTicketsInput = {
    where: ChargingStationWhereUniqueInput
    create: XOR<ChargingStationCreateWithoutTicketsInput, ChargingStationUncheckedCreateWithoutTicketsInput>
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUpdateManyWithoutOwnerNestedInput
    chats?: ChatSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUncheckedUpdateManyWithoutOwnerNestedInput
    chats?: ChatSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChargingStationUpsertWithoutTicketsInput = {
    update: XOR<ChargingStationUpdateWithoutTicketsInput, ChargingStationUncheckedUpdateWithoutTicketsInput>
    create: XOR<ChargingStationCreateWithoutTicketsInput, ChargingStationUncheckedCreateWithoutTicketsInput>
    where?: ChargingStationWhereInput
  }

  export type ChargingStationUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ChargingStationWhereInput
    data: XOR<ChargingStationUpdateWithoutTicketsInput, ChargingStationUncheckedUpdateWithoutTicketsInput>
  }

  export type ChargingStationUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStationsNestedInput
    chargers?: ChargerUpdateManyWithoutStationNestedInput
  }

  export type ChargingStationUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chargers?: ChargerUncheckedUpdateManyWithoutStationNestedInput
  }

  export type UserCreateWithoutChatsInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    stations?: ChargingStationCreateNestedManyWithoutOwnerInput
    tickets?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id: string
    clerkId: string
    role?: $Enums.UserRole
    email: string
    phone?: string | null
    walletBalance?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: UserVehicleUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    stations?: ChargingStationUncheckedCreateNestedManyWithoutOwnerInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type UserUpsertWithoutChatsInput = {
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUpdateManyWithoutOwnerNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    walletBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: UserVehicleUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    stations?: ChargingStationUncheckedUpdateManyWithoutOwnerNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserVehicleCreateManyUserInput = {
    id?: string
    catalogId: number
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type ChargingStationCreateManyOwnerInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TicketCreateManyUserInput = {
    id?: string
    stationId?: string | null
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type ChatSessionCreateManyUserInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVehicleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    catalog?: VehicleCatalogUpdateOneRequiredWithoutVehiclesNestedInput
    sessions?: ChargingSessionUpdateManyWithoutVehicleNestedInput
  }

  export type UserVehicleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    catalogId?: IntFieldUpdateOperationsInput | number
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ChargingSessionUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserVehicleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    catalogId?: IntFieldUpdateOperationsInput | number
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingStationUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chargers?: ChargerUpdateManyWithoutStationNestedInput
    tickets?: TicketUpdateManyWithoutStationNestedInput
  }

  export type ChargingStationUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chargers?: ChargerUncheckedUpdateManyWithoutStationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutStationNestedInput
  }

  export type ChargingStationUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station?: ChargingStationUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stationId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stationId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVehicleCreateManyCatalogInput = {
    id?: string
    userId: string
    vehicleNo: string
    nickname?: string | null
    createdAt?: Date | string
  }

  export type UserVehicleUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    sessions?: ChargingSessionUpdateManyWithoutVehicleNestedInput
  }

  export type UserVehicleUncheckedUpdateWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ChargingSessionUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserVehicleUncheckedUpdateManyWithoutCatalogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingSessionCreateManyVehicleInput = {
    id?: string
    gunId: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
  }

  export type ChargingSessionUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gun?: ChargingGunUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ChargingSessionUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    gunId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingSessionUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    gunId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargerCreateManyStationInput = {
    id?: string
    powerKW: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TicketCreateManyStationInput = {
    id?: string
    userId: string
    subject: string
    description: string
    status?: $Enums.TicketStatus
    priority?: $Enums.TicketPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type ChargerUpdateWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guns?: ChargingGunUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guns?: ChargingGunUncheckedUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateManyWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    powerKW?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutStationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChargingGunCreateManyChargerInput = {
    id?: string
    connectorType: $Enums.ConnectorType
    status: $Enums.ChargingGunStatus
    pricePerKwh: Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: Date | string
  }

  export type ChargingGunUpdateWithoutChargerInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ChargingSessionUpdateManyWithoutGunNestedInput
  }

  export type ChargingGunUncheckedUpdateWithoutChargerInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: ChargingSessionUncheckedUpdateManyWithoutGunNestedInput
  }

  export type ChargingGunUncheckedUpdateManyWithoutChargerInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectorType?: EnumConnectorTypeFieldUpdateOperationsInput | $Enums.ConnectorType
    status?: EnumChargingGunStatusFieldUpdateOperationsInput | $Enums.ChargingGunStatus
    pricePerKwh?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastStatusUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingSessionCreateManyGunInput = {
    id?: string
    userVehicleId: string
    startTime?: Date | string
    endTime?: Date | string | null
    energyUsed?: number | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    status: $Enums.ChargingSessionStatus
    createdAt?: Date | string
  }

  export type ChargingSessionUpdateWithoutGunInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: UserVehicleUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ChargingSessionUncheckedUpdateWithoutGunInput = {
    id?: StringFieldUpdateOperationsInput | string
    userVehicleId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargingSessionUncheckedUpdateManyWithoutGunInput = {
    id?: StringFieldUpdateOperationsInput | string
    userVehicleId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    energyUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumChargingSessionStatusFieldUpdateOperationsInput | $Enums.ChargingSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}