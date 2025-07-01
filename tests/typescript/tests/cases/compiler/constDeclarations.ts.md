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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 20
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 23,
            "end": 28
          },
          "definite": false,
          "start": 18,
          "end": 28
        }
      ],
      "declare": false,
      "start": 12,
      "end": 29
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "start": 36,
            "end": 46
          },
          "init": {
            "type": "Literal",
            "value": 23,
            "raw": "23",
            "start": 49,
            "end": 51
          },
          "definite": false,
          "start": 36,
          "end": 51
        }
      ],
      "declare": false,
      "start": 30,
      "end": 52
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 61
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 64,
            "end": 65
          },
          "definite": false,
          "start": 59,
          "end": 65
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              },
              "start": 70,
              "end": 77
            },
            "start": 67,
            "end": 77
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 80,
            "end": 82
          },
          "definite": false,
          "start": 67,
          "end": 82
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 86
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 89,
            "end": 93
          },
          "definite": false,
          "start": 84,
          "end": 93
        }
      ],
      "declare": false,
      "start": 53,
      "end": 94
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 109
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 112,
              "end": 113
            },
            "definite": false,
            "start": 107,
            "end": 113
          }
        ],
        "declare": false,
        "start": 101,
        "end": 113
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c4",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 117
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 9,
          "raw": "9",
          "start": 120,
          "end": 121
        },
        "start": 115,
        "end": 121
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 127,
            "end": 133
          }
        ],
        "start": 125,
        "end": 135
      },
      "start": 97,
      "end": 135
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 150
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 153,
              "end": 154
            },
            "definite": false,
            "start": 148,
            "end": 154
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c6",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 158
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 161,
              "end": 162
            },
            "definite": false,
            "start": 156,
            "end": 162
          }
        ],
        "declare": false,
        "start": 142,
        "end": 162
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 166
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c6",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 171
        },
        "start": 164,
        "end": 171
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null,
            "start": 177,
            "end": 183
          }
        ],
        "start": 175,
        "end": 185
      },
      "start": 138,
      "end": 185
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 185
}
```
