__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 43
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 45
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 44,
                  "end": 45
                }
              ],
              "start": 43,
              "end": 46
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
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
                              "start": 67,
                              "end": 68
                            },
                            "typeArguments": null,
                            "start": 67,
                            "end": 68
                          },
                          "start": 65,
                          "end": 68
                        },
                        "start": 61,
                        "end": 68
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 74
                        },
                        "typeArguments": null,
                        "start": 73,
                        "end": 74
                      },
                      "start": 70,
                      "end": 74
                    },
                    "start": 60,
                    "end": 74
                  },
                  "start": 58,
                  "end": 74
                },
                "start": 47,
                "end": 74
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 82
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grouping",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 91
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 92,
                              "end": 93
                            },
                            "typeArguments": null,
                            "start": 92,
                            "end": 93
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 95,
                              "end": 96
                            },
                            "typeArguments": null,
                            "start": 95,
                            "end": 96
                          }
                        ],
                        "start": 91,
                        "end": 97
                      },
                      "start": 83,
                      "end": 97
                    }
                  ],
                  "start": 82,
                  "end": 98
                },
                "start": 77,
                "end": 98
              },
              "start": 75,
              "end": 98
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 36,
            "end": 99
          }
        ],
        "start": 19,
        "end": 112
      },
      "declare": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryEnumerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 139
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
              "start": 140,
              "end": 141
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 140,
            "end": 141
          }
        ],
        "start": 139,
        "end": 142
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 167
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 168,
                  "end": 169
                }
              ],
              "start": 167,
              "end": 170
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
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
                              "start": 191,
                              "end": 192
                            },
                            "typeArguments": null,
                            "start": 191,
                            "end": 192
                          },
                          "start": 189,
                          "end": 192
                        },
                        "start": 185,
                        "end": 192
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 198
                        },
                        "typeArguments": null,
                        "start": 197,
                        "end": 198
                      },
                      "start": 194,
                      "end": 198
                    },
                    "start": 184,
                    "end": 198
                  },
                  "start": 182,
                  "end": 198
                },
                "start": 171,
                "end": 198
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryEnumerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 216
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grouping",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 225
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 227
                            },
                            "typeArguments": null,
                            "start": 226,
                            "end": 227
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 229,
                              "end": 230
                            },
                            "typeArguments": null,
                            "start": 229,
                            "end": 230
                          }
                        ],
                        "start": 225,
                        "end": 231
                      },
                      "start": 217,
                      "end": 231
                    }
                  ],
                  "start": 216,
                  "end": 232
                },
                "start": 201,
                "end": 232
              },
              "start": 199,
              "end": 232
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 160,
            "end": 233
          }
        ],
        "start": 143,
        "end": 246
      },
      "declare": false,
      "start": 114,
      "end": 246
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Grouping",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 266
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 267,
            "end": 268
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 270,
            "end": 271
          }
        ],
        "start": 266,
        "end": 272
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Query",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 286
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
                  "start": 287,
                  "end": 288
                },
                "typeArguments": null,
                "start": 287,
                "end": 288
              }
            ],
            "start": 286,
            "end": 289
          },
          "start": 281,
          "end": 289
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 299
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 304
                },
                "typeArguments": null,
                "start": 303,
                "end": 304
              },
              "start": 301,
              "end": 304
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 296,
            "end": 305
          }
        ],
        "start": 290,
        "end": 307
      },
      "declare": false,
      "start": 248,
      "end": 307
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 322
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 323,
                      "end": 329
                    }
                  ],
                  "start": 322,
                  "end": 330
                },
                "start": 317,
                "end": 330
              },
              "start": 315,
              "end": 330
            },
            "start": 313,
            "end": 330
          },
          "init": null,
          "definite": false,
          "start": 313,
          "end": 330
        }
      ],
      "declare": false,
      "start": 309,
      "end": 331
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryEnumerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 355
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 356,
                      "end": 362
                    }
                  ],
                  "start": 355,
                  "end": 363
                },
                "start": 340,
                "end": 363
              },
              "start": 338,
              "end": 363
            },
            "start": 336,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 336,
          "end": 363
        }
      ],
      "declare": false,
      "start": 332,
      "end": 364
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 378
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
                    }
                  ],
                  "start": 378,
                  "end": 386
                },
                "start": 373,
                "end": 386
              },
              "start": 371,
              "end": 386
            },
            "start": 369,
            "end": 386
          },
          "init": null,
          "definite": false,
          "start": 369,
          "end": 386
        }
      ],
      "declare": false,
      "start": 365,
      "end": 387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "q1",
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 391
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "q2",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 396
        },
        "start": 389,
        "end": 396
      },
      "directive": null,
      "start": 389,
      "end": 397
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "q1",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 416
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "q3",
          "optional": false,
          "typeAnnotation": null,
          "start": 419,
          "end": 421
        },
        "start": 414,
        "end": 421
      },
      "directive": null,
      "start": 414,
      "end": 422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 442
}
```
