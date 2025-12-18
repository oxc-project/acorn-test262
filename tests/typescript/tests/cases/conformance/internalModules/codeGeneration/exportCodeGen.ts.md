__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  "init": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 104,
                    "end": 106
                  },
                  "definite": false,
                  "start": 100,
                  "end": 106
                }
              ],
              "declare": false,
              "start": 96,
              "end": 107
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 89,
            "end": 107
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lt12",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 149,
                      "end": 151
                    },
                    "start": 145,
                    "end": 151
                  },
                  "start": 138,
                  "end": 152
                }
              ],
              "start": 128,
              "end": 158
            },
            "expression": false,
            "start": 112,
            "end": 158
          }
        ],
        "start": 83,
        "end": 160
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 71,
      "end": 160
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 218
                },
                "init": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 221,
                  "end": 223
                },
                "definite": false,
                "start": 217,
                "end": 223
              }
            ],
            "declare": false,
            "start": 213,
            "end": 224
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lt12",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 242
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 266,
                      "end": 268
                    },
                    "start": 262,
                    "end": 268
                  },
                  "start": 255,
                  "end": 269
                }
              ],
              "start": 245,
              "end": 275
            },
            "expression": false,
            "start": 229,
            "end": 275
          }
        ],
        "start": 207,
        "end": 277
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 195,
      "end": 277
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 324
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "no",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 342
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 362,
                    "end": 367
                  },
                  "start": 355,
                  "end": 368
                }
              ],
              "start": 345,
              "end": 374
            },
            "expression": false,
            "start": 331,
            "end": 374
          }
        ],
        "start": 325,
        "end": 376
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 313,
      "end": 376
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 415
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 441
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 461,
                      "end": 465
                    },
                    "start": 454,
                    "end": 466
                  }
                ],
                "start": 444,
                "end": 472
              },
              "expression": false,
              "start": 429,
              "end": 472
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 422,
            "end": 472
          }
        ],
        "start": 416,
        "end": 474
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 404,
      "end": 474
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 525
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 549
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 555
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 552,
                    "end": 555
                  }
                ],
                "start": 550,
                "end": 557
              },
              "const": false,
              "declare": false,
              "start": 539,
              "end": 557
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 532,
            "end": 557
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 583,
                "end": 586
              },
              "expression": false,
              "start": 569,
              "end": 586
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 562,
            "end": 586
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 609
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 612,
                      "end": 614
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 616,
                        "end": 622
                      },
                      "start": 614,
                      "end": 622
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 612,
                    "end": 622
                  }
                ],
                "start": 610,
                "end": 624
              },
              "declare": false,
              "start": 598,
              "end": 624
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 591,
            "end": 624
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 643
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 646,
                      "end": 650
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 652,
                        "end": 658
                      },
                      "start": 650,
                      "end": 658
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
                    "start": 646,
                    "end": 658
                  }
                ],
                "start": 644,
                "end": 660
              },
              "abstract": false,
              "declare": false,
              "start": 636,
              "end": 660
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 629,
            "end": 660
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 706
                          },
                          "init": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 709,
                            "end": 711
                          },
                          "definite": false,
                          "start": 705,
                          "end": 711
                        }
                      ],
                      "declare": false,
                      "start": 701,
                      "end": 712
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 694,
                    "end": 712
                  }
                ],
                "start": 684,
                "end": 718
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 672,
              "end": 718
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 665,
            "end": 718
          }
        ],
        "start": 526,
        "end": 720
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 514,
      "end": 720
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 797,
        "end": 798
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 815
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Red",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 818,
                    "end": 821
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 818,
                  "end": 821
                }
              ],
              "start": 816,
              "end": 823
            },
            "const": false,
            "declare": false,
            "start": 805,
            "end": 823
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 837,
              "end": 839
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 842,
              "end": 845
            },
            "expression": false,
            "start": 828,
            "end": 845
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 860,
              "end": 861
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 866
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 868,
                      "end": 874
                    },
                    "start": 866,
                    "end": 874
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 864,
                  "end": 874
                }
              ],
              "start": 862,
              "end": 876
            },
            "declare": false,
            "start": 850,
            "end": 876
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 888
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 895
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 897,
                      "end": 903
                    },
                    "start": 895,
                    "end": 903
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
                  "start": 891,
                  "end": 903
                }
              ],
              "start": 889,
              "end": 905
            },
            "abstract": false,
            "declare": false,
            "start": 881,
            "end": 905
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 920,
              "end": 921
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 936,
                        "end": 937
                      },
                      "init": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 940,
                        "end": 942
                      },
                      "definite": false,
                      "start": 936,
                      "end": 942
                    }
                  ],
                  "declare": false,
                  "start": 932,
                  "end": 943
                }
              ],
              "start": 922,
              "end": 949
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 910,
            "end": 949
          }
        ],
        "start": 799,
        "end": 951
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 787,
      "end": 951
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 71,
  "end": 951
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 71,
    "end": 80,
    "range": [
      71,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 89,
    "end": 95,
    "range": [
      89,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 96,
    "end": 99,
    "range": [
      96,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 104,
    "end": 106,
    "range": [
      104,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120,
    "range": [
      112,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "lt12",
    "start": 121,
    "end": 125,
    "range": [
      121,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 138,
    "end": 144,
    "range": [
      138,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 195,
    "end": 204,
    "range": [
      195,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 213,
    "end": 216,
    "range": [
      213,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 221,
    "end": 223,
    "range": [
      221,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 229,
    "end": 237,
    "range": [
      229,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "lt12",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 255,
    "end": 261,
    "range": [
      255,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 266,
    "end": 268,
    "range": [
      266,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 313,
    "end": 322,
    "range": [
      313,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 331,
    "end": 339,
    "range": [
      331,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "no",
    "start": 340,
    "end": 342,
    "range": [
      340,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 355,
    "end": 361,
    "range": [
      355,
      361
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 362,
    "end": 367,
    "range": [
      362,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
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
    "value": "}",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 404,
    "end": 413,
    "range": [
      404,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "value": "export",
    "start": 422,
    "end": 428,
    "range": [
      422,
      428
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 429,
    "end": 437,
    "range": [
      429,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "yes",
    "start": 438,
    "end": 441,
    "range": [
      438,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 454,
    "end": 460,
    "range": [
      454,
      460
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 461,
    "end": 465,
    "range": [
      461,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 514,
    "end": 523,
    "range": [
      514,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 532,
    "end": 538,
    "range": [
      532,
      538
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 539,
    "end": 543,
    "range": [
      539,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 544,
    "end": 549,
    "range": [
      544,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 552,
    "end": 555,
    "range": [
      552,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 562,
    "end": 568,
    "range": [
      562,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 569,
    "end": 577,
    "range": [
      569,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 578,
    "end": 580,
    "range": [
      578,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 591,
    "end": 597,
    "range": [
      591,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 598,
    "end": 607,
    "range": [
      598,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 612,
    "end": 614,
    "range": [
      612,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 616,
    "end": 622,
    "range": [
      616,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 629,
    "end": 635,
    "range": [
      629,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 636,
    "end": 641,
    "range": [
      636,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 646,
    "end": 650,
    "range": [
      646,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 652,
    "end": 658,
    "range": [
      652,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 665,
    "end": 671,
    "range": [
      665,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 672,
    "end": 681,
    "range": [
      672,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 694,
    "end": 700,
    "range": [
      694,
      700
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 701,
    "end": 704,
    "range": [
      701,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 709,
    "end": 711,
    "range": [
      709,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 787,
    "end": 796,
    "range": [
      787,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 805,
    "end": 809,
    "range": [
      805,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 810,
    "end": 815,
    "range": [
      810,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 818,
    "end": 821,
    "range": [
      818,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 828,
    "end": 836,
    "range": [
      828,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 837,
    "end": 839,
    "range": [
      837,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 850,
    "end": 859,
    "range": [
      850,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 864,
    "end": 866,
    "range": [
      864,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 868,
    "end": 874,
    "range": [
      868,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 881,
    "end": 886,
    "range": [
      881,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 891,
    "end": 895,
    "range": [
      891,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 897,
    "end": 903,
    "range": [
      897,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 910,
    "end": 919,
    "range": [
      910,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 932,
    "end": 935,
    "range": [
      932,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 940,
    "end": 942,
    "range": [
      940,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  }
]
```
