__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "createCacheReducer",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 24
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 29
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 28,
                  "end": 44
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "QR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 48
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 46,
                  "end": 48
                }
              ],
              "start": 27,
              "end": 49
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cache",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 69
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 71
                            },
                            "typeArguments": null,
                            "start": 70,
                            "end": 71
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "QR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 73,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 73,
                            "end": 75
                          }
                        ],
                        "start": 69,
                        "end": 76
                      },
                      "start": 64,
                      "end": 76
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "queries",
                        "raw": "\"queries\"",
                        "start": 77,
                        "end": 86
                      },
                      "start": 77,
                      "end": 86
                    },
                    "start": 64,
                    "end": 87
                  },
                  "start": 62,
                  "end": 87
                },
                "start": 55,
                "end": 87
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "queriesMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 116
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 119,
                          "end": 121
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "QR",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 127
                          },
                          "typeArguments": null,
                          "start": 125,
                          "end": 127
                        },
                        "start": 119,
                        "end": 127
                      },
                      "definite": false,
                      "start": 106,
                      "end": 127
                    }
                  ],
                  "declare": false,
                  "start": 100,
                  "end": 128
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "initialState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 152
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "queries",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 165,
                              "end": 172
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "queriesMap",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 174,
                              "end": 184
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 165,
                            "end": 184
                          }
                        ],
                        "start": 155,
                        "end": 191
                      },
                      "definite": false,
                      "start": 140,
                      "end": 191
                    }
                  ],
                  "declare": false,
                  "start": 134,
                  "end": 192
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 211
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "initialState",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 226
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 206,
                        "end": 226
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 231,
                      "end": 236
                    },
                    "id": null,
                    "generator": false,
                    "start": 205,
                    "end": 236
                  },
                  "start": 198,
                  "end": 237
                }
              ],
              "start": 94,
              "end": 239
            },
            "id": null,
            "generator": false,
            "start": 27,
            "end": 239
          },
          "definite": false,
          "start": 6,
          "end": 239
        }
      ],
      "declare": false,
      "start": 0,
      "end": 240
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cache",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 259
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 260,
              "end": 276
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "QR",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 280
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 278,
              "end": 280
            }
          ],
          "start": 259,
          "end": 281
        },
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
                "name": "queries",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 297
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "QK",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 312
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QR",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 324
                      },
                      "typeArguments": null,
                      "start": 322,
                      "end": 324
                    },
                    "start": 316,
                    "end": 324
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 337
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createCacheReducer",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 363
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "QR",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 364,
                                  "end": 366
                                },
                                "typeArguments": null,
                                "start": 364,
                                "end": 366
                              }
                            ],
                            "start": 363,
                            "end": 367
                          },
                          "start": 338,
                          "end": 367
                        }
                      ],
                      "start": 337,
                      "end": 368
                    },
                    "start": 327,
                    "end": 368
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 299,
                  "end": 375
                },
                "start": 297,
                "end": 375
              },
              "accessibility": null,
              "static": false,
              "start": 290,
              "end": 376
            }
          ],
          "start": 284,
          "end": 378
        },
        "declare": false,
        "start": 249,
        "end": 379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 242,
      "end": 379
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 379
}
```
