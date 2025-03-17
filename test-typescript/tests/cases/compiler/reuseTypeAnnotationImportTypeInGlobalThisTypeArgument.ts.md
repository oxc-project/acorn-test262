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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 160,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 37,
          "decorators": [],
          "name": "handleParamGovernance",
          "optional": false,
          "typeAnnotation": null
        },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 64,
                  "decorators": [],
                  "name": "publicMixin",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 89,
                          "decorators": [],
                          "name": "getGovernedParams",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 89,
                          "end": 151,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 91,
                            "end": 151,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 94,
                              "end": 151,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 97,
                                "end": 151,
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
                                          "raw": "\"./types.js\"",
                                          "value": "./types.js"
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
                                },
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
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "_ERef",
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 20,
            "end": 30,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 27,
              "end": 30,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 28,
                  "end": 29,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 99,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 86,
        "end": 98,
        "raw": "'./types.js'",
        "value": "./types.js"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 61,
            "end": 78,
            "decorators": [],
            "name": "_ParamStateRecord",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 100,
      "end": 219,
      "body": {
        "type": "TSModuleBlock",
        "start": 115,
        "end": 219,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 142,
            "end": 217,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 155,
                "end": 168,
                "exported": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 168,
                  "decorators": [],
                  "name": "ERef",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
                  "decorators": [],
                  "name": "_ERef",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "ExportSpecifier",
                "start": 174,
                "end": 211,
                "exported": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 211,
                  "decorators": [],
                  "name": "ParamStateRecord",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 191,
                  "decorators": [],
                  "name": "_ParamStateRecord",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 114,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
