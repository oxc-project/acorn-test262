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
        "name": "AnyExtractor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 29
          }
        ],
        "start": 22,
        "end": 30
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
              "name": "matches",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
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
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 51,
                        "end": 54
                      },
                      "start": 49,
                      "end": 54
                    },
                    "start": 45,
                    "end": 54
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 59,
                    "end": 66
                  },
                  "start": 56,
                  "end": 66
                },
                "start": 44,
                "end": 66
              },
              "start": 42,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 67
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 77
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
                    "name": "node",
                    "optional": false,
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
                    "start": 80,
                    "end": 89
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 94,
                          "end": 100
                        },
                        "typeArguments": null,
                        "start": 94,
                        "end": 100
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 103,
                        "end": 112
                      }
                    ],
                    "start": 94,
                    "end": 112
                  },
                  "start": 91,
                  "end": 112
                },
                "start": 79,
                "end": 112
              },
              "start": 77,
              "end": 112
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 113
          }
        ],
        "start": 31,
        "end": 115
      },
      "declare": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Extractor",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 136
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
              "start": 137,
              "end": 138
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 138
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 146
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 140,
            "end": 146
          }
        ],
        "start": 136,
        "end": 147
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
              "name": "matches",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 159
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
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 168,
                        "end": 175
                      },
                      "start": 166,
                      "end": 175
                    },
                    "start": 162,
                    "end": 175
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 184
                    },
                    "asserts": false,
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
                          "start": 188,
                          "end": 189
                        },
                        "typeArguments": null,
                        "start": 188,
                        "end": 189
                      },
                      "start": 188,
                      "end": 189
                    },
                    "start": 180,
                    "end": 189
                  },
                  "start": 177,
                  "end": 189
                },
                "start": 161,
                "end": 189
              },
              "start": 159,
              "end": 189
            },
            "accessibility": null,
            "static": false,
            "start": 152,
            "end": 190
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 200
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
                    "name": "node",
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
                          "start": 209,
                          "end": 210
                        },
                        "typeArguments": null,
                        "start": 209,
                        "end": 210
                      },
                      "start": 207,
                      "end": 210
                    },
                    "start": 203,
                    "end": 210
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 221
                        },
                        "typeArguments": null,
                        "start": 215,
                        "end": 221
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 224,
                        "end": 233
                      }
                    ],
                    "start": 215,
                    "end": 233
                  },
                  "start": 212,
                  "end": 233
                },
                "start": 202,
                "end": 233
              },
              "start": 200,
              "end": 233
            },
            "accessibility": null,
            "static": false,
            "start": 193,
            "end": 234
          }
        ],
        "start": 148,
        "end": 236
      },
      "declare": false,
      "start": 117,
      "end": 236
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createExtractor",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 270
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 271,
            "end": 272
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 280
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 274,
            "end": 280
          }
        ],
        "start": 270,
        "end": 281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "params",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "matcher",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 301
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
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 310,
                              "end": 317
                            },
                            "start": 308,
                            "end": 317
                          },
                          "start": 304,
                          "end": 317
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "parameterName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "node",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 322,
                            "end": 326
                          },
                          "asserts": false,
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
                                "start": 330,
                                "end": 331
                              },
                              "typeArguments": null,
                              "start": 330,
                              "end": 331
                            },
                            "start": 330,
                            "end": 331
                          },
                          "start": 322,
                          "end": 331
                        },
                        "start": 319,
                        "end": 331
                      },
                      "start": 303,
                      "end": 331
                    },
                    "start": 301,
                    "end": 331
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 294,
                  "end": 332
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 342
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
                          "name": "node",
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
                                "start": 351,
                                "end": 352
                              },
                              "typeArguments": null,
                              "start": 351,
                              "end": 352
                            },
                            "start": 349,
                            "end": 352
                          },
                          "start": 345,
                          "end": 352
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 357,
                            "end": 363
                          },
                          "typeArguments": null,
                          "start": 357,
                          "end": 363
                        },
                        "start": 354,
                        "end": 363
                      },
                      "start": 344,
                      "end": 363
                    },
                    "start": 342,
                    "end": 363
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 335,
                  "end": 364
                }
              ],
              "start": 290,
              "end": 366
            },
            "start": 288,
            "end": 366
          },
          "start": 282,
          "end": 366
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extractor",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
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
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 388
                },
                "typeArguments": null,
                "start": 382,
                "end": 388
              }
            ],
            "start": 378,
            "end": 389
          },
          "start": 369,
          "end": 389
        },
        "start": 367,
        "end": 389
      },
      "body": null,
      "expression": false,
      "start": 238,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 412
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "identifier",
                  "raw": "\"identifier\"",
                  "start": 423,
                  "end": 435
                },
                "start": 423,
                "end": 435
              },
              "start": 421,
              "end": 435
            },
            "accessibility": null,
            "static": false,
            "start": 417,
            "end": 436
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 443
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 445,
                "end": 451
              },
              "start": 443,
              "end": 451
            },
            "accessibility": null,
            "static": false,
            "start": 439,
            "end": 452
          }
        ],
        "start": 413,
        "end": 454
      },
      "declare": false,
      "start": 392,
      "end": 454
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isIdentifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 485
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 492,
              "end": 499
            },
            "start": 490,
            "end": 499
          },
          "start": 486,
          "end": 499
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 506
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Identifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 520
              },
              "typeArguments": null,
              "start": 510,
              "end": 520
            },
            "start": 510,
            "end": 520
          },
          "start": 502,
          "end": 520
        },
        "start": 500,
        "end": 520
      },
      "body": null,
      "expression": false,
      "start": 456,
      "end": 521
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
            "name": "identifierExtractor",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 548
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createExtractor",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 566
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
                      "name": "matcher",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 571,
                      "end": 578
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isIdentifier",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 592
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 571,
                    "end": 592
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 603
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 606,
                          "end": 610
                        }
                      ],
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
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 636,
                                    "end": 640
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 636,
                                    "end": 640
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 636,
                                  "end": 640
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 648,
                                    "end": 652
                                  },
                                  "value": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": "identifier",
                                      "raw": "\"identifier\"",
                                      "start": 654,
                                      "end": 666
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "const",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 670,
                                        "end": 675
                                      },
                                      "typeArguments": null,
                                      "start": 670,
                                      "end": 675
                                    },
                                    "start": 654,
                                    "end": 675
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 648,
                                  "end": 675
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 683,
                                    "end": 688
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 690,
                                      "end": 694
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 695,
                                      "end": 699
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 690,
                                    "end": 699
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 683,
                                  "end": 699
                                }
                              ],
                              "start": 628,
                              "end": 706
                            },
                            "start": 621,
                            "end": 707
                          }
                        ],
                        "start": 615,
                        "end": 711
                      },
                      "id": null,
                      "generator": false,
                      "start": 605,
                      "end": 711
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 596,
                    "end": 711
                  }
                ],
                "start": 567,
                "end": 714
              }
            ],
            "optional": false,
            "start": 551,
            "end": 715
          },
          "definite": false,
          "start": 529,
          "end": 715
        }
      ],
      "declare": false,
      "start": 523,
      "end": 716
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 728,
        "end": 741
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 750
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "stringLiteral",
                  "raw": "\"stringLiteral\"",
                  "start": 752,
                  "end": 767
                },
                "start": 752,
                "end": 767
              },
              "start": 750,
              "end": 767
            },
            "accessibility": null,
            "static": false,
            "start": 746,
            "end": 768
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 776
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 778,
                "end": 784
              },
              "start": 776,
              "end": 784
            },
            "accessibility": null,
            "static": false,
            "start": 771,
            "end": 785
          }
        ],
        "start": 742,
        "end": 787
      },
      "declare": false,
      "start": 718,
      "end": 787
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isStringLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 821
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 828,
              "end": 835
            },
            "start": 826,
            "end": 835
          },
          "start": 822,
          "end": 835
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 842
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringLiteral",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 859
              },
              "typeArguments": null,
              "start": 846,
              "end": 859
            },
            "start": 846,
            "end": 859
          },
          "start": 838,
          "end": 859
        },
        "start": 836,
        "end": 859
      },
      "body": null,
      "expression": false,
      "start": 789,
      "end": 860
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
            "name": "stringExtractor",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 883
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createExtractor",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 901
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
                      "name": "matcher",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 906,
                      "end": 913
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isStringLiteral",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 915,
                      "end": 930
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 906,
                    "end": 930
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 934,
                      "end": 941
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 944,
                          "end": 948
                        }
                      ],
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
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 974,
                                    "end": 978
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 974,
                                    "end": 978
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 974,
                                  "end": 978
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 986,
                                    "end": 990
                                  },
                                  "value": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": "string",
                                      "raw": "\"string\"",
                                      "start": 992,
                                      "end": 1000
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "const",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1004,
                                        "end": 1009
                                      },
                                      "typeArguments": null,
                                      "start": 1004,
                                      "end": 1009
                                    },
                                    "start": 992,
                                    "end": 1009
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 986,
                                  "end": 1009
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1017,
                                    "end": 1022
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1024,
                                      "end": 1028
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1029,
                                      "end": 1034
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1024,
                                    "end": 1034
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1017,
                                  "end": 1034
                                }
                              ],
                              "start": 966,
                              "end": 1041
                            },
                            "start": 959,
                            "end": 1042
                          }
                        ],
                        "start": 953,
                        "end": 1046
                      },
                      "id": null,
                      "generator": false,
                      "start": 943,
                      "end": 1046
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 934,
                    "end": 1046
                  }
                ],
                "start": 902,
                "end": 1049
              }
            ],
            "optional": false,
            "start": 886,
            "end": 1050
          },
          "definite": false,
          "start": 868,
          "end": 1050
        }
      ],
      "declare": false,
      "start": 862,
      "end": 1051
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1070,
        "end": 1079
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
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1080,
              "end": 1086
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1104,
                  "end": 1111
                },
                "start": 1104,
                "end": 1113
              },
              "start": 1095,
              "end": 1113
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1080,
            "end": 1113
          }
        ],
        "start": 1079,
        "end": 1114
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "parsers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1130
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1146
                  },
                  "typeArguments": null,
                  "start": 1140,
                  "end": 1146
                },
                "start": 1134,
                "end": 1146
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyExtractor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1149,
                  "end": 1161
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
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1162,
                          "end": 1168
                        },
                        "typeArguments": null,
                        "start": 1162,
                        "end": 1168
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1169,
                          "end": 1170
                        },
                        "typeArguments": null,
                        "start": 1169,
                        "end": 1170
                      },
                      "start": 1162,
                      "end": 1171
                    }
                  ],
                  "start": 1161,
                  "end": 1172
                },
                "start": 1149,
                "end": 1172
              },
              "optional": false,
              "readonly": null,
              "start": 1124,
              "end": 1175
            },
            "start": 1122,
            "end": 1175
          },
          "start": 1115,
          "end": 1175
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnyExtractor",
            "optional": false,
            "typeAnnotation": null,
            "start": 1178,
            "end": 1190
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
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1191,
                    "end": 1197
                  },
                  "typeArguments": null,
                  "start": 1191,
                  "end": 1197
                },
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 1198,
                  "end": 1204
                },
                "start": 1191,
                "end": 1205
              }
            ],
            "start": 1190,
            "end": 1206
          },
          "start": 1178,
          "end": 1206
        },
        "start": 1176,
        "end": 1206
      },
      "body": null,
      "expression": false,
      "start": 1053,
      "end": 1207
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
            "name": "myUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 1215,
            "end": 1222
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1225,
              "end": 1234
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identifierExtractor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1236,
                    "end": 1255
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringExtractor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1257,
                    "end": 1272
                  }
                ],
                "start": 1235,
                "end": 1273
              }
            ],
            "optional": false,
            "start": 1225,
            "end": 1274
          },
          "definite": false,
          "start": 1215,
          "end": 1274
        }
      ],
      "declare": false,
      "start": 1209,
      "end": 1275
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1275
}
```
