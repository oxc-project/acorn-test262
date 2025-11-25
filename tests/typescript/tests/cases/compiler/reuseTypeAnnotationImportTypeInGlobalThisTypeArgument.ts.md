__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "handleParamGovernance",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 37
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "zcf",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "start": 41,
              "end": 46
            },
            "start": 38,
            "end": 46
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicMixin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 64
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getGovernedParams",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 89
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "globalThis",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 97,
                                    "end": 107
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ERef",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 108,
                                    "end": 112
                                  },
                                  "start": 97,
                                  "end": 112
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSImportType",
                                      "source": {
                                        "type": "Literal",
                                        "value": "./types.js",
                                        "raw": "\"./types.js\"",
                                        "start": 120,
                                        "end": 132
                                      },
                                      "options": null,
                                      "qualifier": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ParamStateRecord",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 134,
                                        "end": 150
                                      },
                                      "typeArguments": null,
                                      "start": 113,
                                      "end": 150
                                    }
                                  ],
                                  "start": 112,
                                  "end": 151
                                },
                                "start": 97,
                                "end": 151
                              },
                              "start": 94,
                              "end": 151
                            },
                            "start": 91,
                            "end": 151
                          },
                          "start": 89,
                          "end": 151
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 72,
                        "end": 152
                      }
                    ],
                    "start": 66,
                    "end": 156
                  },
                  "start": 64,
                  "end": 156
                },
                "accessibility": null,
                "static": false,
                "start": 53,
                "end": 157
              }
            ],
            "start": 49,
            "end": 159
          },
          "start": 47,
          "end": 159
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_ERef",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "typeArguments": null,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 29
                  },
                  "typeArguments": null,
                  "start": 28,
                  "end": 29
                }
              ],
              "start": 27,
              "end": 30
            },
            "start": 20,
            "end": 30
          }
        ],
        "start": 16,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ParamStateRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ParamStateRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 78
          },
          "importKind": "value",
          "start": 41,
          "end": 78
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types.js",
        "raw": "'./types.js'",
        "start": 86,
        "end": 98
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 99
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 114
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_ERef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 160
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ERef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 168
                },
                "exportKind": "value",
                "start": 155,
                "end": 168
              },
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_ParamStateRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 191
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParamStateRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 211
                },
                "exportKind": "value",
                "start": 174,
                "end": 211
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 142,
            "end": 217
          }
        ],
        "start": 115,
        "end": 219
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 100,
      "end": 219
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "handleParamGovernance",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 30
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "handleParamGovernance",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 30
          },
          "importKind": "value",
          "start": 9,
          "end": 30
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./contractHelper.js",
        "raw": "'./contractHelper.js'",
        "start": 38,
        "end": 59
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 60
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "blah",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 78
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "handleParamGovernance",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 102
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 103,
                  "end": 105
                }
              ],
              "optional": false,
              "start": 81,
              "end": 106
            },
            "definite": false,
            "start": 74,
            "end": 106
          }
        ],
        "declare": false,
        "start": 68,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
