__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 177,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 79,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 78,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 78,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 74,
                "end": 78
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 89,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "file",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 91,
      "end": 144,
      "test": {
        "type": "BinaryExpression",
        "start": 95,
        "end": 105,
        "left": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 101,
          "end": 105,
          "value": null,
          "raw": "null"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 107,
        "end": 121,
        "body": []
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 127,
        "end": 144,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 131,
            "end": 142,
            "expression": {
              "type": "AssignmentExpression",
              "start": 131,
              "end": 141,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 131,
                "end": 137,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 132,
                    "end": 136,
                    "decorators": [],
                    "name": "file",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 151,
      "expression": {
        "type": "Identifier",
        "start": 146,
        "end": 150,
        "decorators": [],
        "name": "file",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
