__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1635,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 18,
        "name": "PrimitiveName",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 21,
        "end": 52,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 21,
            "end": 29,
            "literal": {
              "type": "Literal",
              "start": 21,
              "end": 29,
              "value": "string",
              "raw": "'string'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 32,
            "end": 40,
            "literal": {
              "type": "Literal",
              "start": 32,
              "end": 40,
              "value": "number",
              "raw": "'number'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 43,
            "end": 52,
            "literal": {
              "type": "Literal",
              "start": 43,
              "end": 52,
              "value": "boolean",
              "raw": "'boolean'"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 55,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 81,
        "name": "getFalsyPrimitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 82,
          "end": 93,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 93,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 85,
              "end": 93,
              "literal": {
                "type": "Literal",
                "start": 85,
                "end": 93,
                "value": "string",
                "raw": "\"string\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 94,
        "end": 102,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 96,
          "end": 102
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 104,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 130,
        "name": "getFalsyPrimitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 142,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 132,
            "end": 142,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 134,
              "end": 142,
              "literal": {
                "type": "Literal",
                "start": 134,
                "end": 142,
                "value": "number",
                "raw": "\"number\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 143,
        "end": 151,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 145,
          "end": 151
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 153,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 179,
        "name": "getFalsyPrimitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 180,
          "end": 192,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 192,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 183,
              "end": 192,
              "literal": {
                "type": "Literal",
                "start": 183,
                "end": 192,
                "value": "boolean",
                "raw": "\"boolean\""
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 193,
        "end": 202,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 195,
          "end": 202
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 204,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 230,
        "name": "getFalsyPrimitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 231,
          "end": 254,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 232,
            "end": 254,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 234,
              "end": 254,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 234,
                  "end": 243,
                  "literal": {
                    "type": "Literal",
                    "start": 234,
                    "end": 243,
                    "value": "boolean",
                    "raw": "\"boolean\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 246,
                  "end": 254,
                  "literal": {
                    "type": "Literal",
                    "start": 246,
                    "end": 254,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 255,
        "end": 273,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 257,
          "end": 273,
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
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 275,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 301,
        "name": "getFalsyPrimitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 302,
          "end": 325,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 303,
            "end": 325,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 305,
              "end": 325,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 305,
                  "end": 314,
                  "literal": {
                    "type": "Literal",
                    "start": 305,
                    "end": 314,
                    "value": "boolean",
                    "raw": "\"boolean\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 317,
                  "end": 325,
                  "literal": {
                    "type": "Literal",
                    "start": 317,
                    "end": 325,
                    "value": "number",
                    "raw": "\"number\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 326,
        "end": 344,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 328,
          "end": 344,
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
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 346,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 372,
        "name": "getFalsyPrimitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 373,
          "end": 395,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 374,
            "end": 395,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 376,
              "end": 395,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 376,
                  "end": 384,
                  "literal": {
                    "type": "Literal",
                    "start": 376,
                    "end": 384,
                    "value": "number",
                    "raw": "\"number\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 387,
                  "end": 395,
                  "literal": {
                    "type": "Literal",
                    "start": 387,
                    "end": 395,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 396,
        "end": 413,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 398,
          "end": 413,
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
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 415,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 441,
        "name": "getFalsyPrimitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 442,
          "end": 476,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 443,
            "end": 476,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 445,
              "end": 476,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 445,
                  "end": 453,
                  "literal": {
                    "type": "Literal",
                    "start": 445,
                    "end": 453,
                    "value": "number",
                    "raw": "\"number\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 456,
                  "end": 464,
                  "literal": {
                    "type": "Literal",
                    "start": 456,
                    "end": 464,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 467,
                  "end": 476,
                  "literal": {
                    "type": "Literal",
                    "start": 467,
                    "end": 476,
                    "value": "boolean",
                    "raw": "\"boolean\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 477,
        "end": 504,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 479,
          "end": 504,
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
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 506,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 532,
        "name": "getFalsyPrimitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 533,
          "end": 549,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 534,
            "end": 549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 536,
              "end": 549,
              "typeName": {
                "type": "Identifier",
                "start": 536,
                "end": 549,
                "name": "PrimitiveName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 578,
        "end": 795,
        "body": [
          {
            "type": "IfStatement",
            "start": 584,
            "end": 630,
            "test": {
              "type": "BinaryExpression",
              "start": 588,
              "end": 602,
              "left": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 594,
                "end": 602,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 604,
              "end": 630,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 614,
                  "end": 624,
                  "argument": {
                    "type": "Literal",
                    "start": 621,
                    "end": 623,
                    "value": "",
                    "raw": "\"\""
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 635,
            "end": 680,
            "test": {
              "type": "BinaryExpression",
              "start": 639,
              "end": 653,
              "left": {
                "type": "Identifier",
                "start": 639,
                "end": 640,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 645,
                "end": 653,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 655,
              "end": 680,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 665,
                  "end": 674,
                  "argument": {
                    "type": "Literal",
                    "start": 672,
                    "end": 673,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 685,
            "end": 735,
            "test": {
              "type": "BinaryExpression",
              "start": 689,
              "end": 704,
              "left": {
                "type": "Identifier",
                "start": 689,
                "end": 690,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 695,
                "end": 704,
                "value": "boolean",
                "raw": "\"boolean\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 706,
              "end": 735,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 716,
                  "end": 729,
                  "argument": {
                    "type": "Literal",
                    "start": 723,
                    "end": 728,
                    "value": false,
                    "raw": "false"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ThrowStatement",
            "start": 771,
            "end": 793,
            "argument": {
              "type": "Literal",
              "start": 777,
              "end": 792,
              "value": "Invalid value",
              "raw": "\"Invalid value\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 550,
        "end": 577,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 552,
          "end": 577,
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
          ]
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 797,
      "end": 966,
      "id": {
        "type": "Identifier",
        "start": 807,
        "end": 814,
        "name": "Consts1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 815,
        "end": 966,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 821,
            "end": 870,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 827,
                "end": 869,
                "id": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 839,
                  "name": "EMPTY_STRING",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 842,
                  "end": 869,
                  "callee": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 859,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 860,
                      "end": 868,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 875,
            "end": 916,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 881,
                "end": 915,
                "id": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 885,
                  "name": "ZERO",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 888,
                  "end": 915,
                  "callee": {
                    "type": "Identifier",
                    "start": 888,
                    "end": 905,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 906,
                      "end": 914,
                      "value": "number",
                      "raw": "'number'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 921,
            "end": 964,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 927,
                "end": 963,
                "id": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 932,
                  "name": "FALSE",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 935,
                  "end": 963,
                  "callee": {
                    "type": "Identifier",
                    "start": 935,
                    "end": 952,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 953,
                      "end": 962,
                      "value": "boolean",
                      "raw": "\"boolean\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 968,
      "end": 1001,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 974,
          "end": 1001,
          "id": {
            "type": "Identifier",
            "start": 974,
            "end": 990,
            "name": "string",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 980,
              "end": 990,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 982,
                "end": 990,
                "literal": {
                  "type": "Literal",
                  "start": 982,
                  "end": 990,
                  "value": "string",
                  "raw": "\"string\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 993,
            "end": 1001,
            "value": "string",
            "raw": "\"string\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1002,
      "end": 1035,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1008,
          "end": 1035,
          "id": {
            "type": "Identifier",
            "start": 1008,
            "end": 1024,
            "name": "number",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1014,
              "end": 1024,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1016,
                "end": 1024,
                "literal": {
                  "type": "Literal",
                  "start": 1016,
                  "end": 1024,
                  "value": "number",
                  "raw": "\"number\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1027,
            "end": 1035,
            "value": "number",
            "raw": "\"number\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1036,
      "end": 1072,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1042,
          "end": 1072,
          "id": {
            "type": "Identifier",
            "start": 1042,
            "end": 1060,
            "name": "boolean",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1049,
              "end": 1060,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1051,
                "end": 1060,
                "literal": {
                  "type": "Literal",
                  "start": 1051,
                  "end": 1060,
                  "value": "boolean",
                  "raw": "\"boolean\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1063,
            "end": 1072,
            "value": "boolean",
            "raw": "\"boolean\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1074,
      "end": 1114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1080,
          "end": 1113,
          "id": {
            "type": "Identifier",
            "start": 1080,
            "end": 1094,
            "name": "stringOrNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1097,
            "end": 1113,
            "left": {
              "type": "Identifier",
              "start": 1097,
              "end": 1103,
              "name": "string",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 1107,
              "end": 1113,
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1115,
      "end": 1157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1121,
          "end": 1156,
          "id": {
            "type": "Identifier",
            "start": 1121,
            "end": 1136,
            "name": "stringOrBoolean",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1139,
            "end": 1156,
            "left": {
              "type": "Identifier",
              "start": 1139,
              "end": 1145,
              "name": "string",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 1149,
              "end": 1156,
              "name": "boolean",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1158,
      "end": 1200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1164,
          "end": 1199,
          "id": {
            "type": "Identifier",
            "start": 1164,
            "end": 1179,
            "name": "booleanOrNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1182,
            "end": 1199,
            "left": {
              "type": "Identifier",
              "start": 1182,
              "end": 1188,
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 1192,
              "end": 1199,
              "name": "boolean",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1201,
      "end": 1259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1207,
          "end": 1258,
          "id": {
            "type": "Identifier",
            "start": 1207,
            "end": 1230,
            "name": "stringOrBooleanOrNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1233,
            "end": 1258,
            "left": {
              "type": "Identifier",
              "start": 1233,
              "end": 1248,
              "name": "stringOrBoolean",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 1252,
              "end": 1258,
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1261,
      "end": 1632,
      "id": {
        "type": "Identifier",
        "start": 1271,
        "end": 1278,
        "name": "Consts2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1279,
        "end": 1632,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1285,
            "end": 1332,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1291,
                "end": 1331,
                "id": {
                  "type": "Identifier",
                  "start": 1291,
                  "end": 1303,
                  "name": "EMPTY_STRING",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1306,
                  "end": 1331,
                  "callee": {
                    "type": "Identifier",
                    "start": 1306,
                    "end": 1323,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1324,
                      "end": 1330,
                      "name": "string",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1337,
            "end": 1376,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1343,
                "end": 1375,
                "id": {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1347,
                  "name": "ZERO",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1350,
                  "end": 1375,
                  "callee": {
                    "type": "Identifier",
                    "start": 1350,
                    "end": 1367,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1368,
                      "end": 1374,
                      "name": "number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1381,
            "end": 1422,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1387,
                "end": 1421,
                "id": {
                  "type": "Identifier",
                  "start": 1387,
                  "end": 1392,
                  "name": "FALSE",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1395,
                  "end": 1421,
                  "callee": {
                    "type": "Identifier",
                    "start": 1395,
                    "end": 1412,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1413,
                      "end": 1420,
                      "name": "boolean",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1428,
            "end": 1472,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1434,
                "end": 1471,
                "id": {
                  "type": "Identifier",
                  "start": 1434,
                  "end": 1435,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1438,
                  "end": 1471,
                  "callee": {
                    "type": "Identifier",
                    "start": 1438,
                    "end": 1455,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1456,
                      "end": 1470,
                      "name": "stringOrNumber",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1477,
            "end": 1522,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1483,
                "end": 1521,
                "id": {
                  "type": "Identifier",
                  "start": 1483,
                  "end": 1484,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1487,
                  "end": 1521,
                  "callee": {
                    "type": "Identifier",
                    "start": 1487,
                    "end": 1504,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1505,
                      "end": 1520,
                      "name": "stringOrBoolean",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1527,
            "end": 1572,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1533,
                "end": 1571,
                "id": {
                  "type": "Identifier",
                  "start": 1533,
                  "end": 1534,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1537,
                  "end": 1571,
                  "callee": {
                    "type": "Identifier",
                    "start": 1537,
                    "end": 1554,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1555,
                      "end": 1570,
                      "name": "booleanOrNumber",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1577,
            "end": 1630,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1583,
                "end": 1629,
                "id": {
                  "type": "Identifier",
                  "start": 1583,
                  "end": 1584,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1587,
                  "end": 1629,
                  "callee": {
                    "type": "Identifier",
                    "start": 1587,
                    "end": 1604,
                    "name": "getFalsyPrimitive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1605,
                      "end": 1628,
                      "name": "stringOrBooleanOrNumber",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
