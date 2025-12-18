__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "super_covariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 135
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 143,
                  "end": 144
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 144
              }
            ],
            "start": 138,
            "end": 146
          },
          "definite": false,
          "start": 120,
          "end": 146
        }
      ],
      "declare": false,
      "start": 116,
      "end": 147
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
            "name": "sub_covariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 203
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 209
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 211,
                  "end": 213
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 208,
                "end": 213
              }
            ],
            "start": 206,
            "end": 215
          },
          "definite": false,
          "start": 190,
          "end": 215
        }
      ],
      "declare": false,
      "start": 186,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 233
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 249
        },
        "start": 218,
        "end": 249
      },
      "directive": null,
      "start": 218,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 264
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 284
        },
        "start": 251,
        "end": 284
      },
      "directive": null,
      "start": 251,
      "end": 285
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
            "name": "super_contravariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 455
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 461
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 465
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 470,
                    "end": 472
                  },
                  "id": null,
                  "generator": false,
                  "start": 463,
                  "end": 472
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 460,
                "end": 472
              }
            ],
            "start": 458,
            "end": 474
          },
          "definite": false,
          "start": 436,
          "end": 474
        }
      ],
      "declare": false,
      "start": 432,
      "end": 475
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
            "name": "sub_contravariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 539
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 545
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 549
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 554,
                    "end": 556
                  },
                  "id": null,
                  "generator": false,
                  "start": 547,
                  "end": 556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 544,
                "end": 556
              }
            ],
            "start": 542,
            "end": 558
          },
          "definite": false,
          "start": 522,
          "end": 558
        }
      ],
      "declare": false,
      "start": 518,
      "end": 559
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 561,
          "end": 580
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 600
        },
        "start": 561,
        "end": 600
      },
      "directive": null,
      "start": 561,
      "end": 601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 629
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 651
        },
        "start": 612,
        "end": 651
      },
      "directive": null,
      "start": 612,
      "end": 652
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
            "name": "super_invariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 802
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 808
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 812
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 817,
                    "end": 819
                  },
                  "id": null,
                  "generator": false,
                  "start": 810,
                  "end": 819
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 807,
                "end": 819
              }
            ],
            "start": 805,
            "end": 821
          },
          "definite": false,
          "start": 787,
          "end": 821
        }
      ],
      "declare": false,
      "start": 783,
      "end": 822
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
            "name": "sub_invariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 878
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 884
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 887,
                      "end": 888
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 902,
                          "end": 904
                        },
                        "start": 895,
                        "end": 904
                      }
                    ],
                    "start": 893,
                    "end": 906
                  },
                  "id": null,
                  "generator": false,
                  "start": 886,
                  "end": 906
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 883,
                "end": 906
              }
            ],
            "start": 881,
            "end": 908
          },
          "definite": false,
          "start": 865,
          "end": 908
        }
      ],
      "declare": false,
      "start": 861,
      "end": 909
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 911,
          "end": 926
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 929,
          "end": 942
        },
        "start": 911,
        "end": 942
      },
      "directive": null,
      "start": 911,
      "end": 943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 954,
          "end": 967
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 970,
          "end": 985
        },
        "start": 954,
        "end": 985
      },
      "directive": null,
      "start": 954,
      "end": 986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1049,
        "end": 1050
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
          "typeAnnotation": null,
          "start": 1051,
          "end": 1052
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1054,
        "end": 1056
      },
      "expression": false,
      "start": 1040,
      "end": 1056
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 116,
  "end": 1056
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "super_covariant",
    "start": 120,
    "end": 135,
    "range": [
      120,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "sub_covariant",
    "start": 190,
    "end": 203,
    "range": [
      190,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "super_covariant",
    "start": 218,
    "end": 233,
    "range": [
      218,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "sub_covariant",
    "start": 236,
    "end": 249,
    "range": [
      236,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "sub_covariant",
    "start": 251,
    "end": 264,
    "range": [
      251,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "super_covariant",
    "start": 269,
    "end": 284,
    "range": [
      269,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 432,
    "end": 435,
    "range": [
      432,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "super_contravariant",
    "start": 436,
    "end": 455,
    "range": [
      436,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 467,
    "end": 469,
    "range": [
      467,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 518,
    "end": 521,
    "range": [
      518,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "sub_contravariant",
    "start": 522,
    "end": 539,
    "range": [
      522,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 551,
    "end": 553,
    "range": [
      551,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "super_contravariant",
    "start": 561,
    "end": 580,
    "range": [
      561,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "sub_contravariant",
    "start": 583,
    "end": 600,
    "range": [
      583,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "sub_contravariant",
    "start": 612,
    "end": 629,
    "range": [
      612,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "super_contravariant",
    "start": 632,
    "end": 651,
    "range": [
      632,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 783,
    "end": 786,
    "range": [
      783,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "super_invariant",
    "start": 787,
    "end": 802,
    "range": [
      787,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 814,
    "end": 816,
    "range": [
      814,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 861,
    "end": 864,
    "range": [
      861,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "sub_invariant",
    "start": 865,
    "end": 878,
    "range": [
      865,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 890,
    "end": 892,
    "range": [
      890,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 895,
    "end": 901,
    "range": [
      895,
      901
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 902,
    "end": 904,
    "range": [
      902,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "super_invariant",
    "start": 911,
    "end": 926,
    "range": [
      911,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "sub_invariant",
    "start": 929,
    "end": 942,
    "range": [
      929,
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
    "type": "Identifier",
    "value": "sub_invariant",
    "start": 954,
    "end": 967,
    "range": [
      954,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "super_invariant",
    "start": 970,
    "end": 985,
    "range": [
      970,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1040,
    "end": 1048,
    "range": [
      1040,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  }
]
```
