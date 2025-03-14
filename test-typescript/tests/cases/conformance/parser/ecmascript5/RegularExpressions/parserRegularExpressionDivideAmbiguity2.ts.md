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
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 22,
        "operator": "/",
        "left": {
          "type": "BinaryExpression",
          "start": 0,
          "end": 14,
          "operator": "/",
          "left": {
            "type": "Literal",
            "start": 1,
            "end": 2,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Identifier",
            "start": 5,
            "end": 14,
            "decorators": [],
            "name": "notregexp",
            "optional": false
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 15,
          "end": 22,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 15,
            "end": 20,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
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
