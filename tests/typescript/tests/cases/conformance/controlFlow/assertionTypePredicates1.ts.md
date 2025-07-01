__ESTREE_TEST__:PASS:
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
