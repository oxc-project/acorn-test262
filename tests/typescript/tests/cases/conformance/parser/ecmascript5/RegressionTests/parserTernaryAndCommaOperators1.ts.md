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
        "type": "SequenceExpression",
        "start": 0,
        "end": 21,
        "expressions": [
          {
            "type": "ConditionalExpression",
            "start": 0,
            "end": 13,
            "test": {
              "type": "MemberExpression",
              "start": 0,
              "end": 5,
              "object": {
                "type": "Identifier",
                "start": 0,
                "end": 1,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2,
                "end": 5,
                "decorators": [],
                "name": "src",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "Literal",
              "start": 8,
              "end": 9,
              "value": 1,
              "raw": "1"
            },
            "alternate": {
              "type": "Literal",
              "start": 12,
              "end": 13,
              "value": 2,
              "raw": "2"
            }
          },
          {
            "type": "LogicalExpression",
            "start": 15,
            "end": 21,
            "left": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
