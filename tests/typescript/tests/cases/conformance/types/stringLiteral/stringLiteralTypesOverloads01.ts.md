__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrimitiveName",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 18
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 21,
              "end": 29
            },
            "start": 21,
            "end": 29
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "number",
              "raw": "'number'",
              "start": 32,
              "end": 40
            },
            "start": 32,
            "end": 40
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "boolean",
              "raw": "'boolean'",
              "start": 43,
              "end": 52
            },
            "start": 43,
            "end": 52
          }
        ],
        "start": 21,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 81
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 85,
                "end": 93
              },
              "start": 85,
              "end": 93
            },
            "start": 83,
            "end": 93
          },
          "start": 82,
          "end": 93
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 96,
          "end": 102
        },
        "start": 94,
        "end": 102
      },
      "body": null,
      "expression": false,
      "start": 55,
      "end": 103
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 130
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 134,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "start": 132,
            "end": 142
          },
          "start": 131,
          "end": 142
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 145,
          "end": 151
        },
        "start": 143,
        "end": 151
      },
      "body": null,
      "expression": false,
      "start": 104,
      "end": 152
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 179
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 183,
                "end": 192
              },
              "start": 183,
              "end": 192
            },
            "start": 181,
            "end": 192
          },
          "start": 180,
          "end": 192
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 195,
          "end": 202
        },
        "start": 193,
        "end": 202
      },
      "body": null,
      "expression": false,
      "start": 153,
      "end": 203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 230
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
                    "value": "boolean",
                    "raw": "\"boolean\"",
                    "start": 234,
                    "end": 243
                  },
                  "start": 234,
                  "end": 243
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 246,
                    "end": 254
                  },
                  "start": 246,
                  "end": 254
                }
              ],
              "start": 234,
              "end": 254
            },
            "start": 232,
            "end": 254
          },
          "start": 231,
          "end": 254
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSBooleanKeyword",
              "start": 257,
              "end": 264
            },
            {
              "type": "TSStringKeyword",
              "start": 267,
              "end": 273
            }
          ],
          "start": 257,
          "end": 273
        },
        "start": 255,
        "end": 273
      },
      "body": null,
      "expression": false,
      "start": 204,
      "end": 274
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 301
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
                    "value": "boolean",
                    "raw": "\"boolean\"",
                    "start": 305,
                    "end": 314
                  },
                  "start": 305,
                  "end": 314
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 317,
                    "end": 325
                  },
                  "start": 317,
                  "end": 325
                }
              ],
              "start": 305,
              "end": 325
            },
            "start": 303,
            "end": 325
          },
          "start": 302,
          "end": 325
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSBooleanKeyword",
              "start": 328,
              "end": 335
            },
            {
              "type": "TSNumberKeyword",
              "start": 338,
              "end": 344
            }
          ],
          "start": 328,
          "end": 344
        },
        "start": 326,
        "end": 344
      },
      "body": null,
      "expression": false,
      "start": 275,
      "end": 345
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 372
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
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 376,
                    "end": 384
                  },
                  "start": 376,
                  "end": 384
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 387,
                    "end": 395
                  },
                  "start": 387,
                  "end": 395
                }
              ],
              "start": 376,
              "end": 395
            },
            "start": 374,
            "end": 395
          },
          "start": 373,
          "end": 395
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 398,
              "end": 404
            },
            {
              "type": "TSStringKeyword",
              "start": 407,
              "end": 413
            }
          ],
          "start": 398,
          "end": 413
        },
        "start": 396,
        "end": 413
      },
      "body": null,
      "expression": false,
      "start": 346,
      "end": 414
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 441
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
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 445,
                    "end": 453
                  },
                  "start": 445,
                  "end": 453
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 456,
                    "end": 464
                  },
                  "start": 456,
                  "end": 464
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "boolean",
                    "raw": "\"boolean\"",
                    "start": 467,
                    "end": 476
                  },
                  "start": 467,
                  "end": 476
                }
              ],
              "start": 445,
              "end": 476
            },
            "start": 443,
            "end": 476
          },
          "start": 442,
          "end": 476
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 479,
              "end": 485
            },
            {
              "type": "TSStringKeyword",
              "start": 488,
              "end": 494
            },
            {
              "type": "TSBooleanKeyword",
              "start": 497,
              "end": 504
            }
          ],
          "start": 479,
          "end": 504
        },
        "start": 477,
        "end": 504
      },
      "body": null,
      "expression": false,
      "start": 415,
      "end": 505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFalsyPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 532
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
                "name": "PrimitiveName",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 549
              },
              "typeArguments": null,
              "start": 536,
              "end": 549
            },
            "start": 534,
            "end": 549
          },
          "start": 533,
          "end": 549
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 552,
              "end": 558
            },
            {
              "type": "TSStringKeyword",
              "start": 561,
              "end": 567
            },
            {
              "type": "TSBooleanKeyword",
              "start": 570,
              "end": 577
            }
          ],
          "start": 552,
          "end": 577
        },
        "start": 550,
        "end": 577
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 589
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 594,
                "end": 602
              },
              "start": 588,
              "end": 602
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 621,
                    "end": 623
                  },
                  "start": 614,
                  "end": 624
                }
              ],
              "start": 604,
              "end": 630
            },
            "alternate": null,
            "start": 584,
            "end": 630
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 640
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 645,
                "end": 653
              },
              "start": 639,
              "end": 653
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 672,
                    "end": 673
                  },
                  "start": 665,
                  "end": 674
                }
              ],
              "start": 655,
              "end": 680
            },
            "alternate": null,
            "start": 635,
            "end": 680
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 689,
                "end": 690
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 695,
                "end": 704
              },
              "start": 689,
              "end": 704
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 723,
                    "end": 728
                  },
                  "start": 716,
                  "end": 729
                }
              ],
              "start": 706,
              "end": 735
            },
            "alternate": null,
            "start": 685,
            "end": 735
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": "Invalid value",
              "raw": "\"Invalid value\"",
              "start": 777,
              "end": 792
            },
            "start": 771,
            "end": 793
          }
        ],
        "start": 578,
        "end": 795
      },
      "expression": false,
      "start": 506,
      "end": 795
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Consts1",
        "optional": false,
        "typeAnnotation": null,
        "start": 807,
        "end": 814
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "EMPTY_STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 827,
                  "end": 839
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 859
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 860,
                      "end": 868
                    }
                  ],
                  "optional": false,
                  "start": 842,
                  "end": 869
                },
                "definite": false,
                "start": 827,
                "end": 869
              }
            ],
            "declare": false,
            "start": 821,
            "end": 870
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
                  "name": "ZERO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 885
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 905
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "number",
                      "raw": "'number'",
                      "start": 906,
                      "end": 914
                    }
                  ],
                  "optional": false,
                  "start": 888,
                  "end": 915
                },
                "definite": false,
                "start": 881,
                "end": 915
              }
            ],
            "declare": false,
            "start": 875,
            "end": 916
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
                  "name": "FALSE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 932
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 935,
                    "end": 952
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 953,
                      "end": 962
                    }
                  ],
                  "optional": false,
                  "start": 935,
                  "end": 963
                },
                "definite": false,
                "start": 927,
                "end": 963
              }
            ],
            "declare": false,
            "start": 921,
            "end": 964
          }
        ],
        "start": 815,
        "end": 966
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 797,
      "end": 966
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
            "name": "string",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 982,
                  "end": 990
                },
                "start": 982,
                "end": 990
              },
              "start": 980,
              "end": 990
            },
            "start": 974,
            "end": 990
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 993,
            "end": 1001
          },
          "definite": false,
          "start": 974,
          "end": 1001
        }
      ],
      "declare": false,
      "start": 968,
      "end": 1001
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
            "name": "number",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 1016,
                  "end": 1024
                },
                "start": 1016,
                "end": 1024
              },
              "start": 1014,
              "end": 1024
            },
            "start": 1008,
            "end": 1024
          },
          "init": {
            "type": "Literal",
            "value": "number",
            "raw": "\"number\"",
            "start": 1027,
            "end": 1035
          },
          "definite": false,
          "start": 1008,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 1002,
      "end": 1035
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
            "name": "boolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 1051,
                  "end": 1060
                },
                "start": 1051,
                "end": 1060
              },
              "start": 1049,
              "end": 1060
            },
            "start": 1042,
            "end": 1060
          },
          "init": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 1063,
            "end": 1072
          },
          "definite": false,
          "start": 1042,
          "end": 1072
        }
      ],
      "declare": false,
      "start": 1036,
      "end": 1072
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
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1094
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1103
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1113
            },
            "start": 1097,
            "end": 1113
          },
          "definite": false,
          "start": 1080,
          "end": 1113
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1114
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
            "name": "stringOrBoolean",
            "optional": false,
            "typeAnnotation": null,
            "start": 1121,
            "end": 1136
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1145
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "boolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1156
            },
            "start": 1139,
            "end": 1156
          },
          "definite": false,
          "start": 1121,
          "end": 1156
        }
      ],
      "declare": false,
      "start": 1115,
      "end": 1157
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
            "name": "booleanOrNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1179
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 1182,
              "end": 1188
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "boolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 1192,
              "end": 1199
            },
            "start": 1182,
            "end": 1199
          },
          "definite": false,
          "start": 1164,
          "end": 1199
        }
      ],
      "declare": false,
      "start": 1158,
      "end": 1200
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
            "name": "stringOrBooleanOrNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1207,
            "end": 1230
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrBoolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1248
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 1252,
              "end": 1258
            },
            "start": 1233,
            "end": 1258
          },
          "definite": false,
          "start": 1207,
          "end": 1258
        }
      ],
      "declare": false,
      "start": 1201,
      "end": 1259
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Consts2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1271,
        "end": 1278
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "EMPTY_STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1291,
                  "end": 1303
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1306,
                    "end": 1323
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1324,
                      "end": 1330
                    }
                  ],
                  "optional": false,
                  "start": 1306,
                  "end": 1331
                },
                "definite": false,
                "start": 1291,
                "end": 1331
              }
            ],
            "declare": false,
            "start": 1285,
            "end": 1332
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
                  "name": "ZERO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1347
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1350,
                    "end": 1367
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1368,
                      "end": 1374
                    }
                  ],
                  "optional": false,
                  "start": 1350,
                  "end": 1375
                },
                "definite": false,
                "start": 1343,
                "end": 1375
              }
            ],
            "declare": false,
            "start": 1337,
            "end": 1376
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
                  "name": "FALSE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1387,
                  "end": 1392
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1412
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1413,
                      "end": 1420
                    }
                  ],
                  "optional": false,
                  "start": 1395,
                  "end": 1421
                },
                "definite": false,
                "start": 1387,
                "end": 1421
              }
            ],
            "declare": false,
            "start": 1381,
            "end": 1422
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
                  "start": 1434,
                  "end": 1435
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1438,
                    "end": 1455
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stringOrNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1456,
                      "end": 1470
                    }
                  ],
                  "optional": false,
                  "start": 1438,
                  "end": 1471
                },
                "definite": false,
                "start": 1434,
                "end": 1471
              }
            ],
            "declare": false,
            "start": 1428,
            "end": 1472
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1483,
                  "end": 1484
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1487,
                    "end": 1504
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stringOrBoolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1505,
                      "end": 1520
                    }
                  ],
                  "optional": false,
                  "start": 1487,
                  "end": 1521
                },
                "definite": false,
                "start": 1483,
                "end": 1521
              }
            ],
            "declare": false,
            "start": 1477,
            "end": 1522
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1533,
                  "end": 1534
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1537,
                    "end": 1554
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "booleanOrNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1555,
                      "end": 1570
                    }
                  ],
                  "optional": false,
                  "start": 1537,
                  "end": 1571
                },
                "definite": false,
                "start": 1533,
                "end": 1571
              }
            ],
            "declare": false,
            "start": 1527,
            "end": 1572
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1584
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFalsyPrimitive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1587,
                    "end": 1604
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stringOrBooleanOrNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1605,
                      "end": 1628
                    }
                  ],
                  "optional": false,
                  "start": 1587,
                  "end": 1629
                },
                "definite": false,
                "start": 1583,
                "end": 1629
              }
            ],
            "declare": false,
            "start": 1577,
            "end": 1630
          }
        ],
        "start": 1279,
        "end": 1632
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1261,
      "end": 1632
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1634
}
```
