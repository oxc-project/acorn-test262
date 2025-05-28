__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 24,
        "value": "arglebaz",
        "raw": "'arglebaz'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "BlockStatement",
      "start": 25,
      "end": 42,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 31,
          "end": 40,
          "expression": {
            "type": "AssignmentExpression",
            "start": 31,
            "end": 40,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 31,
              "end": 36,
              "object": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 33,
                "end": 36,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
