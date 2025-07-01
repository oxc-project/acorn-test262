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
