__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 22,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 21,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 0,
          "end": 9,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 0,
            "end": 7,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 1,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2,
              "end": 7,
              "decorators": [],
              "name": "index",
              "optional": false
            }
          },
          "right": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 10,
          "end": 21,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 10,
            "end": 14,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 12,
              "end": 13,
              "raw": "0",
              "value": 0
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 21,
            "decorators": [],
            "name": "length",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
