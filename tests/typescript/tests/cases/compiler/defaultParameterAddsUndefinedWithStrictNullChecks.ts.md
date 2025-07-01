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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "addUndefined1",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 24
          },
          "right": {
            "type": "Literal",
            "value": "J",
            "raw": "\"J\"",
            "start": 27,
            "end": 30
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 30
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "addUndefined2",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 48,
              "end": 54
            },
            "start": 46,
            "end": 54
          },
          "start": 32,
          "end": 54
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addUndefined1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 82
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 89
                },
                "optional": false,
                "computed": false,
                "start": 69,
                "end": 89
              },
              "operator": "+",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addUndefined2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 106
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 110,
                  "end": 111
                },
                "start": 93,
                "end": 111
              },
              "start": 69,
              "end": 112
            },
            "start": 62,
            "end": 113
          }
        ],
        "start": 56,
        "end": 115
      },
      "expression": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "addUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 139
          },
          "right": {
            "type": "Literal",
            "value": "J",
            "raw": "\"J\"",
            "start": 142,
            "end": 145
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 145
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "addDefined",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 159,
              "end": 165
            },
            "start": 157,
            "end": 165
          },
          "start": 147,
          "end": 165
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "addUndefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 199
                },
                "optional": false,
                "computed": false,
                "start": 180,
                "end": 199
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "addDefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 212
              },
              "start": 180,
              "end": 212
            },
            "start": 173,
            "end": 213
          }
        ],
        "start": 167,
        "end": 215
      },
      "expression": false,
      "start": 116,
      "end": 215
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
            "name": "total",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 225
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 228,
                  "end": 231
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 235
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 236,
                      "end": 239
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 241,
                      "end": 242
                    }
                  ],
                  "optional": false,
                  "start": 234,
                  "end": 243
                },
                "start": 228,
                "end": 243
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 247
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 248,
                    "end": 251
                  }
                ],
                "optional": false,
                "start": 246,
                "end": 252
              },
              "start": 228,
              "end": 252
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 266
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 268,
                  "end": 269
                }
              ],
              "optional": false,
              "start": 255,
              "end": 270
            },
            "start": 228,
            "end": 270
          },
          "definite": false,
          "start": 220,
          "end": 270
        }
      ],
      "declare": false,
      "start": 216,
      "end": 271
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "total",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 277
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 282,
                "end": 285
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 287,
                "end": 288
              }
            ],
            "optional": false,
            "start": 280,
            "end": 289
          },
          "operator": "+",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 303
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 305,
                "end": 306
              }
            ],
            "optional": false,
            "start": 292,
            "end": 307
          },
          "start": 280,
          "end": 307
        },
        "start": 272,
        "end": 307
      },
      "directive": null,
      "start": 272,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 323
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 327,
                "end": 333
              },
              "start": 325,
              "end": 333
            },
            "start": 324,
            "end": 333
          },
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 336,
            "end": 344
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 344
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 349,
              "end": 355
            },
            "start": 347,
            "end": 355
          },
          "start": 346,
          "end": 355
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 363,
                "end": 364
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 371
              },
              "optional": false,
              "computed": false,
              "start": 363,
              "end": 371
            },
            "directive": null,
            "start": 363,
            "end": 372
          }
        ],
        "start": 357,
        "end": 374
      },
      "expression": false,
      "start": 310,
      "end": 374
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 391
          },
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 394,
            "end": 402
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 390,
          "end": 402
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 407,
              "end": 413
            },
            "start": 405,
            "end": 413
          },
          "start": 404,
          "end": 413
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "start": 421,
                "end": 422
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 429
              },
              "optional": false,
              "computed": false,
              "start": 421,
              "end": 429
            },
            "directive": null,
            "start": 421,
            "end": 430
          }
        ],
        "start": 415,
        "end": 456
      },
      "expression": false,
      "start": 376,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 471
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                    "start": 475,
                    "end": 481
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 484,
                    "end": 493
                  }
                ],
                "start": 475,
                "end": 493
              },
              "start": 473,
              "end": 493
            },
            "start": 472,
            "end": 493
          },
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 496,
            "end": 504
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 504
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 509,
              "end": 515
            },
            "start": 507,
            "end": 515
          },
          "start": 506,
          "end": 515
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
          },
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
                "start": 561,
                "end": 562
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 565,
                "end": 574
              },
              "start": 561,
              "end": 574
            },
            "directive": null,
            "start": 561,
            "end": 575
          }
        ],
        "start": 517,
        "end": 577
      },
      "expression": false,
      "start": 458,
      "end": 577
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 588,
        "end": 592
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                    "start": 596,
                    "end": 602
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 605,
                    "end": 614
                  }
                ],
                "start": 596,
                "end": 614
              },
              "start": 594,
              "end": 614
            },
            "start": 593,
            "end": 614
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 626
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 593,
          "end": 626
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 631,
              "end": 637
            },
            "start": 629,
            "end": 637
          },
          "start": 628,
          "end": 637
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 646
            },
            "directive": null,
            "start": 645,
            "end": 647
          },
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
                "start": 684,
                "end": 685
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 697
              },
              "start": 684,
              "end": 697
            },
            "directive": null,
            "start": 684,
            "end": 698
          }
        ],
        "start": 639,
        "end": 700
      },
      "expression": false,
      "start": 579,
      "end": 700
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalNullableString",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 729
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 732,
            "end": 738
          },
          {
            "type": "TSNullKeyword",
            "start": 741,
            "end": 745
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 748,
            "end": 757
          }
        ],
        "start": 732,
        "end": 757
      },
      "declare": false,
      "start": 702,
      "end": 758
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "allowsNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 778
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionalNullableString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 806
                },
                "typeArguments": null,
                "start": 784,
                "end": 806
              },
              "start": 782,
              "end": 806
            },
            "start": 779,
            "end": 806
          },
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 809,
            "end": 811
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 779,
          "end": 811
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 822
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 825,
                "end": 829
              },
              "start": 819,
              "end": 829
            },
            "directive": null,
            "start": 819,
            "end": 830
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 838
              },
              "right": {
                "type": "Literal",
                "value": "string and null are both ok",
                "raw": "'string and null are both ok'",
                "start": 841,
                "end": 870
              },
              "start": 835,
              "end": 870
            },
            "directive": null,
            "start": 835,
            "end": 871
          }
        ],
        "start": 813,
        "end": 873
      },
      "expression": false,
      "start": 759,
      "end": 873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "allowsNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 874,
          "end": 884
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 885,
            "end": 889
          }
        ],
        "optional": false,
        "start": 874,
        "end": 890
      },
      "directive": null,
      "start": 874,
      "end": 891
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 996,
          "end": 1000
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1010
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1012,
            "end": 1013
          }
        ],
        "optional": false,
        "start": 996,
        "end": 1014
      },
      "directive": null,
      "start": 996,
      "end": 1015
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1016,
          "end": 1020
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1030
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1032,
            "end": 1033
          }
        ],
        "optional": false,
        "start": 1016,
        "end": 1034
      },
      "directive": null,
      "start": 1016,
      "end": 1035
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1036,
          "end": 1040
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1041,
            "end": 1050
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1052,
            "end": 1053
          }
        ],
        "optional": false,
        "start": 1036,
        "end": 1054
      },
      "directive": null,
      "start": 1036,
      "end": 1055
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1056,
          "end": 1060
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1061,
            "end": 1070
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1072,
            "end": 1073
          }
        ],
        "optional": false,
        "start": 1056,
        "end": 1074
      },
      "directive": null,
      "start": 1056,
      "end": 1075
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "removeUndefinedButNotFalse",
        "optional": false,
        "typeAnnotation": null,
        "start": 1087,
        "end": 1113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1114,
            "end": 1115
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1118,
            "end": 1122
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1114,
          "end": 1122
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1135
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 1140,
                "end": 1145
              },
              "start": 1134,
              "end": 1145
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1164,
                    "end": 1165
                  },
                  "start": 1157,
                  "end": 1166
                }
              ],
              "start": 1147,
              "end": 1172
            },
            "alternate": null,
            "start": 1130,
            "end": 1172
          }
        ],
        "start": 1124,
        "end": 1174
      },
      "expression": false,
      "start": 1078,
      "end": 1174
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1196,
                "end": 1203
              },
              "start": 1194,
              "end": 1203
            },
            "start": 1190,
            "end": 1203
          },
          "init": null,
          "definite": false,
          "start": 1190,
          "end": 1203
        }
      ],
      "declare": true,
      "start": 1176,
      "end": 1204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "removeNothing",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1227
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1229
          },
          "right": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1232,
              "end": 1236
            },
            "consequent": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1239,
              "end": 1243
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1246,
              "end": 1255
            },
            "start": 1232,
            "end": 1255
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1228,
          "end": 1255
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1267,
                "end": 1268
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1282
              },
              "start": 1267,
              "end": 1282
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1298,
                      "end": 1299
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1304,
                      "end": 1309
                    },
                    "start": 1298,
                    "end": 1309
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1332,
                          "end": 1333
                        },
                        "start": 1325,
                        "end": 1334
                      }
                    ],
                    "start": 1311,
                    "end": 1344
                  },
                  "alternate": null,
                  "start": 1294,
                  "end": 1344
                }
              ],
              "start": 1284,
              "end": 1350
            },
            "alternate": null,
            "start": 1263,
            "end": 1350
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1362,
              "end": 1366
            },
            "start": 1355,
            "end": 1367
          }
        ],
        "start": 1257,
        "end": 1369
      },
      "expression": false,
      "start": 1205,
      "end": 1369
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1369
}
```
