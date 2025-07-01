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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 29
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                            "start": 32,
                            "end": 33
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 36,
                            "end": 45
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 32,
                          "end": 45
                        }
                      ],
                      "start": 31,
                      "end": 46
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 54,
                              "end": 55
                            },
                            "typeArguments": null,
                            "start": 54,
                            "end": 55
                          },
                          "start": 52,
                          "end": 55
                        },
                        "start": 47,
                        "end": 55
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 58,
                          "end": 59
                        },
                        "typeArguments": null,
                        "start": 58,
                        "end": 59
                      },
                      "start": 56,
                      "end": 59
                    },
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 68
                    },
                    "id": null,
                    "generator": false,
                    "start": 31,
                    "end": 68
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 25,
                  "end": 68
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 84
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 92,
                      "end": 94
                    },
                    "id": null,
                    "generator": false,
                    "start": 86,
                    "end": 94
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 74,
                  "end": 94
                }
              ],
              "start": 19,
              "end": 97
            },
            "id": null,
            "generator": false,
            "start": 12,
            "end": 98
          },
          "definite": false,
          "start": 6,
          "end": 98
        }
      ],
      "declare": false,
      "start": 0,
      "end": 98
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
            "name": "fn1async",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 114
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 134
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": true,
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
                            "start": 143,
                            "end": 144
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 147,
                            "end": 156
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 143,
                          "end": 156
                        }
                      ],
                      "start": 142,
                      "end": 157
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 165,
                              "end": 166
                            },
                            "typeArguments": null,
                            "start": 165,
                            "end": 166
                          },
                          "start": 163,
                          "end": 166
                        },
                        "start": 158,
                        "end": 166
                      }
                    ],
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
                          "start": 169,
                          "end": 176
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
                                "start": 177,
                                "end": 178
                              },
                              "typeArguments": null,
                              "start": 177,
                              "end": 178
                            }
                          ],
                          "start": 176,
                          "end": 179
                        },
                        "start": 169,
                        "end": 179
                      },
                      "start": 167,
                      "end": 179
                    },
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 188
                    },
                    "id": null,
                    "generator": false,
                    "start": 136,
                    "end": 188
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 130,
                  "end": 188
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 204
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 212,
                      "end": 214
                    },
                    "id": null,
                    "generator": false,
                    "start": 206,
                    "end": 214
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 194,
                  "end": 214
                }
              ],
              "start": 124,
              "end": 217
            },
            "id": null,
            "generator": false,
            "start": 117,
            "end": 218
          },
          "definite": false,
          "start": 106,
          "end": 218
        }
      ],
      "declare": false,
      "start": 100,
      "end": 218
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 229
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 249
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                            "start": 252,
                            "end": 253
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 252,
                          "end": 253
                        }
                      ],
                      "start": 251,
                      "end": 254
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 262,
                              "end": 263
                            },
                            "typeArguments": null,
                            "start": 262,
                            "end": 263
                          },
                          "start": 260,
                          "end": 263
                        },
                        "start": 255,
                        "end": 263
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 266,
                          "end": 267
                        },
                        "typeArguments": null,
                        "start": 266,
                        "end": 267
                      },
                      "start": 264,
                      "end": 267
                    },
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 276
                    },
                    "id": null,
                    "generator": false,
                    "start": 251,
                    "end": 276
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 245,
                  "end": 276
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 292
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 300,
                      "end": 302
                    },
                    "id": null,
                    "generator": false,
                    "start": 294,
                    "end": 302
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 282,
                  "end": 302
                }
              ],
              "start": 239,
              "end": 305
            },
            "id": null,
            "generator": false,
            "start": 232,
            "end": 306
          },
          "definite": false,
          "start": 226,
          "end": 306
        }
      ],
      "declare": false,
      "start": 220,
      "end": 306
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
            "name": "fn2async",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 322
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 342
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": true,
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
                            "start": 351,
                            "end": 352
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 351,
                          "end": 352
                        }
                      ],
                      "start": 350,
                      "end": 353
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 361,
                              "end": 362
                            },
                            "typeArguments": null,
                            "start": 361,
                            "end": 362
                          },
                          "start": 359,
                          "end": 362
                        },
                        "start": 354,
                        "end": 362
                      }
                    ],
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
                          "start": 365,
                          "end": 372
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
                                "start": 373,
                                "end": 374
                              },
                              "typeArguments": null,
                              "start": 373,
                              "end": 374
                            }
                          ],
                          "start": 372,
                          "end": 375
                        },
                        "start": 365,
                        "end": 375
                      },
                      "start": 363,
                      "end": 375
                    },
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 384
                    },
                    "id": null,
                    "generator": false,
                    "start": 344,
                    "end": 384
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 338,
                  "end": 384
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 400
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 408,
                      "end": 410
                    },
                    "id": null,
                    "generator": false,
                    "start": 402,
                    "end": 410
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 390,
                  "end": 410
                }
              ],
              "start": 332,
              "end": 413
            },
            "id": null,
            "generator": false,
            "start": 325,
            "end": 414
          },
          "definite": false,
          "start": 314,
          "end": 414
        }
      ],
      "declare": false,
      "start": 308,
      "end": 414
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
            "name": "fn3",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 425
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 451
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 459,
                      "end": 461
                    },
                    "id": null,
                    "generator": false,
                    "start": 453,
                    "end": 461
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 441,
                  "end": 461
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 471
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                            "start": 474,
                            "end": 475
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 478,
                            "end": 487
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 474,
                          "end": 487
                        }
                      ],
                      "start": 473,
                      "end": 488
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 496,
                              "end": 497
                            },
                            "typeArguments": null,
                            "start": 496,
                            "end": 497
                          },
                          "start": 494,
                          "end": 497
                        },
                        "start": 489,
                        "end": 497
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 500,
                          "end": 501
                        },
                        "typeArguments": null,
                        "start": 500,
                        "end": 501
                      },
                      "start": 498,
                      "end": 501
                    },
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 505,
                      "end": 510
                    },
                    "id": null,
                    "generator": false,
                    "start": 473,
                    "end": 510
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 467,
                  "end": 510
                }
              ],
              "start": 435,
              "end": 513
            },
            "id": null,
            "generator": false,
            "start": 428,
            "end": 514
          },
          "definite": false,
          "start": 422,
          "end": 514
        }
      ],
      "declare": false,
      "start": 416,
      "end": 514
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
            "name": "fn3async",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 530
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 556
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 564,
                      "end": 566
                    },
                    "id": null,
                    "generator": false,
                    "start": 558,
                    "end": 566
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 546,
                  "end": 566
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 576
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": true,
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
                            "start": 585,
                            "end": 586
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 589,
                            "end": 598
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 585,
                          "end": 598
                        }
                      ],
                      "start": 584,
                      "end": 599
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 607,
                              "end": 608
                            },
                            "typeArguments": null,
                            "start": 607,
                            "end": 608
                          },
                          "start": 605,
                          "end": 608
                        },
                        "start": 600,
                        "end": 608
                      }
                    ],
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
                          "start": 611,
                          "end": 618
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
                                "start": 619,
                                "end": 620
                              },
                              "typeArguments": null,
                              "start": 619,
                              "end": 620
                            }
                          ],
                          "start": 618,
                          "end": 621
                        },
                        "start": 611,
                        "end": 621
                      },
                      "start": 609,
                      "end": 621
                    },
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 625,
                      "end": 630
                    },
                    "id": null,
                    "generator": false,
                    "start": 578,
                    "end": 630
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 572,
                  "end": 630
                }
              ],
              "start": 540,
              "end": 633
            },
            "id": null,
            "generator": false,
            "start": 533,
            "end": 634
          },
          "definite": false,
          "start": 522,
          "end": 634
        }
      ],
      "declare": false,
      "start": 516,
      "end": 634
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
            "name": "fn4",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 645
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 671
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 673,
                    "end": 675
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 661,
                  "end": 675
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 681,
                    "end": 685
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
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
                            "start": 688,
                            "end": 689
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 692,
                            "end": 701
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 688,
                          "end": 701
                        }
                      ],
                      "start": 687,
                      "end": 702
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 710,
                              "end": 711
                            },
                            "typeArguments": null,
                            "start": 710,
                            "end": 711
                          },
                          "start": 708,
                          "end": 711
                        },
                        "start": 703,
                        "end": 711
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 714,
                          "end": 715
                        },
                        "typeArguments": null,
                        "start": 714,
                        "end": 715
                      },
                      "start": 712,
                      "end": 715
                    },
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 724
                    },
                    "id": null,
                    "generator": false,
                    "start": 687,
                    "end": 724
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 681,
                  "end": 724
                }
              ],
              "start": 655,
              "end": 727
            },
            "id": null,
            "generator": false,
            "start": 648,
            "end": 728
          },
          "definite": false,
          "start": 642,
          "end": 728
        }
      ],
      "declare": false,
      "start": 636,
      "end": 728
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
            "name": "fn4async",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 744
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extraValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 770
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 772,
                    "end": 774
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 760,
                  "end": 774
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 780,
                    "end": 784
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": true,
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
                            "start": 793,
                            "end": 794
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSUndefinedKeyword",
                            "start": 797,
                            "end": 806
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 793,
                          "end": 806
                        }
                      ],
                      "start": 792,
                      "end": 807
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 815,
                              "end": 816
                            },
                            "typeArguments": null,
                            "start": 815,
                            "end": 816
                          },
                          "start": 813,
                          "end": 816
                        },
                        "start": 808,
                        "end": 816
                      }
                    ],
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
                          "start": 819,
                          "end": 826
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
                                "start": 827,
                                "end": 828
                              },
                              "typeArguments": null,
                              "start": 827,
                              "end": 828
                            }
                          ],
                          "start": 826,
                          "end": 829
                        },
                        "start": 819,
                        "end": 829
                      },
                      "start": 817,
                      "end": 829
                    },
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 833,
                      "end": 838
                    },
                    "id": null,
                    "generator": false,
                    "start": 786,
                    "end": 838
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 780,
                  "end": 838
                }
              ],
              "start": 754,
              "end": 841
            },
            "id": null,
            "generator": false,
            "start": 747,
            "end": 842
          },
          "definite": false,
          "start": 736,
          "end": 842
        }
      ],
      "declare": false,
      "start": 730,
      "end": 842
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 842
}
```
