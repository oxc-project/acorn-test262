symbolType2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 32,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 31,
        "operator": "in",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 25,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 25,
            "decorators": [],
            "name": "isConcatSpreadable",
            "optional": false
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 29,
          "end": 31,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 58,
      "expression": {
        "type": "BinaryExpression",
        "start": 33,
        "end": 57,
        "operator": "in",
        "left": {
          "type": "Literal",
          "start": 33,
          "end": 35,
          "raw": "\"\"",
          "value": ""
        },
        "right": {
          "type": "MemberExpression",
          "start": 39,
          "end": 57,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 57,
            "decorators": [],
            "name": "toPrimitive",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
