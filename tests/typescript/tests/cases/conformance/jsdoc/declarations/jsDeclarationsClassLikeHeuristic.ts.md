__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 61
        }
      ],
      "declare": false,
      "start": 56,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 64
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 67,
          "end": 69
        },
        "start": 63,
        "end": 69
      },
      "directive": null,
      "start": 63,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 82
            },
            "optional": false,
            "computed": false,
            "start": 71,
            "end": 82
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "optional": false,
          "computed": false,
          "start": 71,
          "end": 84
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 87,
          "end": 89
        },
        "start": 71,
        "end": 89
      },
      "directive": null,
      "start": 71,
      "end": 90
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 90
}
```
