__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 610,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 26,
          "decorators": [],
          "name": "onethree",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 26,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 21,
              "end": 26,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 21,
                  "end": 22,
                  "literal": {
                    "type": "Literal",
                    "start": 21,
                    "end": 22,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 25,
                  "end": 26,
                  "literal": {
                    "type": "Literal",
                    "start": 25,
                    "end": 26,
                    "value": 3,
                    "raw": "3"
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 28,
          "end": 34,
          "decorators": [],
          "name": "two",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 34,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 33,
              "end": 34,
              "literal": {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "value": 2,
                "raw": "2"
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 610,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 57,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 56,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 52,
                  "end": 56,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 62,
            "end": 78,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 68,
                "end": 77,
                "id": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 72,
                  "end": 77,
                  "value": false,
                  "raw": "false"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 83,
            "end": 107,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 106,
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 89,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 92,
                  "end": 106,
                  "left": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 100,
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 106,
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 118,
            "end": 143,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 122,
                "end": 142,
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 124,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 127,
                  "end": 142,
                  "left": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 135,
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 138,
                    "end": 142,
                    "value": true,
                    "raw": "true"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 177,
            "end": 204,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 203,
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 183,
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 186,
                  "end": 203,
                  "left": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 194,
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Literal",
                    "start": 198,
                    "end": 203,
                    "value": false,
                    "raw": "false"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 238,
            "end": 261,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 242,
                "end": 260,
                "id": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 244,
                  "decorators": [],
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 247,
                  "end": 260,
                  "left": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 255,
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 260,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 295,
            "end": 317,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 299,
                "end": 316,
                "id": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 301,
                  "decorators": [],
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 304,
                  "end": 316,
                  "left": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 312,
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 316,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 351,
            "end": 376,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 375,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 357,
                  "decorators": [],
                  "name": "a6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 360,
                  "end": 375,
                  "left": {
                    "type": "Literal",
                    "start": 360,
                    "end": 364,
                    "value": true,
                    "raw": "true"
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 375,
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 410,
            "end": 431,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 414,
                "end": 430,
                "id": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 416,
                  "decorators": [],
                  "name": "a7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 419,
                  "end": 430,
                  "left": {
                    "type": "Literal",
                    "start": 419,
                    "end": 424,
                    "value": false,
                    "raw": "false"
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 430,
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 465,
            "end": 491,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 469,
                "end": 490,
                "id": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 471,
                  "decorators": [],
                  "name": "a8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 474,
                  "end": 490,
                  "left": {
                    "type": "Literal",
                    "start": 474,
                    "end": 479,
                    "value": "foo",
                    "raw": "'foo'"
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 490,
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 524,
            "end": 546,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 528,
                "end": 545,
                "id": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
                  "decorators": [],
                  "name": "a9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 533,
                  "end": 545,
                  "left": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 541,
                    "decorators": [],
                    "name": "onethree",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 544,
                    "end": 545,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 557,
            "end": 575,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 561,
                "end": 574,
                "id": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 564,
                  "decorators": [],
                  "name": "a10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 567,
                  "end": 574,
                  "left": {
                    "type": "Literal",
                    "start": 567,
                    "end": 568,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 574,
                    "decorators": [],
                    "name": "two",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 586,
            "end": 602,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 590,
                "end": 601,
                "id": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 593,
                  "decorators": [],
                  "name": "a11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 596,
                  "end": 601,
                  "left": {
                    "type": "Literal",
                    "start": 596,
                    "end": 597,
                    "value": 2,
                    "raw": "2"
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 600,
                    "end": 601,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
