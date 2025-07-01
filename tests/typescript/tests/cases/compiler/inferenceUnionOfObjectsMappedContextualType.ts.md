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
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "someDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 28
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 30,
                          "end": 34
                        },
                        "typeArguments": null,
                        "start": 30,
                        "end": 34
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 37,
                        "end": 41
                      }
                    ],
                    "start": 30,
                    "end": 41
                  },
                  "start": 28,
                  "end": 41
                },
                "accessibility": null,
                "static": false,
                "start": 20,
                "end": 42
              }
            ],
            "start": 14,
            "end": 44
          },
          {
            "type": "TSUnionType",
            "types": [
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 52
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 50,
                    "end": 61
                  }
                ],
                "start": 48,
                "end": 63
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 70
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      },
                      "start": 70,
                      "end": 78
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 68,
                    "end": 79
                  }
                ],
                "start": 66,
                "end": 81
              }
            ],
            "start": 48,
            "end": 81
          }
        ],
        "start": 14,
        "end": 82
      },
      "declare": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RowRendererMeta",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 104
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 111
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 120,
              "end": 122
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 105,
            "end": 122
          }
        ],
        "start": 104,
        "end": 123
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 136
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 152
            },
            "typeArguments": null,
            "start": 146,
            "end": 152
          },
          "start": 140,
          "end": 152
        },
        "nameType": null,
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
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 160
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 165
                  },
                  "typeArguments": null,
                  "start": 162,
                  "end": 165
                },
                "start": 160,
                "end": 165
              },
              "accessibility": null,
              "static": false,
              "start": 157,
              "end": 166
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "caption",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 174
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 176,
                  "end": 182
                },
                "start": 174,
                "end": 182
              },
              "accessibility": null,
              "static": false,
              "start": 167,
              "end": 183
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatter",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 193
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
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
                              "name": "TInput",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 204,
                              "end": 210
                            },
                            "typeArguments": null,
                            "start": 204,
                            "end": 210
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 211,
                              "end": 214
                            },
                            "typeArguments": null,
                            "start": 211,
                            "end": 214
                          },
                          "start": 204,
                          "end": 215
                        },
                        "start": 202,
                        "end": 215
                      },
                      "start": 197,
                      "end": 215
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 220,
                      "end": 226
                    },
                    "start": 217,
                    "end": 226
                  },
                  "start": 196,
                  "end": 226
                },
                "start": 194,
                "end": 226
              },
              "accessibility": null,
              "static": false,
              "start": 184,
              "end": 227
            }
          ],
          "start": 155,
          "end": 229
        },
        "optional": false,
        "readonly": null,
        "start": 126,
        "end": 232
      },
      "declare": false,
      "start": 84,
      "end": 232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RowRenderer",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 250
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 257
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 266,
              "end": 268
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 251,
            "end": 268
          }
        ],
        "start": 250,
        "end": 269
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RowRendererMeta",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 287
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 294
                },
                "typeArguments": null,
                "start": 288,
                "end": 294
              }
            ],
            "start": 287,
            "end": 295
          },
          "start": 272,
          "end": 295
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RowRendererMeta",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 317
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TInput",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 324
                  },
                  "typeArguments": null,
                  "start": 318,
                  "end": 324
                }
              ],
              "start": 317,
              "end": 325
            },
            "start": 302,
            "end": 325
          },
          "start": 296,
          "end": 325
        },
        "start": 272,
        "end": 326
      },
      "declare": false,
      "start": 234,
      "end": 327
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RowRenderer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 352
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Entity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 353,
                        "end": 359
                      },
                      "typeArguments": null,
                      "start": 353,
                      "end": 359
                    }
                  ],
                  "start": 352,
                  "end": 360
                },
                "start": 341,
                "end": 360
              },
              "start": 339,
              "end": 360
            },
            "start": 335,
            "end": 360
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 372
                },
                "value": {
                  "type": "Literal",
                  "value": "someDate",
                  "raw": "'someDate'",
                  "start": 374,
                  "end": 384
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 369,
                "end": 384
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caption",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 397
                },
                "value": {
                  "type": "Literal",
                  "value": "My Date",
                  "raw": "'My Date'",
                  "start": 399,
                  "end": 408
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 390,
                "end": 408
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "formatter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 423
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 431
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 441
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 449
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 458
                        },
                        "optional": false,
                        "computed": false,
                        "start": 444,
                        "end": 458
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 444,
                      "end": 460
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "-",
                      "raw": "'-'",
                      "start": 463,
                      "end": 466
                    },
                    "start": 436,
                    "end": 466
                  },
                  "id": null,
                  "generator": false,
                  "start": 425,
                  "end": 466
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 414,
                "end": 466
              }
            ],
            "start": 363,
            "end": 482
          },
          "definite": false,
          "start": 335,
          "end": 482
        }
      ],
      "declare": false,
      "start": 329,
      "end": 482
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 482
}
```
