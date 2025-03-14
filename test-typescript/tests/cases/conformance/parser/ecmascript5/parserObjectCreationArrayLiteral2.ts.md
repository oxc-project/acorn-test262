__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 11,
      "expression": {
        "type": "NewExpression",
        "start": 0,
        "end": 10,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 4,
          "end": 10,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
