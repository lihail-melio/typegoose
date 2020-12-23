(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),p=(n(0),n(129)),l={id:"prop",title:"Prop"},i={unversionedId:"api/decorators/prop",id:"api/decorators/prop",isDocsHomePage:!1,title:"Prop",description:"@prop(options WhatIsIt) is used for setting properties in a Class (without this set, it is just a type and will NOT be in the final model/document)",source:"@site/../docs/api/decorators/prop.md",slug:"/api/decorators/prop",permalink:"/typegoose/docs/api/decorators/prop",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/prop.md",version:"current",sidebar:"docs",previous:{title:"Environment Variables",permalink:"/typegoose/docs/api/environment-variables"},next:{title:"Map Prop",permalink:"/typegoose/docs/api/decorators/map-prop"}},o=[{value:"Options",id:"options",children:[{value:"required",id:"required",children:[]},{value:"index",id:"index",children:[]},{value:"unique",id:"unique",children:[]},{value:"default",id:"default",children:[]},{value:"_id",id:"_id",children:[]},{value:"ref",id:"ref",children:[]},{value:"refPath",id:"refpath",children:[]},{value:"refType",id:"reftype",children:[]},{value:"validate",id:"validate",children:[]},{value:"alias",id:"alias",children:[]},{value:"select",id:"select",children:[]},{value:"get &amp; set",id:"get--set",children:[]},{value:"type",id:"type",children:[]},{value:"enum",id:"enum",children:[]},{value:"addNullToEnum",id:"addnulltoenum",children:[]},{value:"discriminators",id:"discriminators",children:[]},{value:"innerOptions",id:"inneroptions",children:[]},{value:"outerOptions",id:"outeroptions",children:[]},{value:"Array Options",id:"array-options",children:[]},{value:"Map Options",id:"map-options",children:[]},{value:"String Transform options",id:"string-transform-options",children:[]},{value:"String Validation options",id:"string-validation-options",children:[]},{value:"Number Validation options",id:"number-validation-options",children:[]}]}],b={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"@prop(options: object, kind: WhatIsIt)")," is used for setting properties in a Class (without this set, it is just a type and will ",Object(p.b)("strong",{parentName:"p"},"NOT")," be in the final model/document)"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"options")," is to set ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"#options"}),"all options")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"kind")," is to overwrite what kind of prop this is (None = Normal, Array = for arrays, Map = for Maps) (should be auto-inferred)")),Object(p.b)("h2",{id:"options"},"Options"),Object(p.b)("h3",{id:"required"},"required"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Set this to true, if the property is required (best practice is ",Object(p.b)("inlineCode",{parentName:"p"},"public property!: any"),", note the ",Object(p.b)("inlineCode",{parentName:"p"},"!"),")",Object(p.b)("br",{parentName:"p"}),"\n","For more information see the ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"http://mongoosejs.com/docs/api.html#schematype_SchemaType-required"}),"mongoose documentation")),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Something {\n  @prop({ required: true }) // this is now required in the schema\n  public firstName!: string;\n\n  @prop() // by default, a property is not required\n  public lastName?: string; // using the "?" marks the property as optional\n}\n')),Object(p.b)("h3",{id:"index"},"index"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Create an Index for this Property. Should act like the ",Object(p.b)("inlineCode",{parentName:"p"},"@index")," class decorator, but without options."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class IndexedClass {\n  @prop({ index: true })\n  public indexedField?: string;\n}\n")),Object(p.b)("h3",{id:"unique"},"unique"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Create an Index that sets this property to be ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"http://mongoosejs.com/docs/api.html#schematype_SchemaType-unique"}),"unique"),"."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class IndexedClass {\n  @prop({ unique: true }) // implicitly has "index: true"\n  public uniqueId?: string;\n}\n')),Object(p.b)("h3",{id:"default"},"default"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"any")),Object(p.b)("p",null,"Set a default, when no value is given at creation time."),Object(p.b)("p",null,"Example: "),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Defaulted {\n  @prop({ default: 'hello world' })\n  public upperCase?: string; // mark as optional, because it will be defaulted\n}\n")),Object(p.b)("p",null,"You may also set the ",Object(p.b)("inlineCode",{parentName:"p"},"default")," schema option to a function. Mongoose will execute that function and use the return value as the default. "),Object(p.b)("p",null,"Example: "),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Defaulted {\n  @prop({ \n    default: (this: DocumentType<Defaulted>) => {\n      return `${this.firstName} ${this.lastName}`\n    }\n  })\n  public fullName?: string; // mark as optional, because it will be defaulted\n}\n")),Object(p.b)("p",null,"Note: to have the ",Object(p.b)("inlineCode",{parentName:"p"},"this")," keyword correctly typed, you have to pass a ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters"}),"this parameter"),"."),Object(p.b)("h3",{id:"_id"},"_id"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Set this to ",Object(p.b)("inlineCode",{parentName:"p"},"false"),". if you want to turn off creating IDs for sub-documents."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Nested {}\n\nclass Parent {\n  @prop({ _id: false })\n  public nest: Nested;\n}\n")),Object(p.b)("h3",{id:"ref"},"ref"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"Class | string")),Object(p.b)("p",null,"Set which class to use for Reference (this cannot be inferred by the type)."),Object(p.b)("p",null,Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/guides/advanced/reference-other-classes#common-problems"}),"->look here where ",Object(p.b)("inlineCode",{parentName:"a"},"Class")," cannot be used")),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Nested {}\n\nclass Parent {\n  @prop({ ref: Nested })\n  public nest: Ref<Nested>;\n  // or\n  @prop({ ref: 'Nested' })\n  public nest: Ref<Nested>;\n}\n")),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"'Nested'")," form is useful to avoid unintuitive errors due to circular dependencies, such as\n",Object(p.b)("inlineCode",{parentName:"p"},'Error: Options "ref" is set, but is undefined/null!'),"."),Object(p.b)("h3",{id:"refpath"},"refPath"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"Set which path to look for which Class to use."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Car {}\nclass Shop {}\n\n// in another class\nclass Another {\n  @prop({ required: true, enum: 'Car' | 'Shop' })\n  public which!: string;\n\n  @prop({ refPath: 'which' })\n  public kind?: Ref<Car | Shop>;\n}\n")),Object(p.b)("h3",{id:"reftype"},"refType"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.Number")," ","|"," ",Object(p.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.String")," ","|"," ",Object(p.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.Buffer")," ","|"," ",Object(p.b)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.ObjectId")),Object(p.b)("p",null,"Set which Type to use for refs."),Object(p.b)("p",null,"Deprecated since ",Object(p.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(p.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(p.b)("inlineCode",{parentName:"a"},"type"))),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Nested {}\n\nclass Parent {\n  @prop({ ref: 'Nested', refType: mongoose.Schema.Types.ObjectId }) // it is a \"String\" because of reference errors\n  public nest: Ref<Nested>;\n}\n")),Object(p.b)("h3",{id:"validate"},"validate"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"object")," OR ",Object(p.b)("inlineCode",{parentName:"p"},"RegExp")," OR ",Object(p.b)("inlineCode",{parentName:"p"},"(value) => boolean")," OR ",Object(p.b)("inlineCode",{parentName:"p"},"object[]")," Required options of the object:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"validator"),": ",Object(p.b)("inlineCode",{parentName:"li"},"(value) => boolean")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"message"),": ",Object(p.b)("inlineCode",{parentName:"li"},"String"),", the message shows when the validator fails")),Object(p.b)("p",null,"Set a custom function for validation (must return a boolean)."),Object(p.b)("p",null,"Example: (For more Examples look at ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/api.html#schematype_SchemaType-validate"}),"Mongoose's Documentation"),")"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// \"maxlength\" already exists as an option, this just shows how to use validate\nclass Validated {\n  @prop({\n    validate: {\n      validator: (v) => {\n        return v.length <= 10;\n      },\n      message: 'value is over 10 characters long!'\n    }\n  })\n  public validated?: string;\n}\n")),Object(p.b)("h3",{id:"alias"},"alias"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"Set an Alias for a property (best practice is to add type information for it)."),Object(p.b)("p",null,"-> For more information see the ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/guide.html#aliases"}),"mongoose documentation")),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ alias: 'helloWorld' })\n  public hello: string; // will be included in the DB\n  public helloWorld: string; // will NOT be included in the DB, just for type completion (gets passed as hello in the DB)\n}\n")),Object(p.b)("h3",{id:"select"},"select"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Set it to ",Object(p.b)("inlineCode",{parentName:"p"},"false")," if you want to retrieve data without this property by default",Object(p.b)("br",{parentName:"p"}),"\n","-> ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongoosejs.com/docs/api.html#schematype_SchemaType-select"}),"Read more in Mongoose's offical documentation")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ select: false })\n  public hello: string;\n}\n")),Object(p.b)("p",null,"In order to retrieve a prop marked as ",Object(p.b)("inlineCode",{parentName:"p"},"select: false"),", you must explicitly ask for it:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// find all in the collection and have the \"hello\" property selected\nconst dummies = await DummyModel.find().select('+hello').exec();\n")),Object(p.b)("p",null,"Note: ",Object(p.b)("inlineCode",{parentName:"p"},"select()")," accepts an array as well",Object(p.b)("br",{parentName:"p"}),"\n","Note: ",Object(p.b)("inlineCode",{parentName:"p"},"select()")," accepts a long string with space as a separator"),Object(p.b)("h3",{id:"get--set"},"get & set"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"(input) => output")),Object(p.b)("p",null,"set getters & setters for fields, it is not virtual",Object(p.b)("br",{parentName:"p"}),"\n","-> both get & set must be defined all the time, even when just wanting to use one"),Object(p.b)("p",null,"Note: if the WhatIsIt (Primitive / Array / Map) is different from what is got from the reflection, it requires ",Object(p.b)("strong",{parentName:"p"},"explicit")," setting that it is different"),Object(p.b)("p",null,"Pre-process string to string:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ set: (val: string) => val.toLowerCase(), get: (val: string) => val })\n  public hello: string;\n}\n")),Object(p.b)("p",null,"Store string, runtime have string array (string array to string):"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Dummy {\n  // this value is on runtime an "string-array" and is stored in the database as an "primite-string"\n  @prop({ set: (val: string[]) => val.join(\' \'), get: (val: string) => val.split(\' \'), type: String }, WhatIsIt.NONE) // requires explicit setting of "WhatIsIt"\n  public fullName?: string[];\n}\n')),Object(p.b)("h3",{id:"type"},"type"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"any | () => any")),Object(p.b)("p",null,"Overwrite the type generated for the ",Object(p.b)("inlineCode",{parentName:"p"},"design:type")," reflection"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Note"),": Mongoose initializes arrayProp arrays with ",Object(p.b)("inlineCode",{parentName:"p"},"[]")," instead of ",Object(p.b)("inlineCode",{parentName:"p"},"null")," / ",Object(p.b)("inlineCode",{parentName:"p"},"undefined")),Object(p.b)("p",null,"Example: Arrays (array item types can't be automatically inferred via Reflect)"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ type: String })\n  public hello: string[];\n}\n")),Object(p.b)("p",null,"Example: get as ",Object(p.b)("inlineCode",{parentName:"p"},"string[]"),", save as ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ set: (val: string[]) => val.join(' '), get: (val: string) => val.split(' '), type: String })\n  public hello: string[];\n}\n")),Object(p.b)("p",null,"Example: Overwrite type for an enum."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"enum SomeEnum {\n  One,\n  Two\n}\nclass Dummy {\n  @prop({ enum: SomeEnum, type: Number })\n  public enumprop: SomeEnum;\n}\n")),Object(p.b)("p",null,"Example: Overwrite the inferred type as a last resort."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Dummy {\n  @prop({ type: mongoose.Schema.Types.Mixed }) // used for mongoose / how it is stored to the DB\n  public something: NewableFunction; // used for intellisense / TypeScript\n}\n")),Object(p.b)("h3",{id:"enum"},"enum"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"enum | any[]")),Object(p.b)("p",null,"Only allow values from the enum (best practice is to use TypeScript's enum)."),Object(p.b)("p",null,"Note: ",Object(p.b)("inlineCode",{parentName:"p"},"design:type")," will be set to ",Object(p.b)("inlineCode",{parentName:"p"},"String")," if the enum is full of Strings, and ",Object(p.b)("inlineCode",{parentName:"p"},"Number")," if full of Numbers, and ",Object(p.b)("inlineCode",{parentName:"p"},"Object")," of the enum\ncontains both."),Object(p.b)("p",null,"Example for String-Enums:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"enum Gender {\n  MALE = 'male',\n  FEMALE = 'female'\n}\n\nclass Enumed {\n  @prop({ enum: Gender })\n  public gender?: Gender;\n}\n")),Object(p.b)("p",null,"Example for Number-Enums:",Object(p.b)("br",{parentName:"p"}),"\n","(since mongoose 5.8 and typegoose 6.2)"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'enum Gender {\n  MALE, // equal to "= 0"\n  FEMALE // equal to "= 1"\n}\n\nclass Enumed {\n  @prop({ enum: Gender })\n  public gender?: Gender;\n}\n')),Object(p.b)("p",null,"Known-Issues:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Babel doesn't set the type for enums correctly. They need to be set manually with ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"#type"}),"the ",Object(p.b)("inlineCode",{parentName:"a"},"type")," option")),Object(p.b)("li",{parentName:"ul"},"If transpiling your code with ",Object(p.b)("inlineCode",{parentName:"li"},"tsc --transpile-only")," or ",Object(p.b)("inlineCode",{parentName:"li"},"ts-node -- transpile-only"),", then the ",Object(p.b)("inlineCode",{parentName:"li"},"--transpile-only")," needs to be removed or the type needs to be set manually with ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"#type"}),"the ",Object(p.b)("inlineCode",{parentName:"a"},"type")," option"))),Object(p.b)("h3",{id:"addnulltoenum"},"addNullToEnum"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,'Adds "null" to the enum array.'),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Note"),": this doesn't work if the value is ",Object(p.b)("inlineCode",{parentName:"p"},"required")),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"enum SomeNumberEnum {\n  one = 1,\n  two = 2\n}\nclass AddNullToEnum {\n  @prop({ enum: SomeNumberEnum, addNullToEnum: true })\n  public value?: SomeNumberEnum;\n}\n\nconst AddNullToEnumModel = getModelForClass(AddNullToEnum);\n\nAddNullToEnumModel.schema.path('value').options.enum === [1, 2, null]; // true\n\n// this allows to do the following without an validation error\nnew AddNullToEnumModel({ value: null } as AddNullToEnum);\n")),Object(p.b)("h3",{id:"discriminators"},"discriminators"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"() => [DiscriminatorObject | Class]")),Object(p.b)("p",null,"Use this function for embedded discriminators."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Note"),": the ",Object(p.b)("inlineCode",{parentName:"p"},"discriminatorKey")," (like in the example property ",Object(p.b)("inlineCode",{parentName:"p"},"type"),") needs to be always set in a newly created document (via ",Object(p.b)("inlineCode",{parentName:"p"},'.create({..., type: "..."})'),", or ",Object(p.b)("inlineCode",{parentName:"p"},".save()"),")"),Object(p.b)("p",null,"Example for ",Object(p.b)("inlineCode",{parentName:"p"},"[Class]"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({\n  schemaOptions: {\n    discriminatorKey: 'type'\n  }\n})\nclass Building {\n  @prop({ default: 100 })\n  public width: number;\n\n  @prop({ required: true })\n  public type: string;\n}\n\nclass Garage extends Building {\n  @prop({ default: 10 })\n  public slotsForCars: number;\n}\n\nclass SummerHouse extends Building {\n  @prop({ default: 100 })\n  public distanceToLake: number;\n}\n\nclass Area {\n  @prop({ type: Building, discriminators: () => [Garage, SummerHouse] })\n  public buildings: Building[];\n}\n\nconst AreaModel = getModelForClass(Area);\n\n// then somewhere in an async function\nconst area = await AreaModel.create({});\narea.buildings.push({ type: getName(SummerHouse), distanceToLake: 100 } as SummerHouse);\narea.buildings.push({ type: getName(Garage), slotsForCars: 20 } as Garage);\nawait area.save();\n")),Object(p.b)("p",null,"Example for ",Object(p.b)("inlineCode",{parentName:"p"},"[DiscriminatorObject]"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@modelOptions({\n  schemaOptions: {\n    discriminatorKey: 'type'\n  }\n})\nclass Building {\n  @prop({ default: 100 })\n  public width: number;\n\n  @prop({ required: true })\n  public type: string;\n}\n\nclass Garage extends Building {\n  @prop({ default: 10 })\n  public slotsForCars: number;\n}\n\nclass SummerHouse extends Building {\n  @prop({ default: 100 })\n  public distanceToLake: number;\n}\n\nclass Area {\n  @prop({\n    type: Building,\n    discriminators: () => [\n      { type: Garage, value: 'G' },\n      { type: SummerHouse, value: 'S' }\n    ]\n  })\n  public buildings: Building[];\n}\n\nconst AreaModel = getModelForClass(Area);\n\n// then somewhere in an async function\nconst area = await AreaModel.create({});\narea.buildings.push({ type: 'S', distanceToLake: 100 } as SummerHouse);\narea.buildings.push({ type: 'G', slotsForCars: 20 } as Garage);\nawait area.save();\n")),Object(p.b)("h3",{id:"inneroptions"},"innerOptions"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"innerOptions"),' is used to overwrite options to be at the "Type" level',Object(p.b)("br",{parentName:"p"}),"\n","-> Use this only when absolutely necessary and please open a new\nissue about it"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Note"),": this option can be used everywhere ",Object(p.b)("inlineCode",{parentName:"p"},"mapOptions")," function is called (currently being ",Object(p.b)("inlineCode",{parentName:"p"},"WhatIsIt.ARRAY")," and ",Object(p.b)("inlineCode",{parentName:"p"},"WhatIsIt.MAP"),")"),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Something {\n  @prop({ required: true })\n  public propy: string[];\n}\n\n// This would be mapped to\n{\n  type: [{ type: String }],\n  required: true\n}\n\n// when using the overwrite\nclass Something {\n  @prop({ innerOptions: { required: true } })\n  public propy: string[];\n}\n\n// This would be mapped to\n{\n  type: [{ type: String, required: true }]\n}\n")),Object(p.b)("h3",{id:"outeroptions"},"outerOptions"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"outerOptions"),' is used to overwrite options to be at the "Array" level',Object(p.b)("br",{parentName:"p"}),"\n","-> Use this only when absolutely necessary and please open a new\nissue about it"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Note"),": this option can be used everywhere ",Object(p.b)("inlineCode",{parentName:"p"},"mapOptions")," function is called (currently being ",Object(p.b)("inlineCode",{parentName:"p"},"WhatIsIt.ARRAY")," and ",Object(p.b)("inlineCode",{parentName:"p"},"WhatIsIt.MAP"),")"),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Something {\n  @prop({ maxlength: 1 })\n  public propy: string[];\n}\n\n// This would be mapped to\n{\n  type: [{ type: String, maxlength: 1 }]\n}\n\n// when using the overwrite\nclass Something {\n  @prop({ outerOptions: { maxlength: 1 } })\n  public propy: string[];\n}\n\n// This would be mapped to\n{\n  type: [{ type: String }],\n  maxlength: 1\n}\n")),Object(p.b)("h3",{id:"array-options"},"Array Options"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Note"),": option ",Object(p.b)("inlineCode",{parentName:"p"},"type"),"(formally ",Object(p.b)("inlineCode",{parentName:"p"},"items"),") must be provided, otherwise the array will result in ",Object(p.b)("inlineCode",{parentName:"p"},"Mixed")," ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/typegoose/typegoose/issues/300"}),"read typegoose issue #300 for more")),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Kitten {\n  @prop()\n  public name?: string;\n}\n\nclass Cat {\n  @prop({ type: () => [Kitten] })\n  public kitten?: Kitten[]; // "[]" or "Array<any>" or "mongoose.Types.Array<any>" is needed to be detected as an Array\n}\n')),Object(p.b)("h4",{id:"items"},"items"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"any"),Object(p.b)("br",{parentName:"p"}),"\n","(alias for ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(p.b)("inlineCode",{parentName:"a"},"type"))," from ",Object(p.b)("inlineCode",{parentName:"p"},"@prop"),")"),Object(p.b)("p",null,"Deprecated since ",Object(p.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(p.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(p.b)("inlineCode",{parentName:"a"},"type"))),Object(p.b)("p",null,"(see ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(p.b)("inlineCode",{parentName:"a"},"type"))," for Examples)"),Object(p.b)("h4",{id:"dim"},"dim"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"dim")," is used to set the Dimensions this array should have (for something like an matrix)",Object(p.b)("br",{parentName:"p"}),"\n","-> needs to be higher than 0",Object(p.b)("br",{parentName:"p"}),"\n","-> ",Object(p.b)("strong",{parentName:"p"},"This Option is overwritten by using ",Object(p.b)("inlineCode",{parentName:"strong"},"type () => [Type]"))),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Something {\n  @prop({ dim: 3, type: String })\n  public propy: string[][][];\n}\n\n// This would be mapped to\n{\n  type: [[[{ type: String }]]]\n}\n")),Object(p.b)("p",null,"This Option can be ommitted if the following way is used: (since 7.4.0)"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class ArrayInType {\n  @prop({ type: () => [[String]] }) // dim is 2\n  public propy: string[][];\n\n  @prop({ type: () => [String] }) // dim is 1\n  public propy: string[];\n}\n")),Object(p.b)("h3",{id:"map-options"},"Map Options"),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class SomeMapClass {\n  @prop({ type: String })\n  public lookup?: Map<string, string>; // "Map<any, any>" or "mongoose.Types.Map<any>" is needed to be detected as an Map\n}\n')),Object(p.b)("h4",{id:"of"},"of"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"any"),Object(p.b)("br",{parentName:"p"}),"\n","(alias for ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(p.b)("inlineCode",{parentName:"a"},"type"))," from ",Object(p.b)("inlineCode",{parentName:"p"},"@prop"),")"),Object(p.b)("p",null,"Deprecated since ",Object(p.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(p.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(p.b)("inlineCode",{parentName:"a"},"type"))),Object(p.b)("p",null,"(see ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),Object(p.b)("inlineCode",{parentName:"a"},"type"))," for Examples)"),Object(p.b)("h3",{id:"string-transform-options"},"String Transform options"),Object(p.b)("h4",{id:"lowercase"},"lowercase"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Set this to ",Object(p.b)("inlineCode",{parentName:"p"},"true"),", if the value should always be lowercased."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class LowerCased {\n  @prop({ lowercase: true })\n  public lowerCase: string; // "HELLO" -> "hello"\n}\n')),Object(p.b)("h4",{id:"uppercase"},"uppercase"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Set this to ",Object(p.b)("inlineCode",{parentName:"p"},"true"),", if the value should always be UPPERCASED. "),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class UpperCased {\n  @prop({ uppercase: true })\n  public upperCase: string; // "hello" -> "HELLO"\n}\n')),Object(p.b)("h4",{id:"trim"},"trim"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Set this to ",Object(p.b)("inlineCode",{parentName:"p"},"true"),", if the value should always be trimmed."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Trimmed {\n  @prop({ trim: true })\n  public trim: string; // "   Trim me   " -> "Trim me"\n}\n')),Object(p.b)("h3",{id:"string-validation-options"},"String Validation options"),Object(p.b)("h4",{id:"maxlength"},"maxlength"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"number")),Object(p.b)("p",null,"Sets the maximum length the string can have."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class MaxLengthed {\n  @prop({ maxlength: 10 })\n  public maxlengthed?: string; // the string can only be 10 characters long\n}\n")),Object(p.b)("h4",{id:"minlength"},"minlength"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"number")),Object(p.b)("p",null,"Sets the minimum length the string can have (must be above 0)."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class MinLengthed {\n  @prop({ minlength: 10 })\n  public minlengthed?: string; // the string must be at least 10 characters long\n}\n")),Object(p.b)("h4",{id:"match"},"match"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"RegExp")),Object(p.b)("p",null,"Sets a Regular Expression for the string must match."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class RegExpString {\n  @prop({ match: /^H/i })\n  public matched?: string;\n}\n")),Object(p.b)("h3",{id:"number-validation-options"},"Number Validation options"),Object(p.b)("h4",{id:"max"},"max"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"number")),Object(p.b)("p",null,"Sets the maximum value the number property can have."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Maxed {\n  @prop({ max: 10 })\n  public maxed?: number; // the value can be at most 10\n}\n")),Object(p.b)("h4",{id:"min"},"min"),Object(p.b)("p",null,"Accepts Type: ",Object(p.b)("inlineCode",{parentName:"p"},"number")),Object(p.b)("p",null,"Sets the minimum value the number property can have."),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Mined {\n  @prop({ min: 0 })\n  public mined?: number; // the value must be at least 0\n}\n")))}s.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||p;return n?r.a.createElement(d,i(i({ref:t},b),{},{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<p;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);