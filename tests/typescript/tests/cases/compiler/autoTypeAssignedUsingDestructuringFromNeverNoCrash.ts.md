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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 74,
                "end": 78
              },
              "start": 72,
              "end": 78
            },
            "start": 71,
            "end": 78
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 78
        }
      ],
      "declare": true,
      "start": 57,
      "end": 79
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
            "name": "file",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 88
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 88
        }
      ],
      "declare": false,
      "start": 80,
      "end": 89
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 96
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 101,
          "end": 105
        },
        "start": 95,
        "end": 105
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 107,
        "end": 121
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "file",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 136
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 137
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 141
              },
              "start": 131,
              "end": 141
            },
            "directive": null,
            "start": 131,
            "end": 142
          }
        ],
        "start": 127,
        "end": 144
      },
      "start": 91,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "file",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 150
      },
      "directive": null,
      "start": 146,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 177
}
```
