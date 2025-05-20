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
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 24,
        "raw": "'arglebaz'",
        "value": "arglebaz"
      },
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
      "phase": null,
      "attributes": []
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
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 31,
            "end": 40,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 31,
              "end": 36,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 33,
                "end": 36,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "raw": "1",
              "value": 1
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
