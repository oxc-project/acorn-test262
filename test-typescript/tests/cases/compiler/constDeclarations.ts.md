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
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 23,
            "end": 28,
            "value": false,
            "raw": "false"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 46,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 49,
            "end": 51,
            "value": 23,
            "raw": "23"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 61,
            "name": "c3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 77,
            "name": "c4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 82,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 93,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 86,
            "name": "c5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 89,
            "end": 93,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForStatement",
      "start": 97,
      "end": 135,
      "init": {
        "type": "VariableDeclaration",
        "start": 101,
        "end": 113,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 107,
            "end": 113,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 109,
              "name": "c4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 112,
              "end": 113,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 115,
        "end": 121,
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 117,
          "name": "c4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 120,
          "end": 121,
          "value": 9,
          "raw": "9"
        }
      },
      "update": null,
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
      }
    },
    {
      "type": "ForStatement",
      "start": 138,
      "end": 185,
      "init": {
        "type": "VariableDeclaration",
        "start": 142,
        "end": 162,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 148,
            "end": 154,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 150,
              "name": "c5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 153,
              "end": 154,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 156,
            "end": 162,
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 158,
              "name": "c6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 161,
              "end": 162,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 164,
        "end": 171,
        "left": {
          "type": "Identifier",
          "start": 164,
          "end": 166,
          "name": "c5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "start": 169,
          "end": 171,
          "name": "c6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "update": null,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
