__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "name": "_this",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 72,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ThisExpression",
              "start": 68,
              "end": 72
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 85,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 79,
          "name": "_this",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 82,
          "end": 84,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
