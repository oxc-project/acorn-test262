__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 12,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 30,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 14,
          "end": 24,
          "object": {
            "type": "MemberExpression",
            "start": 14,
            "end": 20,
            "object": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 20,
              "name": "bar"
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 21,
            "end": 24,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 27,
          "end": 29,
          "value": 20,
          "raw": "20"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
