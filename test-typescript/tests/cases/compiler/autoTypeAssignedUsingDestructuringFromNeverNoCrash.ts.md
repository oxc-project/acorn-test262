autoTypeAssignedUsingDestructuringFromNeverNoCrash.ts
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "file",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 91,
      "end": 144,
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
                    "optional": false
                  }
                ],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 107,
        "end": 121,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 95,
        "end": 105,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 101,
          "end": 105,
          "raw": "null",
          "value": null
        }
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
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
