__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 160,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 160,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 37,
          "decorators": [],
          "name": "handleParamGovernance",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 38,
            "end": 46,
            "decorators": [],
            "name": "zcf",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 46,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 47,
          "end": 159,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 49,
            "end": 159,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 53,
                "end": 157,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 64,
                  "decorators": [],
                  "name": "publicMixin",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 66,
                    "end": 156,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 72,
                        "end": 152,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 89,
                          "decorators": [],
                          "name": "getGovernedParams",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 89,
                          "end": 151,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 91,
                            "end": 151,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 94,
                              "end": 151,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 97,
                                "end": 151,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 97,
                                  "end": 112,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 97,
                                    "end": 107,
                                    "decorators": [],
                                    "name": "globalThis",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 108,
                                    "end": 112,
                                    "decorators": [],
                                    "name": "ERef",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 112,
                                  "end": 151,
                                  "params": [
                                    {
                                      "type": "TSImportType",
                                      "start": 113,
                                      "end": 150,
                                      "argument": {
                                        "type": "TSLiteralType",
                                        "start": 120,
                                        "end": 132,
                                        "literal": {
                                          "type": "Literal",
                                          "start": 120,
                                          "end": 132,
                                          "value": "./types.js",
                                          "raw": "\"./types.js\""
                                        }
                                      },
                                      "options": null,
                                      "qualifier": {
                                        "type": "Identifier",
                                        "start": 134,
                                        "end": 150,
                                        "decorators": [],
                                        "name": "ParamStateRecord",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "_ERef",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 16,
        "end": 30,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 16,
            "end": 17,
            "typeName": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 20,
            "end": 30,
            "typeName": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 27,
              "end": 30,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 28,
                  "end": 29,
                  "typeName": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 99,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 78,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 57,
            "decorators": [],
            "name": "ParamStateRecord",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 61,
            "end": 78,
            "decorators": [],
            "name": "_ParamStateRecord",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 86,
        "end": 98,
        "value": "./types.js",
        "raw": "'./types.js'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 100,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 114,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 115,
        "end": 219,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 142,
            "end": 217,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 155,
                "end": 168,
                "local": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
                  "decorators": [],
                  "name": "_ERef",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exported": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 168,
                  "decorators": [],
                  "name": "ERef",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value"
              },
              {
                "type": "ExportSpecifier",
                "start": 174,
                "end": 211,
                "local": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 191,
                  "decorators": [],
                  "name": "_ParamStateRecord",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exported": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 211,
                  "decorators": [],
                  "name": "ParamStateRecord",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 60,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 30,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 30,
            "decorators": [],
            "name": "handleParamGovernance",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 30,
            "decorators": [],
            "name": "handleParamGovernance",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 59,
        "value": "./contractHelper.js",
        "raw": "'./contractHelper.js'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 107,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 68,
        "end": 107,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 74,
            "end": 106,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "decorators": [],
              "name": "blah",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 81,
              "end": 106,
              "callee": {
                "type": "Identifier",
                "start": 81,
                "end": 102,
                "decorators": [],
                "name": "handleParamGovernance",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 103,
                  "end": 105,
                  "properties": []
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
