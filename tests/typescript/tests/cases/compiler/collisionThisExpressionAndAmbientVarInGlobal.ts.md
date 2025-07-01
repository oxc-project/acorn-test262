__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              },
              "start": 17,
              "end": 25
            },
            "start": 12,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ThisExpression",
              "start": 68,
              "end": 72
            },
            "id": null,
            "generator": false,
            "start": 62,
            "end": 72
          },
          "definite": false,
          "start": 58,
          "end": 72
        }
      ],
      "declare": false,
      "start": 54,
      "end": 73
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 79
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 82,
          "end": 84
        },
        "start": 74,
        "end": 84
      },
      "directive": null,
      "start": 74,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 94
}
```
