__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 23,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 22,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1,
            "end": 8,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5,
              "end": 6,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 10,
            "end": 11,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 14,
          "end": 22,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
