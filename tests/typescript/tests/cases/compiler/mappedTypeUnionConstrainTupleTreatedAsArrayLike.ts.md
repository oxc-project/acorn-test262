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
        "name": "HomomorphicMappedType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 26
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
              "start": 27,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 28
          }
        ],
        "start": 26,
        "end": 29
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "typeArguments": null,
            "start": 46,
            "end": 47
          },
          "start": 40,
          "end": 47
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 51
              },
              "typeArguments": null,
              "start": 50,
              "end": 51
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 53
              },
              "typeArguments": null,
              "start": 52,
              "end": 53
            },
            "start": 50,
            "end": 54
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 63,
            "end": 69
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 72,
            "end": 79
          },
          "falseType": {
            "type": "TSNullKeyword",
            "start": 82,
            "end": 86
          },
          "start": 50,
          "end": 86
        },
        "optional": false,
        "readonly": null,
        "start": 32,
        "end": 88
      },
      "declare": false,
      "start": 0,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 104
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 105,
              "end": 106
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 116,
                      "end": 122
                    }
                  ],
                  "start": 115,
                  "end": 123
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 127,
                      "end": 133
                    }
                  ],
                  "start": 126,
                  "end": 134
                }
              ],
              "start": 115,
              "end": 134
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 105,
            "end": 134
          }
        ],
        "start": 104,
        "end": 135
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "typeArguments": null,
              "start": 142,
              "end": 143
            },
            "start": 140,
            "end": 143
          },
          "start": 136,
          "end": 143
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 160,
                        "end": 163
                      },
                      "start": 160,
                      "end": 165
                    },
                    "start": 158,
                    "end": 165
                  },
                  "start": 155,
                  "end": 165
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 168,
                    "end": 170
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HomomorphicMappedType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 195
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
                            "start": 196,
                            "end": 197
                          },
                          "typeArguments": null,
                          "start": 196,
                          "end": 197
                        }
                      ],
                      "start": 195,
                      "end": 198
                    },
                    "start": 174,
                    "end": 198
                  },
                  "start": 168,
                  "end": 198
                },
                "definite": false,
                "start": 155,
                "end": 198
              }
            ],
            "declare": false,
            "start": 149,
            "end": 198
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
                  "name": "arr2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 222,
                          "end": 225
                        },
                        "start": 222,
                        "end": 227
                      },
                      "start": 213,
                      "end": 227
                    },
                    "start": 211,
                    "end": 227
                  },
                  "start": 207,
                  "end": 227
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 230,
                    "end": 232
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HomomorphicMappedType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 257
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
                            "start": 258,
                            "end": 259
                          },
                          "typeArguments": null,
                          "start": 258,
                          "end": 259
                        }
                      ],
                      "start": 257,
                      "end": 260
                    },
                    "start": 236,
                    "end": 260
                  },
                  "start": 230,
                  "end": 260
                },
                "definite": false,
                "start": 207,
                "end": 260
              }
            ],
            "declare": false,
            "start": 201,
            "end": 260
          }
        ],
        "start": 145,
        "end": 262
      },
      "expression": false,
      "start": 90,
      "end": 262
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 278
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 279,
              "end": 280
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 290,
                      "end": 296
                    }
                  ],
                  "start": 289,
                  "end": 297
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 310,
                        "end": 316
                      }
                    ],
                    "start": 309,
                    "end": 317
                  },
                  "start": 300,
                  "end": 317
                }
              ],
              "start": 289,
              "end": 317
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 279,
            "end": 317
          }
        ],
        "start": 278,
        "end": 318
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 326
              },
              "typeArguments": null,
              "start": 325,
              "end": 326
            },
            "start": 323,
            "end": 326
          },
          "start": 319,
          "end": 326
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 343,
                        "end": 346
                      },
                      "start": 343,
                      "end": 348
                    },
                    "start": 341,
                    "end": 348
                  },
                  "start": 338,
                  "end": 348
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 351,
                    "end": 353
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HomomorphicMappedType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 378
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
                            "start": 379,
                            "end": 380
                          },
                          "typeArguments": null,
                          "start": 379,
                          "end": 380
                        }
                      ],
                      "start": 378,
                      "end": 381
                    },
                    "start": 357,
                    "end": 381
                  },
                  "start": 351,
                  "end": 381
                },
                "definite": false,
                "start": 338,
                "end": 381
              }
            ],
            "declare": false,
            "start": 332,
            "end": 381
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
                  "name": "arr2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 414,
                          "end": 417
                        },
                        "start": 414,
                        "end": 419
                      },
                      "start": 405,
                      "end": 419
                    },
                    "start": 403,
                    "end": 419
                  },
                  "start": 399,
                  "end": 419
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 422,
                    "end": 424
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HomomorphicMappedType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 449
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
                            "start": 450,
                            "end": 451
                          },
                          "typeArguments": null,
                          "start": 450,
                          "end": 451
                        }
                      ],
                      "start": 449,
                      "end": 452
                    },
                    "start": 428,
                    "end": 452
                  },
                  "start": 422,
                  "end": 452
                },
                "definite": false,
                "start": 399,
                "end": 452
              }
            ],
            "declare": false,
            "start": 393,
            "end": 452
          }
        ],
        "start": 328,
        "end": 454
      },
      "expression": false,
      "start": 264,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
}
```
