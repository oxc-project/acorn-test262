__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 15,
                    "end": 16
                  },
                  "start": 15,
                  "end": 16
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 19,
                    "end": 20
                  },
                  "start": 19,
                  "end": 20
                }
              ],
              "start": 15,
              "end": 20
            },
            "start": 13,
            "end": 20
          },
          "start": 12,
          "end": 20
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 23,
          "end": 29
        },
        "start": 21,
        "end": 29
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
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 42,
                  "end": 46
                },
                "prefix": true,
                "start": 41,
                "end": 46
              },
              "prefix": true,
              "start": 40,
              "end": 46
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 67
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 88,
                        "end": 89
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 98,
                            "end": 101
                          },
                          "start": 91,
                          "end": 102
                        }
                      ],
                      "start": 83,
                      "end": 102
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 120,
                        "end": 121
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "'b'",
                            "start": 130,
                            "end": 133
                          },
                          "start": 123,
                          "end": 134
                        }
                      ],
                      "start": 115,
                      "end": 134
                    }
                  ],
                  "start": 58,
                  "end": 144
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 154
                  },
                  "directive": null,
                  "start": 153,
                  "end": 155
                }
              ],
              "start": 48,
              "end": 177
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 203,
                    "end": 204
                  },
                  "start": 197,
                  "end": 205
                }
              ],
              "start": 187,
              "end": 211
            },
            "start": 36,
            "end": 211
          }
        ],
        "start": 30,
        "end": 213
      },
      "expression": false,
      "start": 0,
      "end": 213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 226
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 230,
                    "end": 231
                  },
                  "start": 230,
                  "end": 231
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 234,
                    "end": 235
                  },
                  "start": 234,
                  "end": 235
                }
              ],
              "start": 230,
              "end": 235
            },
            "start": 228,
            "end": 235
          },
          "start": 227,
          "end": 235
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 250,
                      "end": 256
                    },
                    "start": 248,
                    "end": 256
                  },
                  "start": 247,
                  "end": 256
                },
                "init": null,
                "definite": false,
                "start": 247,
                "end": 256
              }
            ],
            "declare": false,
            "start": 243,
            "end": 257
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 288,
                  "end": 289
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 291,
                        "end": 292
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 295,
                        "end": 297
                      },
                      "start": 291,
                      "end": 297
                    },
                    "directive": null,
                    "start": 291,
                    "end": 298
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 299,
                    "end": 305
                  }
                ],
                "start": 283,
                "end": 305
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 319,
                  "end": 320
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 323
                      },
                      "right": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 326,
                        "end": 328
                      },
                      "start": 322,
                      "end": 328
                    },
                    "directive": null,
                    "start": 322,
                    "end": 329
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 330,
                    "end": 336
                  }
                ],
                "start": 314,
                "end": 336
              }
            ],
            "start": 262,
            "end": 342
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
            },
            "directive": null,
            "start": 347,
            "end": 349
          }
        ],
        "start": 237,
        "end": 375
      },
      "expression": false,
      "start": 215,
      "end": 375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 388
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 392,
                    "end": 393
                  },
                  "start": 392,
                  "end": 393
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 396,
                    "end": 397
                  },
                  "start": 396,
                  "end": 397
                }
              ],
              "start": 392,
              "end": 397
            },
            "start": 390,
            "end": 397
          },
          "start": 389,
          "end": 397
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 414
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 431,
                  "end": 432
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 441,
                      "end": 443
                    },
                    "start": 434,
                    "end": 444
                  }
                ],
                "start": 426,
                "end": 444
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 458,
                  "end": 459
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 20,
                      "raw": "20",
                      "start": 468,
                      "end": 470
                    },
                    "start": 461,
                    "end": 471
                  }
                ],
                "start": 453,
                "end": 471
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
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
                        "start": 565,
                        "end": 570
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Bad input",
                          "raw": "\"Bad input\"",
                          "start": 571,
                          "end": 582
                        }
                      ],
                      "start": 561,
                      "end": 583
                    },
                    "start": 555,
                    "end": 584
                  }
                ],
                "start": 546,
                "end": 584
              }
            ],
            "start": 405,
            "end": 590
          }
        ],
        "start": 399,
        "end": 592
      },
      "expression": false,
      "start": 377,
      "end": 592
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 621,
        "end": 622
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 626
            },
            "initializer": null,
            "computed": false,
            "start": 625,
            "end": 626
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 629
            },
            "initializer": null,
            "computed": false,
            "start": 628,
            "end": 629
          }
        ],
        "start": 623,
        "end": 631
      },
      "const": false,
      "declare": false,
      "start": 616,
      "end": 631
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 643
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              },
              "typeArguments": null,
              "start": 647,
              "end": 648
            },
            "start": 645,
            "end": 648
          },
          "start": 644,
          "end": 648
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 651,
          "end": 657
        },
        "start": 649,
        "end": 657
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 673
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 691
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 692,
                    "end": 693
                  },
                  "optional": false,
                  "computed": false,
                  "start": 690,
                  "end": 693
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 702,
                      "end": 703
                    },
                    "start": 695,
                    "end": 703
                  }
                ],
                "start": 685,
                "end": 703
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 717,
                    "end": 718
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 719,
                    "end": 720
                  },
                  "optional": false,
                  "computed": false,
                  "start": 717,
                  "end": 720
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 729,
                      "end": 730
                    },
                    "start": 722,
                    "end": 730
                  }
                ],
                "start": 712,
                "end": 730
              }
            ],
            "start": 664,
            "end": 736
          }
        ],
        "start": 658,
        "end": 738
      },
      "expression": false,
      "start": 633,
      "end": 738
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 750
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 755
              },
              "typeArguments": null,
              "start": 754,
              "end": 755
            },
            "start": 752,
            "end": 755
          },
          "start": 751,
          "end": 755
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 758,
          "end": 764
        },
        "start": 756,
        "end": 764
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
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 776,
                "end": 780
              },
              "prefix": true,
              "start": 775,
              "end": 780
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 798,
                  "end": 799
                },
                "prefix": true,
                "start": 797,
                "end": 799
              },
              "start": 790,
              "end": 799
            },
            "alternate": {
              "type": "SwitchStatement",
              "discriminant": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 826
              },
              "cases": [
                {
                  "type": "SwitchCase",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 848
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 850
                    },
                    "optional": false,
                    "computed": false,
                    "start": 847,
                    "end": 850
                  },
                  "consequent": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 859,
                        "end": 860
                      },
                      "start": 852,
                      "end": 860
                    }
                  ],
                  "start": 842,
                  "end": 860
                },
                {
                  "type": "SwitchCase",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 879
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 880,
                      "end": 881
                    },
                    "optional": false,
                    "computed": false,
                    "start": 878,
                    "end": 881
                  },
                  "consequent": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 890,
                        "end": 891
                      },
                      "start": 883,
                      "end": 891
                    }
                  ],
                  "start": 873,
                  "end": 891
                }
              ],
              "start": 817,
              "end": 901
            },
            "start": 771,
            "end": 901
          }
        ],
        "start": 765,
        "end": 903
      },
      "expression": false,
      "start": 740,
      "end": 903
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Square",
        "optional": false,
        "typeAnnotation": null,
        "start": 937,
        "end": 943
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
              "start": 946,
              "end": 950
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 952,
                  "end": 960
                },
                "start": 952,
                "end": 960
              },
              "start": 950,
              "end": 960
            },
            "accessibility": null,
            "static": false,
            "start": 946,
            "end": 961
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 966
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 968,
                "end": 974
              },
              "start": 966,
              "end": 974
            },
            "accessibility": null,
            "static": false,
            "start": 962,
            "end": 975
          }
        ],
        "start": 944,
        "end": 977
      },
      "declare": false,
      "start": 927,
      "end": 977
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null,
        "start": 989,
        "end": 998
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
              "start": 1001,
              "end": 1005
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 1007,
                  "end": 1018
                },
                "start": 1007,
                "end": 1018
              },
              "start": 1005,
              "end": 1018
            },
            "accessibility": null,
            "static": false,
            "start": 1001,
            "end": 1019
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 1020,
              "end": 1025
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1027,
                "end": 1033
              },
              "start": 1025,
              "end": 1033
            },
            "accessibility": null,
            "static": false,
            "start": 1020,
            "end": 1034
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1041
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1043,
                "end": 1049
              },
              "start": 1041,
              "end": 1049
            },
            "accessibility": null,
            "static": false,
            "start": 1035,
            "end": 1050
          }
        ],
        "start": 999,
        "end": 1052
      },
      "declare": false,
      "start": 979,
      "end": 1052
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1064,
        "end": 1070
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
              "start": 1073,
              "end": 1077
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 1079,
                  "end": 1087
                },
                "start": 1079,
                "end": 1087
              },
              "start": 1077,
              "end": 1087
            },
            "accessibility": null,
            "static": false,
            "start": 1073,
            "end": 1088
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null,
              "start": 1089,
              "end": 1095
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1097,
                "end": 1103
              },
              "start": 1095,
              "end": 1103
            },
            "accessibility": null,
            "static": false,
            "start": 1089,
            "end": 1104
          }
        ],
        "start": 1071,
        "end": 1106
      },
      "declare": false,
      "start": 1054,
      "end": 1106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Triangle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1118,
        "end": 1126
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
              "start": 1129,
              "end": 1133
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "triangle",
                  "raw": "\"triangle\"",
                  "start": 1135,
                  "end": 1145
                },
                "start": 1135,
                "end": 1145
              },
              "start": 1133,
              "end": 1145
            },
            "accessibility": null,
            "static": false,
            "start": 1129,
            "end": 1146
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "side",
              "optional": false,
              "typeAnnotation": null,
              "start": 1147,
              "end": 1151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1153,
                "end": 1159
              },
              "start": 1151,
              "end": 1159
            },
            "accessibility": null,
            "static": false,
            "start": 1147,
            "end": 1160
          }
        ],
        "start": 1127,
        "end": 1162
      },
      "declare": false,
      "start": 1108,
      "end": 1162
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1169,
        "end": 1174
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1183
            },
            "typeArguments": null,
            "start": 1177,
            "end": 1183
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1195
            },
            "typeArguments": null,
            "start": 1186,
            "end": 1195
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1204
            },
            "typeArguments": null,
            "start": 1198,
            "end": 1204
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Triangle",
              "optional": false,
              "typeAnnotation": null,
              "start": 1207,
              "end": 1215
            },
            "typeArguments": null,
            "start": 1207,
            "end": 1215
          }
        ],
        "start": 1177,
        "end": 1215
      },
      "declare": false,
      "start": 1164,
      "end": 1216
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area",
        "optional": false,
        "typeAnnotation": null,
        "start": 1227,
        "end": 1231
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1235,
                "end": 1240
              },
              "typeArguments": null,
              "start": 1235,
              "end": 1240
            },
            "start": 1233,
            "end": 1240
          },
          "start": 1232,
          "end": 1240
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1243,
          "end": 1249
        },
        "start": 1241,
        "end": 1249
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "area",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1260,
                  "end": 1264
                },
                "init": null,
                "definite": false,
                "start": 1260,
                "end": 1264
              }
            ],
            "declare": false,
            "start": 1256,
            "end": 1265
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1278,
                "end": 1279
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1284
              },
              "optional": false,
              "computed": false,
              "start": 1278,
              "end": 1284
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 1301,
                  "end": 1309
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1311,
                        "end": 1315
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1318,
                            "end": 1319
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1320,
                            "end": 1324
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1318,
                          "end": 1324
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1327,
                            "end": 1328
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1329,
                            "end": 1333
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1327,
                          "end": 1333
                        },
                        "start": 1318,
                        "end": 1333
                      },
                      "start": 1311,
                      "end": 1333
                    },
                    "directive": null,
                    "start": 1311,
                    "end": 1334
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1335,
                    "end": 1341
                  }
                ],
                "start": 1296,
                "end": 1341
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 1355,
                  "end": 1366
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1368,
                        "end": 1372
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1375,
                            "end": 1376
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1377,
                            "end": 1382
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1375,
                          "end": 1382
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1385,
                            "end": 1386
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "height",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1387,
                            "end": 1393
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1385,
                          "end": 1393
                        },
                        "start": 1375,
                        "end": 1393
                      },
                      "start": 1368,
                      "end": 1393
                    },
                    "directive": null,
                    "start": 1368,
                    "end": 1394
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1395,
                    "end": 1401
                  }
                ],
                "start": 1350,
                "end": 1401
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 1415,
                  "end": 1423
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1425,
                        "end": 1429
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Math",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1432,
                              "end": 1436
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PI",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1437,
                              "end": 1439
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1432,
                            "end": 1439
                          },
                          "operator": "*",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1442,
                              "end": 1443
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "radius",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1444,
                              "end": 1450
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1442,
                            "end": 1450
                          },
                          "start": 1432,
                          "end": 1450
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1453,
                            "end": 1454
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1455,
                            "end": 1461
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1453,
                          "end": 1461
                        },
                        "start": 1432,
                        "end": 1461
                      },
                      "start": 1425,
                      "end": 1461
                    },
                    "directive": null,
                    "start": 1425,
                    "end": 1462
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1463,
                    "end": 1469
                  }
                ],
                "start": 1410,
                "end": 1469
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "triangle",
                  "raw": "\"triangle\"",
                  "start": 1483,
                  "end": 1493
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "area",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1495,
                        "end": 1499
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Math",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1502,
                                  "end": 1506
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1507,
                                  "end": 1511
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1502,
                                "end": 1511
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 1512,
                                  "end": 1513
                                }
                              ],
                              "optional": false,
                              "start": 1502,
                              "end": 1514
                            },
                            "operator": "/",
                            "right": {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4",
                              "start": 1517,
                              "end": 1518
                            },
                            "start": 1502,
                            "end": 1518
                          },
                          "operator": "*",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1521,
                              "end": 1522
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "side",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1523,
                              "end": 1527
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1521,
                            "end": 1527
                          },
                          "start": 1502,
                          "end": 1527
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1530,
                            "end": 1531
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "side",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1532,
                            "end": 1536
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1530,
                          "end": 1536
                        },
                        "start": 1502,
                        "end": 1536
                      },
                      "start": 1495,
                      "end": 1536
                    },
                    "directive": null,
                    "start": 1495,
                    "end": 1537
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1538,
                    "end": 1544
                  }
                ],
                "start": 1478,
                "end": 1544
              }
            ],
            "start": 1270,
            "end": 1550
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "area",
              "optional": false,
              "typeAnnotation": null,
              "start": 1562,
              "end": 1566
            },
            "start": 1555,
            "end": 1567
          }
        ],
        "start": 1250,
        "end": 1569
      },
      "expression": false,
      "start": 1218,
      "end": 1569
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "areaWrapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 1580,
        "end": 1591
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1600
              },
              "typeArguments": null,
              "start": 1595,
              "end": 1600
            },
            "start": 1593,
            "end": 1600
          },
          "start": 1592,
          "end": 1600
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1603,
          "end": 1609
        },
        "start": 1601,
        "end": 1609
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "area",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1620,
                  "end": 1624
                },
                "init": null,
                "definite": false,
                "start": 1620,
                "end": 1624
              }
            ],
            "declare": false,
            "start": 1616,
            "end": 1625
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "area",
                "optional": false,
                "typeAnnotation": null,
                "start": 1630,
                "end": 1634
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "SwitchStatement",
                        "discriminant": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1662,
                            "end": 1663
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1664,
                            "end": 1668
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1662,
                          "end": 1668
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "square",
                              "raw": "\"square\"",
                              "start": 1689,
                              "end": 1697
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1706,
                                      "end": 1707
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1708,
                                      "end": 1712
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1706,
                                    "end": 1712
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1715,
                                      "end": 1716
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1717,
                                      "end": 1721
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1715,
                                    "end": 1721
                                  },
                                  "start": 1706,
                                  "end": 1721
                                },
                                "start": 1699,
                                "end": 1722
                              }
                            ],
                            "start": 1684,
                            "end": 1722
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "rectangle",
                              "raw": "\"rectangle\"",
                              "start": 1740,
                              "end": 1751
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1760,
                                      "end": 1761
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "width",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1762,
                                      "end": 1767
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1760,
                                    "end": 1767
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1770,
                                      "end": 1771
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "height",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1772,
                                      "end": 1778
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1770,
                                    "end": 1778
                                  },
                                  "start": 1760,
                                  "end": 1778
                                },
                                "start": 1753,
                                "end": 1779
                              }
                            ],
                            "start": 1735,
                            "end": 1779
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "circle",
                              "raw": "\"circle\"",
                              "start": 1797,
                              "end": 1805
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Math",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1814,
                                        "end": 1818
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "PI",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1819,
                                        "end": 1821
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1814,
                                      "end": 1821
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1824,
                                        "end": 1825
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "radius",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1826,
                                        "end": 1832
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1824,
                                      "end": 1832
                                    },
                                    "start": 1814,
                                    "end": 1832
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1835,
                                      "end": 1836
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "radius",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1837,
                                      "end": 1843
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1835,
                                    "end": 1843
                                  },
                                  "start": 1814,
                                  "end": 1843
                                },
                                "start": 1807,
                                "end": 1844
                              }
                            ],
                            "start": 1792,
                            "end": 1844
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": "triangle",
                              "raw": "\"triangle\"",
                              "start": 1862,
                              "end": 1872
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Math",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1881,
                                            "end": 1885
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "sqrt",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1886,
                                            "end": 1890
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1881,
                                          "end": 1890
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Literal",
                                            "value": 3,
                                            "raw": "3",
                                            "start": 1891,
                                            "end": 1892
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1881,
                                        "end": 1893
                                      },
                                      "operator": "/",
                                      "right": {
                                        "type": "Literal",
                                        "value": 4,
                                        "raw": "4",
                                        "start": 1896,
                                        "end": 1897
                                      },
                                      "start": 1881,
                                      "end": 1897
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1900,
                                        "end": 1901
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "side",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1902,
                                        "end": 1906
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1900,
                                      "end": 1906
                                    },
                                    "start": 1881,
                                    "end": 1906
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1909,
                                      "end": 1910
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "side",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1911,
                                      "end": 1915
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1909,
                                    "end": 1915
                                  },
                                  "start": 1881,
                                  "end": 1915
                                },
                                "start": 1874,
                                "end": 1916
                              }
                            ],
                            "start": 1857,
                            "end": 1916
                          }
                        ],
                        "start": 1654,
                        "end": 1926
                      }
                    ],
                    "start": 1644,
                    "end": 1932
                  },
                  "id": null,
                  "generator": false,
                  "start": 1638,
                  "end": 1932
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1637,
                "end": 1935
              },
              "start": 1630,
              "end": 1935
            },
            "directive": null,
            "start": 1630,
            "end": 1936
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "area",
              "optional": false,
              "typeAnnotation": null,
              "start": 1948,
              "end": 1952
            },
            "start": 1941,
            "end": 1953
          }
        ],
        "start": 1610,
        "end": 1955
      },
      "expression": false,
      "start": 1571,
      "end": 1955
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1984,
        "end": 1990
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1994,
              "end": 1995
            },
            "initializer": null,
            "computed": false,
            "start": 1994,
            "end": 1995
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1998,
              "end": 1999
            },
            "initializer": null,
            "computed": false,
            "start": 1998,
            "end": 1999
          }
        ],
        "start": 1991,
        "end": 2001
      },
      "const": false,
      "declare": false,
      "start": 1979,
      "end": 2001
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "thisGivesError",
        "optional": false,
        "typeAnnotation": null,
        "start": 2012,
        "end": 2026
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 2030,
                "end": 2036
              },
              "typeArguments": null,
              "start": 2030,
              "end": 2036
            },
            "start": 2028,
            "end": 2036
          },
          "start": 2027,
          "end": 2036
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2039,
          "end": 2045
        },
        "start": 2037,
        "end": 2045
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2056,
                      "end": 2062
                    },
                    "start": 2054,
                    "end": 2062
                  },
                  "start": 2053,
                  "end": 2062
                },
                "init": null,
                "definite": false,
                "start": 2053,
                "end": 2062
              }
            ],
            "declare": false,
            "start": 2049,
            "end": 2063
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2073,
              "end": 2074
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2085,
                    "end": 2091
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2092,
                    "end": 2093
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2085,
                  "end": 2093
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2096
                      },
                      "right": {
                        "type": "Literal",
                        "value": "it was A",
                        "raw": "\"it was A\"",
                        "start": 2099,
                        "end": 2109
                      },
                      "start": 2095,
                      "end": 2109
                    },
                    "directive": null,
                    "start": 2095,
                    "end": 2110
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2111,
                    "end": 2117
                  }
                ],
                "start": 2080,
                "end": 2117
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2125,
                    "end": 2131
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2132,
                    "end": 2133
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2125,
                  "end": 2133
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2135,
                        "end": 2136
                      },
                      "right": {
                        "type": "Literal",
                        "value": "it was B",
                        "raw": "\"it was B\"",
                        "start": 2139,
                        "end": 2149
                      },
                      "start": 2135,
                      "end": 2149
                    },
                    "directive": null,
                    "start": 2135,
                    "end": 2150
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2151,
                    "end": 2157
                  }
                ],
                "start": 2120,
                "end": 2157
              }
            ],
            "start": 2065,
            "end": 2160
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 2169,
              "end": 2170
            },
            "start": 2162,
            "end": 2171
          }
        ],
        "start": 2046,
        "end": 2173
      },
      "expression": false,
      "start": 2003,
      "end": 2173
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2184,
        "end": 2189
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 2193,
                "end": 2199
              },
              "typeArguments": null,
              "start": 2193,
              "end": 2199
            },
            "start": 2191,
            "end": 2199
          },
          "start": 2190,
          "end": 2199
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2202,
          "end": 2208
        },
        "start": 2200,
        "end": 2208
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2219,
                      "end": 2225
                    },
                    "start": 2217,
                    "end": 2225
                  },
                  "start": 2216,
                  "end": 2225
                },
                "init": null,
                "definite": false,
                "start": 2216,
                "end": 2225
              }
            ],
            "declare": false,
            "start": 2212,
            "end": 2226
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2236,
              "end": 2237
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2248,
                    "end": 2254
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2255,
                    "end": 2256
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2248,
                  "end": 2256
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2258,
                        "end": 2259
                      },
                      "right": {
                        "type": "Literal",
                        "value": "it was A",
                        "raw": "\"it was A\"",
                        "start": 2262,
                        "end": 2272
                      },
                      "start": 2258,
                      "end": 2272
                    },
                    "directive": null,
                    "start": 2258,
                    "end": 2273
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2274,
                    "end": 2280
                  }
                ],
                "start": 2243,
                "end": 2280
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2288,
                    "end": 2294
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2295,
                    "end": 2296
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2288,
                  "end": 2296
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2298,
                        "end": 2299
                      },
                      "right": {
                        "type": "Literal",
                        "value": "it was B",
                        "raw": "\"it was B\"",
                        "start": 2302,
                        "end": 2312
                      },
                      "start": 2298,
                      "end": 2312
                    },
                    "directive": null,
                    "start": 2298,
                    "end": 2313
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2314,
                    "end": 2320
                  }
                ],
                "start": 2283,
                "end": 2320
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2332,
                        "end": 2333
                      },
                      "right": {
                        "type": "Literal",
                        "value": "it was something else",
                        "raw": "\"it was something else\"",
                        "start": 2336,
                        "end": 2359
                      },
                      "start": 2332,
                      "end": 2359
                    },
                    "directive": null,
                    "start": 2332,
                    "end": 2360
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2361,
                    "end": 2367
                  }
                ],
                "start": 2323,
                "end": 2367
              }
            ],
            "start": 2228,
            "end": 2370
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 2379,
              "end": 2380
            },
            "start": 2372,
            "end": 2381
          }
        ],
        "start": 2209,
        "end": 2383
      },
      "expression": false,
      "start": 2175,
      "end": 2383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2394,
        "end": 2399
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 2403,
                "end": 2409
              },
              "typeArguments": null,
              "start": 2403,
              "end": 2409
            },
            "start": 2401,
            "end": 2409
          },
          "start": 2400,
          "end": 2409
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2412,
          "end": 2418
        },
        "start": 2410,
        "end": 2418
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 2430,
              "end": 2431
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2442,
                    "end": 2448
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2449,
                    "end": 2450
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2442,
                  "end": 2450
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "it was A",
                      "raw": "\"it was A\"",
                      "start": 2459,
                      "end": 2469
                    },
                    "start": 2452,
                    "end": 2470
                  }
                ],
                "start": 2437,
                "end": 2470
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyEnum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2478,
                    "end": 2484
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2485,
                    "end": 2486
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2478,
                  "end": 2486
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "it was B",
                      "raw": "\"it was B\"",
                      "start": 2495,
                      "end": 2505
                    },
                    "start": 2488,
                    "end": 2506
                  }
                ],
                "start": 2473,
                "end": 2506
              }
            ],
            "start": 2422,
            "end": 2509
          }
        ],
        "start": 2419,
        "end": 2511
      },
      "expression": false,
      "start": 2385,
      "end": 2511
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level",
        "optional": false,
        "typeAnnotation": null,
        "start": 2540,
        "end": 2545
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 2550,
              "end": 2553
            },
            "initializer": null,
            "computed": false,
            "start": 2550,
            "end": 2553
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null,
              "start": 2557,
              "end": 2560
            },
            "initializer": null,
            "computed": false,
            "start": 2557,
            "end": 2560
          }
        ],
        "start": 2546,
        "end": 2563
      },
      "const": false,
      "declare": false,
      "start": 2535,
      "end": 2563
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
            "name": "doSomethingWithLevel",
            "optional": false,
            "typeAnnotation": null,
            "start": 2571,
            "end": 2591
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
                "name": "level",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Level",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2602,
                      "end": 2607
                    },
                    "typeArguments": null,
                    "start": 2602,
                    "end": 2607
                  },
                  "start": 2600,
                  "end": 2607
                },
                "start": 2595,
                "end": 2607
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Level",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2626,
                              "end": 2631
                            },
                            "typeArguments": null,
                            "start": 2626,
                            "end": 2631
                          },
                          "start": 2624,
                          "end": 2631
                        },
                        "start": 2620,
                        "end": 2631
                      },
                      "init": null,
                      "definite": false,
                      "start": 2620,
                      "end": 2631
                    }
                  ],
                  "declare": false,
                  "start": 2616,
                  "end": 2632
                },
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "level",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2643,
                    "end": 2648
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Level",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2661,
                          "end": 2666
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "One",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2667,
                          "end": 2670
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2661,
                        "end": 2670
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2678,
                              "end": 2682
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Level",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2685,
                                "end": 2690
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Two",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2691,
                                "end": 2694
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2685,
                              "end": 2694
                            },
                            "start": 2678,
                            "end": 2694
                          },
                          "directive": null,
                          "start": 2678,
                          "end": 2695
                        },
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 2702,
                          "end": 2708
                        }
                      ],
                      "start": 2656,
                      "end": 2708
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Level",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2718,
                          "end": 2723
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Two",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2724,
                          "end": 2727
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2718,
                        "end": 2727
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2735,
                              "end": 2739
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Level",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2742,
                                "end": 2747
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "One",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2748,
                                "end": 2751
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2742,
                              "end": 2751
                            },
                            "start": 2735,
                            "end": 2751
                          },
                          "directive": null,
                          "start": 2735,
                          "end": 2752
                        },
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 2759,
                          "end": 2765
                        }
                      ],
                      "start": 2713,
                      "end": 2765
                    }
                  ],
                  "start": 2635,
                  "end": 2769
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2779,
                    "end": 2783
                  },
                  "start": 2772,
                  "end": 2784
                }
              ],
              "start": 2612,
              "end": 2786
            },
            "id": null,
            "generator": false,
            "start": 2594,
            "end": 2786
          },
          "definite": false,
          "start": 2571,
          "end": 2786
        }
      ],
      "declare": false,
      "start": 2565,
      "end": 2787
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Square2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2821,
        "end": 2828
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
              "start": 2835,
              "end": 2839
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 2841,
                  "end": 2849
                },
                "start": 2841,
                "end": 2849
              },
              "start": 2839,
              "end": 2849
            },
            "accessibility": null,
            "static": false,
            "start": 2835,
            "end": 2850
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 2855,
              "end": 2859
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2861,
                "end": 2867
              },
              "start": 2859,
              "end": 2867
            },
            "accessibility": null,
            "static": false,
            "start": 2855,
            "end": 2868
          }
        ],
        "start": 2829,
        "end": 2870
      },
      "declare": false,
      "start": 2811,
      "end": 2870
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2882,
        "end": 2889
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
              "start": 2896,
              "end": 2900
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 2902,
                  "end": 2910
                },
                "start": 2902,
                "end": 2910
              },
              "start": 2900,
              "end": 2910
            },
            "accessibility": null,
            "static": false,
            "start": 2896,
            "end": 2911
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null,
              "start": 2916,
              "end": 2922
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2924,
                "end": 2930
              },
              "start": 2922,
              "end": 2930
            },
            "accessibility": null,
            "static": false,
            "start": 2916,
            "end": 2931
          }
        ],
        "start": 2890,
        "end": 2933
      },
      "declare": false,
      "start": 2872,
      "end": 2933
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2940,
        "end": 2946
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Square2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2949,
              "end": 2956
            },
            "typeArguments": null,
            "start": 2949,
            "end": 2956
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2959,
              "end": 2966
            },
            "typeArguments": null,
            "start": 2959,
            "end": 2966
          }
        ],
        "start": 2949,
        "end": 2966
      },
      "declare": false,
      "start": 2935,
      "end": 2967
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 2978,
        "end": 2989
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2994,
                "end": 3000
              },
              "typeArguments": null,
              "start": 2994,
              "end": 3000
            },
            "start": 2992,
            "end": 3000
          },
          "start": 2990,
          "end": 3000
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3006,
                "end": 3012
              },
              "typeArguments": null,
              "start": 3006,
              "end": 3012
            },
            "start": 3004,
            "end": 3012
          },
          "start": 3002,
          "end": 3012
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 3015,
          "end": 3021
        },
        "start": 3013,
        "end": 3021
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3036,
                "end": 3038
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 3039,
                "end": 3043
              },
              "optional": false,
              "computed": false,
              "start": 3036,
              "end": 3043
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 3060,
                  "end": 3068
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 3089,
                      "end": 3092
                    },
                    "start": 3082,
                    "end": 3093
                  }
                ],
                "start": 3055,
                "end": 3093
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 3107,
                  "end": 3115
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3137,
                        "end": 3139
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3140,
                        "end": 3144
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3137,
                      "end": 3144
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "square",
                          "raw": "\"square\"",
                          "start": 3169,
                          "end": 3177
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "2",
                              "raw": "\"2\"",
                              "start": 3206,
                              "end": 3209
                            },
                            "start": 3199,
                            "end": 3210
                          }
                        ],
                        "start": 3164,
                        "end": 3210
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "circle",
                          "raw": "\"circle\"",
                          "start": 3232,
                          "end": 3240
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "3",
                              "raw": "\"3\"",
                              "start": 3269,
                              "end": 3272
                            },
                            "start": 3262,
                            "end": 3273
                          }
                        ],
                        "start": 3227,
                        "end": 3273
                      },
                      {
                        "type": "SwitchCase",
                        "test": null,
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "never",
                              "raw": "\"never\"",
                              "start": 3326,
                              "end": 3333
                            },
                            "start": 3319,
                            "end": 3334
                          }
                        ],
                        "start": 3290,
                        "end": 3334
                      }
                    ],
                    "start": 3129,
                    "end": 3348
                  }
                ],
                "start": 3102,
                "end": 3348
              }
            ],
            "start": 3028,
            "end": 3354
          }
        ],
        "start": 3022,
        "end": 3356
      },
      "expression": false,
      "start": 2969,
      "end": 3356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withoutDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 3367,
        "end": 3381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3386,
                "end": 3392
              },
              "typeArguments": null,
              "start": 3386,
              "end": 3392
            },
            "start": 3384,
            "end": 3392
          },
          "start": 3382,
          "end": 3392
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3398,
                "end": 3404
              },
              "typeArguments": null,
              "start": 3398,
              "end": 3404
            },
            "start": 3396,
            "end": 3404
          },
          "start": 3394,
          "end": 3404
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 3407,
          "end": 3413
        },
        "start": 3405,
        "end": 3413
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3428,
                "end": 3430
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 3431,
                "end": 3435
              },
              "optional": false,
              "computed": false,
              "start": 3428,
              "end": 3435
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 3452,
                  "end": 3460
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 3481,
                      "end": 3484
                    },
                    "start": 3474,
                    "end": 3485
                  }
                ],
                "start": 3447,
                "end": 3485
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 3499,
                  "end": 3507
                },
                "consequent": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3529,
                        "end": 3531
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3532,
                        "end": 3536
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3529,
                      "end": 3536
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "square",
                          "raw": "\"square\"",
                          "start": 3561,
                          "end": 3569
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "2",
                              "raw": "\"2\"",
                              "start": 3598,
                              "end": 3601
                            },
                            "start": 3591,
                            "end": 3602
                          }
                        ],
                        "start": 3556,
                        "end": 3602
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "Literal",
                          "value": "circle",
                          "raw": "\"circle\"",
                          "start": 3624,
                          "end": 3632
                        },
                        "consequent": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "3",
                              "raw": "\"3\"",
                              "start": 3661,
                              "end": 3664
                            },
                            "start": 3654,
                            "end": 3665
                          }
                        ],
                        "start": 3619,
                        "end": 3665
                      }
                    ],
                    "start": 3521,
                    "end": 3679
                  }
                ],
                "start": 3494,
                "end": 3679
              }
            ],
            "start": 3420,
            "end": 3685
          }
        ],
        "start": 3414,
        "end": 3687
      },
      "expression": false,
      "start": 3358,
      "end": 3687
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3720,
        "end": 3725
      },
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3733,
                    "end": 3734
                  },
                  "start": 3733,
                  "end": 3734
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3737,
                    "end": 3738
                  },
                  "start": 3737,
                  "end": 3738
                }
              ],
              "start": 3733,
              "end": 3738
            },
            "start": 3731,
            "end": 3738
          },
          "start": 3726,
          "end": 3738
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3753,
                      "end": 3759
                    },
                    "start": 3751,
                    "end": 3759
                  },
                  "start": 3750,
                  "end": 3759
                },
                "init": null,
                "definite": false,
                "start": 3750,
                "end": 3759
              }
            ],
            "declare": false,
            "start": 3746,
            "end": 3760
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 3773,
              "end": 3778
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3795,
                  "end": 3796
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3798,
                        "end": 3799
                      },
                      "right": {
                        "type": "Literal",
                        "value": "one",
                        "raw": "\"one\"",
                        "start": 3802,
                        "end": 3807
                      },
                      "start": 3798,
                      "end": 3807
                    },
                    "directive": null,
                    "start": 3798,
                    "end": 3808
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3809,
                    "end": 3815
                  }
                ],
                "start": 3790,
                "end": 3815
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3829,
                  "end": 3830
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3832,
                        "end": 3833
                      },
                      "right": {
                        "type": "Literal",
                        "value": "two",
                        "raw": "\"two\"",
                        "start": 3836,
                        "end": 3841
                      },
                      "start": 3832,
                      "end": 3841
                    },
                    "directive": null,
                    "start": 3832,
                    "end": 3842
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3843,
                    "end": 3849
                  }
                ],
                "start": 3824,
                "end": 3849
              }
            ],
            "start": 3765,
            "end": 3855
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3867,
              "end": 3868
            },
            "start": 3860,
            "end": 3869
          }
        ],
        "start": 3740,
        "end": 3871
      },
      "expression": false,
      "start": 3711,
      "end": 3871
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 3900,
        "end": 3906
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DOG",
              "optional": false,
              "typeAnnotation": null,
              "start": 3909,
              "end": 3912
            },
            "initializer": null,
            "computed": false,
            "start": 3909,
            "end": 3912
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "typeAnnotation": null,
              "start": 3914,
              "end": 3917
            },
            "initializer": null,
            "computed": false,
            "start": 3914,
            "end": 3917
          }
        ],
        "start": 3907,
        "end": 3919
      },
      "const": false,
      "declare": false,
      "start": 3895,
      "end": 3919
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
            "name": "zoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3942,
                          "end": 3948
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Animal",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3950,
                              "end": 3956
                            },
                            "typeArguments": null,
                            "start": 3950,
                            "end": 3956
                          },
                          "start": 3948,
                          "end": 3956
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3942,
                        "end": 3956
                      }
                    ],
                    "start": 3940,
                    "end": 3958
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 3961,
                    "end": 3970
                  }
                ],
                "start": 3940,
                "end": 3970
              },
              "start": 3938,
              "end": 3970
            },
            "start": 3935,
            "end": 3970
          },
          "init": null,
          "definite": false,
          "start": 3935,
          "end": 3970
        }
      ],
      "declare": true,
      "start": 3921,
      "end": 3971
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "expression",
        "optional": false,
        "typeAnnotation": null,
        "start": 3982,
        "end": 3992
      },
      "generator": false,
      "async": false,
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
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null,
            "start": 3996,
            "end": 4002
          },
          "typeArguments": null,
          "start": 3996,
          "end": 4002
        },
        "start": 3994,
        "end": 4002
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "LogicalExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4017,
                    "end": 4020
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "animal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4022,
                    "end": 4028
                  },
                  "optional": true,
                  "computed": false,
                  "start": 4017,
                  "end": 4028
                },
                "start": 4017,
                "end": 4028
              },
              "operator": "??",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Animal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4032,
                  "end": 4038
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DOG",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4039,
                  "end": 4042
                },
                "optional": false,
                "computed": false,
                "start": 4032,
                "end": 4042
              },
              "start": 4017,
              "end": 4042
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4059,
                    "end": 4065
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DOG",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4066,
                    "end": 4069
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4059,
                  "end": 4069
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Animal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4078,
                        "end": 4084
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DOG",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4085,
                        "end": 4088
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4078,
                      "end": 4088
                    },
                    "start": 4071,
                    "end": 4088
                  }
                ],
                "start": 4054,
                "end": 4088
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4102,
                    "end": 4108
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4109,
                    "end": 4112
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4102,
                  "end": 4112
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Animal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4121,
                        "end": 4127
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CAT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4128,
                        "end": 4131
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4121,
                      "end": 4131
                    },
                    "start": 4114,
                    "end": 4131
                  }
                ],
                "start": 4097,
                "end": 4131
              }
            ],
            "start": 4009,
            "end": 4137
          }
        ],
        "start": 4003,
        "end": 4139
      },
      "expression": false,
      "start": 3973,
      "end": 4139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 4172,
        "end": 4175
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4195,
                          "end": 4201
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 4204,
                          "end": 4213
                        }
                      ],
                      "start": 4195,
                      "end": 4213
                    },
                    "start": 4193,
                    "end": 4213
                  },
                  "start": 4190,
                  "end": 4213
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4216,
                  "end": 4217
                },
                "definite": false,
                "start": 4190,
                "end": 4217
              }
            ],
            "declare": false,
            "start": 4184,
            "end": 4218
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 4230,
              "end": 4234
            },
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
                        "name": "stats",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4252,
                        "end": 4257
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4260,
                        "end": 4263
                      },
                      "definite": false,
                      "start": 4252,
                      "end": 4263
                    }
                  ],
                  "declare": false,
                  "start": 4246,
                  "end": 4264
                },
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stats",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4281,
                    "end": 4286
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4307,
                        "end": 4308
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 4310,
                          "end": 4316
                        }
                      ],
                      "start": 4302,
                      "end": 4316
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 4334,
                        "end": 4335
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 4337,
                          "end": 4343
                        }
                      ],
                      "start": 4329,
                      "end": 4343
                    }
                  ],
                  "start": 4273,
                  "end": 4353
                }
              ],
              "start": 4236,
              "end": 4359
            },
            "start": 4223,
            "end": 4359
          }
        ],
        "start": 4178,
        "end": 4361
      },
      "expression": false,
      "start": 4163,
      "end": 4361
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 4390,
        "end": 4391
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 4400,
              "end": 4401
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4403,
                "end": 4409
              },
              "start": 4401,
              "end": 4409
            },
            "accessibility": null,
            "static": false,
            "start": 4400,
            "end": 4410
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 4415,
              "end": 4416
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4418,
                "end": 4424
              },
              "start": 4416,
              "end": 4424
            },
            "accessibility": null,
            "static": false,
            "start": 4415,
            "end": 4424
          }
        ],
        "start": 4394,
        "end": 4426
      },
      "declare": false,
      "start": 4385,
      "end": 4427
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 4433,
        "end": 4434
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 4443,
                "end": 4444
              },
              "typeArguments": null,
              "start": 4443,
              "end": 4444
            },
            "start": 4437,
            "end": 4444
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "c",
              "raw": "'c'",
              "start": 4447,
              "end": 4450
            },
            "start": 4447,
            "end": 4450
          }
        ],
        "start": 4437,
        "end": 4450
      },
      "declare": false,
      "start": 4428,
      "end": 4451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null,
        "start": 4461,
        "end": 4463
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 4467,
                "end": 4468
              },
              "typeArguments": null,
              "start": 4467,
              "end": 4468
            },
            "start": 4465,
            "end": 4468
          },
          "start": 4464,
          "end": 4468
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4473,
                "end": 4474
              },
              "typeArguments": null,
              "start": 4473,
              "end": 4474
            },
            "start": 4471,
            "end": 4474
          },
          "start": 4470,
          "end": 4474
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 4489,
              "end": 4490
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 4507,
                  "end": 4510
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4524,
                        "end": 4525
                      },
                      "right": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 4528,
                        "end": 4531
                      },
                      "start": 4524,
                      "end": 4531
                    },
                    "directive": null,
                    "start": 4524,
                    "end": 4532
                  }
                ],
                "start": 4502,
                "end": 4532
              }
            ],
            "start": 4482,
            "end": 4538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 4543,
                "end": 4544
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 4549,
                "end": 4552
              },
              "start": 4543,
              "end": 4552
            },
            "directive": null,
            "start": 4543,
            "end": 4553
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 4575,
                "end": 4576
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 4577,
                "end": 4578
              },
              "optional": false,
              "computed": true,
              "start": 4575,
              "end": 4579
            },
            "start": 4568,
            "end": 4580
          }
        ],
        "start": 4476,
        "end": 4582
      },
      "expression": false,
      "start": 4452,
      "end": 4582
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 4610,
        "end": 4611
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4616,
                  "end": 4620
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "\"abc\"",
                      "start": 4622,
                      "end": 4627
                    },
                    "start": 4622,
                    "end": 4627
                  },
                  "start": 4620,
                  "end": 4627
                },
                "accessibility": null,
                "static": false,
                "start": 4616,
                "end": 4627
              }
            ],
            "start": 4614,
            "end": 4629
          },
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4634,
                  "end": 4638
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "def",
                      "raw": "\"def\"",
                      "start": 4640,
                      "end": 4645
                    },
                    "start": 4640,
                    "end": 4645
                  },
                  "start": 4638,
                  "end": 4645
                },
                "accessibility": null,
                "static": false,
                "start": 4634,
                "end": 4645
              }
            ],
            "start": 4632,
            "end": 4647
          }
        ],
        "start": 4614,
        "end": 4647
      },
      "declare": false,
      "start": 4605,
      "end": 4648
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f35431",
        "optional": false,
        "typeAnnotation": null,
        "start": 4659,
        "end": 4665
      },
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
                "start": 4669,
                "end": 4670
              },
              "typeArguments": null,
              "start": 4669,
              "end": 4670
            },
            "start": 4667,
            "end": 4670
          },
          "start": 4666,
          "end": 4670
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 4684,
                "end": 4685
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 4686,
                "end": 4690
              },
              "optional": false,
              "computed": false,
              "start": 4684,
              "end": 4690
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 4703,
                  "end": 4708
                },
                "consequent": [],
                "start": 4698,
                "end": 4709
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "def",
                  "raw": "\"def\"",
                  "start": 4719,
                  "end": 4724
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 4726,
                    "end": 4733
                  }
                ],
                "start": 4714,
                "end": 4733
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4753,
                          "end": 4754
                        },
                        "start": 4753,
                        "end": 4755
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4756,
                        "end": 4760
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4753,
                      "end": 4760
                    },
                    "directive": null,
                    "start": 4753,
                    "end": 4761
                  }
                ],
                "start": 4738,
                "end": 4761
              }
            ],
            "start": 4676,
            "end": 4783
          }
        ],
        "start": 4672,
        "end": 4785
      },
      "expression": false,
      "start": 4650,
      "end": 4785
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4785
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 36,
    "end": 38,
    "range": [
      36,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 58,
    "end": 64,
    "range": [
      58,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 83,
    "end": 87,
    "range": [
      83,
      87
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 115,
    "end": 119,
    "range": [
      115,
      119
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 123,
    "end": 129,
    "range": [
      123,
      129
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 182,
    "end": 186,
    "range": [
      182,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 197,
    "end": 202,
    "range": [
      197,
      202
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 215,
    "end": 223,
    "range": [
      215,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 224,
    "end": 226,
    "range": [
      224,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 250,
    "end": 256,
    "range": [
      250,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 262,
    "end": 268,
    "range": [
      262,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 283,
    "end": 287,
    "range": [
      283,
      287
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 295,
    "end": 297,
    "range": [
      295,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 299,
    "end": 304,
    "range": [
      299,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 314,
    "end": 318,
    "range": [
      314,
      318
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 326,
    "end": 328,
    "range": [
      326,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 330,
    "end": 335,
    "range": [
      330,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 377,
    "end": 385,
    "range": [
      377,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 386,
    "end": 388,
    "range": [
      386,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 426,
    "end": 430,
    "range": [
      426,
      430
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 434,
    "end": 440,
    "range": [
      434,
      440
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 441,
    "end": 443,
    "range": [
      441,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 453,
    "end": 457,
    "range": [
      453,
      457
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 461,
    "end": 467,
    "range": [
      461,
      467
    ]
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 468,
    "end": 470,
    "range": [
      468,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 546,
    "end": 553,
    "range": [
      546,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 555,
    "end": 560,
    "range": [
      555,
      560
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 561,
    "end": 564,
    "range": [
      561,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 565,
    "end": 570,
    "range": [
      565,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "String",
    "value": "\"Bad input\"",
    "start": 571,
    "end": 582,
    "range": [
      571,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 616,
    "end": 620,
    "range": [
      616,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 633,
    "end": 641,
    "range": [
      633,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 651,
    "end": 657,
    "range": [
      651,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 664,
    "end": 670,
    "range": [
      664,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 685,
    "end": 689,
    "range": [
      685,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 695,
    "end": 701,
    "range": [
      695,
      701
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 712,
    "end": 716,
    "range": [
      712,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 722,
    "end": 728,
    "range": [
      722,
      728
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 740,
    "end": 748,
    "range": [
      740,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 758,
    "end": 764,
    "range": [
      758,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 771,
    "end": 773,
    "range": [
      771,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 776,
    "end": 780,
    "range": [
      776,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 790,
    "end": 796,
    "range": [
      790,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 804,
    "end": 808,
    "range": [
      804,
      808
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 817,
    "end": 823,
    "range": [
      817,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 842,
    "end": 846,
    "range": [
      842,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "A",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 852,
    "end": 858,
    "range": [
      852,
      858
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 873,
    "end": 877,
    "range": [
      873,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 883,
    "end": 889,
    "range": [
      883,
      889
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 927,
    "end": 936,
    "range": [
      927,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "Square",
    "start": 937,
    "end": 943,
    "range": [
      937,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 946,
    "end": 950,
    "range": [
      946,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 952,
    "end": 960,
    "range": [
      952,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 962,
    "end": 966,
    "range": [
      962,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 968,
    "end": 974,
    "range": [
      968,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
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
    "type": "Keyword",
    "value": "interface",
    "start": 979,
    "end": 988,
    "range": [
      979,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "Rectangle",
    "start": 989,
    "end": 998,
    "range": [
      989,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 1007,
    "end": 1018,
    "range": [
      1007,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 1020,
    "end": 1025,
    "range": [
      1020,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1027,
    "end": 1033,
    "range": [
      1027,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 1035,
    "end": 1041,
    "range": [
      1035,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1043,
    "end": 1049,
    "range": [
      1043,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1054,
    "end": 1063,
    "range": [
      1054,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 1064,
    "end": 1070,
    "range": [
      1064,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1073,
    "end": 1077,
    "range": [
      1073,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 1079,
    "end": 1087,
    "range": [
      1079,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1089,
    "end": 1095,
    "range": [
      1089,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1097,
    "end": 1103,
    "range": [
      1097,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1108,
    "end": 1117,
    "range": [
      1108,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "Triangle",
    "start": 1118,
    "end": 1126,
    "range": [
      1118,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1129,
    "end": 1133,
    "range": [
      1129,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "String",
    "value": "\"triangle\"",
    "start": 1135,
    "end": 1145,
    "range": [
      1135,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "side",
    "start": 1147,
    "end": 1151,
    "range": [
      1147,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1153,
    "end": 1159,
    "range": [
      1153,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1164,
    "end": 1168,
    "range": [
      1164,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1169,
    "end": 1174,
    "range": [
      1169,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "Square",
    "start": 1177,
    "end": 1183,
    "range": [
      1177,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "Rectangle",
    "start": 1186,
    "end": 1195,
    "range": [
      1186,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 1198,
    "end": 1204,
    "range": [
      1198,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "Triangle",
    "start": 1207,
    "end": 1215,
    "range": [
      1207,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1218,
    "end": 1226,
    "range": [
      1218,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1227,
    "end": 1231,
    "range": [
      1227,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1235,
    "end": 1240,
    "range": [
      1235,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1243,
    "end": 1249,
    "range": [
      1243,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1256,
    "end": 1259,
    "range": [
      1256,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1260,
    "end": 1264,
    "range": [
      1260,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1270,
    "end": 1276,
    "range": [
      1270,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1280,
    "end": 1284,
    "range": [
      1280,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1296,
    "end": 1300,
    "range": [
      1296,
      1300
    ]
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 1301,
    "end": 1309,
    "range": [
      1301,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1311,
    "end": 1315,
    "range": [
      1311,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1320,
    "end": 1324,
    "range": [
      1320,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1329,
    "end": 1333,
    "range": [
      1329,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1335,
    "end": 1340,
    "range": [
      1335,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1350,
    "end": 1354,
    "range": [
      1350,
      1354
    ]
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 1355,
    "end": 1366,
    "range": [
      1355,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1368,
    "end": 1372,
    "range": [
      1368,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 1377,
    "end": 1382,
    "range": [
      1377,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 1387,
    "end": 1393,
    "range": [
      1387,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1395,
    "end": 1400,
    "range": [
      1395,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1410,
    "end": 1414,
    "range": [
      1410,
      1414
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 1415,
    "end": 1423,
    "range": [
      1415,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1425,
    "end": 1429,
    "range": [
      1425,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1432,
    "end": 1436,
    "range": [
      1432,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 1437,
    "end": 1439,
    "range": [
      1437,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1444,
    "end": 1450,
    "range": [
      1444,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1455,
    "end": 1461,
    "range": [
      1455,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1463,
    "end": 1468,
    "range": [
      1463,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1478,
    "end": 1482,
    "range": [
      1478,
      1482
    ]
  },
  {
    "type": "String",
    "value": "\"triangle\"",
    "start": 1483,
    "end": 1493,
    "range": [
      1483,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1495,
    "end": 1499,
    "range": [
      1495,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1502,
    "end": 1506,
    "range": [
      1502,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "sqrt",
    "start": 1507,
    "end": 1511,
    "range": [
      1507,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "side",
    "start": 1523,
    "end": 1527,
    "range": [
      1523,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "side",
    "start": 1532,
    "end": 1536,
    "range": [
      1532,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1538,
    "end": 1543,
    "range": [
      1538,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1555,
    "end": 1561,
    "range": [
      1555,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1562,
    "end": 1566,
    "range": [
      1562,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1571,
    "end": 1579,
    "range": [
      1571,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "areaWrapped",
    "start": 1580,
    "end": 1591,
    "range": [
      1580,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1595,
    "end": 1600,
    "range": [
      1595,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1603,
    "end": 1609,
    "range": [
      1603,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1616,
    "end": 1619,
    "range": [
      1616,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1620,
    "end": 1624,
    "range": [
      1620,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1630,
    "end": 1634,
    "range": [
      1630,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1641,
    "end": 1643,
    "range": [
      1641,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1654,
    "end": 1660,
    "range": [
      1654,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1664,
    "end": 1668,
    "range": [
      1664,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1684,
    "end": 1688,
    "range": [
      1684,
      1688
    ]
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 1689,
    "end": 1697,
    "range": [
      1689,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1699,
    "end": 1705,
    "range": [
      1699,
      1705
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1708,
    "end": 1712,
    "range": [
      1708,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1717,
    "end": 1721,
    "range": [
      1717,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1735,
    "end": 1739,
    "range": [
      1735,
      1739
    ]
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 1740,
    "end": 1751,
    "range": [
      1740,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1753,
    "end": 1759,
    "range": [
      1753,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 1762,
    "end": 1767,
    "range": [
      1762,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 1772,
    "end": 1778,
    "range": [
      1772,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1792,
    "end": 1796,
    "range": [
      1792,
      1796
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 1797,
    "end": 1805,
    "range": [
      1797,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1807,
    "end": 1813,
    "range": [
      1807,
      1813
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1814,
    "end": 1818,
    "range": [
      1814,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "PI",
    "start": 1819,
    "end": 1821,
    "range": [
      1819,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1826,
    "end": 1832,
    "range": [
      1826,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 1837,
    "end": 1843,
    "range": [
      1837,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1857,
    "end": 1861,
    "range": [
      1857,
      1861
    ]
  },
  {
    "type": "String",
    "value": "\"triangle\"",
    "start": 1862,
    "end": 1872,
    "range": [
      1862,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1874,
    "end": 1880,
    "range": [
      1874,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1881,
    "end": 1885,
    "range": [
      1881,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "sqrt",
    "start": 1886,
    "end": 1890,
    "range": [
      1886,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "side",
    "start": 1902,
    "end": 1906,
    "range": [
      1902,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "side",
    "start": 1911,
    "end": 1915,
    "range": [
      1911,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Keyword",
    "value": "return",
    "start": 1941,
    "end": 1947,
    "range": [
      1941,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "area",
    "start": 1948,
    "end": 1952,
    "range": [
      1948,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1979,
    "end": 1983,
    "range": [
      1979,
      1983
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 1984,
    "end": 1990,
    "range": [
      1984,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2003,
    "end": 2011,
    "range": [
      2003,
      2011
    ]
  },
  {
    "type": "Identifier",
    "value": "thisGivesError",
    "start": 2012,
    "end": 2026,
    "range": [
      2012,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2030,
    "end": 2036,
    "range": [
      2030,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2039,
    "end": 2045,
    "range": [
      2039,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2049,
    "end": 2052,
    "range": [
      2049,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2056,
    "end": 2062,
    "range": [
      2056,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2065,
    "end": 2071,
    "range": [
      2065,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2080,
    "end": 2084,
    "range": [
      2080,
      2084
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2085,
    "end": 2091,
    "range": [
      2085,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2095,
    "end": 2096,
    "range": [
      2095,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "String",
    "value": "\"it was A\"",
    "start": 2099,
    "end": 2109,
    "range": [
      2099,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2111,
    "end": 2116,
    "range": [
      2111,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2120,
    "end": 2124,
    "range": [
      2120,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2125,
    "end": 2131,
    "range": [
      2125,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "String",
    "value": "\"it was B\"",
    "start": 2139,
    "end": 2149,
    "range": [
      2139,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2151,
    "end": 2156,
    "range": [
      2151,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2162,
    "end": 2168,
    "range": [
      2162,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2175,
    "end": 2183,
    "range": [
      2175,
      2183
    ]
  },
  {
    "type": "Identifier",
    "value": "good1",
    "start": 2184,
    "end": 2189,
    "range": [
      2184,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2193,
    "end": 2199,
    "range": [
      2193,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2202,
    "end": 2208,
    "range": [
      2202,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2212,
    "end": 2215,
    "range": [
      2212,
      2215
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2219,
    "end": 2225,
    "range": [
      2219,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2228,
    "end": 2234,
    "range": [
      2228,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
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
    "value": "{",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2243,
    "end": 2247,
    "range": [
      2243,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2248,
    "end": 2254,
    "range": [
      2248,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "String",
    "value": "\"it was A\"",
    "start": 2262,
    "end": 2272,
    "range": [
      2262,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2274,
    "end": 2279,
    "range": [
      2274,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2283,
    "end": 2287,
    "range": [
      2283,
      2287
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2288,
    "end": 2294,
    "range": [
      2288,
      2294
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "String",
    "value": "\"it was B\"",
    "start": 2302,
    "end": 2312,
    "range": [
      2302,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2314,
    "end": 2319,
    "range": [
      2314,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 2323,
    "end": 2330,
    "range": [
      2323,
      2330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2330,
    "end": 2331,
    "range": [
      2330,
      2331
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "String",
    "value": "\"it was something else\"",
    "start": 2336,
    "end": 2359,
    "range": [
      2336,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2361,
    "end": 2366,
    "range": [
      2361,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2372,
    "end": 2378,
    "range": [
      2372,
      2378
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2385,
    "end": 2393,
    "range": [
      2385,
      2393
    ]
  },
  {
    "type": "Identifier",
    "value": "good2",
    "start": 2394,
    "end": 2399,
    "range": [
      2394,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2403,
    "end": 2409,
    "range": [
      2403,
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
    "value": "string",
    "start": 2412,
    "end": 2418,
    "range": [
      2412,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2422,
    "end": 2428,
    "range": [
      2422,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2437,
    "end": 2441,
    "range": [
      2437,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2442,
    "end": 2448,
    "range": [
      2442,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2452,
    "end": 2458,
    "range": [
      2452,
      2458
    ]
  },
  {
    "type": "String",
    "value": "\"it was A\"",
    "start": 2459,
    "end": 2469,
    "range": [
      2459,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2473,
    "end": 2477,
    "range": [
      2473,
      2477
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 2478,
    "end": 2484,
    "range": [
      2478,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2488,
    "end": 2494,
    "range": [
      2488,
      2494
    ]
  },
  {
    "type": "String",
    "value": "\"it was B\"",
    "start": 2495,
    "end": 2505,
    "range": [
      2495,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
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
    "type": "Keyword",
    "value": "enum",
    "start": 2535,
    "end": 2539,
    "range": [
      2535,
      2539
    ]
  },
  {
    "type": "Identifier",
    "value": "Level",
    "start": 2540,
    "end": 2545,
    "range": [
      2540,
      2545
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 2550,
    "end": 2553,
    "range": [
      2550,
      2553
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2553,
    "end": 2554,
    "range": [
      2553,
      2554
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2557,
    "end": 2560,
    "range": [
      2557,
      2560
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2560,
    "end": 2561,
    "range": [
      2560,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2565,
    "end": 2570,
    "range": [
      2565,
      2570
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomethingWithLevel",
    "start": 2571,
    "end": 2591,
    "range": [
      2571,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 2595,
    "end": 2600,
    "range": [
      2595,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Identifier",
    "value": "Level",
    "start": 2602,
    "end": 2607,
    "range": [
      2602,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2609,
    "end": 2611,
    "range": [
      2609,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2612,
    "end": 2613,
    "range": [
      2612,
      2613
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2616,
    "end": 2619,
    "range": [
      2616,
      2619
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2620,
    "end": 2624,
    "range": [
      2620,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "Level",
    "start": 2626,
    "end": 2631,
    "range": [
      2626,
      2631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2635,
    "end": 2641,
    "range": [
      2635,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 2643,
    "end": 2648,
    "range": [
      2643,
      2648
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2648,
    "end": 2649,
    "range": [
      2648,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2656,
    "end": 2660,
    "range": [
      2656,
      2660
    ]
  },
  {
    "type": "Identifier",
    "value": "Level",
    "start": 2661,
    "end": 2666,
    "range": [
      2661,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 2667,
    "end": 2670,
    "range": [
      2667,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2678,
    "end": 2682,
    "range": [
      2678,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "Level",
    "start": 2685,
    "end": 2690,
    "range": [
      2685,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2691,
    "end": 2694,
    "range": [
      2691,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2702,
    "end": 2707,
    "range": [
      2702,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2713,
    "end": 2717,
    "range": [
      2713,
      2717
    ]
  },
  {
    "type": "Identifier",
    "value": "Level",
    "start": 2718,
    "end": 2723,
    "range": [
      2718,
      2723
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2723,
    "end": 2724,
    "range": [
      2723,
      2724
    ]
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 2724,
    "end": 2727,
    "range": [
      2724,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2735,
    "end": 2739,
    "range": [
      2735,
      2739
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Identifier",
    "value": "Level",
    "start": 2742,
    "end": 2747,
    "range": [
      2742,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Identifier",
    "value": "One",
    "start": 2748,
    "end": 2751,
    "range": [
      2748,
      2751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2759,
    "end": 2764,
    "range": [
      2759,
      2764
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2772,
    "end": 2778,
    "range": [
      2772,
      2778
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2779,
    "end": 2783,
    "range": [
      2779,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2811,
    "end": 2820,
    "range": [
      2811,
      2820
    ]
  },
  {
    "type": "Identifier",
    "value": "Square2",
    "start": 2821,
    "end": 2828,
    "range": [
      2821,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2835,
    "end": 2839,
    "range": [
      2835,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 2841,
    "end": 2849,
    "range": [
      2841,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 2855,
    "end": 2859,
    "range": [
      2855,
      2859
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2861,
    "end": 2867,
    "range": [
      2861,
      2867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2867,
    "end": 2868,
    "range": [
      2867,
      2868
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2872,
    "end": 2881,
    "range": [
      2872,
      2881
    ]
  },
  {
    "type": "Identifier",
    "value": "Circle2",
    "start": 2882,
    "end": 2889,
    "range": [
      2882,
      2889
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2896,
    "end": 2900,
    "range": [
      2896,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 2902,
    "end": 2910,
    "range": [
      2902,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 2916,
    "end": 2922,
    "range": [
      2916,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2924,
    "end": 2930,
    "range": [
      2924,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2932,
    "end": 2933,
    "range": [
      2932,
      2933
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2935,
    "end": 2939,
    "range": [
      2935,
      2939
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape2",
    "start": 2940,
    "end": 2946,
    "range": [
      2940,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Identifier",
    "value": "Square2",
    "start": 2949,
    "end": 2956,
    "range": [
      2949,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Identifier",
    "value": "Circle2",
    "start": 2959,
    "end": 2966,
    "range": [
      2959,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2966,
    "end": 2967,
    "range": [
      2966,
      2967
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2969,
    "end": 2977,
    "range": [
      2969,
      2977
    ]
  },
  {
    "type": "Identifier",
    "value": "withDefault",
    "start": 2978,
    "end": 2989,
    "range": [
      2978,
      2989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2989,
    "end": 2990,
    "range": [
      2989,
      2990
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2990,
    "end": 2992,
    "range": [
      2990,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape2",
    "start": 2994,
    "end": 3000,
    "range": [
      2994,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3002,
    "end": 3004,
    "range": [
      3002,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape2",
    "start": 3006,
    "end": 3012,
    "range": [
      3006,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3012,
    "end": 3013,
    "range": [
      3012,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3015,
    "end": 3021,
    "range": [
      3015,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3022,
    "end": 3023,
    "range": [
      3022,
      3023
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3028,
    "end": 3034,
    "range": [
      3028,
      3034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3035,
    "end": 3036,
    "range": [
      3035,
      3036
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3036,
    "end": 3038,
    "range": [
      3036,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3039,
    "end": 3043,
    "range": [
      3039,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3055,
    "end": 3059,
    "range": [
      3055,
      3059
    ]
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 3060,
    "end": 3068,
    "range": [
      3060,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3082,
    "end": 3088,
    "range": [
      3082,
      3088
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 3089,
    "end": 3092,
    "range": [
      3089,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3102,
    "end": 3106,
    "range": [
      3102,
      3106
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 3107,
    "end": 3115,
    "range": [
      3107,
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
    "type": "Keyword",
    "value": "switch",
    "start": 3129,
    "end": 3135,
    "range": [
      3129,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3137,
    "end": 3139,
    "range": [
      3137,
      3139
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3140,
    "end": 3144,
    "range": [
      3140,
      3144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3164,
    "end": 3168,
    "range": [
      3164,
      3168
    ]
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 3169,
    "end": 3177,
    "range": [
      3169,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3199,
    "end": 3205,
    "range": [
      3199,
      3205
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 3206,
    "end": 3209,
    "range": [
      3206,
      3209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3209,
    "end": 3210,
    "range": [
      3209,
      3210
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3227,
    "end": 3231,
    "range": [
      3227,
      3231
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 3232,
    "end": 3240,
    "range": [
      3232,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3262,
    "end": 3268,
    "range": [
      3262,
      3268
    ]
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 3269,
    "end": 3272,
    "range": [
      3269,
      3272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 3290,
    "end": 3297,
    "range": [
      3290,
      3297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3319,
    "end": 3325,
    "range": [
      3319,
      3325
    ]
  },
  {
    "type": "String",
    "value": "\"never\"",
    "start": 3326,
    "end": 3333,
    "range": [
      3326,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3333,
    "end": 3334,
    "range": [
      3333,
      3334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3358,
    "end": 3366,
    "range": [
      3358,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "withoutDefault",
    "start": 3367,
    "end": 3381,
    "range": [
      3367,
      3381
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3381,
    "end": 3382,
    "range": [
      3381,
      3382
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3382,
    "end": 3384,
    "range": [
      3382,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape2",
    "start": 3386,
    "end": 3392,
    "range": [
      3386,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3394,
    "end": 3396,
    "range": [
      3394,
      3396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Identifier",
    "value": "Shape2",
    "start": 3398,
    "end": 3404,
    "range": [
      3398,
      3404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3404,
    "end": 3405,
    "range": [
      3404,
      3405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3405,
    "end": 3406,
    "range": [
      3405,
      3406
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3407,
    "end": 3413,
    "range": [
      3407,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3420,
    "end": 3426,
    "range": [
      3420,
      3426
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3427,
    "end": 3428,
    "range": [
      3427,
      3428
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3428,
    "end": 3430,
    "range": [
      3428,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3431,
    "end": 3435,
    "range": [
      3431,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3447,
    "end": 3451,
    "range": [
      3447,
      3451
    ]
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 3452,
    "end": 3460,
    "range": [
      3452,
      3460
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3474,
    "end": 3480,
    "range": [
      3474,
      3480
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 3481,
    "end": 3484,
    "range": [
      3481,
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
    "type": "Keyword",
    "value": "case",
    "start": 3494,
    "end": 3498,
    "range": [
      3494,
      3498
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 3499,
    "end": 3507,
    "range": [
      3499,
      3507
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3521,
    "end": 3527,
    "range": [
      3521,
      3527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3528,
    "end": 3529,
    "range": [
      3528,
      3529
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3529,
    "end": 3531,
    "range": [
      3529,
      3531
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3532,
    "end": 3536,
    "range": [
      3532,
      3536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3536,
    "end": 3537,
    "range": [
      3536,
      3537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3538,
    "end": 3539,
    "range": [
      3538,
      3539
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3556,
    "end": 3560,
    "range": [
      3556,
      3560
    ]
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 3561,
    "end": 3569,
    "range": [
      3561,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3591,
    "end": 3597,
    "range": [
      3591,
      3597
    ]
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 3598,
    "end": 3601,
    "range": [
      3598,
      3601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3601,
    "end": 3602,
    "range": [
      3601,
      3602
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3619,
    "end": 3623,
    "range": [
      3619,
      3623
    ]
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 3624,
    "end": 3632,
    "range": [
      3624,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3632,
    "end": 3633,
    "range": [
      3632,
      3633
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3654,
    "end": 3660,
    "range": [
      3654,
      3660
    ]
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 3661,
    "end": 3664,
    "range": [
      3661,
      3664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3678,
    "end": 3679,
    "range": [
      3678,
      3679
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3684,
    "end": 3685,
    "range": [
      3684,
      3685
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3711,
    "end": 3719,
    "range": [
      3711,
      3719
    ]
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 3720,
    "end": 3725,
    "range": [
      3720,
      3725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3725,
    "end": 3726,
    "range": [
      3725,
      3726
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3726,
    "end": 3731,
    "range": [
      3726,
      3731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3731,
    "end": 3732,
    "range": [
      3731,
      3732
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3735,
    "end": 3736,
    "range": [
      3735,
      3736
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3738,
    "end": 3739,
    "range": [
      3738,
      3739
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3740,
    "end": 3741,
    "range": [
      3740,
      3741
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3746,
    "end": 3749,
    "range": [
      3746,
      3749
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3750,
    "end": 3751,
    "range": [
      3750,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3751,
    "end": 3752,
    "range": [
      3751,
      3752
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3753,
    "end": 3759,
    "range": [
      3753,
      3759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3759,
    "end": 3760,
    "range": [
      3759,
      3760
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3765,
    "end": 3771,
    "range": [
      3765,
      3771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3772,
    "end": 3773,
    "range": [
      3772,
      3773
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3773,
    "end": 3778,
    "range": [
      3773,
      3778
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3778,
    "end": 3779,
    "range": [
      3778,
      3779
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3780,
    "end": 3781,
    "range": [
      3780,
      3781
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3790,
    "end": 3794,
    "range": [
      3790,
      3794
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3795,
    "end": 3796,
    "range": [
      3795,
      3796
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3796,
    "end": 3797,
    "range": [
      3796,
      3797
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3798,
    "end": 3799,
    "range": [
      3798,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3800,
    "end": 3801,
    "range": [
      3800,
      3801
    ]
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 3802,
    "end": 3807,
    "range": [
      3802,
      3807
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3809,
    "end": 3814,
    "range": [
      3809,
      3814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3814,
    "end": 3815,
    "range": [
      3814,
      3815
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3824,
    "end": 3828,
    "range": [
      3824,
      3828
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3829,
    "end": 3830,
    "range": [
      3829,
      3830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3830,
    "end": 3831,
    "range": [
      3830,
      3831
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3832,
    "end": 3833,
    "range": [
      3832,
      3833
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3834,
    "end": 3835,
    "range": [
      3834,
      3835
    ]
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 3836,
    "end": 3841,
    "range": [
      3836,
      3841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3841,
    "end": 3842,
    "range": [
      3841,
      3842
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3843,
    "end": 3848,
    "range": [
      3843,
      3848
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3848,
    "end": 3849,
    "range": [
      3848,
      3849
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3854,
    "end": 3855,
    "range": [
      3854,
      3855
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3860,
    "end": 3866,
    "range": [
      3860,
      3866
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3867,
    "end": 3868,
    "range": [
      3867,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3870,
    "end": 3871,
    "range": [
      3870,
      3871
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 3895,
    "end": 3899,
    "range": [
      3895,
      3899
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 3900,
    "end": 3906,
    "range": [
      3900,
      3906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3907,
    "end": 3908,
    "range": [
      3907,
      3908
    ]
  },
  {
    "type": "Identifier",
    "value": "DOG",
    "start": 3909,
    "end": 3912,
    "range": [
      3909,
      3912
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3912,
    "end": 3913,
    "range": [
      3912,
      3913
    ]
  },
  {
    "type": "Identifier",
    "value": "CAT",
    "start": 3914,
    "end": 3917,
    "range": [
      3914,
      3917
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3918,
    "end": 3919,
    "range": [
      3918,
      3919
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3921,
    "end": 3928,
    "range": [
      3921,
      3928
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3929,
    "end": 3934,
    "range": [
      3929,
      3934
    ]
  },
  {
    "type": "Identifier",
    "value": "zoo",
    "start": 3935,
    "end": 3938,
    "range": [
      3935,
      3938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3938,
    "end": 3939,
    "range": [
      3938,
      3939
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3940,
    "end": 3941,
    "range": [
      3940,
      3941
    ]
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 3942,
    "end": 3948,
    "range": [
      3942,
      3948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3948,
    "end": 3949,
    "range": [
      3948,
      3949
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 3950,
    "end": 3956,
    "range": [
      3950,
      3956
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3957,
    "end": 3958,
    "range": [
      3957,
      3958
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3959,
    "end": 3960,
    "range": [
      3959,
      3960
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3961,
    "end": 3970,
    "range": [
      3961,
      3970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3970,
    "end": 3971,
    "range": [
      3970,
      3971
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3973,
    "end": 3981,
    "range": [
      3973,
      3981
    ]
  },
  {
    "type": "Identifier",
    "value": "expression",
    "start": 3982,
    "end": 3992,
    "range": [
      3982,
      3992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3992,
    "end": 3993,
    "range": [
      3992,
      3993
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3993,
    "end": 3994,
    "range": [
      3993,
      3994
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3994,
    "end": 3995,
    "range": [
      3994,
      3995
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 3996,
    "end": 4002,
    "range": [
      3996,
      4002
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4003,
    "end": 4004,
    "range": [
      4003,
      4004
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4009,
    "end": 4015,
    "range": [
      4009,
      4015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4016,
    "end": 4017,
    "range": [
      4016,
      4017
    ]
  },
  {
    "type": "Identifier",
    "value": "zoo",
    "start": 4017,
    "end": 4020,
    "range": [
      4017,
      4020
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 4020,
    "end": 4022,
    "range": [
      4020,
      4022
    ]
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 4022,
    "end": 4028,
    "range": [
      4022,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 4029,
    "end": 4031,
    "range": [
      4029,
      4031
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 4032,
    "end": 4038,
    "range": [
      4032,
      4038
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4038,
    "end": 4039,
    "range": [
      4038,
      4039
    ]
  },
  {
    "type": "Identifier",
    "value": "DOG",
    "start": 4039,
    "end": 4042,
    "range": [
      4039,
      4042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4042,
    "end": 4043,
    "range": [
      4042,
      4043
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4054,
    "end": 4058,
    "range": [
      4054,
      4058
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 4059,
    "end": 4065,
    "range": [
      4059,
      4065
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4065,
    "end": 4066,
    "range": [
      4065,
      4066
    ]
  },
  {
    "type": "Identifier",
    "value": "DOG",
    "start": 4066,
    "end": 4069,
    "range": [
      4066,
      4069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4069,
    "end": 4070,
    "range": [
      4069,
      4070
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4071,
    "end": 4077,
    "range": [
      4071,
      4077
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 4078,
    "end": 4084,
    "range": [
      4078,
      4084
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4084,
    "end": 4085,
    "range": [
      4084,
      4085
    ]
  },
  {
    "type": "Identifier",
    "value": "DOG",
    "start": 4085,
    "end": 4088,
    "range": [
      4085,
      4088
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4097,
    "end": 4101,
    "range": [
      4097,
      4101
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 4102,
    "end": 4108,
    "range": [
      4102,
      4108
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4108,
    "end": 4109,
    "range": [
      4108,
      4109
    ]
  },
  {
    "type": "Identifier",
    "value": "CAT",
    "start": 4109,
    "end": 4112,
    "range": [
      4109,
      4112
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4112,
    "end": 4113,
    "range": [
      4112,
      4113
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4114,
    "end": 4120,
    "range": [
      4114,
      4120
    ]
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 4121,
    "end": 4127,
    "range": [
      4121,
      4127
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4127,
    "end": 4128,
    "range": [
      4127,
      4128
    ]
  },
  {
    "type": "Identifier",
    "value": "CAT",
    "start": 4128,
    "end": 4131,
    "range": [
      4128,
      4131
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4136,
    "end": 4137,
    "range": [
      4136,
      4137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4138,
    "end": 4139,
    "range": [
      4138,
      4139
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4163,
    "end": 4171,
    "range": [
      4163,
      4171
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4172,
    "end": 4175,
    "range": [
      4172,
      4175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4175,
    "end": 4176,
    "range": [
      4175,
      4176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4176,
    "end": 4177,
    "range": [
      4176,
      4177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4178,
    "end": 4179,
    "range": [
      4178,
      4179
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4184,
    "end": 4189,
    "range": [
      4184,
      4189
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4190,
    "end": 4193,
    "range": [
      4190,
      4193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4193,
    "end": 4194,
    "range": [
      4193,
      4194
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4195,
    "end": 4201,
    "range": [
      4195,
      4201
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4202,
    "end": 4203,
    "range": [
      4202,
      4203
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4204,
    "end": 4213,
    "range": [
      4204,
      4213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4214,
    "end": 4215,
    "range": [
      4214,
      4215
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4216,
    "end": 4217,
    "range": [
      4216,
      4217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4217,
    "end": 4218,
    "range": [
      4217,
      4218
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 4223,
    "end": 4228,
    "range": [
      4223,
      4228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4229,
    "end": 4230,
    "range": [
      4229,
      4230
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4230,
    "end": 4234,
    "range": [
      4230,
      4234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4234,
    "end": 4235,
    "range": [
      4234,
      4235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4236,
    "end": 4237,
    "range": [
      4236,
      4237
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4246,
    "end": 4251,
    "range": [
      4246,
      4251
    ]
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 4252,
    "end": 4257,
    "range": [
      4252,
      4257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4258,
    "end": 4259,
    "range": [
      4258,
      4259
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4260,
    "end": 4263,
    "range": [
      4260,
      4263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4263,
    "end": 4264,
    "range": [
      4263,
      4264
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4273,
    "end": 4279,
    "range": [
      4273,
      4279
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4280,
    "end": 4281,
    "range": [
      4280,
      4281
    ]
  },
  {
    "type": "Identifier",
    "value": "stats",
    "start": 4281,
    "end": 4286,
    "range": [
      4281,
      4286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4286,
    "end": 4287,
    "range": [
      4286,
      4287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4288,
    "end": 4289,
    "range": [
      4288,
      4289
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4302,
    "end": 4306,
    "range": [
      4302,
      4306
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4307,
    "end": 4308,
    "range": [
      4307,
      4308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4308,
    "end": 4309,
    "range": [
      4308,
      4309
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4310,
    "end": 4315,
    "range": [
      4310,
      4315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4315,
    "end": 4316,
    "range": [
      4315,
      4316
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4329,
    "end": 4333,
    "range": [
      4329,
      4333
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4334,
    "end": 4335,
    "range": [
      4334,
      4335
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4335,
    "end": 4336,
    "range": [
      4335,
      4336
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4337,
    "end": 4342,
    "range": [
      4337,
      4342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4342,
    "end": 4343,
    "range": [
      4342,
      4343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4352,
    "end": 4353,
    "range": [
      4352,
      4353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4358,
    "end": 4359,
    "range": [
      4358,
      4359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4360,
    "end": 4361,
    "range": [
      4360,
      4361
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4385,
    "end": 4389,
    "range": [
      4385,
      4389
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 4390,
    "end": 4391,
    "range": [
      4390,
      4391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4392,
    "end": 4393,
    "range": [
      4392,
      4393
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4394,
    "end": 4395,
    "range": [
      4394,
      4395
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4400,
    "end": 4401,
    "range": [
      4400,
      4401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4401,
    "end": 4402,
    "range": [
      4401,
      4402
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4403,
    "end": 4409,
    "range": [
      4403,
      4409
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4409,
    "end": 4410,
    "range": [
      4409,
      4410
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4415,
    "end": 4416,
    "range": [
      4415,
      4416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4416,
    "end": 4417,
    "range": [
      4416,
      4417
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4418,
    "end": 4424,
    "range": [
      4418,
      4424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4425,
    "end": 4426,
    "range": [
      4425,
      4426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4426,
    "end": 4427,
    "range": [
      4426,
      4427
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4428,
    "end": 4432,
    "range": [
      4428,
      4432
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4433,
    "end": 4434,
    "range": [
      4433,
      4434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4435,
    "end": 4436,
    "range": [
      4435,
      4436
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4437,
    "end": 4442,
    "range": [
      4437,
      4442
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 4443,
    "end": 4444,
    "range": [
      4443,
      4444
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4445,
    "end": 4446,
    "range": [
      4445,
      4446
    ]
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 4447,
    "end": 4450,
    "range": [
      4447,
      4450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4450,
    "end": 4451,
    "range": [
      4450,
      4451
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4452,
    "end": 4460,
    "range": [
      4452,
      4460
    ]
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 4461,
    "end": 4463,
    "range": [
      4461,
      4463
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4463,
    "end": 4464,
    "range": [
      4463,
      4464
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4464,
    "end": 4465,
    "range": [
      4464,
      4465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4465,
    "end": 4466,
    "range": [
      4465,
      4466
    ]
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 4467,
    "end": 4468,
    "range": [
      4467,
      4468
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4468,
    "end": 4469,
    "range": [
      4468,
      4469
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4470,
    "end": 4471,
    "range": [
      4470,
      4471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4471,
    "end": 4472,
    "range": [
      4471,
      4472
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4473,
    "end": 4474,
    "range": [
      4473,
      4474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4474,
    "end": 4475,
    "range": [
      4474,
      4475
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4476,
    "end": 4477,
    "range": [
      4476,
      4477
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4482,
    "end": 4488,
    "range": [
      4482,
      4488
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4488,
    "end": 4489,
    "range": [
      4488,
      4489
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4489,
    "end": 4490,
    "range": [
      4489,
      4490
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4490,
    "end": 4491,
    "range": [
      4490,
      4491
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4492,
    "end": 4493,
    "range": [
      4492,
      4493
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4502,
    "end": 4506,
    "range": [
      4502,
      4506
    ]
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 4507,
    "end": 4510,
    "range": [
      4507,
      4510
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4510,
    "end": 4511,
    "range": [
      4510,
      4511
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4524,
    "end": 4525,
    "range": [
      4524,
      4525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4526,
    "end": 4527,
    "range": [
      4526,
      4527
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4528,
    "end": 4531,
    "range": [
      4528,
      4531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4537,
    "end": 4538,
    "range": [
      4537,
      4538
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4543,
    "end": 4544,
    "range": [
      4543,
      4544
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4545,
    "end": 4548,
    "range": [
      4545,
      4548
    ]
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 4549,
    "end": 4552,
    "range": [
      4549,
      4552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4552,
    "end": 4553,
    "range": [
      4552,
      4553
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4568,
    "end": 4574,
    "range": [
      4568,
      4574
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4575,
    "end": 4576,
    "range": [
      4575,
      4576
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4576,
    "end": 4577,
    "range": [
      4576,
      4577
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4577,
    "end": 4578,
    "range": [
      4577,
      4578
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4578,
    "end": 4579,
    "range": [
      4578,
      4579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4579,
    "end": 4580,
    "range": [
      4579,
      4580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4581,
    "end": 4582,
    "range": [
      4581,
      4582
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4605,
    "end": 4609,
    "range": [
      4605,
      4609
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4610,
    "end": 4611,
    "range": [
      4610,
      4611
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4612,
    "end": 4613,
    "range": [
      4612,
      4613
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4614,
    "end": 4615,
    "range": [
      4614,
      4615
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4616,
    "end": 4620,
    "range": [
      4616,
      4620
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4620,
    "end": 4621,
    "range": [
      4620,
      4621
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 4622,
    "end": 4627,
    "range": [
      4622,
      4627
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4628,
    "end": 4629,
    "range": [
      4628,
      4629
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4630,
    "end": 4631,
    "range": [
      4630,
      4631
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4632,
    "end": 4633,
    "range": [
      4632,
      4633
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4634,
    "end": 4638,
    "range": [
      4634,
      4638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4638,
    "end": 4639,
    "range": [
      4638,
      4639
    ]
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 4640,
    "end": 4645,
    "range": [
      4640,
      4645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4646,
    "end": 4647,
    "range": [
      4646,
      4647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4647,
    "end": 4648,
    "range": [
      4647,
      4648
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4650,
    "end": 4658,
    "range": [
      4650,
      4658
    ]
  },
  {
    "type": "Identifier",
    "value": "f35431",
    "start": 4659,
    "end": 4665,
    "range": [
      4659,
      4665
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4665,
    "end": 4666,
    "range": [
      4665,
      4666
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4666,
    "end": 4667,
    "range": [
      4666,
      4667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4667,
    "end": 4668,
    "range": [
      4667,
      4668
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4669,
    "end": 4670,
    "range": [
      4669,
      4670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4670,
    "end": 4671,
    "range": [
      4670,
      4671
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4672,
    "end": 4673,
    "range": [
      4672,
      4673
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4676,
    "end": 4682,
    "range": [
      4676,
      4682
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4683,
    "end": 4684,
    "range": [
      4683,
      4684
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4684,
    "end": 4685,
    "range": [
      4684,
      4685
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4685,
    "end": 4686,
    "range": [
      4685,
      4686
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4686,
    "end": 4690,
    "range": [
      4686,
      4690
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4690,
    "end": 4691,
    "range": [
      4690,
      4691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4692,
    "end": 4693,
    "range": [
      4692,
      4693
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4698,
    "end": 4702,
    "range": [
      4698,
      4702
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 4703,
    "end": 4708,
    "range": [
      4703,
      4708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4708,
    "end": 4709,
    "range": [
      4708,
      4709
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4714,
    "end": 4718,
    "range": [
      4714,
      4718
    ]
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 4719,
    "end": 4724,
    "range": [
      4719,
      4724
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4724,
    "end": 4725,
    "range": [
      4724,
      4725
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4726,
    "end": 4732,
    "range": [
      4726,
      4732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4732,
    "end": 4733,
    "range": [
      4732,
      4733
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 4738,
    "end": 4745,
    "range": [
      4738,
      4745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4745,
    "end": 4746,
    "range": [
      4745,
      4746
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4753,
    "end": 4754,
    "range": [
      4753,
      4754
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4754,
    "end": 4755,
    "range": [
      4754,
      4755
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4755,
    "end": 4756,
    "range": [
      4755,
      4756
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4756,
    "end": 4760,
    "range": [
      4756,
      4760
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4760,
    "end": 4761,
    "range": [
      4760,
      4761
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4782,
    "end": 4783,
    "range": [
      4782,
      4783
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4784,
    "end": 4785,
    "range": [
      4784,
      4785
    ]
  }
]
```
