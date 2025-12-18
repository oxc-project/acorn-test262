__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 22,
    "end": 27,
    "range": [
      22,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 28,
    "end": 33,
    "range": [
      28,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 35,
    "end": 37,
    "range": [
      35,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 40,
    "end": 42,
    "range": [
      40,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 44,
    "end": 47,
    "range": [
      44,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 48,
    "end": 51,
    "range": [
      48,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 54,
    "end": 59,
    "range": [
      54,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 73,
    "end": 78,
    "range": [
      73,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 79,
    "end": 82,
    "range": [
      79,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 94,
    "end": 101,
    "range": [
      94,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 102,
    "end": 107,
    "range": [
      102,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 108,
    "end": 118,
    "range": [
      108,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 124,
    "end": 127,
    "range": [
      124,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 128,
    "end": 130,
    "range": [
      128,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 133,
    "end": 143,
    "range": [
      133,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 145,
    "end": 147,
    "range": [
      145,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 150,
    "end": 152,
    "range": [
      150,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 155,
    "end": 157,
    "range": [
      155,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 158,
    "end": 160,
    "range": [
      158,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 172,
    "end": 175,
    "range": [
      172,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 176,
    "end": 178,
    "range": [
      176,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 181,
    "end": 191,
    "range": [
      181,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 193,
    "end": 195,
    "range": [
      193,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 203,
    "end": 205,
    "range": [
      203,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 206,
    "end": 208,
    "range": [
      206,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 220,
    "end": 223,
    "range": [
      220,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 224,
    "end": 226,
    "range": [
      224,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 229,
    "end": 239,
    "range": [
      229,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 241,
    "end": 243,
    "range": [
      241,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 246,
    "end": 248,
    "range": [
      246,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 251,
    "end": 253,
    "range": [
      251,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 254,
    "end": 256,
    "range": [
      254,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 268,
    "end": 271,
    "range": [
      268,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 272,
    "end": 274,
    "range": [
      272,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 277,
    "end": 287,
    "range": [
      277,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 294,
    "end": 296,
    "range": [
      294,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 297,
    "end": 299,
    "range": [
      297,
      299
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 300,
    "end": 302,
    "range": [
      300,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 303,
    "end": 305,
    "range": [
      303,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 317,
    "end": 320,
    "range": [
      317,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 321,
    "end": 323,
    "range": [
      321,
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
    "type": "Identifier",
    "value": "numLiteral",
    "start": 326,
    "end": 336,
    "range": [
      326,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 338,
    "end": 340,
    "range": [
      338,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 343,
    "end": 345,
    "range": [
      343,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 348,
    "end": 350,
    "range": [
      348,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 351,
    "end": 353,
    "range": [
      351,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 365,
    "end": 368,
    "range": [
      365,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 369,
    "end": 371,
    "range": [
      369,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 374,
    "end": 384,
    "range": [
      374,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 386,
    "end": 388,
    "range": [
      386,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 391,
    "end": 393,
    "range": [
      391,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 396,
    "end": 398,
    "range": [
      396,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 399,
    "end": 401,
    "range": [
      399,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 413,
    "end": 416,
    "range": [
      413,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 417,
    "end": 419,
    "range": [
      417,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 422,
    "end": 432,
    "range": [
      422,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 434,
    "end": 436,
    "range": [
      434,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 439,
    "end": 441,
    "range": [
      439,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 442,
    "end": 444,
    "range": [
      442,
      444
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 447,
    "end": 449,
    "range": [
      447,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 465,
    "end": 467,
    "range": [
      465,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 470,
    "end": 480,
    "range": [
      470,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 482,
    "end": 484,
    "range": [
      482,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 487,
    "end": 489,
    "range": [
      487,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 490,
    "end": 493,
    "range": [
      490,
      493
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 496,
    "end": 498,
    "range": [
      496,
      498
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 510,
    "end": 513,
    "range": [
      510,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 514,
    "end": 516,
    "range": [
      514,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "numLiteral",
    "start": 519,
    "end": 529,
    "range": [
      519,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 531,
    "end": 533,
    "range": [
      531,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 536,
    "end": 538,
    "range": [
      536,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 539,
    "end": 541,
    "range": [
      539,
      541
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 544,
    "end": 546,
    "range": [
      544,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 558,
    "end": 565,
    "range": [
      558,
      565
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 566,
    "end": 571,
    "range": [
      566,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "literalUnion",
    "start": 572,
    "end": 584,
    "range": [
      572,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 586,
    "end": 589,
    "range": [
      586,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 595,
    "end": 598,
    "range": [
      595,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 599,
    "end": 602,
    "range": [
      599,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "literalUnion",
    "start": 605,
    "end": 617,
    "range": [
      605,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 619,
    "end": 622,
    "range": [
      619,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 625,
    "end": 628,
    "range": [
      625,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 631,
    "end": 634,
    "range": [
      631,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 635,
    "end": 638,
    "range": [
      635,
      638
    ]
  }
]
```
