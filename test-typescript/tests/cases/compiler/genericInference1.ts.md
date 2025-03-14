__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 35,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 34,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 20,
            "end": 33,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 25,
              "end": 33,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 33,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 19,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 0,
            "end": 15,
            "elements": [
              {
                "type": "Literal",
                "start": 1,
                "end": 4,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 6,
                "end": 9,
                "raw": "'b'",
                "value": "b"
              },
              {
                "type": "Literal",
                "start": 11,
                "end": 14,
                "raw": "'c'",
                "value": "c"
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "decorators": [],
            "name": "map",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
