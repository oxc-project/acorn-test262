__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 15,
                "end": 22
              },
              "start": 13,
              "end": 22
            },
            "start": 12,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 46
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 47,
                      "end": 54
                    }
                  ],
                  "start": 46,
                  "end": 55
                },
                "start": 39,
                "end": 55
              },
              "start": 37,
              "end": 55
            },
            "start": 36,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 55
        }
      ],
      "declare": true,
      "start": 24,
      "end": 56
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg0",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 83,
              "end": 90
            },
            "start": 81,
            "end": 90
          },
          "start": 77,
          "end": 90
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 98,
              "end": 105
            },
            "start": 96,
            "end": 105
          },
          "start": 92,
          "end": 105
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 113,
              "end": 120
            },
            "start": 111,
            "end": 120
          },
          "start": 107,
          "end": 120
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 123,
          "end": 127
        },
        "start": 121,
        "end": 127
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 128
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 148
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg0",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 155,
                            "end": 162
                          },
                          "start": 153,
                          "end": 162
                        },
                        "start": 149,
                        "end": 162
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 170,
                            "end": 177
                          },
                          "start": 168,
                          "end": 177
                        },
                        "start": 164,
                        "end": 177
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 185,
                            "end": 192
                          },
                          "start": 183,
                          "end": 192
                        },
                        "start": 179,
                        "end": 192
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 195,
                        "end": 199
                      },
                      "start": 193,
                      "end": 199
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 146,
                    "end": 200
                  }
                ],
                "start": 144,
                "end": 202
              },
              "start": 142,
              "end": 202
            },
            "start": 141,
            "end": 202
          },
          "init": null,
          "definite": false,
          "start": 141,
          "end": 202
        }
      ],
      "declare": true,
      "start": 129,
      "end": 203
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
            "name": "pfn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 228
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg0",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 238,
                                  "end": 245
                                },
                                "start": 236,
                                "end": 245
                              },
                              "start": 232,
                              "end": 245
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 253,
                                  "end": 260
                                },
                                "start": 251,
                                "end": 260
                              },
                              "start": 247,
                              "end": 260
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 268,
                                  "end": 275
                                },
                                "start": 266,
                                "end": 275
                              },
                              "start": 262,
                              "end": 275
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 278,
                              "end": 282
                            },
                            "start": 276,
                            "end": 282
                          },
                          "start": 231,
                          "end": 283
                        }
                      ],
                      "start": 229,
                      "end": 285
                    }
                  ],
                  "start": 228,
                  "end": 286
                },
                "start": 221,
                "end": 286
              },
              "start": 219,
              "end": 286
            },
            "start": 216,
            "end": 286
          },
          "init": null,
          "definite": false,
          "start": 216,
          "end": 286
        }
      ],
      "declare": true,
      "start": 204,
      "end": 287
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
            "name": "po",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 311
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 314,
                            "end": 316
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg0",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 323,
                                  "end": 330
                                },
                                "start": 321,
                                "end": 330
                              },
                              "start": 317,
                              "end": 330
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 338,
                                  "end": 345
                                },
                                "start": 336,
                                "end": 345
                              },
                              "start": 332,
                              "end": 345
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 353,
                                  "end": 360
                                },
                                "start": 351,
                                "end": 360
                              },
                              "start": 347,
                              "end": 360
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 363,
                              "end": 367
                            },
                            "start": 361,
                            "end": 367
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 314,
                          "end": 368
                        }
                      ],
                      "start": 312,
                      "end": 370
                    }
                  ],
                  "start": 311,
                  "end": 371
                },
                "start": 304,
                "end": 371
              },
              "start": 302,
              "end": 371
            },
            "start": 300,
            "end": 371
          },
          "init": null,
          "definite": false,
          "start": 300,
          "end": 371
        }
      ],
      "declare": true,
      "start": 288,
      "end": 372
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "before",
        "optional": false,
        "typeAnnotation": null,
        "start": 390,
        "end": 396
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 400,
          "end": 404
        },
        "start": 398,
        "end": 404
      },
      "body": null,
      "expression": false,
      "start": 373,
      "end": 405
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "after",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 428
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 432,
          "end": 436
        },
        "start": 430,
        "end": 436
      },
      "body": null,
      "expression": false,
      "start": 406,
      "end": 437
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 457
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 461,
            "end": 468
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 469,
                "end": 473
              }
            ],
            "start": 468,
            "end": 474
          },
          "start": 461,
          "end": 474
        },
        "start": 459,
        "end": 474
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "before",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 487
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 481,
              "end": 489
            },
            "directive": null,
            "start": 481,
            "end": 490
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 500
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 505
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 507
                    },
                    {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 515,
                        "end": 516
                      },
                      "start": 509,
                      "end": 516
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 519
                    }
                  ],
                  "optional": false,
                  "start": 503,
                  "end": 520
                },
                "definite": false,
                "start": 499,
                "end": 520
              }
            ],
            "declare": false,
            "start": 495,
            "end": 521
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "after",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 531
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 526,
              "end": 533
            },
            "directive": null,
            "start": 526,
            "end": 534
          }
        ],
        "start": 475,
        "end": 536
      },
      "expression": false,
      "start": 438,
      "end": 536
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 536
}
```
