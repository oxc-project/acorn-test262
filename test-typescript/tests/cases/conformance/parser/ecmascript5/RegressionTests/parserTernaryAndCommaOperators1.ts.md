parserTernaryAndCommaOperators1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 22,
      "expression": {
        "type": "SequenceExpression",
        "start": 0,
        "end": 21,
        "expressions": [
          {
            "type": "ConditionalExpression",
            "start": 0,
            "end": 13,
            "alternate": {
              "type": "Literal",
              "start": 12,
              "end": 13,
              "raw": "2",
              "value": 2
            },
            "consequent": {
              "type": "Literal",
              "start": 8,
              "end": 9,
              "raw": "1",
              "value": 1
            },
            "test": {
              "type": "MemberExpression",
              "start": 0,
              "end": 5,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 0,
                "end": 1,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2,
                "end": 5,
                "decorators": [],
                "name": "src",
                "optional": false
              }
            }
          },
          {
            "type": "LogicalExpression",
            "start": 15,
            "end": 21,
            "operator": "&&",
            "left": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "d",
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
