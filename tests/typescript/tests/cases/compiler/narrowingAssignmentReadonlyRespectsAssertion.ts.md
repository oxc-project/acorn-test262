__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestCase",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 75
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
              "start": 76,
              "end": 77
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 86,
                  "end": 92
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 95,
                  "end": 101
                }
              ],
              "start": 86,
              "end": 101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 101
          }
        ],
        "start": 75,
        "end": 102
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val1",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 120
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 123
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 139
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
                            "start": 140,
                            "end": 141
                          },
                          "typeArguments": null,
                          "start": 140,
                          "end": 141
                        }
                      ],
                      "start": 139,
                      "end": 142
                    },
                    "start": 126,
                    "end": 142
                  }
                ],
                "start": 122,
                "end": 142
              },
              "start": 120,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 107,
            "end": 143
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val2",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 174
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
                        "start": 175,
                        "end": 176
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 176
                    }
                  ],
                  "start": 174,
                  "end": 177
                },
                "start": 161,
                "end": 177
              },
              "start": 159,
              "end": 177
            },
            "accessibility": null,
            "static": false,
            "start": 146,
            "end": 178
          }
        ],
        "start": 103,
        "end": 180
      },
      "declare": false,
      "start": 57,
      "end": 180
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiCaseFixture",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 208
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
              "start": 209,
              "end": 210
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 209,
            "end": 210
          }
        ],
        "start": 208,
        "end": 211
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
              "name": "cases",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 221
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 224
                  },
                  "typeArguments": null,
                  "start": 223,
                  "end": 224
                },
                "start": 223,
                "end": 226
              },
              "start": 221,
              "end": 226
            },
            "accessibility": null,
            "static": false,
            "start": 216,
            "end": 227
          }
        ],
        "start": 212,
        "end": 229
      },
      "declare": false,
      "start": 182,
      "end": 229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "subDataFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 251
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 263
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 264,
                      "end": 270
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 273,
                      "end": 279
                    }
                  ],
                  "start": 264,
                  "end": 279
                }
              ],
              "start": 263,
              "end": 280
            },
            "start": 255,
            "end": 280
          },
          "start": 255,
          "end": 282
        },
        "start": 253,
        "end": 282
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 304,
                        "end": 308
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 310,
                        "end": 313
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 304,
                      "end": 313
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 315,
                        "end": 319
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 322,
                            "end": 325
                          },
                          {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 327,
                            "end": 330
                          },
                          {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 332,
                            "end": 335
                          }
                        ],
                        "start": 321,
                        "end": 336
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 315,
                      "end": 336
                    }
                  ],
                  "start": 302,
                  "end": 338
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 352
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 354,
                        "end": 355
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 348,
                      "end": 355
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 361
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 364,
                            "end": 365
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 367,
                            "end": 368
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 370,
                            "end": 371
                          }
                        ],
                        "start": 363,
                        "end": 372
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 357,
                      "end": 372
                    }
                  ],
                  "start": 346,
                  "end": 374
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 388
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 391,
                            "end": 394
                          },
                          {
                            "type": "Literal",
                            "value": "z",
                            "raw": "\"z\"",
                            "start": 396,
                            "end": 399
                          }
                        ],
                        "start": 390,
                        "end": 400
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 384,
                      "end": 400
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 402,
                        "end": 406
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 409,
                            "end": 412
                          },
                          {
                            "type": "Literal",
                            "value": "y",
                            "raw": "\"y\"",
                            "start": 414,
                            "end": 417
                          },
                          {
                            "type": "Literal",
                            "value": "z",
                            "raw": "\"z\"",
                            "start": 419,
                            "end": 422
                          }
                        ],
                        "start": 408,
                        "end": 423
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 402,
                      "end": 423
                    }
                  ],
                  "start": 382,
                  "end": 425
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 439
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 442,
                            "end": 443
                          },
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 445,
                            "end": 447
                          }
                        ],
                        "start": 441,
                        "end": 448
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 435,
                      "end": 448
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 454
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 457,
                            "end": 459
                          },
                          {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100",
                            "start": 461,
                            "end": 464
                          },
                          {
                            "type": "Literal",
                            "value": 1000,
                            "raw": "1000",
                            "start": 466,
                            "end": 470
                          }
                        ],
                        "start": 456,
                        "end": 471
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 450,
                      "end": 471
                    }
                  ],
                  "start": 433,
                  "end": 473
                }
              ],
              "start": 294,
              "end": 478
            },
            "start": 287,
            "end": 479
          }
        ],
        "start": 283,
        "end": 481
      },
      "expression": false,
      "start": 231,
      "end": 481
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dataFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 492,
        "end": 500
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
              "start": 501,
              "end": 502
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 501,
            "end": 502
          }
        ],
        "start": 500,
        "end": 503
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
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
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 519,
                      "end": 520
                    },
                    "typeArguments": null,
                    "start": 519,
                    "end": 520
                  },
                  "start": 519,
                  "end": 522
                },
                "start": 516,
                "end": 522
              },
              "start": 513,
              "end": 522
            },
            "start": 511,
            "end": 522
          },
          "start": 504,
          "end": 522
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MultiCaseFixture",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 541
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
                  "start": 542,
                  "end": 543
                },
                "typeArguments": null,
                "start": 542,
                "end": 543
              }
            ],
            "start": 541,
            "end": 544
          },
          "start": 525,
          "end": 544
        },
        "start": 523,
        "end": 544
      },
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
                    "name": "cases",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 563
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subFunc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 572
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 565,
                    "end": 574
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 558,
                  "end": 574
                }
              ],
              "start": 556,
              "end": 576
            },
            "start": 549,
            "end": 577
          }
        ],
        "start": 545,
        "end": 579
      },
      "expression": false,
      "start": 483,
      "end": 579
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 598
      },
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fixture",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 618
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dataFunc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 621,
                    "end": 629
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TestCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 630,
                          "end": 638
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 639,
                                  "end": 645
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 648,
                                  "end": 654
                                }
                              ],
                              "start": 639,
                              "end": 654
                            }
                          ],
                          "start": 638,
                          "end": 655
                        },
                        "start": 630,
                        "end": 655
                      }
                    ],
                    "start": 629,
                    "end": 656
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subDataFunc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 668
                    }
                  ],
                  "optional": false,
                  "start": 621,
                  "end": 669
                },
                "definite": false,
                "start": 611,
                "end": 669
              }
            ],
            "declare": false,
            "start": 605,
            "end": 670
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fixture",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 673,
                    "end": 680
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cases",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 681,
                    "end": 686
                  },
                  "optional": false,
                  "computed": false,
                  "start": 673,
                  "end": 686
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 694
                },
                "optional": false,
                "computed": false,
                "start": 673,
                "end": 694
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 698,
                            "end": 702
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 698,
                            "end": 702
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 698,
                          "end": 702
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 704,
                            "end": 708
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 704,
                            "end": 708
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 704,
                          "end": 708
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 696,
                      "end": 710
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 727,
                              "end": 732
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 733,
                              "end": 740
                            },
                            "optional": false,
                            "computed": false,
                            "start": 727,
                            "end": 740
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 741,
                              "end": 745
                            }
                          ],
                          "optional": false,
                          "start": 727,
                          "end": 746
                        },
                        "consequent": {
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
                                    "name": "reversedVal1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 821,
                                    "end": 833
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "val1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 836,
                                            "end": 840
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "slice",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 841,
                                            "end": 846
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 836,
                                          "end": 846
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 836,
                                        "end": 848
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "reverse",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 849,
                                        "end": 856
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 836,
                                      "end": 856
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 836,
                                    "end": 858
                                  },
                                  "definite": false,
                                  "start": 821,
                                  "end": 858
                                }
                              ],
                              "declare": false,
                              "start": 815,
                              "end": 859
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 870,
                                    "end": 877
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 878,
                                    "end": 881
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 870,
                                  "end": 881
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "reversedVal1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 882,
                                    "end": 894
                                  }
                                ],
                                "optional": false,
                                "start": 870,
                                "end": 895
                              },
                              "directive": null,
                              "start": 870,
                              "end": 896
                            }
                          ],
                          "start": 748,
                          "end": 904
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 922,
                                    "end": 929
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 930,
                                    "end": 933
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 922,
                                  "end": 933
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 934,
                                    "end": 938
                                  }
                                ],
                                "optional": false,
                                "start": 922,
                                "end": 939
                              },
                              "directive": null,
                              "start": 922,
                              "end": 940
                            }
                          ],
                          "start": 910,
                          "end": 948
                        },
                        "start": 723,
                        "end": 948
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 955,
                              "end": 962
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 963,
                              "end": 966
                            },
                            "optional": false,
                            "computed": false,
                            "start": 955,
                            "end": 966
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 967,
                              "end": 971
                            }
                          ],
                          "optional": false,
                          "start": 955,
                          "end": 972
                        },
                        "directive": null,
                        "start": 955,
                        "end": 973
                      }
                    ],
                    "start": 715,
                    "end": 977
                  },
                  "id": null,
                  "generator": false,
                  "start": 695,
                  "end": 977
                }
              ],
              "optional": false,
              "start": 673,
              "end": 978
            },
            "directive": null,
            "start": 673,
            "end": 979
          }
        ],
        "start": 601,
        "end": 981
      },
      "expression": false,
      "start": 581,
      "end": 981
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 983,
          "end": 991
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 983,
        "end": 993
      },
      "directive": null,
      "start": 983,
      "end": 994
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 994
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66,
    "range": [
      57,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 67,
    "end": 75,
    "range": [
      67,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 78,
    "end": 85,
    "range": [
      78,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 86,
    "end": 92,
    "range": [
      86,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 107,
    "end": 115,
    "range": [
      107,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 116,
    "end": 120,
    "range": [
      116,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 126,
    "end": 139,
    "range": [
      126,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 146,
    "end": 154,
    "range": [
      146,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 155,
    "end": 159,
    "range": [
      155,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 161,
    "end": 174,
    "range": [
      161,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 182,
    "end": 191,
    "range": [
      182,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiCaseFixture",
    "start": 192,
    "end": 208,
    "range": [
      192,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "cases",
    "start": 216,
    "end": 221,
    "range": [
      216,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 231,
    "end": 239,
    "range": [
      231,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "subDataFunc",
    "start": 240,
    "end": 251,
    "range": [
      240,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 255,
    "end": 263,
    "range": [
      255,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279,
    "range": [
      273,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 287,
    "end": 293,
    "range": [
      287,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 304,
    "end": 308,
    "range": [
      304,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 310,
    "end": 313,
    "range": [
      310,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 315,
    "end": 319,
    "range": [
      315,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 322,
    "end": 325,
    "range": [
      322,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 332,
    "end": 335,
    "range": [
      332,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 348,
    "end": 352,
    "range": [
      348,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 357,
    "end": 361,
    "range": [
      357,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 384,
    "end": 388,
    "range": [
      384,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 391,
    "end": 394,
    "range": [
      391,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 402,
    "end": 406,
    "range": [
      402,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 409,
    "end": 412,
    "range": [
      409,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 414,
    "end": 417,
    "range": [
      414,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 419,
    "end": 422,
    "range": [
      419,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 435,
    "end": 439,
    "range": [
      435,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 445,
    "end": 447,
    "range": [
      445,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 450,
    "end": 454,
    "range": [
      450,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 457,
    "end": 459,
    "range": [
      457,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 466,
    "end": 470,
    "range": [
      466,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 483,
    "end": 491,
    "range": [
      483,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "dataFunc",
    "start": 492,
    "end": 500,
    "range": [
      492,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 504,
    "end": 511,
    "range": [
      504,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 516,
    "end": 518,
    "range": [
      516,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiCaseFixture",
    "start": 525,
    "end": 541,
    "range": [
      525,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 549,
    "end": 555,
    "range": [
      549,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "cases",
    "start": 558,
    "end": 563,
    "range": [
      558,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "subFunc",
    "start": 565,
    "end": 572,
    "range": [
      565,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 581,
    "end": 589,
    "range": [
      581,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunc",
    "start": 590,
    "end": 598,
    "range": [
      590,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 605,
    "end": 610,
    "range": [
      605,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "fixture",
    "start": 611,
    "end": 618,
    "range": [
      611,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "dataFunc",
    "start": 621,
    "end": 629,
    "range": [
      621,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "TestCase",
    "start": 630,
    "end": 638,
    "range": [
      630,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 639,
    "end": 645,
    "range": [
      639,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 648,
    "end": 654,
    "range": [
      648,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "subDataFunc",
    "start": 657,
    "end": 668,
    "range": [
      657,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "fixture",
    "start": 673,
    "end": 680,
    "range": [
      673,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "cases",
    "start": 681,
    "end": 686,
    "range": [
      681,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 687,
    "end": 694,
    "range": [
      687,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 698,
    "end": 702,
    "range": [
      698,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 704,
    "end": 708,
    "range": [
      704,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 712,
    "end": 714,
    "range": [
      712,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 723,
    "end": 725,
    "range": [
      723,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 727,
    "end": 732,
    "range": [
      727,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 733,
    "end": 740,
    "range": [
      733,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 741,
    "end": 745,
    "range": [
      741,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 815,
    "end": 820,
    "range": [
      815,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "reversedVal1",
    "start": 821,
    "end": 833,
    "range": [
      821,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 836,
    "end": 840,
    "range": [
      836,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 841,
    "end": 846,
    "range": [
      841,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "reverse",
    "start": 849,
    "end": 856,
    "range": [
      849,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 870,
    "end": 877,
    "range": [
      870,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 878,
    "end": 881,
    "range": [
      878,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "reversedVal1",
    "start": 882,
    "end": 894,
    "range": [
      882,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 905,
    "end": 909,
    "range": [
      905,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 922,
    "end": 929,
    "range": [
      922,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 930,
    "end": 933,
    "range": [
      930,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "val1",
    "start": 934,
    "end": 938,
    "range": [
      934,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 955,
    "end": 962,
    "range": [
      955,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 963,
    "end": 966,
    "range": [
      963,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "val2",
    "start": 967,
    "end": 971,
    "range": [
      967,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunc",
    "start": 983,
    "end": 991,
    "range": [
      983,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  }
]
```
