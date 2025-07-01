__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "empty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 35,
                  "end": 37
                },
                "start": 35,
                "end": 37
              },
              "start": 33,
              "end": 37
            },
            "start": 28,
            "end": 37
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 40,
            "end": 42
          },
          "definite": false,
          "start": 28,
          "end": 42
        }
      ],
      "declare": false,
      "start": 22,
      "end": 43
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "empty",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 59
          },
          "definite": false,
          "start": 48,
          "end": 59
        }
      ],
      "declare": false,
      "start": 44,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 64
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 73,
            "end": 78
          },
          "start": 67,
          "end": 78
        },
        "start": 61,
        "end": 78
      },
      "directive": null,
      "start": 61,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 82
      },
      "directive": null,
      "start": 79,
      "end": 82
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
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 120,
                  "end": 121
                },
                "start": 120,
                "end": 121
              },
              "start": 118,
              "end": 121
            },
            "start": 108,
            "end": 121
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 121
        }
      ],
      "declare": true,
      "start": 94,
      "end": 122
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 130
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 143
          },
          "definite": false,
          "start": 128,
          "end": 143
        }
      ],
      "declare": false,
      "start": 124,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 147
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 152
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 155,
            "end": 157
          },
          "start": 150,
          "end": 157
        },
        "start": 145,
        "end": 157
      },
      "directive": null,
      "start": 145,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
      },
      "directive": null,
      "start": 158,
      "end": 160
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 178
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 191
          },
          "definite": false,
          "start": 176,
          "end": 191
        }
      ],
      "declare": false,
      "start": 172,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 195
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 200
          },
          "operator": "-",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 203,
            "end": 205
          },
          "start": 198,
          "end": 205
        },
        "start": 193,
        "end": 205
      },
      "directive": null,
      "start": 193,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 208
      },
      "directive": null,
      "start": 206,
      "end": 208
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 226
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 239
          },
          "definite": false,
          "start": 224,
          "end": 239
        }
      ],
      "declare": false,
      "start": 220,
      "end": 240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 243
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 248
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 251,
            "end": 253
          },
          "start": 246,
          "end": 253
        },
        "start": 241,
        "end": 253
      },
      "directive": null,
      "start": 241,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 256
      },
      "directive": null,
      "start": 254,
      "end": 256
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 274
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 287
          },
          "definite": false,
          "start": 272,
          "end": 287
        }
      ],
      "declare": false,
      "start": 268,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 291
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 296
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 300,
            "end": 302
          },
          "start": 294,
          "end": 302
        },
        "start": 289,
        "end": 302
      },
      "directive": null,
      "start": 289,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t4",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 305
      },
      "directive": null,
      "start": 303,
      "end": 305
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
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 323
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 336
          },
          "definite": false,
          "start": 321,
          "end": 336
        }
      ],
      "declare": false,
      "start": 317,
      "end": 337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t5",
          "optional": false,
          "typeAnnotation": null,
          "start": 338,
          "end": 340
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 345
          },
          "operator": "/",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 348,
            "end": 350
          },
          "start": 343,
          "end": 350
        },
        "start": 338,
        "end": 350
      },
      "directive": null,
      "start": 338,
      "end": 350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 353
      },
      "directive": null,
      "start": 351,
      "end": 353
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
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 371
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 384
          },
          "definite": false,
          "start": 369,
          "end": 384
        }
      ],
      "declare": false,
      "start": 365,
      "end": 385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t6",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 388
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 393
          },
          "operator": "%",
          "right": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 396,
            "end": 398
          },
          "start": 391,
          "end": 398
        },
        "start": 386,
        "end": 398
      },
      "directive": null,
      "start": 386,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t6",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 401
      },
      "directive": null,
      "start": 399,
      "end": 401
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
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 419
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 432
          },
          "definite": false,
          "start": 417,
          "end": 432
        }
      ],
      "declare": false,
      "start": 413,
      "end": 433
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t7",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 436
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 441
          },
          "operator": ">>",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 445,
            "end": 446
          },
          "start": 439,
          "end": 446
        },
        "start": 434,
        "end": 446
      },
      "directive": null,
      "start": 434,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t7",
        "optional": false,
        "typeAnnotation": null,
        "start": 447,
        "end": 449
      },
      "directive": null,
      "start": 447,
      "end": 449
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
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 467
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 480
          },
          "definite": false,
          "start": 465,
          "end": 480
        }
      ],
      "declare": false,
      "start": 461,
      "end": 481
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t8",
          "optional": false,
          "typeAnnotation": null,
          "start": 482,
          "end": 484
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 489
          },
          "operator": ">>>",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 494,
            "end": 495
          },
          "start": 487,
          "end": 495
        },
        "start": 482,
        "end": 495
      },
      "directive": null,
      "start": 482,
      "end": 495
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t8",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 498
      },
      "directive": null,
      "start": 496,
      "end": 498
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
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 514,
            "end": 516
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "numLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 529
          },
          "definite": false,
          "start": 514,
          "end": 529
        }
      ],
      "declare": false,
      "start": 510,
      "end": 530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t9",
          "optional": false,
          "typeAnnotation": null,
          "start": 531,
          "end": 533
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 538
          },
          "operator": "<<",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 542,
            "end": 543
          },
          "start": 536,
          "end": 543
        },
        "start": 531,
        "end": 543
      },
      "directive": null,
      "start": 531,
      "end": 543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t9",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 546
      },
      "directive": null,
      "start": 544,
      "end": 546
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
            "name": "literalUnion",
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
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 586,
                      "end": 589
                    },
                    "start": 586,
                    "end": 589
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 592,
                      "end": 593
                    },
                    "start": 592,
                    "end": 593
                  }
                ],
                "start": 586,
                "end": 593
              },
              "start": 584,
              "end": 593
            },
            "start": 572,
            "end": 593
          },
          "init": null,
          "definite": false,
          "start": 572,
          "end": 593
        }
      ],
      "declare": true,
      "start": 558,
      "end": 594
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
            "name": "t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 602
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "literalUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 605,
            "end": 617
          },
          "definite": false,
          "start": 599,
          "end": 617
        }
      ],
      "declare": false,
      "start": 595,
      "end": 618
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t10",
          "optional": false,
          "typeAnnotation": null,
          "start": 619,
          "end": 622
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 628
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 631,
            "end": 634
          },
          "start": 625,
          "end": 634
        },
        "start": 619,
        "end": 634
      },
      "directive": null,
      "start": 619,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "t10",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 638
      },
      "directive": null,
      "start": 635,
      "end": 638
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 648
}
```
