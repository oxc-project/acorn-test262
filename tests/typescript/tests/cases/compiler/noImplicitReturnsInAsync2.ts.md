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
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 90
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 100,
                "end": 107
              },
              "start": 98,
              "end": 107
            },
            "start": 91,
            "end": 107
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 110,
            "end": 114
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 114
        }
      ],
      "returnType": null,
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 133
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 138,
                "end": 142
              },
              "start": 126,
              "end": 142
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 161,
                    "end": 162
                  },
                  "start": 154,
                  "end": 163
                }
              ],
              "start": 144,
              "end": 169
            },
            "alternate": null,
            "start": 122,
            "end": 169
          }
        ],
        "start": 116,
        "end": 171
      },
      "expression": false,
      "start": 70,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 260
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 270,
                "end": 277
              },
              "start": 268,
              "end": 277
            },
            "start": 261,
            "end": 277
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 280,
            "end": 284
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 284
        }
      ],
      "returnType": null,
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 305
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 310,
                "end": 314
              },
              "start": 298,
              "end": 314
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 342
                  },
                  "start": 326,
                  "end": 343
                }
              ],
              "start": 316,
              "end": 349
            },
            "alternate": null,
            "start": 294,
            "end": 349
          }
        ],
        "start": 286,
        "end": 351
      },
      "expression": false,
      "start": 240,
      "end": 351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 439
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 449,
                "end": 456
              },
              "start": 447,
              "end": 456
            },
            "start": 440,
            "end": 456
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 459,
            "end": 463
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 463
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 473
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 474,
                "end": 477
              }
            ],
            "start": 473,
            "end": 478
          },
          "start": 466,
          "end": 478
        },
        "start": 464,
        "end": 478
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 518
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 523,
                "end": 527
              },
              "start": 511,
              "end": 527
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 555
                  },
                  "start": 539,
                  "end": 556
                }
              ],
              "start": 529,
              "end": 562
            },
            "alternate": null,
            "start": 507,
            "end": 562
          }
        ],
        "start": 479,
        "end": 564
      },
      "expression": false,
      "start": 419,
      "end": 564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 637
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 647,
                "end": 654
              },
              "start": 645,
              "end": 654
            },
            "start": 638,
            "end": 654
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 657,
            "end": 661
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 638,
          "end": 661
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 671
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 672,
                "end": 678
              }
            ],
            "start": 671,
            "end": 679
          },
          "start": 664,
          "end": 679
        },
        "start": 662,
        "end": 679
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 698
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 703,
                "end": 707
              },
              "start": 691,
              "end": 707
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 735
                  },
                  "start": 719,
                  "end": 736
                }
              ],
              "start": 709,
              "end": 742
            },
            "alternate": null,
            "start": 687,
            "end": 742
          }
        ],
        "start": 680,
        "end": 744
      },
      "expression": false,
      "start": 617,
      "end": 744
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test7",
        "optional": false,
        "typeAnnotation": null,
        "start": 847,
        "end": 852
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 862,
                "end": 869
              },
              "start": 860,
              "end": 869
            },
            "start": 853,
            "end": 869
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 872,
            "end": 876
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 853,
          "end": 876
        }
      ],
      "returnType": null,
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
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 896
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 901,
                "end": 905
              },
              "start": 889,
              "end": 905
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 917,
                  "end": 924
                }
              ],
              "start": 907,
              "end": 930
            },
            "alternate": null,
            "start": 885,
            "end": 930
          }
        ],
        "start": 878,
        "end": 932
      },
      "expression": false,
      "start": 832,
      "end": 932
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 70,
  "end": 932
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 70,
    "end": 75,
    "range": [
      70,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 76,
    "end": 84,
    "range": [
      76,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 85,
    "end": 90,
    "range": [
      85,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 100,
    "end": 107,
    "range": [
      100,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 122,
    "end": 124,
    "range": [
      122,
      124
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
    "type": "Identifier",
    "value": "isError",
    "start": 126,
    "end": 133,
    "range": [
      126,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 138,
    "end": 142,
    "range": [
      138,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 154,
    "end": 160,
    "range": [
      154,
      160
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 240,
    "end": 245,
    "range": [
      240,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254,
    "range": [
      246,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 255,
    "end": 260,
    "range": [
      255,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 261,
    "end": 268,
    "range": [
      261,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 270,
    "end": 277,
    "range": [
      270,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 280,
    "end": 284,
    "range": [
      280,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 294,
    "end": 296,
    "range": [
      294,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 298,
    "end": 305,
    "range": [
      298,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 306,
    "end": 309,
    "range": [
      306,
      309
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 310,
    "end": 314,
    "range": [
      310,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 333,
    "end": 342,
    "range": [
      333,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 419,
    "end": 424,
    "range": [
      419,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 425,
    "end": 433,
    "range": [
      425,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 434,
    "end": 439,
    "range": [
      434,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 440,
    "end": 447,
    "range": [
      440,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 449,
    "end": 456,
    "range": [
      449,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 459,
    "end": 463,
    "range": [
      459,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 466,
    "end": 473,
    "range": [
      466,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 507,
    "end": 509,
    "range": [
      507,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 511,
    "end": 518,
    "range": [
      511,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 523,
    "end": 527,
    "range": [
      523,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 539,
    "end": 545,
    "range": [
      539,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 546,
    "end": 555,
    "range": [
      546,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 617,
    "end": 622,
    "range": [
      617,
      622
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 623,
    "end": 631,
    "range": [
      623,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "test6",
    "start": 632,
    "end": 637,
    "range": [
      632,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 638,
    "end": 645,
    "range": [
      638,
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
    "value": "boolean",
    "start": 647,
    "end": 654,
    "range": [
      647,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 657,
    "end": 661,
    "range": [
      657,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 664,
    "end": 671,
    "range": [
      664,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678,
    "range": [
      672,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 687,
    "end": 689,
    "range": [
      687,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 691,
    "end": 698,
    "range": [
      691,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 699,
    "end": 702,
    "range": [
      699,
      702
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 703,
    "end": 707,
    "range": [
      703,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 719,
    "end": 725,
    "range": [
      719,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 726,
    "end": 735,
    "range": [
      726,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 832,
    "end": 837,
    "range": [
      832,
      837
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 838,
    "end": 846,
    "range": [
      838,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "test7",
    "start": 847,
    "end": 852,
    "range": [
      847,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 853,
    "end": 860,
    "range": [
      853,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 862,
    "end": 869,
    "range": [
      862,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 872,
    "end": 876,
    "range": [
      872,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 885,
    "end": 887,
    "range": [
      885,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 889,
    "end": 896,
    "range": [
      889,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 897,
    "end": 900,
    "range": [
      897,
      900
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 901,
    "end": 905,
    "range": [
      901,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  }
]
```
