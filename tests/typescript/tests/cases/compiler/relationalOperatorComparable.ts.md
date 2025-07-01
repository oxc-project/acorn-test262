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
          "type": "Identifier",
          "decorators": [],
          "name": "onethree",
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
                    "start": 21,
                    "end": 22
                  },
                  "start": 21,
                  "end": 22
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 25,
                    "end": 26
                  },
                  "start": 25,
                  "end": 26
                }
              ],
              "start": 21,
              "end": 26
            },
            "start": 19,
            "end": 26
          },
          "start": 11,
          "end": 26
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "two",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 33,
                "end": 34
              },
              "start": 33,
              "end": 34
            },
            "start": 31,
            "end": 34
          },
          "start": 28,
          "end": 34
        }
      ],
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 52,
                  "end": 56
                },
                "definite": false,
                "start": 48,
                "end": 56
              }
            ],
            "declare": false,
            "start": 42,
            "end": 57
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "init": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 72,
                  "end": 77
                },
                "definite": false,
                "start": 68,
                "end": 77
              }
            ],
            "declare": false,
            "start": 62,
            "end": 78
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 89
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 100
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 106
                  },
                  "start": 92,
                  "end": 106
                },
                "definite": false,
                "start": 87,
                "end": 106
              }
            ],
            "declare": false,
            "start": 83,
            "end": 107
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 124
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 135
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 138,
                    "end": 142
                  },
                  "start": 127,
                  "end": 142
                },
                "definite": false,
                "start": 122,
                "end": 142
              }
            ],
            "declare": false,
            "start": 118,
            "end": 143
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 183
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 194
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 198,
                    "end": 203
                  },
                  "start": 186,
                  "end": 203
                },
                "definite": false,
                "start": 181,
                "end": 203
              }
            ],
            "declare": false,
            "start": 177,
            "end": 204
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 244
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 255
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 260
                  },
                  "start": 247,
                  "end": 260
                },
                "definite": false,
                "start": 242,
                "end": 260
              }
            ],
            "declare": false,
            "start": 238,
            "end": 261
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
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 301
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 312
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 316
                  },
                  "start": 304,
                  "end": 316
                },
                "definite": false,
                "start": 299,
                "end": 316
              }
            ],
            "declare": false,
            "start": 295,
            "end": 317
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
                  "name": "a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 357
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 360,
                    "end": 364
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 375
                  },
                  "start": 360,
                  "end": 375
                },
                "definite": false,
                "start": 355,
                "end": 375
              }
            ],
            "declare": false,
            "start": 351,
            "end": 376
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
                  "name": "a7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 416
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 419,
                    "end": 424
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 430
                  },
                  "start": 419,
                  "end": 430
                },
                "definite": false,
                "start": 414,
                "end": 430
              }
            ],
            "declare": false,
            "start": 410,
            "end": 431
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
                  "name": "a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 471
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 474,
                    "end": 479
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 490
                  },
                  "start": 474,
                  "end": 490
                },
                "definite": false,
                "start": 469,
                "end": 490
              }
            ],
            "declare": false,
            "start": 465,
            "end": 491
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
                  "name": "a9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 530
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 541
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 544,
                    "end": 545
                  },
                  "start": 533,
                  "end": 545
                },
                "definite": false,
                "start": 528,
                "end": 545
              }
            ],
            "declare": false,
            "start": 524,
            "end": 546
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
                  "name": "a10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 564
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 567,
                    "end": 568
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 574
                  },
                  "start": 567,
                  "end": 574
                },
                "definite": false,
                "start": 561,
                "end": 574
              }
            ],
            "declare": false,
            "start": 557,
            "end": 575
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
                  "name": "a11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 593
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 596,
                    "end": 597
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 600,
                    "end": 601
                  },
                  "start": 596,
                  "end": 601
                },
                "definite": false,
                "start": 590,
                "end": 601
              }
            ],
            "declare": false,
            "start": 586,
            "end": 602
          }
        ],
        "start": 36,
        "end": 610
      },
      "expression": false,
      "start": 0,
      "end": 610
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 610
}
```
