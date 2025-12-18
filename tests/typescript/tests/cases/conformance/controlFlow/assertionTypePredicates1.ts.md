__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isString",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 33,
              "end": 40
            },
            "start": 31,
            "end": 40
          },
          "start": 26,
          "end": 40
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 48
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            },
            "start": 52,
            "end": 58
          },
          "start": 43,
          "end": 58
        },
        "start": 41,
        "end": 58
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isArrayOfStrings",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 93
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 101,
              "end": 108
            },
            "start": 99,
            "end": 108
          },
          "start": 94,
          "end": 108
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 116
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              },
              "start": 120,
              "end": 128
            },
            "start": 120,
            "end": 128
          },
          "start": 111,
          "end": 128
        },
        "start": 109,
        "end": 128
      },
      "body": null,
      "expression": false,
      "start": 60,
      "end": 129
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
            "name": "assert",
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 153,
                        "end": 160
                      },
                      "start": 151,
                      "end": 160
                    },
                    "start": 146,
                    "end": 160
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 178
                    },
                    "asserts": true,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 178
                  },
                  "start": 162,
                  "end": 178
                },
                "start": 145,
                "end": 178
              },
              "start": 143,
              "end": 178
            },
            "start": 137,
            "end": 178
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 186
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 190,
              "end": 192
            },
            "id": null,
            "generator": false,
            "start": 181,
            "end": 192
          },
          "definite": false,
          "start": 137,
          "end": 192
        }
      ],
      "declare": false,
      "start": 131,
      "end": 192
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertIsString",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 225
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 233,
              "end": 240
            },
            "start": 231,
            "end": 240
          },
          "start": 226,
          "end": 240
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 256
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 260,
              "end": 266
            },
            "start": 260,
            "end": 266
          },
          "start": 243,
          "end": 266
        },
        "start": 241,
        "end": 266
      },
      "body": null,
      "expression": false,
      "start": 194,
      "end": 267
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertIsArrayOfStrings",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 307
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 315,
              "end": 322
            },
            "start": 313,
            "end": 322
          },
          "start": 308,
          "end": 322
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 338
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 342,
              "end": 350
            },
            "start": 342,
            "end": 350
          },
          "start": 325,
          "end": 350
        },
        "start": 323,
        "end": 350
      },
      "body": null,
      "expression": false,
      "start": 268,
      "end": 351
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertDefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 382
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
              "start": 383,
              "end": 384
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 383,
            "end": 384
          }
        ],
        "start": 382,
        "end": 385
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
                "start": 393,
                "end": 394
              },
              "typeArguments": null,
              "start": 393,
              "end": 394
            },
            "start": 391,
            "end": 394
          },
          "start": 386,
          "end": 394
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 410
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonNullable",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 425
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
                      "start": 426,
                      "end": 427
                    },
                    "typeArguments": null,
                    "start": 426,
                    "end": 427
                  }
                ],
                "start": 425,
                "end": 428
              },
              "start": 414,
              "end": 428
            },
            "start": 414,
            "end": 428
          },
          "start": 397,
          "end": 428
        },
        "start": 395,
        "end": 428
      },
      "body": null,
      "expression": false,
      "start": 352,
      "end": 429
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f01",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 443
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 447,
              "end": 454
            },
            "start": 445,
            "end": 454
          },
          "start": 444,
          "end": 454
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 468,
                  "end": 472
                },
                "prefix": true,
                "start": 467,
                "end": 472
              },
              "prefix": true,
              "start": 466,
              "end": 472
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 490
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 498,
                            "end": 499
                          },
                          "prefix": true,
                          "start": 491,
                          "end": 499
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 504,
                          "end": 512
                        },
                        "start": 491,
                        "end": 512
                      }
                    ],
                    "optional": false,
                    "start": 484,
                    "end": 513
                  },
                  "directive": null,
                  "start": 484,
                  "end": 514
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 523,
                      "end": 524
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 531
                    },
                    "optional": false,
                    "computed": false,
                    "start": 523,
                    "end": 531
                  },
                  "directive": null,
                  "start": 523,
                  "end": 532
                }
              ],
              "start": 474,
              "end": 538
            },
            "alternate": null,
            "start": 462,
            "end": 538
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 549,
                  "end": 553
                },
                "prefix": true,
                "start": 548,
                "end": 553
              },
              "prefix": true,
              "start": 547,
              "end": 553
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 571
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 572,
                          "end": 573
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 585,
                          "end": 590
                        },
                        "start": 572,
                        "end": 590
                      }
                    ],
                    "optional": false,
                    "start": 565,
                    "end": 591
                  },
                  "directive": null,
                  "start": 565,
                  "end": 592
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 601,
                      "end": 602
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 610
                    },
                    "optional": false,
                    "computed": false,
                    "start": 601,
                    "end": 610
                  },
                  "directive": null,
                  "start": 601,
                  "end": 611
                }
              ],
              "start": 555,
              "end": 617
            },
            "alternate": null,
            "start": 543,
            "end": 617
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 628,
                  "end": 632
                },
                "prefix": true,
                "start": 627,
                "end": 632
              },
              "prefix": true,
              "start": 626,
              "end": 632
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 650
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 658,
                              "end": 659
                            },
                            "prefix": true,
                            "start": 651,
                            "end": 659
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "boolean",
                            "raw": "\"boolean\"",
                            "start": 664,
                            "end": 673
                          },
                          "start": 651,
                          "end": 673
                        },
                        "operator": "||",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 684,
                              "end": 685
                            },
                            "prefix": true,
                            "start": 677,
                            "end": 685
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "number",
                            "raw": "\"number\"",
                            "start": 690,
                            "end": 698
                          },
                          "start": 677,
                          "end": 698
                        },
                        "start": 651,
                        "end": 698
                      }
                    ],
                    "optional": false,
                    "start": 644,
                    "end": 699
                  },
                  "directive": null,
                  "start": 644,
                  "end": 700
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 709,
                      "end": 710
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toLocaleString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 711,
                      "end": 725
                    },
                    "optional": false,
                    "computed": false,
                    "start": 709,
                    "end": 725
                  },
                  "directive": null,
                  "start": 709,
                  "end": 726
                }
              ],
              "start": 634,
              "end": 732
            },
            "alternate": null,
            "start": 622,
            "end": 732
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 743,
                  "end": 747
                },
                "prefix": true,
                "start": 742,
                "end": 747
              },
              "prefix": true,
              "start": 741,
              "end": 747
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 765
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isArrayOfStrings",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 766,
                          "end": 782
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 783,
                            "end": 784
                          }
                        ],
                        "optional": false,
                        "start": 766,
                        "end": 785
                      }
                    ],
                    "optional": false,
                    "start": 759,
                    "end": 786
                  },
                  "directive": null,
                  "start": 759,
                  "end": 787
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 796,
                        "end": 797
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 798,
                        "end": 799
                      },
                      "optional": false,
                      "computed": true,
                      "start": 796,
                      "end": 800
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 801,
                      "end": 807
                    },
                    "optional": false,
                    "computed": false,
                    "start": 796,
                    "end": 807
                  },
                  "directive": null,
                  "start": 796,
                  "end": 808
                }
              ],
              "start": 749,
              "end": 814
            },
            "alternate": null,
            "start": 737,
            "end": 814
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 825,
                  "end": 829
                },
                "prefix": true,
                "start": 824,
                "end": 829
              },
              "prefix": true,
              "start": 823,
              "end": 829
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assertIsArrayOfStrings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 841,
                      "end": 863
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 864,
                        "end": 865
                      }
                    ],
                    "optional": false,
                    "start": 841,
                    "end": 866
                  },
                  "directive": null,
                  "start": 841,
                  "end": 867
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 876,
                        "end": 877
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 878,
                        "end": 879
                      },
                      "optional": false,
                      "computed": true,
                      "start": 876,
                      "end": 880
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 881,
                      "end": 887
                    },
                    "optional": false,
                    "computed": false,
                    "start": 876,
                    "end": 887
                  },
                  "directive": null,
                  "start": 876,
                  "end": 888
                }
              ],
              "start": 831,
              "end": 894
            },
            "alternate": null,
            "start": 819,
            "end": 894
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 905,
                  "end": 909
                },
                "prefix": true,
                "start": 904,
                "end": 909
              },
              "prefix": true,
              "start": 903,
              "end": 909
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assertIsArrayOfStrings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 921,
                      "end": 943
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 944,
                        "end": 949
                      }
                    ],
                    "optional": false,
                    "start": 921,
                    "end": 950
                  },
                  "directive": null,
                  "start": 921,
                  "end": 951
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 960,
                    "end": 961
                  },
                  "directive": null,
                  "start": 960,
                  "end": 962
                }
              ],
              "start": 911,
              "end": 968
            },
            "alternate": null,
            "start": 899,
            "end": 968
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 979,
                  "end": 983
                },
                "prefix": true,
                "start": 978,
                "end": 983
              },
              "prefix": true,
              "start": 977,
              "end": 983
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 995,
                      "end": 1001
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1002,
                            "end": 1003
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1008,
                            "end": 1017
                          },
                          "start": 1002,
                          "end": 1017
                        },
                        "operator": "||",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1028,
                              "end": 1029
                            },
                            "prefix": true,
                            "start": 1021,
                            "end": 1029
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 1034,
                            "end": 1042
                          },
                          "start": 1021,
                          "end": 1042
                        },
                        "start": 1002,
                        "end": 1042
                      }
                    ],
                    "optional": false,
                    "start": 995,
                    "end": 1043
                  },
                  "directive": null,
                  "start": 995,
                  "end": 1044
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1053,
                    "end": 1054
                  },
                  "directive": null,
                  "start": 1053,
                  "end": 1055
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assertDefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1087,
                      "end": 1100
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1101,
                        "end": 1102
                      }
                    ],
                    "optional": false,
                    "start": 1087,
                    "end": 1103
                  },
                  "directive": null,
                  "start": 1087,
                  "end": 1104
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1113,
                    "end": 1114
                  },
                  "directive": null,
                  "start": 1113,
                  "end": 1115
                }
              ],
              "start": 985,
              "end": 1132
            },
            "alternate": null,
            "start": 973,
            "end": 1132
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1143,
                  "end": 1147
                },
                "prefix": true,
                "start": 1142,
                "end": 1147
              },
              "prefix": true,
              "start": 1141,
              "end": 1147
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1159,
                      "end": 1165
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1166,
                        "end": 1171
                      }
                    ],
                    "optional": false,
                    "start": 1159,
                    "end": 1172
                  },
                  "directive": null,
                  "start": 1159,
                  "end": 1173
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1182,
                    "end": 1183
                  },
                  "directive": null,
                  "start": 1182,
                  "end": 1184
                }
              ],
              "start": 1149,
              "end": 1206
            },
            "alternate": null,
            "start": 1137,
            "end": 1206
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1217,
                  "end": 1221
                },
                "prefix": true,
                "start": 1216,
                "end": 1221
              },
              "prefix": true,
              "start": 1215,
              "end": 1221
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1233,
                      "end": 1239
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 1240,
                          "end": 1245
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1249,
                            "end": 1250
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1255,
                            "end": 1264
                          },
                          "start": 1249,
                          "end": 1264
                        },
                        "start": 1240,
                        "end": 1264
                      }
                    ],
                    "optional": false,
                    "start": 1233,
                    "end": 1265
                  },
                  "directive": null,
                  "start": 1233,
                  "end": 1266
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1275,
                    "end": 1276
                  },
                  "directive": null,
                  "start": 1275,
                  "end": 1277
                }
              ],
              "start": 1223,
              "end": 1299
            },
            "alternate": null,
            "start": 1211,
            "end": 1299
          }
        ],
        "start": 456,
        "end": 1301
      },
      "expression": false,
      "start": 431,
      "end": 1301
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f02",
        "optional": false,
        "typeAnnotation": null,
        "start": 1312,
        "end": 1315
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1319,
                  "end": 1325
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1328,
                  "end": 1337
                }
              ],
              "start": 1319,
              "end": 1337
            },
            "start": 1317,
            "end": 1337
          },
          "start": 1316,
          "end": 1337
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1351,
                  "end": 1355
                },
                "prefix": true,
                "start": 1350,
                "end": 1355
              },
              "prefix": true,
              "start": 1349,
              "end": 1355
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1367,
                      "end": 1373
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1374,
                        "end": 1375
                      }
                    ],
                    "optional": false,
                    "start": 1367,
                    "end": 1376
                  },
                  "directive": null,
                  "start": 1367,
                  "end": 1377
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1386,
                      "end": 1387
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1388,
                      "end": 1394
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1386,
                    "end": 1394
                  },
                  "directive": null,
                  "start": 1386,
                  "end": 1395
                }
              ],
              "start": 1357,
              "end": 1401
            },
            "alternate": null,
            "start": 1345,
            "end": 1401
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1412,
                  "end": 1416
                },
                "prefix": true,
                "start": 1411,
                "end": 1416
              },
              "prefix": true,
              "start": 1410,
              "end": 1416
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1428,
                      "end": 1434
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1435,
                          "end": 1436
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1441,
                          "end": 1450
                        },
                        "start": 1435,
                        "end": 1450
                      }
                    ],
                    "optional": false,
                    "start": 1428,
                    "end": 1451
                  },
                  "directive": null,
                  "start": 1428,
                  "end": 1452
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1461,
                      "end": 1462
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1463,
                      "end": 1469
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1461,
                    "end": 1469
                  },
                  "directive": null,
                  "start": 1461,
                  "end": 1470
                }
              ],
              "start": 1418,
              "end": 1476
            },
            "alternate": null,
            "start": 1406,
            "end": 1476
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1487,
                  "end": 1491
                },
                "prefix": true,
                "start": 1486,
                "end": 1491
              },
              "prefix": true,
              "start": 1485,
              "end": 1491
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assertDefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1503,
                      "end": 1516
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1517,
                        "end": 1518
                      }
                    ],
                    "optional": false,
                    "start": 1503,
                    "end": 1519
                  },
                  "directive": null,
                  "start": 1503,
                  "end": 1520
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1529,
                      "end": 1530
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1531,
                      "end": 1537
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1529,
                    "end": 1537
                  },
                  "directive": null,
                  "start": 1529,
                  "end": 1538
                }
              ],
              "start": 1493,
              "end": 1544
            },
            "alternate": null,
            "start": 1481,
            "end": 1544
          }
        ],
        "start": 1339,
        "end": 1546
      },
      "expression": false,
      "start": 1303,
      "end": 1546
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f03",
        "optional": false,
        "typeAnnotation": null,
        "start": 1557,
        "end": 1560
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1564,
                  "end": 1570
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1573,
                  "end": 1582
                }
              ],
              "start": 1564,
              "end": 1582
            },
            "start": 1562,
            "end": 1582
          },
          "start": 1561,
          "end": 1582
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "assert",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1600,
                      "end": 1607
                    },
                    "start": 1598,
                    "end": 1607
                  },
                  "start": 1593,
                  "end": 1607
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1620,
                    "end": 1625
                  },
                  "asserts": true,
                  "typeAnnotation": null,
                  "start": 1612,
                  "end": 1625
                },
                "start": 1609,
                "end": 1625
              },
              "start": 1592,
              "end": 1625
            },
            "start": 1590,
            "end": 1625
          },
          "start": 1584,
          "end": 1625
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
                "type": "Identifier",
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null,
                "start": 1633,
                "end": 1639
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1640,
                  "end": 1641
                }
              ],
              "optional": false,
              "start": 1633,
              "end": 1642
            },
            "directive": null,
            "start": 1633,
            "end": 1643
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1648,
                "end": 1649
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1650,
                "end": 1656
              },
              "optional": false,
              "computed": false,
              "start": 1648,
              "end": 1656
            },
            "directive": null,
            "start": 1648,
            "end": 1657
          }
        ],
        "start": 1627,
        "end": 1659
      },
      "expression": false,
      "start": 1548,
      "end": 1659
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Debug",
        "optional": false,
        "typeAnnotation": null,
        "start": 1671,
        "end": 1676
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null,
                "start": 1707,
                "end": 1713
              },
              "generator": false,
              "async": false,
              "declare": true,
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
                      "type": "TSUnknownKeyword",
                      "start": 1721,
                      "end": 1728
                    },
                    "start": 1719,
                    "end": 1728
                  },
                  "start": 1714,
                  "end": 1728
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1740,
                      "end": 1746
                    },
                    "start": 1738,
                    "end": 1746
                  },
                  "start": 1730,
                  "end": 1746
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1757,
                    "end": 1762
                  },
                  "asserts": true,
                  "typeAnnotation": null,
                  "start": 1749,
                  "end": 1762
                },
                "start": 1747,
                "end": 1762
              },
              "body": null,
              "expression": false,
              "start": 1690,
              "end": 1763
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1683,
            "end": 1763
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertDefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1792,
                "end": 1805
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
                      "start": 1806,
                      "end": 1807
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1806,
                    "end": 1807
                  }
                ],
                "start": 1805,
                "end": 1808
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
                        "start": 1816,
                        "end": 1817
                      },
                      "typeArguments": null,
                      "start": 1816,
                      "end": 1817
                    },
                    "start": 1814,
                    "end": 1817
                  },
                  "start": 1809,
                  "end": 1817
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1828,
                    "end": 1833
                  },
                  "asserts": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNullable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1837,
                        "end": 1848
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
                              "start": 1849,
                              "end": 1850
                            },
                            "typeArguments": null,
                            "start": 1849,
                            "end": 1850
                          }
                        ],
                        "start": 1848,
                        "end": 1851
                      },
                      "start": 1837,
                      "end": 1851
                    },
                    "start": 1837,
                    "end": 1851
                  },
                  "start": 1820,
                  "end": 1851
                },
                "start": 1818,
                "end": 1851
              },
              "body": null,
              "expression": false,
              "start": 1775,
              "end": 1852
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1768,
            "end": 1852
          }
        ],
        "start": 1677,
        "end": 1854
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1661,
      "end": 1854
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1865,
        "end": 1868
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1872,
                  "end": 1878
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1881,
                  "end": 1890
                }
              ],
              "start": 1872,
              "end": 1890
            },
            "start": 1870,
            "end": 1890
          },
          "start": 1869,
          "end": 1890
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1904,
                  "end": 1908
                },
                "prefix": true,
                "start": 1903,
                "end": 1908
              },
              "prefix": true,
              "start": 1902,
              "end": 1908
            },
            "consequent": {
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
                        "name": "Debug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1920,
                        "end": 1925
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1926,
                        "end": 1932
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1920,
                      "end": 1932
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1933,
                        "end": 1934
                      }
                    ],
                    "optional": false,
                    "start": 1920,
                    "end": 1935
                  },
                  "directive": null,
                  "start": 1920,
                  "end": 1936
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1945,
                      "end": 1946
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1947,
                      "end": 1953
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1945,
                    "end": 1953
                  },
                  "directive": null,
                  "start": 1945,
                  "end": 1954
                }
              ],
              "start": 1910,
              "end": 1960
            },
            "alternate": null,
            "start": 1898,
            "end": 1960
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1971,
                  "end": 1975
                },
                "prefix": true,
                "start": 1970,
                "end": 1975
              },
              "prefix": true,
              "start": 1969,
              "end": 1975
            },
            "consequent": {
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
                        "name": "Debug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1987,
                        "end": 1992
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1993,
                        "end": 1999
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1987,
                      "end": 1999
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2000,
                          "end": 2001
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2006,
                          "end": 2015
                        },
                        "start": 2000,
                        "end": 2015
                      }
                    ],
                    "optional": false,
                    "start": 1987,
                    "end": 2016
                  },
                  "directive": null,
                  "start": 1987,
                  "end": 2017
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2026,
                      "end": 2027
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2034
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2026,
                    "end": 2034
                  },
                  "directive": null,
                  "start": 2026,
                  "end": 2035
                }
              ],
              "start": 1977,
              "end": 2041
            },
            "alternate": null,
            "start": 1965,
            "end": 2041
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2052,
                  "end": 2056
                },
                "prefix": true,
                "start": 2051,
                "end": 2056
              },
              "prefix": true,
              "start": 2050,
              "end": 2056
            },
            "consequent": {
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
                        "name": "Debug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2068,
                        "end": 2073
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertDefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2074,
                        "end": 2087
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2068,
                      "end": 2087
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2088,
                        "end": 2089
                      }
                    ],
                    "optional": false,
                    "start": 2068,
                    "end": 2090
                  },
                  "directive": null,
                  "start": 2068,
                  "end": 2091
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2100,
                      "end": 2101
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2102,
                      "end": 2108
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2100,
                    "end": 2108
                  },
                  "directive": null,
                  "start": 2100,
                  "end": 2109
                }
              ],
              "start": 2058,
              "end": 2115
            },
            "alternate": null,
            "start": 2046,
            "end": 2115
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2126,
                  "end": 2130
                },
                "prefix": true,
                "start": 2125,
                "end": 2130
              },
              "prefix": true,
              "start": 2124,
              "end": 2130
            },
            "consequent": {
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
                        "name": "Debug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2142,
                        "end": 2147
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2148,
                        "end": 2154
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2142,
                      "end": 2154
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 2155,
                        "end": 2160
                      }
                    ],
                    "optional": false,
                    "start": 2142,
                    "end": 2161
                  },
                  "directive": null,
                  "start": 2142,
                  "end": 2162
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2171,
                    "end": 2172
                  },
                  "directive": null,
                  "start": 2171,
                  "end": 2173
                }
              ],
              "start": 2132,
              "end": 2195
            },
            "alternate": null,
            "start": 2120,
            "end": 2195
          }
        ],
        "start": 1892,
        "end": 2197
      },
      "expression": false,
      "start": 1856,
      "end": 2197
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 2205,
        "end": 2209
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
              "name": "assert",
              "optional": false,
              "typeAnnotation": null,
              "start": 2216,
              "end": 2222
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 2230,
                      "end": 2237
                    },
                    "start": 2228,
                    "end": 2237
                  },
                  "start": 2223,
                  "end": 2237
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2248,
                    "end": 2253
                  },
                  "asserts": true,
                  "typeAnnotation": null,
                  "start": 2240,
                  "end": 2253
                },
                "start": 2238,
                "end": 2253
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2268,
                      "end": 2273
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": null,
                      "start": 2275,
                      "end": 2282
                    },
                    "alternate": null,
                    "start": 2264,
                    "end": 2282
                  },
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2301,
                        "end": 2306
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2297,
                      "end": 2308
                    },
                    "start": 2291,
                    "end": 2309
                  }
                ],
                "start": 2254,
                "end": 2315
              },
              "expression": false,
              "start": 2222,
              "end": 2315
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2216,
            "end": 2315
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isTest2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2320,
              "end": 2327
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 2331,
                    "end": 2335
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2339,
                        "end": 2344
                      },
                      "typeArguments": null,
                      "start": 2339,
                      "end": 2344
                    },
                    "start": 2339,
                    "end": 2344
                  },
                  "start": 2331,
                  "end": 2344
                },
                "start": 2329,
                "end": 2344
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 2362,
                        "end": 2366
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2378,
                        "end": 2383
                      },
                      "start": 2362,
                      "end": 2383
                    },
                    "start": 2355,
                    "end": 2384
                  }
                ],
                "start": 2345,
                "end": 2390
              },
              "expression": false,
              "start": 2327,
              "end": 2390
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2320,
            "end": 2390
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assertIsTest2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2395,
              "end": 2408
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 2420,
                    "end": 2424
                  },
                  "asserts": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2428,
                        "end": 2433
                      },
                      "typeArguments": null,
                      "start": 2428,
                      "end": 2433
                    },
                    "start": 2428,
                    "end": 2433
                  },
                  "start": 2412,
                  "end": 2433
                },
                "start": 2410,
                "end": 2433
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 2448,
                        "end": 2452
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2464,
                        "end": 2469
                      },
                      "start": 2448,
                      "end": 2469
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": null,
                      "start": 2471,
                      "end": 2478
                    },
                    "alternate": null,
                    "start": 2444,
                    "end": 2478
                  },
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2497,
                        "end": 2502
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2493,
                      "end": 2504
                    },
                    "start": 2487,
                    "end": 2505
                  }
                ],
                "start": 2434,
                "end": 2511
              },
              "expression": false,
              "start": 2408,
              "end": 2511
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2395,
            "end": 2511
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assertThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 2516,
              "end": 2526
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 2538,
                    "end": 2542
                  },
                  "asserts": true,
                  "typeAnnotation": null,
                  "start": 2530,
                  "end": 2542
                },
                "start": 2528,
                "end": 2542
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "ThisExpression",
                        "start": 2558,
                        "end": 2562
                      },
                      "prefix": true,
                      "start": 2557,
                      "end": 2562
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": null,
                      "start": 2564,
                      "end": 2571
                    },
                    "alternate": null,
                    "start": 2553,
                    "end": 2571
                  },
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2590,
                        "end": 2595
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2586,
                      "end": 2597
                    },
                    "start": 2580,
                    "end": 2598
                  }
                ],
                "start": 2543,
                "end": 2604
              },
              "expression": false,
              "start": 2526,
              "end": 2604
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2516,
            "end": 2604
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2609,
              "end": 2612
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2625,
                          "end": 2629
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assertThis",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2630,
                          "end": 2640
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2625,
                        "end": 2640
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2625,
                      "end": 2642
                    },
                    "directive": null,
                    "start": 2625,
                    "end": 2643
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ThisExpression",
                      "start": 2652,
                      "end": 2656
                    },
                    "directive": null,
                    "start": 2652,
                    "end": 2657
                  }
                ],
                "start": 2615,
                "end": 2663
              },
              "expression": false,
              "start": 2612,
              "end": 2663
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2609,
            "end": 2663
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2668,
              "end": 2671
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 2675,
                      "end": 2682
                    },
                    "start": 2673,
                    "end": 2682
                  },
                  "start": 2672,
                  "end": 2682
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2694,
                          "end": 2698
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2699,
                          "end": 2705
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2694,
                        "end": 2705
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2713,
                              "end": 2714
                            },
                            "prefix": true,
                            "start": 2706,
                            "end": 2714
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2719,
                            "end": 2727
                          },
                          "start": 2706,
                          "end": 2727
                        }
                      ],
                      "optional": false,
                      "start": 2694,
                      "end": 2728
                    },
                    "directive": null,
                    "start": 2694,
                    "end": 2729
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2738,
                        "end": 2739
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2740,
                        "end": 2746
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2738,
                      "end": 2746
                    },
                    "directive": null,
                    "start": 2738,
                    "end": 2747
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2760,
                          "end": 2764
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isTest2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2765,
                          "end": 2772
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2760,
                        "end": 2772
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2760,
                      "end": 2774
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2790,
                              "end": 2794
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2795,
                              "end": 2796
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2790,
                            "end": 2796
                          },
                          "directive": null,
                          "start": 2790,
                          "end": 2797
                        }
                      ],
                      "start": 2776,
                      "end": 2807
                    },
                    "alternate": null,
                    "start": 2756,
                    "end": 2807
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2816,
                          "end": 2820
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assertIsTest2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2821,
                          "end": 2834
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2816,
                        "end": 2834
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2816,
                      "end": 2836
                    },
                    "directive": null,
                    "start": 2816,
                    "end": 2837
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 2846,
                        "end": 2850
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2851,
                        "end": 2852
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2846,
                      "end": 2852
                    },
                    "directive": null,
                    "start": 2846,
                    "end": 2853
                  }
                ],
                "start": 2684,
                "end": 2859
              },
              "expression": false,
              "start": 2671,
              "end": 2859
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2668,
            "end": 2859
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 2864,
              "end": 2867
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2871,
                      "end": 2877
                    },
                    "start": 2869,
                    "end": 2877
                  },
                  "start": 2868,
                  "end": 2877
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2889,
                          "end": 2893
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2894,
                          "end": 2900
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2889,
                        "end": 2900
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 2901,
                          "end": 2906
                        }
                      ],
                      "optional": false,
                      "start": 2889,
                      "end": 2907
                    },
                    "directive": null,
                    "start": 2889,
                    "end": 2908
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2917,
                      "end": 2918
                    },
                    "directive": null,
                    "start": 2917,
                    "end": 2919
                  }
                ],
                "start": 2879,
                "end": 2941
              },
              "expression": false,
              "start": 2867,
              "end": 2941
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2864,
            "end": 2941
          }
        ],
        "start": 2210,
        "end": 2943
      },
      "abstract": false,
      "declare": false,
      "start": 2199,
      "end": 2943
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2951,
        "end": 2956
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 2965,
        "end": 2969
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 2976,
              "end": 2977
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2980,
              "end": 2981
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2976,
            "end": 2982
          }
        ],
        "start": 2970,
        "end": 2984
      },
      "abstract": false,
      "declare": false,
      "start": 2945,
      "end": 2984
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 2992,
        "end": 2999
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 3008,
        "end": 3012
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3022
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3026,
                      "end": 3033
                    },
                    "start": 3024,
                    "end": 3033
                  },
                  "start": 3023,
                  "end": 3033
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3045,
                          "end": 3050
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3051,
                          "end": 3057
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3045,
                        "end": 3057
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3065,
                              "end": 3066
                            },
                            "prefix": true,
                            "start": 3058,
                            "end": 3066
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 3071,
                            "end": 3079
                          },
                          "start": 3058,
                          "end": 3079
                        }
                      ],
                      "optional": false,
                      "start": 3045,
                      "end": 3080
                    },
                    "directive": null,
                    "start": 3045,
                    "end": 3081
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3090,
                        "end": 3091
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3092,
                        "end": 3098
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3090,
                      "end": 3098
                    },
                    "directive": null,
                    "start": 3090,
                    "end": 3099
                  }
                ],
                "start": 3035,
                "end": 3105
              },
              "expression": false,
              "start": 3022,
              "end": 3105
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3019,
            "end": 3105
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 3110,
              "end": 3113
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3117,
                      "end": 3123
                    },
                    "start": 3115,
                    "end": 3123
                  },
                  "start": 3114,
                  "end": 3123
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3135,
                          "end": 3140
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3141,
                          "end": 3147
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3135,
                        "end": 3147
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 3148,
                          "end": 3153
                        }
                      ],
                      "optional": false,
                      "start": 3135,
                      "end": 3154
                    },
                    "directive": null,
                    "start": 3135,
                    "end": 3155
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3164,
                      "end": 3165
                    },
                    "directive": null,
                    "start": 3164,
                    "end": 3166
                  }
                ],
                "start": 3125,
                "end": 3188
              },
              "expression": false,
              "start": 3113,
              "end": 3188
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3110,
            "end": 3188
          }
        ],
        "start": 3013,
        "end": 3190
      },
      "abstract": false,
      "declare": false,
      "start": 2986,
      "end": 3190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 3201,
        "end": 3204
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3212,
                  "end": 3216
                },
                "typeArguments": null,
                "start": 3212,
                "end": 3216
              },
              "start": 3212,
              "end": 3218
            },
            "start": 3210,
            "end": 3218
          },
          "start": 3205,
          "end": 3218
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3235,
                    "end": 3239
                  },
                  "init": null,
                  "definite": false,
                  "start": 3235,
                  "end": 3239
                }
              ],
              "declare": false,
              "start": 3231,
              "end": 3239
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 3243,
              "end": 3248
            },
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3264,
                        "end": 3268
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isTest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3269,
                        "end": 3276
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3264,
                      "end": 3276
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3264,
                    "end": 3278
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3294,
                            "end": 3298
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3299,
                            "end": 3300
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3294,
                          "end": 3300
                        },
                        "directive": null,
                        "start": 3294,
                        "end": 3301
                      }
                    ],
                    "start": 3280,
                    "end": 3311
                  },
                  "alternate": null,
                  "start": 3260,
                  "end": 3311
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3320,
                        "end": 3324
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertIsTest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3325,
                        "end": 3338
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3320,
                      "end": 3338
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3320,
                    "end": 3340
                  },
                  "directive": null,
                  "start": 3320,
                  "end": 3341
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3350,
                      "end": 3354
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3355,
                      "end": 3356
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3350,
                    "end": 3356
                  },
                  "directive": null,
                  "start": 3350,
                  "end": 3357
                }
              ],
              "start": 3250,
              "end": 3363
            },
            "start": 3226,
            "end": 3363
          }
        ],
        "start": 3220,
        "end": 3365
      },
      "expression": false,
      "start": 3192,
      "end": 3365
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 3414,
                        "end": 3421
                      },
                      "start": 3412,
                      "end": 3421
                    },
                    "start": 3411,
                    "end": 3421
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3426,
                      "end": 3427
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3431,
                        "end": 3437
                      },
                      "start": 3431,
                      "end": 3437
                    },
                    "start": 3426,
                    "end": 3437
                  },
                  "start": 3423,
                  "end": 3437
                },
                "start": 3406,
                "end": 3437
              },
              "start": 3404,
              "end": 3437
            },
            "start": 3402,
            "end": 3437
          },
          "init": null,
          "definite": false,
          "start": 3402,
          "end": 3437
        }
      ],
      "declare": true,
      "start": 3390,
      "end": 3438
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3463,
                        "end": 3470
                      },
                      "start": 3461,
                      "end": 3470
                    },
                    "start": 3460,
                    "end": 3470
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3483,
                      "end": 3484
                    },
                    "asserts": true,
                    "typeAnnotation": null,
                    "start": 3475,
                    "end": 3484
                  },
                  "start": 3472,
                  "end": 3484
                },
                "start": 3455,
                "end": 3484
              },
              "start": 3453,
              "end": 3484
            },
            "start": 3451,
            "end": 3484
          },
          "init": null,
          "definite": false,
          "start": 3451,
          "end": 3484
        }
      ],
      "declare": true,
      "start": 3439,
      "end": 3485
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 3510,
                        "end": 3517
                      },
                      "start": 3508,
                      "end": 3517
                    },
                    "start": 3507,
                    "end": 3517
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3530,
                      "end": 3531
                    },
                    "asserts": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3535,
                        "end": 3541
                      },
                      "start": 3535,
                      "end": 3541
                    },
                    "start": 3522,
                    "end": 3541
                  },
                  "start": 3519,
                  "end": 3541
                },
                "start": 3502,
                "end": 3541
              },
              "start": 3500,
              "end": 3541
            },
            "start": 3498,
            "end": 3541
          },
          "init": null,
          "definite": false,
          "start": 3498,
          "end": 3541
        }
      ],
      "declare": true,
      "start": 3486,
      "end": 3542
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wat",
        "optional": false,
        "typeAnnotation": null,
        "start": 3558,
        "end": 3561
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3572,
              "end": 3574
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 3578,
                    "end": 3582
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3586,
                      "end": 3592
                    },
                    "start": 3586,
                    "end": 3592
                  },
                  "start": 3578,
                  "end": 3592
                },
                "start": 3576,
                "end": 3592
              },
              "body": null,
              "expression": false,
              "start": 3574,
              "end": 3593
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3568,
            "end": 3593
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3602,
              "end": 3604
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 3608,
                        "end": 3612
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3616,
                          "end": 3622
                        },
                        "start": 3616,
                        "end": 3622
                      },
                      "start": 3608,
                      "end": 3622
                    },
                    "start": 3606,
                    "end": 3622
                  },
                  "start": 3605,
                  "end": 3622
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3604,
              "end": 3624
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3598,
            "end": 3624
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3633,
              "end": 3635
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 3647,
                    "end": 3651
                  },
                  "asserts": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3655,
                      "end": 3661
                    },
                    "start": 3655,
                    "end": 3661
                  },
                  "start": 3639,
                  "end": 3661
                },
                "start": 3637,
                "end": 3661
              },
              "body": null,
              "expression": false,
              "start": 3635,
              "end": 3662
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3629,
            "end": 3662
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3671,
              "end": 3673
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "TSThisType",
                        "start": 3685,
                        "end": 3689
                      },
                      "asserts": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3693,
                          "end": 3699
                        },
                        "start": 3693,
                        "end": 3699
                      },
                      "start": 3677,
                      "end": 3699
                    },
                    "start": 3675,
                    "end": 3699
                  },
                  "start": 3674,
                  "end": 3699
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3673,
              "end": 3701
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3667,
            "end": 3701
          }
        ],
        "start": 3562,
        "end": 3703
      },
      "abstract": false,
      "declare": true,
      "start": 3544,
      "end": 3703
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 3714,
        "end": 3717
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 3721,
              "end": 3728
            },
            "start": 3719,
            "end": 3728
          },
          "start": 3718,
          "end": 3728
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
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3742,
                  "end": 3748
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                          "type": "TSUnknownKeyword",
                          "start": 3759,
                          "end": 3766
                        },
                        "start": 3757,
                        "end": 3766
                      },
                      "start": 3752,
                      "end": 3766
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3777,
                        "end": 3782
                      },
                      "asserts": true,
                      "typeAnnotation": null,
                      "start": 3769,
                      "end": 3782
                    },
                    "start": 3767,
                    "end": 3782
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3786,
                    "end": 3788
                  },
                  "id": null,
                  "generator": false,
                  "start": 3751,
                  "end": 3788
                },
                "definite": false,
                "start": 3742,
                "end": 3788
              }
            ],
            "declare": false,
            "start": 3736,
            "end": 3788
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null,
                "start": 3793,
                "end": 3799
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3807,
                      "end": 3808
                    },
                    "prefix": true,
                    "start": 3800,
                    "end": 3808
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 3813,
                    "end": 3821
                  },
                  "start": 3800,
                  "end": 3821
                }
              ],
              "optional": false,
              "start": 3793,
              "end": 3822
            },
            "directive": null,
            "start": 3793,
            "end": 3823
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3844,
                  "end": 3845
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3849,
                      "end": 3855
                    }
                  ],
                  "start": 3848,
                  "end": 3856
                },
                "definite": false,
                "start": 3844,
                "end": 3856
              }
            ],
            "declare": false,
            "start": 3838,
            "end": 3857
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3862,
                  "end": 3863
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3864,
                  "end": 3865
                },
                "optional": false,
                "computed": true,
                "start": 3862,
                "end": 3866
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3874,
                      "end": 3875
                    },
                    "prefix": true,
                    "start": 3867,
                    "end": 3875
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 3880,
                    "end": 3888
                  },
                  "start": 3867,
                  "end": 3888
                }
              ],
              "optional": false,
              "start": 3862,
              "end": 3889
            },
            "directive": null,
            "start": 3862,
            "end": 3890
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
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3911,
                  "end": 3913
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3920,
                    "end": 3924
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3916,
                  "end": 3926
                },
                "definite": false,
                "start": 3911,
                "end": 3926
              }
            ],
            "declare": false,
            "start": 3905,
            "end": 3927
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
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3932,
                  "end": 3934
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3935,
                  "end": 3941
                },
                "optional": false,
                "computed": false,
                "start": 3932,
                "end": 3941
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3949,
                      "end": 3950
                    },
                    "prefix": true,
                    "start": 3942,
                    "end": 3950
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 3955,
                    "end": 3963
                  },
                  "start": 3942,
                  "end": 3963
                }
              ],
              "optional": false,
              "start": 3932,
              "end": 3964
            },
            "directive": null,
            "start": 3932,
            "end": 3965
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3990,
                        "end": 3994
                      },
                      "typeArguments": null,
                      "start": 3990,
                      "end": 3994
                    },
                    "start": 3988,
                    "end": 3994
                  },
                  "start": 3986,
                  "end": 3994
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4001,
                    "end": 4005
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3997,
                  "end": 4007
                },
                "definite": false,
                "start": 3986,
                "end": 4007
              }
            ],
            "declare": false,
            "start": 3980,
            "end": 4008
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4013,
                  "end": 4015
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4016,
                  "end": 4022
                },
                "optional": false,
                "computed": false,
                "start": 4013,
                "end": 4022
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4030,
                      "end": 4031
                    },
                    "prefix": true,
                    "start": 4023,
                    "end": 4031
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 4036,
                    "end": 4044
                  },
                  "start": 4023,
                  "end": 4044
                }
              ],
              "optional": false,
              "start": 4013,
              "end": 4045
            },
            "directive": null,
            "start": 4013,
            "end": 4046
          }
        ],
        "start": 3730,
        "end": 4048
      },
      "expression": false,
      "start": 3705,
      "end": 4048
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 4082,
        "end": 4087
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
              "name": "good",
              "optional": false,
              "typeAnnotation": null,
              "start": 4094,
              "end": 4098
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4100,
                "end": 4107
              },
              "start": 4098,
              "end": 4107
            },
            "accessibility": null,
            "static": false,
            "start": 4094,
            "end": 4108
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isGood",
              "optional": false,
              "typeAnnotation": null,
              "start": 4113,
              "end": 4119
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 4131,
                  "end": 4135
                },
                "asserts": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GoodThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4139,
                      "end": 4148
                    },
                    "typeArguments": null,
                    "start": 4139,
                    "end": 4148
                  },
                  "start": 4139,
                  "end": 4148
                },
                "start": 4123,
                "end": 4148
              },
              "start": 4121,
              "end": 4148
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4113,
            "end": 4149
          }
        ],
        "start": 4088,
        "end": 4151
      },
      "declare": false,
      "start": 4072,
      "end": 4151
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GoodThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 4163,
        "end": 4172
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
              "name": "good",
              "optional": false,
              "typeAnnotation": null,
              "start": 4179,
              "end": 4183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 4185,
                  "end": 4189
                },
                "start": 4185,
                "end": 4189
              },
              "start": 4183,
              "end": 4189
            },
            "accessibility": null,
            "static": false,
            "start": 4179,
            "end": 4190
          }
        ],
        "start": 4173,
        "end": 4192
      },
      "declare": false,
      "start": 4153,
      "end": 4192
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4203,
        "end": 4211
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "things",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4220,
                  "end": 4225
                },
                "typeArguments": null,
                "start": 4220,
                "end": 4225
              },
              "start": 4220,
              "end": 4227
            },
            "start": 4218,
            "end": 4227
          },
          "start": 4212,
          "end": 4227
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4244,
                    "end": 4249
                  },
                  "init": null,
                  "definite": false,
                  "start": 4244,
                  "end": 4249
                }
              ],
              "declare": false,
              "start": 4240,
              "end": 4249
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "things",
              "optional": false,
              "typeAnnotation": null,
              "start": 4253,
              "end": 4259
            },
            "body": {
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
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4271,
                        "end": 4276
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isGood",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4277,
                        "end": 4283
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4271,
                      "end": 4283
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4271,
                    "end": 4285
                  },
                  "directive": null,
                  "start": 4271,
                  "end": 4286
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4295,
                      "end": 4300
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "good",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4301,
                      "end": 4305
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4295,
                    "end": 4305
                  },
                  "directive": null,
                  "start": 4295,
                  "end": 4306
                }
              ],
              "start": 4261,
              "end": 4312
            },
            "start": 4235,
            "end": 4312
          }
        ],
        "start": 4229,
        "end": 4314
      },
      "expression": false,
      "start": 4194,
      "end": 4314
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestPropertyDeclaration1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4322,
        "end": 4346
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null,
              "start": 4351,
              "end": 4357
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "type": "TSUnknownKeyword",
                      "start": 4368,
                      "end": 4375
                    },
                    "start": 4366,
                    "end": 4375
                  },
                  "start": 4361,
                  "end": 4375
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4386,
                    "end": 4391
                  },
                  "asserts": true,
                  "typeAnnotation": null,
                  "start": 4378,
                  "end": 4391
                },
                "start": 4376,
                "end": 4391
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4395,
                "end": 4397
              },
              "id": null,
              "generator": false,
              "start": 4360,
              "end": 4397
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4351,
            "end": 4398
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 4401,
              "end": 4406
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4410,
                      "end": 4417
                    },
                    "start": 4408,
                    "end": 4417
                  },
                  "start": 4407,
                  "end": 4417
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 4425,
                          "end": 4429
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4430,
                          "end": 4436
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4425,
                        "end": 4436
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4437,
                          "end": 4438
                        }
                      ],
                      "optional": false,
                      "start": 4425,
                      "end": 4439
                    },
                    "directive": null,
                    "start": 4425,
                    "end": 4440
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4454,
                      "end": 4455
                    },
                    "directive": null,
                    "start": 4454,
                    "end": 4456
                  }
                ],
                "start": 4419,
                "end": 4460
              },
              "expression": false,
              "start": 4406,
              "end": 4460
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4401,
            "end": 4460
          }
        ],
        "start": 4347,
        "end": 4462
      },
      "abstract": false,
      "declare": false,
      "start": 4316,
      "end": 4462
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestPropertyDeclaration2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4470,
        "end": 4494
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null,
              "start": 4499,
              "end": 4505
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 4511,
                        "end": 4518
                      },
                      "start": 4509,
                      "end": 4518
                    },
                    "start": 4508,
                    "end": 4518
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4531,
                      "end": 4532
                    },
                    "asserts": true,
                    "typeAnnotation": null,
                    "start": 4523,
                    "end": 4532
                  },
                  "start": 4520,
                  "end": 4532
                },
                "start": 4507,
                "end": 4532
              },
              "start": 4505,
              "end": 4532
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4536,
                  "end": 4541
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4546,
                "end": 4548
              },
              "id": null,
              "generator": false,
              "start": 4535,
              "end": 4548
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4499,
            "end": 4549
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 4552,
              "end": 4557
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4561,
                      "end": 4568
                    },
                    "start": 4559,
                    "end": 4568
                  },
                  "start": 4558,
                  "end": 4568
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 4576,
                          "end": 4580
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4581,
                          "end": 4587
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4576,
                        "end": 4587
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4588,
                          "end": 4589
                        }
                      ],
                      "optional": false,
                      "start": 4576,
                      "end": 4590
                    },
                    "directive": null,
                    "start": 4576,
                    "end": 4591
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4602,
                      "end": 4603
                    },
                    "directive": null,
                    "start": 4602,
                    "end": 4604
                  }
                ],
                "start": 4570,
                "end": 4608
              },
              "expression": false,
              "start": 4557,
              "end": 4608
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4552,
            "end": 4608
          }
        ],
        "start": 4495,
        "end": 4610
      },
      "abstract": false,
      "declare": false,
      "start": 4464,
      "end": 4610
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParentInheritedPropertyDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 4626,
        "end": 4660
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null,
              "start": 4665,
              "end": 4671
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
                        "type": "TSUnknownKeyword",
                        "start": 4681,
                        "end": 4688
                      },
                      "start": 4679,
                      "end": 4688
                    },
                    "start": 4674,
                    "end": 4688
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4701,
                      "end": 4706
                    },
                    "asserts": true,
                    "typeAnnotation": null,
                    "start": 4693,
                    "end": 4706
                  },
                  "start": 4690,
                  "end": 4706
                },
                "start": 4673,
                "end": 4706
              },
              "start": 4671,
              "end": 4706
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4665,
            "end": 4707
          }
        ],
        "start": 4661,
        "end": 4709
      },
      "abstract": false,
      "declare": true,
      "start": 4612,
      "end": 4709
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChildInheritedPropertyDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 4716,
        "end": 4749
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParentInheritedPropertyDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 4758,
        "end": 4792
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
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 4797,
              "end": 4802
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4806,
                      "end": 4813
                    },
                    "start": 4804,
                    "end": 4813
                  },
                  "start": 4803,
                  "end": 4813
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 4821,
                          "end": 4825
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "assert",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4826,
                          "end": 4832
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4821,
                        "end": 4832
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4833,
                          "end": 4834
                        }
                      ],
                      "optional": false,
                      "start": 4821,
                      "end": 4835
                    },
                    "directive": null,
                    "start": 4821,
                    "end": 4836
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4847,
                      "end": 4848
                    },
                    "directive": null,
                    "start": 4847,
                    "end": 4849
                  }
                ],
                "start": 4815,
                "end": 4853
              },
              "expression": false,
              "start": 4802,
              "end": 4853
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4797,
            "end": 4853
          }
        ],
        "start": 4793,
        "end": 4855
      },
      "abstract": false,
      "declare": false,
      "start": 4710,
      "end": 4855
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestPropertySignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 4867,
        "end": 4888
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
              "name": "assert",
              "optional": false,
              "typeAnnotation": null,
              "start": 4893,
              "end": 4899
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
                        "type": "TSUnknownKeyword",
                        "start": 4909,
                        "end": 4916
                      },
                      "start": 4907,
                      "end": 4916
                    },
                    "start": 4902,
                    "end": 4916
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4929,
                      "end": 4934
                    },
                    "asserts": true,
                    "typeAnnotation": null,
                    "start": 4921,
                    "end": 4934
                  },
                  "start": 4918,
                  "end": 4934
                },
                "start": 4901,
                "end": 4934
              },
              "start": 4899,
              "end": 4934
            },
            "accessibility": null,
            "static": false,
            "start": 4893,
            "end": 4935
          }
        ],
        "start": 4889,
        "end": 4937
      },
      "declare": false,
      "start": 4857,
      "end": 4937
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testPropertySignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 4947,
        "end": 4968
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestPropertySignature",
                "optional": false,
                "typeAnnotation": null,
                "start": 4975,
                "end": 4996
              },
              "typeArguments": null,
              "start": 4975,
              "end": 4996
            },
            "start": 4973,
            "end": 4996
          },
          "start": 4972,
          "end": 4996
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5003,
              "end": 5010
            },
            "start": 5001,
            "end": 5010
          },
          "start": 5000,
          "end": 5010
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5018,
                  "end": 5019
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5020,
                  "end": 5026
                },
                "optional": false,
                "computed": false,
                "start": 5018,
                "end": 5026
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5027,
                  "end": 5028
                }
              ],
              "optional": false,
              "start": 5018,
              "end": 5029
            },
            "directive": null,
            "start": 5018,
            "end": 5030
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5039,
              "end": 5040
            },
            "directive": null,
            "start": 5039,
            "end": 5041
          }
        ],
        "start": 5014,
        "end": 5043
      },
      "expression": false,
      "start": 4938,
      "end": 5043
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionThisParameter1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5053,
        "end": 5079
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestPropertySignature",
                "optional": false,
                "typeAnnotation": null,
                "start": 5089,
                "end": 5110
              },
              "typeArguments": null,
              "start": 5089,
              "end": 5110
            },
            "start": 5087,
            "end": 5110
          },
          "start": 5083,
          "end": 5110
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5117,
              "end": 5124
            },
            "start": 5115,
            "end": 5124
          },
          "start": 5114,
          "end": 5124
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
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 5132,
                  "end": 5136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5137,
                  "end": 5143
                },
                "optional": false,
                "computed": false,
                "start": 5132,
                "end": 5143
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5144,
                  "end": 5145
                }
              ],
              "optional": false,
              "start": 5132,
              "end": 5146
            },
            "directive": null,
            "start": 5132,
            "end": 5147
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5156,
              "end": 5157
            },
            "directive": null,
            "start": 5156,
            "end": 5158
          }
        ],
        "start": 5128,
        "end": 5160
      },
      "expression": false,
      "start": 5044,
      "end": 5160
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestMethodSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 5172,
        "end": 5191
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assert",
              "optional": false,
              "typeAnnotation": null,
              "start": 5196,
              "end": 5202
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 5210,
                    "end": 5217
                  },
                  "start": 5208,
                  "end": 5217
                },
                "start": 5203,
                "end": 5217
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5228,
                  "end": 5233
                },
                "asserts": true,
                "typeAnnotation": null,
                "start": 5220,
                "end": 5233
              },
              "start": 5218,
              "end": 5233
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5196,
            "end": 5234
          }
        ],
        "start": 5192,
        "end": 5236
      },
      "declare": false,
      "start": 5162,
      "end": 5236
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testMethodSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 5246,
        "end": 5265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestMethodSignature",
                "optional": false,
                "typeAnnotation": null,
                "start": 5272,
                "end": 5291
              },
              "typeArguments": null,
              "start": 5272,
              "end": 5291
            },
            "start": 5270,
            "end": 5291
          },
          "start": 5269,
          "end": 5291
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5298,
              "end": 5305
            },
            "start": 5296,
            "end": 5305
          },
          "start": 5295,
          "end": 5305
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5313,
                  "end": 5314
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5315,
                  "end": 5321
                },
                "optional": false,
                "computed": false,
                "start": 5313,
                "end": 5321
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5322,
                  "end": 5323
                }
              ],
              "optional": false,
              "start": 5313,
              "end": 5324
            },
            "directive": null,
            "start": 5313,
            "end": 5325
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5334,
              "end": 5335
            },
            "directive": null,
            "start": 5334,
            "end": 5336
          }
        ],
        "start": 5309,
        "end": 5338
      },
      "expression": false,
      "start": 5237,
      "end": 5338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionThisParameter2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5348,
        "end": 5374
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestMethodSignature",
                "optional": false,
                "typeAnnotation": null,
                "start": 5384,
                "end": 5403
              },
              "typeArguments": null,
              "start": 5384,
              "end": 5403
            },
            "start": 5382,
            "end": 5403
          },
          "start": 5378,
          "end": 5403
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5410,
              "end": 5417
            },
            "start": 5408,
            "end": 5417
          },
          "start": 5407,
          "end": 5417
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
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 5425,
                  "end": 5429
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5430,
                  "end": 5436
                },
                "optional": false,
                "computed": false,
                "start": 5425,
                "end": 5436
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5437,
                  "end": 5438
                }
              ],
              "optional": false,
              "start": 5425,
              "end": 5439
            },
            "directive": null,
            "start": 5425,
            "end": 5440
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5449,
              "end": 5450
            },
            "directive": null,
            "start": 5449,
            "end": 5451
          }
        ],
        "start": 5421,
        "end": 5453
      },
      "expression": false,
      "start": 5339,
      "end": 5453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5453
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 17,
    "end": 25,
    "range": [
      17,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 26,
    "end": 31,
    "range": [
      26,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 33,
    "end": 40,
    "range": [
      33,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 43,
    "end": 48,
    "range": [
      43,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 49,
    "end": 51,
    "range": [
      49,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 60,
    "end": 67,
    "range": [
      60,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76,
    "range": [
      68,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "isArrayOfStrings",
    "start": 77,
    "end": 93,
    "range": [
      77,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 111,
    "end": 116,
    "range": [
      111,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 117,
    "end": 119,
    "range": [
      117,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126,
    "range": [
      120,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136,
    "range": [
      131,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 137,
    "end": 143,
    "range": [
      137,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 153,
    "end": 160,
    "range": [
      153,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 162,
    "end": 164,
    "range": [
      162,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 173,
    "end": 178,
    "range": [
      173,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 181,
    "end": 186,
    "range": [
      181,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 187,
    "end": 189,
    "range": [
      187,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 194,
    "end": 201,
    "range": [
      194,
      201
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 202,
    "end": 210,
    "range": [
      202,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "assertIsString",
    "start": 211,
    "end": 225,
    "range": [
      211,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 226,
    "end": 231,
    "range": [
      226,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 243,
    "end": 250,
    "range": [
      243,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 251,
    "end": 256,
    "range": [
      251,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 257,
    "end": 259,
    "range": [
      257,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266,
    "range": [
      260,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 268,
    "end": 275,
    "range": [
      268,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 276,
    "end": 284,
    "range": [
      276,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "assertIsArrayOfStrings",
    "start": 285,
    "end": 307,
    "range": [
      285,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 315,
    "end": 322,
    "range": [
      315,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 325,
    "end": 332,
    "range": [
      325,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 333,
    "end": 338,
    "range": [
      333,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 339,
    "end": 341,
    "range": [
      339,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348,
    "range": [
      342,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 352,
    "end": 359,
    "range": [
      352,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 360,
    "end": 368,
    "range": [
      360,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "assertDefined",
    "start": 369,
    "end": 382,
    "range": [
      369,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 386,
    "end": 391,
    "range": [
      386,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 397,
    "end": 404,
    "range": [
      397,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 405,
    "end": 410,
    "range": [
      405,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 411,
    "end": 413,
    "range": [
      411,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 414,
    "end": 425,
    "range": [
      414,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 431,
    "end": 439,
    "range": [
      431,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "f01",
    "start": 440,
    "end": 443,
    "range": [
      440,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 447,
    "end": 454,
    "range": [
      447,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 462,
    "end": 464,
    "range": [
      462,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 468,
    "end": 472,
    "range": [
      468,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 484,
    "end": 490,
    "range": [
      484,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 500,
    "end": 503,
    "range": [
      500,
      503
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 504,
    "end": 512,
    "range": [
      504,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 525,
    "end": 531,
    "range": [
      525,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 543,
    "end": 545,
    "range": [
      543,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 549,
    "end": 553,
    "range": [
      549,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 565,
    "end": 571,
    "range": [
      565,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 574,
    "end": 584,
    "range": [
      574,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 585,
    "end": 590,
    "range": [
      585,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 603,
    "end": 610,
    "range": [
      603,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 622,
    "end": 624,
    "range": [
      622,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 628,
    "end": 632,
    "range": [
      628,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 644,
    "end": 650,
    "range": [
      644,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 651,
    "end": 657,
    "range": [
      651,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 660,
    "end": 663,
    "range": [
      660,
      663
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 664,
    "end": 673,
    "range": [
      664,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 674,
    "end": 676,
    "range": [
      674,
      676
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 677,
    "end": 683,
    "range": [
      677,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 686,
    "end": 689,
    "range": [
      686,
      689
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 690,
    "end": 698,
    "range": [
      690,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 711,
    "end": 725,
    "range": [
      711,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 737,
    "end": 739,
    "range": [
      737,
      739
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
    "type": "Punctuator",
    "value": "!",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 743,
    "end": 747,
    "range": [
      743,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 759,
    "end": 765,
    "range": [
      759,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "isArrayOfStrings",
    "start": 766,
    "end": 782,
    "range": [
      766,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 801,
    "end": 807,
    "range": [
      801,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 819,
    "end": 821,
    "range": [
      819,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 825,
    "end": 829,
    "range": [
      825,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "assertIsArrayOfStrings",
    "start": 841,
    "end": 863,
    "range": [
      841,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 881,
    "end": 887,
    "range": [
      881,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 899,
    "end": 901,
    "range": [
      899,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 905,
    "end": 909,
    "range": [
      905,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "assertIsArrayOfStrings",
    "start": 921,
    "end": 943,
    "range": [
      921,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 944,
    "end": 949,
    "range": [
      944,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 973,
    "end": 975,
    "range": [
      973,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 979,
    "end": 983,
    "range": [
      979,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 995,
    "end": 1001,
    "range": [
      995,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1004,
    "end": 1007,
    "range": [
      1004,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1008,
    "end": 1017,
    "range": [
      1008,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1018,
    "end": 1020,
    "range": [
      1018,
      1020
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1021,
    "end": 1027,
    "range": [
      1021,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1030,
    "end": 1033,
    "range": [
      1030,
      1033
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1034,
    "end": 1042,
    "range": [
      1034,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "assertDefined",
    "start": 1087,
    "end": 1100,
    "range": [
      1087,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1137,
    "end": 1139,
    "range": [
      1137,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1143,
    "end": 1147,
    "range": [
      1143,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1159,
    "end": 1165,
    "range": [
      1159,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1166,
    "end": 1171,
    "range": [
      1166,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1211,
    "end": 1213,
    "range": [
      1211,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1217,
    "end": 1221,
    "range": [
      1217,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1233,
    "end": 1239,
    "range": [
      1233,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1240,
    "end": 1245,
    "range": [
      1240,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1246,
    "end": 1248,
    "range": [
      1246,
      1248
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1251,
    "end": 1254,
    "range": [
      1251,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1255,
    "end": 1264,
    "range": [
      1255,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1303,
    "end": 1311,
    "range": [
      1303,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "f02",
    "start": 1312,
    "end": 1315,
    "range": [
      1312,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1319,
    "end": 1325,
    "range": [
      1319,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1328,
    "end": 1337,
    "range": [
      1328,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1345,
    "end": 1347,
    "range": [
      1345,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1351,
    "end": 1355,
    "range": [
      1351,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1367,
    "end": 1373,
    "range": [
      1367,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1388,
    "end": 1394,
    "range": [
      1388,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1406,
    "end": 1408,
    "range": [
      1406,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1412,
    "end": 1416,
    "range": [
      1412,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1428,
    "end": 1434,
    "range": [
      1428,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1437,
    "end": 1440,
    "range": [
      1437,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1441,
    "end": 1450,
    "range": [
      1441,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1463,
    "end": 1469,
    "range": [
      1463,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1481,
    "end": 1483,
    "range": [
      1481,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1487,
    "end": 1491,
    "range": [
      1487,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "assertDefined",
    "start": 1503,
    "end": 1516,
    "range": [
      1503,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1531,
    "end": 1537,
    "range": [
      1531,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1548,
    "end": 1556,
    "range": [
      1548,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "f03",
    "start": 1557,
    "end": 1560,
    "range": [
      1557,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1564,
    "end": 1570,
    "range": [
      1564,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1573,
    "end": 1582,
    "range": [
      1573,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1584,
    "end": 1590,
    "range": [
      1584,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1593,
    "end": 1598,
    "range": [
      1593,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1600,
    "end": 1607,
    "range": [
      1600,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1609,
    "end": 1611,
    "range": [
      1609,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1612,
    "end": 1619,
    "range": [
      1612,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1620,
    "end": 1625,
    "range": [
      1620,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1633,
    "end": 1639,
    "range": [
      1633,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1650,
    "end": 1656,
    "range": [
      1650,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1661,
    "end": 1670,
    "range": [
      1661,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 1671,
    "end": 1676,
    "range": [
      1671,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1683,
    "end": 1689,
    "range": [
      1683,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1690,
    "end": 1697,
    "range": [
      1690,
      1697
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1698,
    "end": 1706,
    "range": [
      1698,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1707,
    "end": 1713,
    "range": [
      1707,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1714,
    "end": 1719,
    "range": [
      1714,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1721,
    "end": 1728,
    "range": [
      1721,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1730,
    "end": 1737,
    "range": [
      1730,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1740,
    "end": 1746,
    "range": [
      1740,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1749,
    "end": 1756,
    "range": [
      1749,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1757,
    "end": 1762,
    "range": [
      1757,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1768,
    "end": 1774,
    "range": [
      1768,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1775,
    "end": 1782,
    "range": [
      1775,
      1782
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1783,
    "end": 1791,
    "range": [
      1783,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "assertDefined",
    "start": 1792,
    "end": 1805,
    "range": [
      1792,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1809,
    "end": 1814,
    "range": [
      1809,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1820,
    "end": 1827,
    "range": [
      1820,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1828,
    "end": 1833,
    "range": [
      1828,
      1833
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1834,
    "end": 1836,
    "range": [
      1834,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 1837,
    "end": 1848,
    "range": [
      1837,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1856,
    "end": 1864,
    "range": [
      1856,
      1864
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1865,
    "end": 1868,
    "range": [
      1865,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1872,
    "end": 1878,
    "range": [
      1872,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1881,
    "end": 1890,
    "range": [
      1881,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1898,
    "end": 1900,
    "range": [
      1898,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1904,
    "end": 1908,
    "range": [
      1904,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 1920,
    "end": 1925,
    "range": [
      1920,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1926,
    "end": 1932,
    "range": [
      1926,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1947,
    "end": 1953,
    "range": [
      1947,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1965,
    "end": 1967,
    "range": [
      1965,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1971,
    "end": 1975,
    "range": [
      1971,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 1987,
    "end": 1992,
    "range": [
      1987,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 1993,
    "end": 1999,
    "range": [
      1993,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2002,
    "end": 2005,
    "range": [
      2002,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2006,
    "end": 2015,
    "range": [
      2006,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2028,
    "end": 2034,
    "range": [
      2028,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2046,
    "end": 2048,
    "range": [
      2046,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2052,
    "end": 2056,
    "range": [
      2052,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 2068,
    "end": 2073,
    "range": [
      2068,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "assertDefined",
    "start": 2074,
    "end": 2087,
    "range": [
      2074,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2102,
    "end": 2108,
    "range": [
      2102,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2120,
    "end": 2122,
    "range": [
      2120,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2126,
    "end": 2130,
    "range": [
      2126,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "Debug",
    "start": 2142,
    "end": 2147,
    "range": [
      2142,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 2148,
    "end": 2154,
    "range": [
      2148,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2155,
    "end": 2160,
    "range": [
      2155,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2199,
    "end": 2204,
    "range": [
      2199,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 2205,
    "end": 2209,
    "range": [
      2205,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 2216,
    "end": 2222,
    "range": [
      2216,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2223,
    "end": 2228,
    "range": [
      2223,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2230,
    "end": 2237,
    "range": [
      2230,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 2240,
    "end": 2247,
    "range": [
      2240,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2248,
    "end": 2253,
    "range": [
      2248,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2264,
    "end": 2266,
    "range": [
      2264,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2268,
    "end": 2273,
    "range": [
      2268,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2275,
    "end": 2281,
    "range": [
      2275,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2291,
    "end": 2296,
    "range": [
      2291,
      2296
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2297,
    "end": 2300,
    "range": [
      2297,
      2300
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2301,
    "end": 2306,
    "range": [
      2301,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Identifier",
    "value": "isTest2",
    "start": 2320,
    "end": 2327,
    "range": [
      2320,
      2327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2328,
    "end": 2329,
    "range": [
      2328,
      2329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2329,
    "end": 2330,
    "range": [
      2329,
      2330
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2331,
    "end": 2335,
    "range": [
      2331,
      2335
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2336,
    "end": 2338,
    "range": [
      2336,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 2339,
    "end": 2344,
    "range": [
      2339,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2355,
    "end": 2361,
    "range": [
      2355,
      2361
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2362,
    "end": 2366,
    "range": [
      2362,
      2366
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2367,
    "end": 2377,
    "range": [
      2367,
      2377
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 2378,
    "end": 2383,
    "range": [
      2378,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2383,
    "end": 2384,
    "range": [
      2383,
      2384
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Identifier",
    "value": "assertIsTest2",
    "start": 2395,
    "end": 2408,
    "range": [
      2395,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 2412,
    "end": 2419,
    "range": [
      2412,
      2419
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2420,
    "end": 2424,
    "range": [
      2420,
      2424
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2425,
    "end": 2427,
    "range": [
      2425,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 2428,
    "end": 2433,
    "range": [
      2428,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2444,
    "end": 2446,
    "range": [
      2444,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2448,
    "end": 2452,
    "range": [
      2448,
      2452
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2453,
    "end": 2463,
    "range": [
      2453,
      2463
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 2464,
    "end": 2469,
    "range": [
      2464,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2471,
    "end": 2477,
    "range": [
      2471,
      2477
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2477,
    "end": 2478,
    "range": [
      2477,
      2478
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2487,
    "end": 2492,
    "range": [
      2487,
      2492
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2493,
    "end": 2496,
    "range": [
      2493,
      2496
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2497,
    "end": 2502,
    "range": [
      2497,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "assertThis",
    "start": 2516,
    "end": 2526,
    "range": [
      2516,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 2530,
    "end": 2537,
    "range": [
      2530,
      2537
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2538,
    "end": 2542,
    "range": [
      2538,
      2542
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2553,
    "end": 2555,
    "range": [
      2553,
      2555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2556,
    "end": 2557,
    "range": [
      2556,
      2557
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2558,
    "end": 2562,
    "range": [
      2558,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2564,
    "end": 2570,
    "range": [
      2564,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2580,
    "end": 2585,
    "range": [
      2580,
      2585
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2586,
    "end": 2589,
    "range": [
      2586,
      2589
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2590,
    "end": 2595,
    "range": [
      2590,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2597,
    "end": 2598,
    "range": [
      2597,
      2598
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2609,
    "end": 2612,
    "range": [
      2609,
      2612
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2612,
    "end": 2613,
    "range": [
      2612,
      2613
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2625,
    "end": 2629,
    "range": [
      2625,
      2629
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Identifier",
    "value": "assertThis",
    "start": 2630,
    "end": 2640,
    "range": [
      2630,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2652,
    "end": 2656,
    "range": [
      2652,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2668,
    "end": 2671,
    "range": [
      2668,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2675,
    "end": 2682,
    "range": [
      2675,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2694,
    "end": 2698,
    "range": [
      2694,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 2699,
    "end": 2705,
    "range": [
      2699,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2706,
    "end": 2712,
    "range": [
      2706,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2715,
    "end": 2718,
    "range": [
      2715,
      2718
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2719,
    "end": 2727,
    "range": [
      2719,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2738,
    "end": 2739,
    "range": [
      2738,
      2739
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2740,
    "end": 2746,
    "range": [
      2740,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2756,
    "end": 2758,
    "range": [
      2756,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2759,
    "end": 2760,
    "range": [
      2759,
      2760
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2760,
    "end": 2764,
    "range": [
      2760,
      2764
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Identifier",
    "value": "isTest2",
    "start": 2765,
    "end": 2772,
    "range": [
      2765,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2772,
    "end": 2773,
    "range": [
      2772,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2790,
    "end": 2794,
    "range": [
      2790,
      2794
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2816,
    "end": 2820,
    "range": [
      2816,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "assertIsTest2",
    "start": 2821,
    "end": 2834,
    "range": [
      2821,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2846,
    "end": 2850,
    "range": [
      2846,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2852,
    "end": 2853,
    "range": [
      2852,
      2853
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2864,
    "end": 2867,
    "range": [
      2864,
      2867
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2867,
    "end": 2868,
    "range": [
      2867,
      2868
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2868,
    "end": 2869,
    "range": [
      2868,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2871,
    "end": 2877,
    "range": [
      2871,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2889,
    "end": 2893,
    "range": [
      2889,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 2894,
    "end": 2900,
    "range": [
      2894,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2901,
    "end": 2906,
    "range": [
      2901,
      2906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2906,
    "end": 2907,
    "range": [
      2906,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2945,
    "end": 2950,
    "range": [
      2945,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 2951,
    "end": 2956,
    "range": [
      2951,
      2956
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2957,
    "end": 2964,
    "range": [
      2957,
      2964
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 2965,
    "end": 2969,
    "range": [
      2965,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2983,
    "end": 2984,
    "range": [
      2983,
      2984
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2986,
    "end": 2991,
    "range": [
      2986,
      2991
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2992,
    "end": 2999,
    "range": [
      2992,
      2999
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3000,
    "end": 3007,
    "range": [
      3000,
      3007
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 3008,
    "end": 3012,
    "range": [
      3008,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3019,
    "end": 3022,
    "range": [
      3019,
      3022
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3022,
    "end": 3023,
    "range": [
      3022,
      3023
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3023,
    "end": 3024,
    "range": [
      3023,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3026,
    "end": 3033,
    "range": [
      3026,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3033,
    "end": 3034,
    "range": [
      3033,
      3034
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3035,
    "end": 3036,
    "range": [
      3035,
      3036
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3045,
    "end": 3050,
    "range": [
      3045,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3051,
    "end": 3057,
    "range": [
      3051,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3058,
    "end": 3064,
    "range": [
      3058,
      3064
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3067,
    "end": 3070,
    "range": [
      3067,
      3070
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3071,
    "end": 3079,
    "range": [
      3071,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3091,
    "end": 3092,
    "range": [
      3091,
      3092
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3092,
    "end": 3098,
    "range": [
      3092,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3098,
    "end": 3099,
    "range": [
      3098,
      3099
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 3110,
    "end": 3113,
    "range": [
      3110,
      3113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3113,
    "end": 3114,
    "range": [
      3113,
      3114
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3114,
    "end": 3115,
    "range": [
      3114,
      3115
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3115,
    "end": 3116,
    "range": [
      3115,
      3116
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3117,
    "end": 3123,
    "range": [
      3117,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3123,
    "end": 3124,
    "range": [
      3123,
      3124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3135,
    "end": 3140,
    "range": [
      3135,
      3140
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3140,
    "end": 3141,
    "range": [
      3140,
      3141
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3141,
    "end": 3147,
    "range": [
      3141,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3148,
    "end": 3153,
    "range": [
      3148,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3164,
    "end": 3165,
    "range": [
      3164,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3189,
    "end": 3190,
    "range": [
      3189,
      3190
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3192,
    "end": 3200,
    "range": [
      3192,
      3200
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 3201,
    "end": 3204,
    "range": [
      3201,
      3204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3204,
    "end": 3205,
    "range": [
      3204,
      3205
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 3205,
    "end": 3210,
    "range": [
      3205,
      3210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 3212,
    "end": 3216,
    "range": [
      3212,
      3216
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3216,
    "end": 3217,
    "range": [
      3216,
      3217
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3217,
    "end": 3218,
    "range": [
      3217,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3226,
    "end": 3229,
    "range": [
      3226,
      3229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3231,
    "end": 3234,
    "range": [
      3231,
      3234
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 3235,
    "end": 3239,
    "range": [
      3235,
      3239
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 3240,
    "end": 3242,
    "range": [
      3240,
      3242
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 3243,
    "end": 3248,
    "range": [
      3243,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3260,
    "end": 3262,
    "range": [
      3260,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 3264,
    "end": 3268,
    "range": [
      3264,
      3268
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3268,
    "end": 3269,
    "range": [
      3268,
      3269
    ]
  },
  {
    "type": "Identifier",
    "value": "isTest2",
    "start": 3269,
    "end": 3276,
    "range": [
      3269,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3277,
    "end": 3278,
    "range": [
      3277,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 3294,
    "end": 3298,
    "range": [
      3294,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3310,
    "end": 3311,
    "range": [
      3310,
      3311
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 3320,
    "end": 3324,
    "range": [
      3320,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3324,
    "end": 3325,
    "range": [
      3324,
      3325
    ]
  },
  {
    "type": "Identifier",
    "value": "assertIsTest2",
    "start": 3325,
    "end": 3338,
    "range": [
      3325,
      3338
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3338,
    "end": 3339,
    "range": [
      3338,
      3339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3339,
    "end": 3340,
    "range": [
      3339,
      3340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3340,
    "end": 3341,
    "range": [
      3340,
      3341
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 3350,
    "end": 3354,
    "range": [
      3350,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3390,
    "end": 3397,
    "range": [
      3390,
      3397
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3398,
    "end": 3401,
    "range": [
      3398,
      3401
    ]
  },
  {
    "type": "Identifier",
    "value": "Q1",
    "start": 3402,
    "end": 3404,
    "range": [
      3402,
      3404
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3404,
    "end": 3405,
    "range": [
      3404,
      3405
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3406,
    "end": 3409,
    "range": [
      3406,
      3409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3410,
    "end": 3411,
    "range": [
      3410,
      3411
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3411,
    "end": 3412,
    "range": [
      3411,
      3412
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3412,
    "end": 3413,
    "range": [
      3412,
      3413
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3414,
    "end": 3421,
    "range": [
      3414,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3423,
    "end": 3425,
    "range": [
      3423,
      3425
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3428,
    "end": 3430,
    "range": [
      3428,
      3430
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3431,
    "end": 3437,
    "range": [
      3431,
      3437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3439,
    "end": 3446,
    "range": [
      3439,
      3446
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3447,
    "end": 3450,
    "range": [
      3447,
      3450
    ]
  },
  {
    "type": "Identifier",
    "value": "Q2",
    "start": 3451,
    "end": 3453,
    "range": [
      3451,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3455,
    "end": 3458,
    "range": [
      3455,
      3458
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3461,
    "end": 3462,
    "range": [
      3461,
      3462
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3463,
    "end": 3470,
    "range": [
      3463,
      3470
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3472,
    "end": 3474,
    "range": [
      3472,
      3474
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 3475,
    "end": 3482,
    "range": [
      3475,
      3482
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3483,
    "end": 3484,
    "range": [
      3483,
      3484
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3486,
    "end": 3493,
    "range": [
      3486,
      3493
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3494,
    "end": 3497,
    "range": [
      3494,
      3497
    ]
  },
  {
    "type": "Identifier",
    "value": "Q3",
    "start": 3498,
    "end": 3500,
    "range": [
      3498,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3500,
    "end": 3501,
    "range": [
      3500,
      3501
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3502,
    "end": 3505,
    "range": [
      3502,
      3505
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3510,
    "end": 3517,
    "range": [
      3510,
      3517
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3517,
    "end": 3518,
    "range": [
      3517,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3519,
    "end": 3521,
    "range": [
      3519,
      3521
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 3522,
    "end": 3529,
    "range": [
      3522,
      3529
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3530,
    "end": 3531,
    "range": [
      3530,
      3531
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3532,
    "end": 3534,
    "range": [
      3532,
      3534
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3535,
    "end": 3541,
    "range": [
      3535,
      3541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3541,
    "end": 3542,
    "range": [
      3541,
      3542
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3544,
    "end": 3551,
    "range": [
      3544,
      3551
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3552,
    "end": 3557,
    "range": [
      3552,
      3557
    ]
  },
  {
    "type": "Identifier",
    "value": "Wat",
    "start": 3558,
    "end": 3561,
    "range": [
      3558,
      3561
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3568,
    "end": 3571,
    "range": [
      3568,
      3571
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 3572,
    "end": 3574,
    "range": [
      3572,
      3574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3576,
    "end": 3577,
    "range": [
      3576,
      3577
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3578,
    "end": 3582,
    "range": [
      3578,
      3582
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3583,
    "end": 3585,
    "range": [
      3583,
      3585
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3586,
    "end": 3592,
    "range": [
      3586,
      3592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3598,
    "end": 3601,
    "range": [
      3598,
      3601
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 3602,
    "end": 3604,
    "range": [
      3602,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3605,
    "end": 3606,
    "range": [
      3605,
      3606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3606,
    "end": 3607,
    "range": [
      3606,
      3607
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3608,
    "end": 3612,
    "range": [
      3608,
      3612
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3613,
    "end": 3615,
    "range": [
      3613,
      3615
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3616,
    "end": 3622,
    "range": [
      3616,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3622,
    "end": 3623,
    "range": [
      3622,
      3623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3629,
    "end": 3632,
    "range": [
      3629,
      3632
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 3633,
    "end": 3635,
    "range": [
      3633,
      3635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3635,
    "end": 3636,
    "range": [
      3635,
      3636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3636,
    "end": 3637,
    "range": [
      3636,
      3637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3637,
    "end": 3638,
    "range": [
      3637,
      3638
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 3639,
    "end": 3646,
    "range": [
      3639,
      3646
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3647,
    "end": 3651,
    "range": [
      3647,
      3651
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3652,
    "end": 3654,
    "range": [
      3652,
      3654
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3655,
    "end": 3661,
    "range": [
      3655,
      3661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3661,
    "end": 3662,
    "range": [
      3661,
      3662
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3667,
    "end": 3670,
    "range": [
      3667,
      3670
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 3671,
    "end": 3673,
    "range": [
      3671,
      3673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3673,
    "end": 3674,
    "range": [
      3673,
      3674
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3674,
    "end": 3675,
    "range": [
      3674,
      3675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 3677,
    "end": 3684,
    "range": [
      3677,
      3684
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3685,
    "end": 3689,
    "range": [
      3685,
      3689
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3690,
    "end": 3692,
    "range": [
      3690,
      3692
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3693,
    "end": 3699,
    "range": [
      3693,
      3699
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3699,
    "end": 3700,
    "range": [
      3699,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3702,
    "end": 3703,
    "range": [
      3702,
      3703
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3705,
    "end": 3713,
    "range": [
      3705,
      3713
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 3714,
    "end": 3717,
    "range": [
      3714,
      3717
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3717,
    "end": 3718,
    "range": [
      3717,
      3718
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3718,
    "end": 3719,
    "range": [
      3718,
      3719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3721,
    "end": 3728,
    "range": [
      3721,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3728,
    "end": 3729,
    "range": [
      3728,
      3729
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3730,
    "end": 3731,
    "range": [
      3730,
      3731
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3736,
    "end": 3741,
    "range": [
      3736,
      3741
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3742,
    "end": 3748,
    "range": [
      3742,
      3748
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3751,
    "end": 3752,
    "range": [
      3751,
      3752
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3752,
    "end": 3757,
    "range": [
      3752,
      3757
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3757,
    "end": 3758,
    "range": [
      3757,
      3758
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3759,
    "end": 3766,
    "range": [
      3759,
      3766
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3766,
    "end": 3767,
    "range": [
      3766,
      3767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3767,
    "end": 3768,
    "range": [
      3767,
      3768
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 3769,
    "end": 3776,
    "range": [
      3769,
      3776
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3777,
    "end": 3782,
    "range": [
      3777,
      3782
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3783,
    "end": 3785,
    "range": [
      3783,
      3785
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3786,
    "end": 3787,
    "range": [
      3786,
      3787
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3787,
    "end": 3788,
    "range": [
      3787,
      3788
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3793,
    "end": 3799,
    "range": [
      3793,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3799,
    "end": 3800,
    "range": [
      3799,
      3800
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3800,
    "end": 3806,
    "range": [
      3800,
      3806
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3809,
    "end": 3812,
    "range": [
      3809,
      3812
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3813,
    "end": 3821,
    "range": [
      3813,
      3821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3821,
    "end": 3822,
    "range": [
      3821,
      3822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3822,
    "end": 3823,
    "range": [
      3822,
      3823
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3838,
    "end": 3843,
    "range": [
      3838,
      3843
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3844,
    "end": 3845,
    "range": [
      3844,
      3845
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3846,
    "end": 3847,
    "range": [
      3846,
      3847
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3848,
    "end": 3849,
    "range": [
      3848,
      3849
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3849,
    "end": 3855,
    "range": [
      3849,
      3855
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3855,
    "end": 3856,
    "range": [
      3855,
      3856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3856,
    "end": 3857,
    "range": [
      3856,
      3857
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3862,
    "end": 3863,
    "range": [
      3862,
      3863
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3863,
    "end": 3864,
    "range": [
      3863,
      3864
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3864,
    "end": 3865,
    "range": [
      3864,
      3865
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3865,
    "end": 3866,
    "range": [
      3865,
      3866
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3866,
    "end": 3867,
    "range": [
      3866,
      3867
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3867,
    "end": 3873,
    "range": [
      3867,
      3873
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3874,
    "end": 3875,
    "range": [
      3874,
      3875
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3876,
    "end": 3879,
    "range": [
      3876,
      3879
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3880,
    "end": 3888,
    "range": [
      3880,
      3888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3888,
    "end": 3889,
    "range": [
      3888,
      3889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3889,
    "end": 3890,
    "range": [
      3889,
      3890
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3905,
    "end": 3910,
    "range": [
      3905,
      3910
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 3911,
    "end": 3913,
    "range": [
      3911,
      3913
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3914,
    "end": 3915,
    "range": [
      3914,
      3915
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3916,
    "end": 3919,
    "range": [
      3916,
      3919
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 3920,
    "end": 3924,
    "range": [
      3920,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3926,
    "end": 3927,
    "range": [
      3926,
      3927
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 3932,
    "end": 3934,
    "range": [
      3932,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3934,
    "end": 3935,
    "range": [
      3934,
      3935
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3935,
    "end": 3941,
    "range": [
      3935,
      3941
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3941,
    "end": 3942,
    "range": [
      3941,
      3942
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3942,
    "end": 3948,
    "range": [
      3942,
      3948
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3949,
    "end": 3950,
    "range": [
      3949,
      3950
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3951,
    "end": 3954,
    "range": [
      3951,
      3954
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3955,
    "end": 3963,
    "range": [
      3955,
      3963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3963,
    "end": 3964,
    "range": [
      3963,
      3964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3964,
    "end": 3965,
    "range": [
      3964,
      3965
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3980,
    "end": 3985,
    "range": [
      3980,
      3985
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 3986,
    "end": 3988,
    "range": [
      3986,
      3988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3988,
    "end": 3989,
    "range": [
      3988,
      3989
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 3990,
    "end": 3994,
    "range": [
      3990,
      3994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3995,
    "end": 3996,
    "range": [
      3995,
      3996
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3997,
    "end": 4000,
    "range": [
      3997,
      4000
    ]
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 4001,
    "end": 4005,
    "range": [
      4001,
      4005
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4005,
    "end": 4006,
    "range": [
      4005,
      4006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4006,
    "end": 4007,
    "range": [
      4006,
      4007
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4007,
    "end": 4008,
    "range": [
      4007,
      4008
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 4013,
    "end": 4015,
    "range": [
      4013,
      4015
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4015,
    "end": 4016,
    "range": [
      4015,
      4016
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 4016,
    "end": 4022,
    "range": [
      4016,
      4022
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4022,
    "end": 4023,
    "range": [
      4022,
      4023
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4023,
    "end": 4029,
    "range": [
      4023,
      4029
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4032,
    "end": 4035,
    "range": [
      4032,
      4035
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 4036,
    "end": 4044,
    "range": [
      4036,
      4044
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4045,
    "end": 4046,
    "range": [
      4045,
      4046
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4047,
    "end": 4048,
    "range": [
      4047,
      4048
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4072,
    "end": 4081,
    "range": [
      4072,
      4081
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 4082,
    "end": 4087,
    "range": [
      4082,
      4087
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4088,
    "end": 4089,
    "range": [
      4088,
      4089
    ]
  },
  {
    "type": "Identifier",
    "value": "good",
    "start": 4094,
    "end": 4098,
    "range": [
      4094,
      4098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4098,
    "end": 4099,
    "range": [
      4098,
      4099
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4100,
    "end": 4107,
    "range": [
      4100,
      4107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4107,
    "end": 4108,
    "range": [
      4107,
      4108
    ]
  },
  {
    "type": "Identifier",
    "value": "isGood",
    "start": 4113,
    "end": 4119,
    "range": [
      4113,
      4119
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4119,
    "end": 4120,
    "range": [
      4119,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4120,
    "end": 4121,
    "range": [
      4120,
      4121
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4121,
    "end": 4122,
    "range": [
      4121,
      4122
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 4123,
    "end": 4130,
    "range": [
      4123,
      4130
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4131,
    "end": 4135,
    "range": [
      4131,
      4135
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4136,
    "end": 4138,
    "range": [
      4136,
      4138
    ]
  },
  {
    "type": "Identifier",
    "value": "GoodThing",
    "start": 4139,
    "end": 4148,
    "range": [
      4139,
      4148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4150,
    "end": 4151,
    "range": [
      4150,
      4151
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4153,
    "end": 4162,
    "range": [
      4153,
      4162
    ]
  },
  {
    "type": "Identifier",
    "value": "GoodThing",
    "start": 4163,
    "end": 4172,
    "range": [
      4163,
      4172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4173,
    "end": 4174,
    "range": [
      4173,
      4174
    ]
  },
  {
    "type": "Identifier",
    "value": "good",
    "start": 4179,
    "end": 4183,
    "range": [
      4179,
      4183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4183,
    "end": 4184,
    "range": [
      4183,
      4184
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4185,
    "end": 4189,
    "range": [
      4185,
      4189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4189,
    "end": 4190,
    "range": [
      4189,
      4190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4191,
    "end": 4192,
    "range": [
      4191,
      4192
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4194,
    "end": 4202,
    "range": [
      4194,
      4202
    ]
  },
  {
    "type": "Identifier",
    "value": "example1",
    "start": 4203,
    "end": 4211,
    "range": [
      4203,
      4211
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4211,
    "end": 4212,
    "range": [
      4211,
      4212
    ]
  },
  {
    "type": "Identifier",
    "value": "things",
    "start": 4212,
    "end": 4218,
    "range": [
      4212,
      4218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4218,
    "end": 4219,
    "range": [
      4218,
      4219
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 4220,
    "end": 4225,
    "range": [
      4220,
      4225
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4225,
    "end": 4226,
    "range": [
      4225,
      4226
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4229,
    "end": 4230,
    "range": [
      4229,
      4230
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4235,
    "end": 4238,
    "range": [
      4235,
      4238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4239,
    "end": 4240,
    "range": [
      4239,
      4240
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4240,
    "end": 4243,
    "range": [
      4240,
      4243
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 4244,
    "end": 4249,
    "range": [
      4244,
      4249
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4250,
    "end": 4252,
    "range": [
      4250,
      4252
    ]
  },
  {
    "type": "Identifier",
    "value": "things",
    "start": 4253,
    "end": 4259,
    "range": [
      4253,
      4259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4259,
    "end": 4260,
    "range": [
      4259,
      4260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4261,
    "end": 4262,
    "range": [
      4261,
      4262
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 4271,
    "end": 4276,
    "range": [
      4271,
      4276
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4276,
    "end": 4277,
    "range": [
      4276,
      4277
    ]
  },
  {
    "type": "Identifier",
    "value": "isGood",
    "start": 4277,
    "end": 4283,
    "range": [
      4277,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4283,
    "end": 4284,
    "range": [
      4283,
      4284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4284,
    "end": 4285,
    "range": [
      4284,
      4285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4285,
    "end": 4286,
    "range": [
      4285,
      4286
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 4295,
    "end": 4300,
    "range": [
      4295,
      4300
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4300,
    "end": 4301,
    "range": [
      4300,
      4301
    ]
  },
  {
    "type": "Identifier",
    "value": "good",
    "start": 4301,
    "end": 4305,
    "range": [
      4301,
      4305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4305,
    "end": 4306,
    "range": [
      4305,
      4306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4311,
    "end": 4312,
    "range": [
      4311,
      4312
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4313,
    "end": 4314,
    "range": [
      4313,
      4314
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4316,
    "end": 4321,
    "range": [
      4316,
      4321
    ]
  },
  {
    "type": "Identifier",
    "value": "TestPropertyDeclaration1",
    "start": 4322,
    "end": 4346,
    "range": [
      4322,
      4346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4347,
    "end": 4348,
    "range": [
      4347,
      4348
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 4351,
    "end": 4357,
    "range": [
      4351,
      4357
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4358,
    "end": 4359,
    "range": [
      4358,
      4359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4360,
    "end": 4361,
    "range": [
      4360,
      4361
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4361,
    "end": 4366,
    "range": [
      4361,
      4366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4366,
    "end": 4367,
    "range": [
      4366,
      4367
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4368,
    "end": 4375,
    "range": [
      4368,
      4375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4375,
    "end": 4376,
    "range": [
      4375,
      4376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4376,
    "end": 4377,
    "range": [
      4376,
      4377
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 4378,
    "end": 4385,
    "range": [
      4378,
      4385
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4386,
    "end": 4391,
    "range": [
      4386,
      4391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4392,
    "end": 4394,
    "range": [
      4392,
      4394
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4395,
    "end": 4396,
    "range": [
      4395,
      4396
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4396,
    "end": 4397,
    "range": [
      4396,
      4397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4397,
    "end": 4398,
    "range": [
      4397,
      4398
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 4401,
    "end": 4406,
    "range": [
      4401,
      4406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4406,
    "end": 4407,
    "range": [
      4406,
      4407
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4407,
    "end": 4408,
    "range": [
      4407,
      4408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4408,
    "end": 4409,
    "range": [
      4408,
      4409
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4410,
    "end": 4417,
    "range": [
      4410,
      4417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4417,
    "end": 4418,
    "range": [
      4417,
      4418
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4419,
    "end": 4420,
    "range": [
      4419,
      4420
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4425,
    "end": 4429,
    "range": [
      4425,
      4429
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4429,
    "end": 4430,
    "range": [
      4429,
      4430
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 4430,
    "end": 4436,
    "range": [
      4430,
      4436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4436,
    "end": 4437,
    "range": [
      4436,
      4437
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4437,
    "end": 4438,
    "range": [
      4437,
      4438
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4438,
    "end": 4439,
    "range": [
      4438,
      4439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4439,
    "end": 4440,
    "range": [
      4439,
      4440
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4454,
    "end": 4455,
    "range": [
      4454,
      4455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4455,
    "end": 4456,
    "range": [
      4455,
      4456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4459,
    "end": 4460,
    "range": [
      4459,
      4460
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4461,
    "end": 4462,
    "range": [
      4461,
      4462
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4464,
    "end": 4469,
    "range": [
      4464,
      4469
    ]
  },
  {
    "type": "Identifier",
    "value": "TestPropertyDeclaration2",
    "start": 4470,
    "end": 4494,
    "range": [
      4470,
      4494
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4495,
    "end": 4496,
    "range": [
      4495,
      4496
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 4499,
    "end": 4505,
    "range": [
      4499,
      4505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4505,
    "end": 4506,
    "range": [
      4505,
      4506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4507,
    "end": 4508,
    "range": [
      4507,
      4508
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4508,
    "end": 4509,
    "range": [
      4508,
      4509
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4509,
    "end": 4510,
    "range": [
      4509,
      4510
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4511,
    "end": 4518,
    "range": [
      4511,
      4518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4518,
    "end": 4519,
    "range": [
      4518,
      4519
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4520,
    "end": 4522,
    "range": [
      4520,
      4522
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 4523,
    "end": 4530,
    "range": [
      4523,
      4530
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4533,
    "end": 4534,
    "range": [
      4533,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4536,
    "end": 4541,
    "range": [
      4536,
      4541
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4543,
    "end": 4545,
    "range": [
      4543,
      4545
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4546,
    "end": 4547,
    "range": [
      4546,
      4547
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4547,
    "end": 4548,
    "range": [
      4547,
      4548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4548,
    "end": 4549,
    "range": [
      4548,
      4549
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 4552,
    "end": 4557,
    "range": [
      4552,
      4557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4557,
    "end": 4558,
    "range": [
      4557,
      4558
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4558,
    "end": 4559,
    "range": [
      4558,
      4559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4559,
    "end": 4560,
    "range": [
      4559,
      4560
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4561,
    "end": 4568,
    "range": [
      4561,
      4568
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4568,
    "end": 4569,
    "range": [
      4568,
      4569
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4570,
    "end": 4571,
    "range": [
      4570,
      4571
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4576,
    "end": 4580,
    "range": [
      4576,
      4580
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4580,
    "end": 4581,
    "range": [
      4580,
      4581
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 4581,
    "end": 4587,
    "range": [
      4581,
      4587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4587,
    "end": 4588,
    "range": [
      4587,
      4588
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4588,
    "end": 4589,
    "range": [
      4588,
      4589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4589,
    "end": 4590,
    "range": [
      4589,
      4590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4590,
    "end": 4591,
    "range": [
      4590,
      4591
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4602,
    "end": 4603,
    "range": [
      4602,
      4603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4603,
    "end": 4604,
    "range": [
      4603,
      4604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4607,
    "end": 4608,
    "range": [
      4607,
      4608
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4609,
    "end": 4610,
    "range": [
      4609,
      4610
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4612,
    "end": 4619,
    "range": [
      4612,
      4619
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4620,
    "end": 4625,
    "range": [
      4620,
      4625
    ]
  },
  {
    "type": "Identifier",
    "value": "ParentInheritedPropertyDeclaration",
    "start": 4626,
    "end": 4660,
    "range": [
      4626,
      4660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4661,
    "end": 4662,
    "range": [
      4661,
      4662
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 4665,
    "end": 4671,
    "range": [
      4665,
      4671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4671,
    "end": 4672,
    "range": [
      4671,
      4672
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4673,
    "end": 4674,
    "range": [
      4673,
      4674
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4674,
    "end": 4679,
    "range": [
      4674,
      4679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4679,
    "end": 4680,
    "range": [
      4679,
      4680
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4681,
    "end": 4688,
    "range": [
      4681,
      4688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4688,
    "end": 4689,
    "range": [
      4688,
      4689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4690,
    "end": 4692,
    "range": [
      4690,
      4692
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 4693,
    "end": 4700,
    "range": [
      4693,
      4700
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4701,
    "end": 4706,
    "range": [
      4701,
      4706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4706,
    "end": 4707,
    "range": [
      4706,
      4707
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4708,
    "end": 4709,
    "range": [
      4708,
      4709
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4710,
    "end": 4715,
    "range": [
      4710,
      4715
    ]
  },
  {
    "type": "Identifier",
    "value": "ChildInheritedPropertyDeclaration",
    "start": 4716,
    "end": 4749,
    "range": [
      4716,
      4749
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4750,
    "end": 4757,
    "range": [
      4750,
      4757
    ]
  },
  {
    "type": "Identifier",
    "value": "ParentInheritedPropertyDeclaration",
    "start": 4758,
    "end": 4792,
    "range": [
      4758,
      4792
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4793,
    "end": 4794,
    "range": [
      4793,
      4794
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 4797,
    "end": 4802,
    "range": [
      4797,
      4802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4802,
    "end": 4803,
    "range": [
      4802,
      4803
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4803,
    "end": 4804,
    "range": [
      4803,
      4804
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4804,
    "end": 4805,
    "range": [
      4804,
      4805
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4806,
    "end": 4813,
    "range": [
      4806,
      4813
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4813,
    "end": 4814,
    "range": [
      4813,
      4814
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4815,
    "end": 4816,
    "range": [
      4815,
      4816
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4821,
    "end": 4825,
    "range": [
      4821,
      4825
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4825,
    "end": 4826,
    "range": [
      4825,
      4826
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 4826,
    "end": 4832,
    "range": [
      4826,
      4832
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4832,
    "end": 4833,
    "range": [
      4832,
      4833
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4833,
    "end": 4834,
    "range": [
      4833,
      4834
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4834,
    "end": 4835,
    "range": [
      4834,
      4835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4835,
    "end": 4836,
    "range": [
      4835,
      4836
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4847,
    "end": 4848,
    "range": [
      4847,
      4848
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4848,
    "end": 4849,
    "range": [
      4848,
      4849
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4852,
    "end": 4853,
    "range": [
      4852,
      4853
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4854,
    "end": 4855,
    "range": [
      4854,
      4855
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4857,
    "end": 4866,
    "range": [
      4857,
      4866
    ]
  },
  {
    "type": "Identifier",
    "value": "TestPropertySignature",
    "start": 4867,
    "end": 4888,
    "range": [
      4867,
      4888
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4889,
    "end": 4890,
    "range": [
      4889,
      4890
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 4893,
    "end": 4899,
    "range": [
      4893,
      4899
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4899,
    "end": 4900,
    "range": [
      4899,
      4900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4901,
    "end": 4902,
    "range": [
      4901,
      4902
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4902,
    "end": 4907,
    "range": [
      4902,
      4907
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4907,
    "end": 4908,
    "range": [
      4907,
      4908
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4909,
    "end": 4916,
    "range": [
      4909,
      4916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4916,
    "end": 4917,
    "range": [
      4916,
      4917
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4918,
    "end": 4920,
    "range": [
      4918,
      4920
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 4921,
    "end": 4928,
    "range": [
      4921,
      4928
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4929,
    "end": 4934,
    "range": [
      4929,
      4934
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4934,
    "end": 4935,
    "range": [
      4934,
      4935
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4936,
    "end": 4937,
    "range": [
      4936,
      4937
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4938,
    "end": 4946,
    "range": [
      4938,
      4946
    ]
  },
  {
    "type": "Identifier",
    "value": "testPropertySignature",
    "start": 4947,
    "end": 4968,
    "range": [
      4947,
      4968
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4968,
    "end": 4969,
    "range": [
      4968,
      4969
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4972,
    "end": 4973,
    "range": [
      4972,
      4973
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4973,
    "end": 4974,
    "range": [
      4973,
      4974
    ]
  },
  {
    "type": "Identifier",
    "value": "TestPropertySignature",
    "start": 4975,
    "end": 4996,
    "range": [
      4975,
      4996
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4996,
    "end": 4997,
    "range": [
      4996,
      4997
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5000,
    "end": 5001,
    "range": [
      5000,
      5001
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5001,
    "end": 5002,
    "range": [
      5001,
      5002
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5003,
    "end": 5010,
    "range": [
      5003,
      5010
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5010,
    "end": 5011,
    "range": [
      5010,
      5011
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5012,
    "end": 5013,
    "range": [
      5012,
      5013
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5014,
    "end": 5015,
    "range": [
      5014,
      5015
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5018,
    "end": 5019,
    "range": [
      5018,
      5019
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5019,
    "end": 5020,
    "range": [
      5019,
      5020
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 5020,
    "end": 5026,
    "range": [
      5020,
      5026
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5026,
    "end": 5027,
    "range": [
      5026,
      5027
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5027,
    "end": 5028,
    "range": [
      5027,
      5028
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5028,
    "end": 5029,
    "range": [
      5028,
      5029
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5029,
    "end": 5030,
    "range": [
      5029,
      5030
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5039,
    "end": 5040,
    "range": [
      5039,
      5040
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5040,
    "end": 5041,
    "range": [
      5040,
      5041
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5042,
    "end": 5043,
    "range": [
      5042,
      5043
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5044,
    "end": 5052,
    "range": [
      5044,
      5052
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionThisParameter1",
    "start": 5053,
    "end": 5079,
    "range": [
      5053,
      5079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5079,
    "end": 5080,
    "range": [
      5079,
      5080
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5083,
    "end": 5087,
    "range": [
      5083,
      5087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5087,
    "end": 5088,
    "range": [
      5087,
      5088
    ]
  },
  {
    "type": "Identifier",
    "value": "TestPropertySignature",
    "start": 5089,
    "end": 5110,
    "range": [
      5089,
      5110
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5110,
    "end": 5111,
    "range": [
      5110,
      5111
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5114,
    "end": 5115,
    "range": [
      5114,
      5115
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5115,
    "end": 5116,
    "range": [
      5115,
      5116
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5117,
    "end": 5124,
    "range": [
      5117,
      5124
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5124,
    "end": 5125,
    "range": [
      5124,
      5125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5126,
    "end": 5127,
    "range": [
      5126,
      5127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5128,
    "end": 5129,
    "range": [
      5128,
      5129
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5132,
    "end": 5136,
    "range": [
      5132,
      5136
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5136,
    "end": 5137,
    "range": [
      5136,
      5137
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 5137,
    "end": 5143,
    "range": [
      5137,
      5143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5143,
    "end": 5144,
    "range": [
      5143,
      5144
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5144,
    "end": 5145,
    "range": [
      5144,
      5145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5145,
    "end": 5146,
    "range": [
      5145,
      5146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5146,
    "end": 5147,
    "range": [
      5146,
      5147
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5156,
    "end": 5157,
    "range": [
      5156,
      5157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5157,
    "end": 5158,
    "range": [
      5157,
      5158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5159,
    "end": 5160,
    "range": [
      5159,
      5160
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5162,
    "end": 5171,
    "range": [
      5162,
      5171
    ]
  },
  {
    "type": "Identifier",
    "value": "TestMethodSignature",
    "start": 5172,
    "end": 5191,
    "range": [
      5172,
      5191
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5192,
    "end": 5193,
    "range": [
      5192,
      5193
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 5196,
    "end": 5202,
    "range": [
      5196,
      5202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5202,
    "end": 5203,
    "range": [
      5202,
      5203
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5203,
    "end": 5208,
    "range": [
      5203,
      5208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5208,
    "end": 5209,
    "range": [
      5208,
      5209
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5210,
    "end": 5217,
    "range": [
      5210,
      5217
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5217,
    "end": 5218,
    "range": [
      5217,
      5218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5218,
    "end": 5219,
    "range": [
      5218,
      5219
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 5220,
    "end": 5227,
    "range": [
      5220,
      5227
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5228,
    "end": 5233,
    "range": [
      5228,
      5233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5233,
    "end": 5234,
    "range": [
      5233,
      5234
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5235,
    "end": 5236,
    "range": [
      5235,
      5236
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5237,
    "end": 5245,
    "range": [
      5237,
      5245
    ]
  },
  {
    "type": "Identifier",
    "value": "testMethodSignature",
    "start": 5246,
    "end": 5265,
    "range": [
      5246,
      5265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5265,
    "end": 5266,
    "range": [
      5265,
      5266
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5269,
    "end": 5270,
    "range": [
      5269,
      5270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5270,
    "end": 5271,
    "range": [
      5270,
      5271
    ]
  },
  {
    "type": "Identifier",
    "value": "TestMethodSignature",
    "start": 5272,
    "end": 5291,
    "range": [
      5272,
      5291
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5291,
    "end": 5292,
    "range": [
      5291,
      5292
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5295,
    "end": 5296,
    "range": [
      5295,
      5296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5296,
    "end": 5297,
    "range": [
      5296,
      5297
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5298,
    "end": 5305,
    "range": [
      5298,
      5305
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5305,
    "end": 5306,
    "range": [
      5305,
      5306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5307,
    "end": 5308,
    "range": [
      5307,
      5308
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5309,
    "end": 5310,
    "range": [
      5309,
      5310
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5313,
    "end": 5314,
    "range": [
      5313,
      5314
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5314,
    "end": 5315,
    "range": [
      5314,
      5315
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 5315,
    "end": 5321,
    "range": [
      5315,
      5321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5321,
    "end": 5322,
    "range": [
      5321,
      5322
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5322,
    "end": 5323,
    "range": [
      5322,
      5323
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5323,
    "end": 5324,
    "range": [
      5323,
      5324
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5324,
    "end": 5325,
    "range": [
      5324,
      5325
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5334,
    "end": 5335,
    "range": [
      5334,
      5335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5335,
    "end": 5336,
    "range": [
      5335,
      5336
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5337,
    "end": 5338,
    "range": [
      5337,
      5338
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5339,
    "end": 5347,
    "range": [
      5339,
      5347
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionThisParameter2",
    "start": 5348,
    "end": 5374,
    "range": [
      5348,
      5374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5374,
    "end": 5375,
    "range": [
      5374,
      5375
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5378,
    "end": 5382,
    "range": [
      5378,
      5382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5382,
    "end": 5383,
    "range": [
      5382,
      5383
    ]
  },
  {
    "type": "Identifier",
    "value": "TestMethodSignature",
    "start": 5384,
    "end": 5403,
    "range": [
      5384,
      5403
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5403,
    "end": 5404,
    "range": [
      5403,
      5404
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5407,
    "end": 5408,
    "range": [
      5407,
      5408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5408,
    "end": 5409,
    "range": [
      5408,
      5409
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5410,
    "end": 5417,
    "range": [
      5410,
      5417
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5417,
    "end": 5418,
    "range": [
      5417,
      5418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5419,
    "end": 5420,
    "range": [
      5419,
      5420
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5421,
    "end": 5422,
    "range": [
      5421,
      5422
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5425,
    "end": 5429,
    "range": [
      5425,
      5429
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5429,
    "end": 5430,
    "range": [
      5429,
      5430
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 5430,
    "end": 5436,
    "range": [
      5430,
      5436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5436,
    "end": 5437,
    "range": [
      5436,
      5437
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5437,
    "end": 5438,
    "range": [
      5437,
      5438
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5438,
    "end": 5439,
    "range": [
      5438,
      5439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5439,
    "end": 5440,
    "range": [
      5439,
      5440
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5449,
    "end": 5450,
    "range": [
      5449,
      5450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5450,
    "end": 5451,
    "range": [
      5450,
      5451
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5452,
    "end": 5453,
    "range": [
      5452,
      5453
    ]
  }
]
```
