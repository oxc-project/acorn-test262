__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 36
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 47,
                        "end": 53
                      },
                      "start": 45,
                      "end": 53
                    },
                    "start": 44,
                    "end": 53
                  },
                  "readonly": false,
                  "static": false,
                  "start": 37,
                  "end": 53
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 55,
                "end": 58
              },
              "expression": false,
              "start": 36,
              "end": 58
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 18,
            "end": 58
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 77
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 91
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 92,
                          "end": 93
                        }
                      ],
                      "start": 82,
                      "end": 94
                    },
                    "directive": null,
                    "start": 82,
                    "end": 95
                  }
                ],
                "start": 80,
                "end": 97
              },
              "expression": false,
              "start": 77,
              "end": 97
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 63,
            "end": 97
          }
        ],
        "start": 12,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseB",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 112
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 140
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      },
                      "start": 149,
                      "end": 157
                    },
                    "start": 148,
                    "end": 157
                  },
                  "readonly": false,
                  "static": false,
                  "start": 141,
                  "end": 157
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 159,
                "end": 162
              },
              "expression": false,
              "start": 140,
              "end": 162
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 119,
            "end": 162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 181
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 195
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 196,
                          "end": 197
                        }
                      ],
                      "start": 186,
                      "end": 198
                    },
                    "directive": null,
                    "start": 186,
                    "end": 199
                  }
                ],
                "start": 184,
                "end": 201
              },
              "expression": false,
              "start": 181,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 201
          }
        ],
        "start": 113,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 203
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseC",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 216
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 242
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 253,
                        "end": 259
                      },
                      "start": 251,
                      "end": 259
                    },
                    "start": 250,
                    "end": 259
                  },
                  "readonly": false,
                  "static": false,
                  "start": 243,
                  "end": 259
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 261,
                "end": 264
              },
              "expression": false,
              "start": 242,
              "end": 264
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 223,
            "end": 264
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 283
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 297
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 298,
                          "end": 299
                        }
                      ],
                      "start": 288,
                      "end": 300
                    },
                    "directive": null,
                    "start": 288,
                    "end": 301
                  }
                ],
                "start": 286,
                "end": 303
              },
              "expression": false,
              "start": 283,
              "end": 303
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 269,
            "end": 303
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 329
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 343
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 344,
                          "end": 345
                        }
                      ],
                      "start": 334,
                      "end": 346
                    },
                    "directive": null,
                    "start": 334,
                    "end": 347
                  }
                ],
                "start": 332,
                "end": 349
              },
              "expression": false,
              "start": 329,
              "end": 349
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 308,
            "end": 349
          }
        ],
        "start": 217,
        "end": 351
      },
      "abstract": false,
      "declare": false,
      "start": 205,
      "end": 351
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedA",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 367
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseA",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 381
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 399
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 410,
                        "end": 416
                      },
                      "start": 408,
                      "end": 416
                    },
                    "start": 407,
                    "end": 416
                  },
                  "readonly": false,
                  "static": false,
                  "start": 400,
                  "end": 416
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 420,
                        "end": 425
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 426,
                          "end": 427
                        }
                      ],
                      "optional": false,
                      "start": 420,
                      "end": 428
                    },
                    "directive": null,
                    "start": 420,
                    "end": 429
                  }
                ],
                "start": 418,
                "end": 431
              },
              "expression": false,
              "start": 399,
              "end": 431
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 388,
            "end": 431
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 450
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 467
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 468,
                          "end": 469
                        }
                      ],
                      "start": 455,
                      "end": 470
                    },
                    "directive": null,
                    "start": 455,
                    "end": 471
                  }
                ],
                "start": 453,
                "end": 473
              },
              "expression": false,
              "start": 450,
              "end": 473
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 436,
            "end": 473
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 496
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 510
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 511,
                          "end": 512
                        }
                      ],
                      "start": 501,
                      "end": 513
                    },
                    "directive": null,
                    "start": 501,
                    "end": 514
                  }
                ],
                "start": 499,
                "end": 516
              },
              "expression": false,
              "start": 496,
              "end": 516
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 478,
            "end": 516
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 546
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 560
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 561,
                          "end": 562
                        }
                      ],
                      "start": 551,
                      "end": 563
                    },
                    "directive": null,
                    "start": 551,
                    "end": 564
                  }
                ],
                "start": 549,
                "end": 566
              },
              "expression": false,
              "start": 546,
              "end": 566
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 521,
            "end": 566
          }
        ],
        "start": 382,
        "end": 568
      },
      "abstract": false,
      "declare": false,
      "start": 353,
      "end": 568
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedB",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 584
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseB",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 598
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 616
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 627,
                        "end": 633
                      },
                      "start": 625,
                      "end": 633
                    },
                    "start": 624,
                    "end": 633
                  },
                  "readonly": false,
                  "static": false,
                  "start": 617,
                  "end": 633
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 637,
                        "end": 642
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 643,
                          "end": 644
                        }
                      ],
                      "optional": false,
                      "start": 637,
                      "end": 645
                    },
                    "directive": null,
                    "start": 637,
                    "end": 646
                  }
                ],
                "start": 635,
                "end": 648
              },
              "expression": false,
              "start": 616,
              "end": 648
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 605,
            "end": 648
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 667
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 684
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 685,
                          "end": 686
                        }
                      ],
                      "start": 672,
                      "end": 687
                    },
                    "directive": null,
                    "start": 672,
                    "end": 688
                  }
                ],
                "start": 670,
                "end": 690
              },
              "expression": false,
              "start": 667,
              "end": 690
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 653,
            "end": 690
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 713
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 722,
                        "end": 727
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 728,
                          "end": 729
                        }
                      ],
                      "start": 718,
                      "end": 730
                    },
                    "directive": null,
                    "start": 718,
                    "end": 731
                  }
                ],
                "start": 716,
                "end": 733
              },
              "expression": false,
              "start": 713,
              "end": 733
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 695,
            "end": 733
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 769
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 783
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 784,
                          "end": 785
                        }
                      ],
                      "start": 774,
                      "end": 786
                    },
                    "directive": null,
                    "start": 774,
                    "end": 787
                  }
                ],
                "start": 772,
                "end": 789
              },
              "expression": false,
              "start": 769,
              "end": 789
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 744,
            "end": 789
          }
        ],
        "start": 599,
        "end": 797
      },
      "abstract": false,
      "declare": false,
      "start": 570,
      "end": 797
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedC",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 813
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseC",
        "optional": false,
        "typeAnnotation": null,
        "start": 822,
        "end": 827
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 854
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 865,
                        "end": 871
                      },
                      "start": 863,
                      "end": 871
                    },
                    "start": 862,
                    "end": 871
                  },
                  "readonly": false,
                  "static": false,
                  "start": 855,
                  "end": 871
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 875,
                        "end": 880
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 881,
                          "end": 882
                        }
                      ],
                      "optional": false,
                      "start": 875,
                      "end": 883
                    },
                    "directive": null,
                    "start": 875,
                    "end": 884
                  }
                ],
                "start": 873,
                "end": 886
              },
              "expression": false,
              "start": 854,
              "end": 886
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 843,
            "end": 886
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 891,
              "end": 905
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 914,
                        "end": 922
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 923,
                          "end": 924
                        }
                      ],
                      "start": 910,
                      "end": 925
                    },
                    "directive": null,
                    "start": 910,
                    "end": 926
                  }
                ],
                "start": 908,
                "end": 928
              },
              "expression": false,
              "start": 905,
              "end": 928
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 891,
            "end": 928
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 951
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 965
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 966,
                          "end": 968
                        }
                      ],
                      "start": 956,
                      "end": 969
                    },
                    "directive": null,
                    "start": 956,
                    "end": 970
                  }
                ],
                "start": 954,
                "end": 972
              },
              "expression": false,
              "start": 951,
              "end": 972
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 933,
            "end": 972
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticBaseInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 993,
              "end": 1011
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1020,
                        "end": 1025
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 11,
                          "raw": "11",
                          "start": 1026,
                          "end": 1028
                        }
                      ],
                      "start": 1016,
                      "end": 1029
                    },
                    "directive": null,
                    "start": 1016,
                    "end": 1030
                  }
                ],
                "start": 1014,
                "end": 1032
              },
              "expression": false,
              "start": 1011,
              "end": 1032
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 986,
            "end": 1032
          }
        ],
        "start": 828,
        "end": 1043
      },
      "abstract": false,
      "declare": false,
      "start": 799,
      "end": 1043
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
            "name": "ba",
            "optional": false,
            "typeAnnotation": null,
            "start": 1049,
            "end": 1051
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1063
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1064,
                "end": 1065
              }
            ],
            "start": 1054,
            "end": 1066
          },
          "definite": false,
          "start": 1049,
          "end": 1066
        }
      ],
      "declare": false,
      "start": 1045,
      "end": 1067
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
            "name": "bb",
            "optional": false,
            "typeAnnotation": null,
            "start": 1072,
            "end": 1074
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1086
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1087,
                "end": 1088
              }
            ],
            "start": 1077,
            "end": 1089
          },
          "definite": false,
          "start": 1072,
          "end": 1089
        }
      ],
      "declare": false,
      "start": 1068,
      "end": 1090
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
            "name": "bc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1104,
            "end": 1106
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseC",
              "optional": false,
              "typeAnnotation": null,
              "start": 1113,
              "end": 1118
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1119,
                "end": 1120
              }
            ],
            "start": 1109,
            "end": 1121
          },
          "definite": false,
          "start": 1104,
          "end": 1121
        }
      ],
      "declare": false,
      "start": 1100,
      "end": 1122
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
            "name": "da",
            "optional": false,
            "typeAnnotation": null,
            "start": 1137,
            "end": 1139
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1154
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1155,
                "end": 1156
              }
            ],
            "start": 1142,
            "end": 1157
          },
          "definite": false,
          "start": 1137,
          "end": 1157
        }
      ],
      "declare": false,
      "start": 1133,
      "end": 1158
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
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1165
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1180
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1181,
                "end": 1182
              }
            ],
            "start": 1168,
            "end": 1183
          },
          "definite": false,
          "start": 1163,
          "end": 1183
        }
      ],
      "declare": false,
      "start": 1159,
      "end": 1184
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
            "name": "dc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1189,
            "end": 1191
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedC",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1206
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1207,
                "end": 1208
              }
            ],
            "start": 1194,
            "end": 1209
          },
          "definite": false,
          "start": 1189,
          "end": 1209
        }
      ],
      "declare": false,
      "start": 1185,
      "end": 1210
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1210
}
```
