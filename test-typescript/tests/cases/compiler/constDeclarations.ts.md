__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 185,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 23,
            "end": 28,
            "raw": "false",
            "value": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 46,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 49,
            "end": 51,
            "raw": "23",
            "value": 23
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 61,
            "decorators": [],
            "name": "c3",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "raw": "0",
            "value": 0
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 77,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 82,
            "raw": "\"\"",
            "value": ""
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 86,
            "decorators": [],
            "name": "c5",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 89,
            "end": 93,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForStatement",
      "start": 97,
      "end": 135,
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 135,
        "body": [
          {
            "type": "BreakStatement",
            "start": 127,
            "end": 133,
            "label": null
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 101,
        "end": 113,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 107,
            "end": 113,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 109,
              "decorators": [],
              "name": "c4",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 112,
              "end": 113,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 115,
        "end": 121,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 117,
          "decorators": [],
          "name": "c4",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 120,
          "end": 121,
          "raw": "9",
          "value": 9
        }
      },
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 138,
      "end": 185,
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 185,
        "body": [
          {
            "type": "BreakStatement",
            "start": 177,
            "end": 183,
            "label": null
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 142,
        "end": 162,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 148,
            "end": 154,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 150,
              "decorators": [],
              "name": "c5",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 153,
              "end": 154,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 156,
            "end": 162,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 158,
              "decorators": [],
              "name": "c6",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 161,
              "end": 162,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 164,
        "end": 171,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 164,
          "end": 166,
          "decorators": [],
          "name": "c5",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 169,
          "end": 171,
          "decorators": [],
          "name": "c6",
          "optional": false
        }
      },
      "update": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
