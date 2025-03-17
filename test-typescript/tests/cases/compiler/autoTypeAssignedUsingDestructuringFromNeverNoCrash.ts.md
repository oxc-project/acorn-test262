__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 178,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 78,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 78,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 74,
                "end": 78
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "name": "file",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 132,
                    "end": 136,
                    "name": "file",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "name": "file",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
