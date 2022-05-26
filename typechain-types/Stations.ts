/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace Stations {
  export type BroadcastStruct = {
    broadcast_id: BigNumberish;
    unix_timestamp: BigNumberish;
    author: string;
    content: string;
    signature: BytesLike;
    parent: BigNumberish;
    reference_count: BigNumberish;
    broadcast_type: BytesLike;
    broadcast_flags: BytesLike;
    broadcast_metadata: string;
  };

  export type BroadcastStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    string
  ] & {
    broadcast_id: BigNumber;
    unix_timestamp: BigNumber;
    author: string;
    content: string;
    signature: string;
    parent: BigNumber;
    reference_count: BigNumber;
    broadcast_type: string;
    broadcast_flags: string;
    broadcast_metadata: string;
  };

  export type UserStruct = {
    user_address: string;
    username: string;
    time_joined: BigNumberish;
    user_metadata: string;
  };

  export type UserStructOutput = [string, string, BigNumber, string] & {
    user_address: string;
    username: string;
    time_joined: BigNumber;
    user_metadata: string;
  };
}

export interface StationsInterface extends utils.Interface {
  functions: {
    "_add_user_to_station(address,string)": FunctionFragment;
    "add_admin(address)": FunctionFragment;
    "change_username(string)": FunctionFragment;
    "delete_broadcast(uint256)": FunctionFragment;
    "do_broadcast(string,bytes,uint256,bytes2,bytes2,string,uint256)": FunctionFragment;
    "ec_recover_signer(bytes32,bytes)": FunctionFragment;
    "edit_broadcast(uint256,string,bytes)": FunctionFragment;
    "get_all_broadcasts()": FunctionFragment;
    "get_all_users()": FunctionFragment;
    "get_hash(string)": FunctionFragment;
    "import_broadcast(uint256,address,string,bytes,bytes2,bytes2,string)": FunctionFragment;
    "inaugurate_station(string)": FunctionFragment;
    "is_admin_p(address)": FunctionFragment;
    "is_allowed_in_p(address)": FunctionFragment;
    "join_station(string)": FunctionFragment;
    "remove_admin(address)": FunctionFragment;
    "replace_broadcast_metadata(uint256,string)": FunctionFragment;
    "replace_station_description(string)": FunctionFragment;
    "replace_station_metadata(string)": FunctionFragment;
    "replace_station_name(string)": FunctionFragment;
    "replace_user_metadata(string)": FunctionFragment;
    "reverse_whitelist(address)": FunctionFragment;
    "split_signature(bytes)": FunctionFragment;
    "station_info()": FunctionFragment;
    "user_already_in_station_p(address)": FunctionFragment;
    "username_already_in_station_p(string)": FunctionFragment;
    "verify_broadcast_author(string,address,bytes)": FunctionFragment;
    "very_temp()": FunctionFragment;
    "whitelist_address(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_add_user_to_station"
      | "add_admin"
      | "change_username"
      | "delete_broadcast"
      | "do_broadcast"
      | "ec_recover_signer"
      | "edit_broadcast"
      | "get_all_broadcasts"
      | "get_all_users"
      | "get_hash"
      | "import_broadcast"
      | "inaugurate_station"
      | "is_admin_p"
      | "is_allowed_in_p"
      | "join_station"
      | "remove_admin"
      | "replace_broadcast_metadata"
      | "replace_station_description"
      | "replace_station_metadata"
      | "replace_station_name"
      | "replace_user_metadata"
      | "reverse_whitelist"
      | "split_signature"
      | "station_info"
      | "user_already_in_station_p"
      | "username_already_in_station_p"
      | "verify_broadcast_author"
      | "very_temp"
      | "whitelist_address"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_add_user_to_station",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "add_admin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "change_username",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "delete_broadcast",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "do_broadcast",
    values: [
      string,
      BytesLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "ec_recover_signer",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "edit_broadcast",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "get_all_broadcasts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get_all_users",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "get_hash", values: [string]): string;
  encodeFunctionData(
    functionFragment: "import_broadcast",
    values: [
      BigNumberish,
      string,
      string,
      BytesLike,
      BytesLike,
      BytesLike,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "inaugurate_station",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "is_admin_p", values: [string]): string;
  encodeFunctionData(
    functionFragment: "is_allowed_in_p",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "join_station",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_admin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "replace_broadcast_metadata",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "replace_station_description",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "replace_station_metadata",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "replace_station_name",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "replace_user_metadata",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "reverse_whitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "split_signature",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "station_info",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "user_already_in_station_p",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "username_already_in_station_p",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verify_broadcast_author",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "very_temp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whitelist_address",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_add_user_to_station",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add_admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "change_username",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delete_broadcast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "do_broadcast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ec_recover_signer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "edit_broadcast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_all_broadcasts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_all_users",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get_hash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "import_broadcast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inaugurate_station",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "is_admin_p", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "is_allowed_in_p",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "join_station",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remove_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replace_broadcast_metadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replace_station_description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replace_station_metadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replace_station_name",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replace_user_metadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reverse_whitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "split_signature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "station_info",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_already_in_station_p",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "username_already_in_station_p",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verify_broadcast_author",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "very_temp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelist_address",
    data: BytesLike
  ): Result;

  events: {
    "BroadcastChange(string,tuple)": EventFragment;
    "NewBroadcast(tuple)": EventFragment;
    "StationMetadataChange(string)": EventFragment;
    "UserJoined(tuple)": EventFragment;
    "UserMetadataChange(string,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BroadcastChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewBroadcast"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StationMetadataChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserJoined"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserMetadataChange"): EventFragment;
}

export interface BroadcastChangeEventObject {
  whatkindofchange: string;
  thebroadcast: Stations.BroadcastStructOutput;
}
export type BroadcastChangeEvent = TypedEvent<
  [string, Stations.BroadcastStructOutput],
  BroadcastChangeEventObject
>;

export type BroadcastChangeEventFilter = TypedEventFilter<BroadcastChangeEvent>;

export interface NewBroadcastEventObject {
  thebroadcast: Stations.BroadcastStructOutput;
}
export type NewBroadcastEvent = TypedEvent<
  [Stations.BroadcastStructOutput],
  NewBroadcastEventObject
>;

export type NewBroadcastEventFilter = TypedEventFilter<NewBroadcastEvent>;

export interface StationMetadataChangeEventObject {
  whatkindofchange: string;
}
export type StationMetadataChangeEvent = TypedEvent<
  [string],
  StationMetadataChangeEventObject
>;

export type StationMetadataChangeEventFilter =
  TypedEventFilter<StationMetadataChangeEvent>;

export interface UserJoinedEventObject {
  theuser: Stations.UserStructOutput;
}
export type UserJoinedEvent = TypedEvent<
  [Stations.UserStructOutput],
  UserJoinedEventObject
>;

export type UserJoinedEventFilter = TypedEventFilter<UserJoinedEvent>;

export interface UserMetadataChangeEventObject {
  whatkindofchange: string;
  theuser: Stations.UserStructOutput;
}
export type UserMetadataChangeEvent = TypedEvent<
  [string, Stations.UserStructOutput],
  UserMetadataChangeEventObject
>;

export type UserMetadataChangeEventFilter =
  TypedEventFilter<UserMetadataChangeEvent>;

export interface Stations extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StationsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _add_user_to_station(
      new_user_address: string,
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    add_admin(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    change_username(
      new_username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delete_broadcast(
      id_to_delete: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    do_broadcast(
      content: string,
      signature: BytesLike,
      parent: BigNumberish,
      broadcast_type: BytesLike,
      broadcast_flags: BytesLike,
      broadcast_metadata: string,
      optional_timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ec_recover_signer(
      msg_hash: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    edit_broadcast(
      id_to_edit: BigNumberish,
      newcontent: string,
      newsignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get_all_broadcasts(
      overrides?: CallOverrides
    ): Promise<[Stations.BroadcastStructOutput[]]>;

    get_all_users(
      overrides?: CallOverrides
    ): Promise<[Stations.UserStructOutput[]]>;

    get_hash(text: string, overrides?: CallOverrides): Promise<[string]>;

    import_broadcast(
      unix_timestamp: BigNumberish,
      author: string,
      content: string,
      sig: BytesLike,
      broadcast_type: BytesLike,
      broadcast_flags: BytesLike,
      broadcast_metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    inaugurate_station(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    is_admin_p(who: string, overrides?: CallOverrides): Promise<[boolean]>;

    is_allowed_in_p(who: string, overrides?: CallOverrides): Promise<[boolean]>;

    join_station(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove_admin(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    replace_broadcast_metadata(
      id_to_edit: BigNumberish,
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    replace_station_description(
      newdescription: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    replace_station_metadata(
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    replace_station_name(
      newname: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    replace_user_metadata(
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reverse_whitelist(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    split_signature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    station_info(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber
      ]
    >;

    user_already_in_station_p(
      who: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    username_already_in_station_p(
      a_name: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verify_broadcast_author(
      content: string,
      alleged_author: string,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    very_temp(overrides?: CallOverrides): Promise<[string]>;

    whitelist_address(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _add_user_to_station(
    new_user_address: string,
    username: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  add_admin(
    someone: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  change_username(
    new_username: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delete_broadcast(
    id_to_delete: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  do_broadcast(
    content: string,
    signature: BytesLike,
    parent: BigNumberish,
    broadcast_type: BytesLike,
    broadcast_flags: BytesLike,
    broadcast_metadata: string,
    optional_timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ec_recover_signer(
    msg_hash: BytesLike,
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  edit_broadcast(
    id_to_edit: BigNumberish,
    newcontent: string,
    newsignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get_all_broadcasts(
    overrides?: CallOverrides
  ): Promise<Stations.BroadcastStructOutput[]>;

  get_all_users(
    overrides?: CallOverrides
  ): Promise<Stations.UserStructOutput[]>;

  get_hash(text: string, overrides?: CallOverrides): Promise<string>;

  import_broadcast(
    unix_timestamp: BigNumberish,
    author: string,
    content: string,
    sig: BytesLike,
    broadcast_type: BytesLike,
    broadcast_flags: BytesLike,
    broadcast_metadata: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  inaugurate_station(
    username: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  is_admin_p(who: string, overrides?: CallOverrides): Promise<boolean>;

  is_allowed_in_p(who: string, overrides?: CallOverrides): Promise<boolean>;

  join_station(
    username: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove_admin(
    someone: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  replace_broadcast_metadata(
    id_to_edit: BigNumberish,
    newmetadata: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  replace_station_description(
    newdescription: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  replace_station_metadata(
    newmetadata: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  replace_station_name(
    newname: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  replace_user_metadata(
    newmetadata: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reverse_whitelist(
    someone: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  split_signature(
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

  station_info(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      string,
      string,
      string,
      BigNumber,
      BigNumber
    ]
  >;

  user_already_in_station_p(
    who: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  username_already_in_station_p(
    a_name: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verify_broadcast_author(
    content: string,
    alleged_author: string,
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  very_temp(overrides?: CallOverrides): Promise<string>;

  whitelist_address(
    someone: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _add_user_to_station(
      new_user_address: string,
      username: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    add_admin(someone: string, overrides?: CallOverrides): Promise<boolean>;

    change_username(
      new_username: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    delete_broadcast(
      id_to_delete: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    do_broadcast(
      content: string,
      signature: BytesLike,
      parent: BigNumberish,
      broadcast_type: BytesLike,
      broadcast_flags: BytesLike,
      broadcast_metadata: string,
      optional_timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    ec_recover_signer(
      msg_hash: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    edit_broadcast(
      id_to_edit: BigNumberish,
      newcontent: string,
      newsignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    get_all_broadcasts(
      overrides?: CallOverrides
    ): Promise<Stations.BroadcastStructOutput[]>;

    get_all_users(
      overrides?: CallOverrides
    ): Promise<Stations.UserStructOutput[]>;

    get_hash(text: string, overrides?: CallOverrides): Promise<string>;

    import_broadcast(
      unix_timestamp: BigNumberish,
      author: string,
      content: string,
      sig: BytesLike,
      broadcast_type: BytesLike,
      broadcast_flags: BytesLike,
      broadcast_metadata: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inaugurate_station(
      username: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    is_admin_p(who: string, overrides?: CallOverrides): Promise<boolean>;

    is_allowed_in_p(who: string, overrides?: CallOverrides): Promise<boolean>;

    join_station(username: string, overrides?: CallOverrides): Promise<boolean>;

    remove_admin(someone: string, overrides?: CallOverrides): Promise<boolean>;

    replace_broadcast_metadata(
      id_to_edit: BigNumberish,
      newmetadata: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    replace_station_description(
      newdescription: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    replace_station_metadata(
      newmetadata: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    replace_station_name(
      newname: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    replace_user_metadata(
      newmetadata: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    reverse_whitelist(
      someone: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    split_signature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, number] & { r: string; s: string; v: number }>;

    station_info(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber
      ]
    >;

    user_already_in_station_p(
      who: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    username_already_in_station_p(
      a_name: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verify_broadcast_author(
      content: string,
      alleged_author: string,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    very_temp(overrides?: CallOverrides): Promise<string>;

    whitelist_address(
      someone: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "BroadcastChange(string,tuple)"(
      whatkindofchange?: null,
      thebroadcast?: null
    ): BroadcastChangeEventFilter;
    BroadcastChange(
      whatkindofchange?: null,
      thebroadcast?: null
    ): BroadcastChangeEventFilter;

    "NewBroadcast(tuple)"(thebroadcast?: null): NewBroadcastEventFilter;
    NewBroadcast(thebroadcast?: null): NewBroadcastEventFilter;

    "StationMetadataChange(string)"(
      whatkindofchange?: null
    ): StationMetadataChangeEventFilter;
    StationMetadataChange(
      whatkindofchange?: null
    ): StationMetadataChangeEventFilter;

    "UserJoined(tuple)"(theuser?: null): UserJoinedEventFilter;
    UserJoined(theuser?: null): UserJoinedEventFilter;

    "UserMetadataChange(string,tuple)"(
      whatkindofchange?: null,
      theuser?: null
    ): UserMetadataChangeEventFilter;
    UserMetadataChange(
      whatkindofchange?: null,
      theuser?: null
    ): UserMetadataChangeEventFilter;
  };

  estimateGas: {
    _add_user_to_station(
      new_user_address: string,
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    add_admin(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    change_username(
      new_username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delete_broadcast(
      id_to_delete: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    do_broadcast(
      content: string,
      signature: BytesLike,
      parent: BigNumberish,
      broadcast_type: BytesLike,
      broadcast_flags: BytesLike,
      broadcast_metadata: string,
      optional_timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ec_recover_signer(
      msg_hash: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    edit_broadcast(
      id_to_edit: BigNumberish,
      newcontent: string,
      newsignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get_all_broadcasts(overrides?: CallOverrides): Promise<BigNumber>;

    get_all_users(overrides?: CallOverrides): Promise<BigNumber>;

    get_hash(text: string, overrides?: CallOverrides): Promise<BigNumber>;

    import_broadcast(
      unix_timestamp: BigNumberish,
      author: string,
      content: string,
      sig: BytesLike,
      broadcast_type: BytesLike,
      broadcast_flags: BytesLike,
      broadcast_metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    inaugurate_station(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    is_admin_p(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    is_allowed_in_p(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    join_station(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove_admin(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    replace_broadcast_metadata(
      id_to_edit: BigNumberish,
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    replace_station_description(
      newdescription: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    replace_station_metadata(
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    replace_station_name(
      newname: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    replace_user_metadata(
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reverse_whitelist(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    split_signature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    station_info(overrides?: CallOverrides): Promise<BigNumber>;

    user_already_in_station_p(
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    username_already_in_station_p(
      a_name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify_broadcast_author(
      content: string,
      alleged_author: string,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    very_temp(overrides?: CallOverrides): Promise<BigNumber>;

    whitelist_address(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _add_user_to_station(
      new_user_address: string,
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    add_admin(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    change_username(
      new_username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delete_broadcast(
      id_to_delete: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    do_broadcast(
      content: string,
      signature: BytesLike,
      parent: BigNumberish,
      broadcast_type: BytesLike,
      broadcast_flags: BytesLike,
      broadcast_metadata: string,
      optional_timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ec_recover_signer(
      msg_hash: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    edit_broadcast(
      id_to_edit: BigNumberish,
      newcontent: string,
      newsignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get_all_broadcasts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_all_users(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_hash(
      text: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    import_broadcast(
      unix_timestamp: BigNumberish,
      author: string,
      content: string,
      sig: BytesLike,
      broadcast_type: BytesLike,
      broadcast_flags: BytesLike,
      broadcast_metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    inaugurate_station(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    is_admin_p(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    is_allowed_in_p(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    join_station(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove_admin(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    replace_broadcast_metadata(
      id_to_edit: BigNumberish,
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    replace_station_description(
      newdescription: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    replace_station_metadata(
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    replace_station_name(
      newname: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    replace_user_metadata(
      newmetadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reverse_whitelist(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    split_signature(
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    station_info(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    user_already_in_station_p(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    username_already_in_station_p(
      a_name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify_broadcast_author(
      content: string,
      alleged_author: string,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    very_temp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelist_address(
      someone: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}