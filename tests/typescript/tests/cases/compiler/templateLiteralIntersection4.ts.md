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
        "name": "StateHook",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 28
                },
                "typeArguments": null,
                "start": 27,
                "end": 28
              },
              {
                "type": "TSUnknownKeyword",
                "start": 30,
                "end": 37
              }
            ],
            "start": 26,
            "end": 38
          },
          "start": 23,
          "end": 38
        },
        "start": 20,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StoreUtils",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 56
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Store",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 62
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 77,
                          "end": 83
                        },
                        "start": 75,
                        "end": 83
                      },
                      "start": 74,
                      "end": 83
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 86,
                      "end": 89
                    },
                    "start": 84,
                    "end": 89
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 73,
                  "end": 89
                }
              ],
              "start": 71,
              "end": 91
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 57,
            "end": 91
          }
        ],
        "start": 56,
        "end": 92
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 99
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 108
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Store",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 123
                      },
                      "typeArguments": null,
                      "start": 118,
                      "end": 123
                    },
                    "start": 112,
                    "end": 123
                  },
                  "nameType": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "use",
                          "cooked": "use"
                        },
                        "tail": false,
                        "start": 127,
                        "end": 133
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 155,
                        "end": 157
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Capitalize",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 143
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 144,
                                  "end": 150
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 153,
                                    "end": 154
                                  },
                                  "typeArguments": null,
                                  "start": 153,
                                  "end": 154
                                }
                              ],
                              "start": 144,
                              "end": 154
                            }
                          ],
                          "start": 143,
                          "end": 155
                        },
                        "start": 133,
                        "end": 155
                      }
                    ],
                    "start": 127,
                    "end": 157
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StateHook",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 169
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Store",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 170,
                              "end": 175
                            },
                            "typeArguments": null,
                            "start": 170,
                            "end": 175
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 176,
                              "end": 177
                            },
                            "typeArguments": null,
                            "start": 176,
                            "end": 177
                          },
                          "start": 170,
                          "end": 178
                        }
                      ],
                      "start": 169,
                      "end": 179
                    },
                    "start": 160,
                    "end": 179
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 100,
                  "end": 181
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "useStore",
                    "raw": "'useStore'",
                    "start": 183,
                    "end": 193
                  },
                  "start": 183,
                  "end": 193
                }
              ],
              "start": 99,
              "end": 194
            },
            "start": 95,
            "end": 194
          },
          {
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
                  "name": "Provider",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 209
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 211,
                    "end": 218
                  },
                  "start": 209,
                  "end": 218
                },
                "accessibility": null,
                "static": false,
                "start": 201,
                "end": 219
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useStore",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 230
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StateHook",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 241
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Store",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 247
                          },
                          "typeArguments": null,
                          "start": 242,
                          "end": 247
                        }
                      ],
                      "start": 241,
                      "end": 248
                    },
                    "start": 232,
                    "end": 248
                  },
                  "start": 230,
                  "end": 248
                },
                "accessibility": null,
                "static": false,
                "start": 222,
                "end": 248
              }
            ],
            "start": 197,
            "end": 250
          }
        ],
        "start": 95,
        "end": 250
      },
      "declare": false,
      "start": 41,
      "end": 251
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createStore",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 281
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Store",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 287
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 302,
                          "end": 308
                        },
                        "start": 300,
                        "end": 308
                      },
                      "start": 299,
                      "end": 308
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 311,
                      "end": 314
                    },
                    "start": 309,
                    "end": 314
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 298,
                  "end": 314
                }
              ],
              "start": 296,
              "end": 316
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 282,
            "end": 316
          }
        ],
        "start": 281,
        "end": 317
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "store",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Store",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 330
              },
              "typeArguments": null,
              "start": 325,
              "end": 330
            },
            "start": 323,
            "end": 330
          },
          "start": 318,
          "end": 330
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StoreUtils",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 343
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 349
                },
                "typeArguments": null,
                "start": 344,
                "end": 349
              }
            ],
            "start": 343,
            "end": 350
          },
          "start": 333,
          "end": 350
        },
        "start": 331,
        "end": 350
      },
      "body": null,
      "expression": false,
      "start": 253,
      "end": 351
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Provider",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 369
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Provider",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 369
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 361,
                "end": 369
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useUsername",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 382
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useUsername",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 382
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 371,
                "end": 382
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useAge",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 390
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useAge",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 390
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 384,
                "end": 390
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useStore",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 400
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useStore",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 400
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 392,
                "end": 400
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 402
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createStore",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 416
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "username",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 429
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Aral",
                      "raw": "\"Aral\"",
                      "start": 431,
                      "end": 437
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 421,
                    "end": 437
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "age",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 444
                    },
                    "value": {
                      "type": "Literal",
                      "value": 31,
                      "raw": "31",
                      "start": 446,
                      "end": 448
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 441,
                    "end": 448
                  }
                ],
                "start": 417,
                "end": 450
              }
            ],
            "optional": false,
            "start": 405,
            "end": 451
          },
          "definite": false,
          "start": 359,
          "end": 451
        }
      ],
      "declare": false,
      "start": 353,
      "end": 452
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 452
}
```
