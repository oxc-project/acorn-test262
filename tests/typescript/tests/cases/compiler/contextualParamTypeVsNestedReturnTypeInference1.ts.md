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
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "typeArguments": null,
                "start": 28,
                "end": 29
              },
              "start": 26,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 30
          }
        ],
        "start": 20,
        "end": 32
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "effectGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 62
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
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 67
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 63,
            "end": 67
          }
        ],
        "start": 62,
        "end": 68
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AEff",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 78,
                  "end": 82
                },
                "start": 75,
                "end": 82
              },
              "start": 72,
              "end": 82
            },
            "start": 70,
            "end": 82
          },
          "start": 69,
          "end": 82
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Effect",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
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
                  "name": "AEff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 96
                },
                "typeArguments": null,
                "start": 92,
                "end": 96
              }
            ],
            "start": 91,
            "end": 97
          },
          "start": 85,
          "end": 97
        },
        "start": 83,
        "end": 97
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 98
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "effectFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 125
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
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 130
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 126,
            "end": 130
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 136
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 150
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 151,
                    "end": 154
                  }
                ],
                "start": 150,
                "end": 155
              },
              "start": 145,
              "end": 155
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 132,
            "end": 155
          }
        ],
        "start": 125,
        "end": 156
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "body",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 174
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 176,
                      "end": 180
                    },
                    "start": 174,
                    "end": 180
                  },
                  "value": null,
                  "start": 167,
                  "end": 180
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 185,
                  "end": 192
                },
                "start": 182,
                "end": 192
              },
              "start": 166,
              "end": 192
            },
            "start": 164,
            "end": 192
          },
          "start": 160,
          "end": 192
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 205
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 211
                  },
                  "typeArguments": null,
                  "start": 207,
                  "end": 211
                },
                "start": 205,
                "end": 211
              },
              "value": null,
              "start": 198,
              "end": 211
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 222
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AEff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 227
                    },
                    "typeArguments": null,
                    "start": 223,
                    "end": 227
                  }
                ],
                "start": 222,
                "end": 228
              },
              "start": 216,
              "end": 228
            },
            "start": 213,
            "end": 228
          },
          "start": 197,
          "end": 228
        },
        "start": 195,
        "end": 228
      },
      "body": null,
      "expression": false,
      "start": 100,
      "end": 229
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "layerEffect",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 261
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 263
          }
        ],
        "start": 261,
        "end": 264
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 273
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 275
                    },
                    "typeArguments": null,
                    "start": 274,
                    "end": 275
                  }
                ],
                "start": 273,
                "end": 276
              },
              "start": 270,
              "end": 276
            },
            "start": 268,
            "end": 276
          },
          "start": 265,
          "end": 276
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "effect",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 292
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 294
                    },
                    "typeArguments": null,
                    "start": 293,
                    "end": 294
                  }
                ],
                "start": 292,
                "end": 295
              },
              "start": 286,
              "end": 295
            },
            "start": 284,
            "end": 295
          },
          "start": 278,
          "end": 295
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 298,
          "end": 305
        },
        "start": 296,
        "end": 305
      },
      "body": null,
      "expression": false,
      "start": 233,
      "end": 306
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 323
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 328
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 324,
            "end": 328
          }
        ],
        "start": 323,
        "end": 329
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 345
                },
                "typeArguments": null,
                "start": 341,
                "end": 345
              },
              "start": 339,
              "end": 345
            },
            "accessibility": null,
            "static": false,
            "start": 334,
            "end": 346
          }
        ],
        "start": 330,
        "end": 348
      },
      "declare": false,
      "start": 310,
      "end": 348
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 374
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 379,
                            "end": 381
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 387,
                                      "end": 393
                                    },
                                    "start": 385,
                                    "end": 393
                                  },
                                  "start": 384,
                                  "end": 393
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnknownKeyword",
                                  "start": 398,
                                  "end": 405
                                },
                                "start": 395,
                                "end": 405
                              },
                              "start": 383,
                              "end": 405
                            },
                            "start": 381,
                            "end": 405
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 379,
                          "end": 406
                        }
                      ],
                      "start": 375,
                      "end": 408
                    }
                  ],
                  "start": 374,
                  "end": 409
                },
                "start": 371,
                "end": 409
              },
              "start": 369,
              "end": 409
            },
            "start": 366,
            "end": 409
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 409
        }
      ],
      "declare": true,
      "start": 352,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "layerEffect",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 425
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 432
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "effectGen",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 445
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 479,
                              "end": 481
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "effectFn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 483,
                                "end": 491
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "generator": false,
                                  "async": false,
                                  "declare": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 502,
                                      "end": 503
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 515,
                                          "end": 516
                                        },
                                        "directive": null,
                                        "start": 515,
                                        "end": 517
                                      }
                                    ],
                                    "start": 505,
                                    "end": 535
                                  },
                                  "expression": false,
                                  "start": 492,
                                  "end": 535
                                }
                              ],
                              "optional": false,
                              "start": 483,
                              "end": 536
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 479,
                            "end": 536
                          }
                        ],
                        "start": 471,
                        "end": 543
                      },
                      "start": 464,
                      "end": 544
                    }
                  ],
                  "start": 458,
                  "end": 548
                },
                "expression": false,
                "start": 446,
                "end": 548
              }
            ],
            "optional": false,
            "start": 436,
            "end": 549
          }
        ],
        "optional": false,
        "start": 414,
        "end": 552
      },
      "directive": null,
      "start": 414,
      "end": 553
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 553
}
```
