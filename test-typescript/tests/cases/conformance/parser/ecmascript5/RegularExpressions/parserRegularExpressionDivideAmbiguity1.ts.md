__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 21,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 20,
        "operator": "/",
        "left": {
          "type": "BinaryExpression",
          "start": 0,
          "end": 12,
          "operator": "/",
          "left": {
            "type": "Literal",
            "start": 0,
            "end": 1,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Identifier",
            "start": 3,
            "end": 12,
            "decorators": [],
            "name": "notregexp",
            "optional": false
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 13,
          "end": 20,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 13,
            "end": 18,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
