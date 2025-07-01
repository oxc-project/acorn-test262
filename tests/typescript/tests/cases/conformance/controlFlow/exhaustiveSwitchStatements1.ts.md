__ESTREE_TEST__:PASS:
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
