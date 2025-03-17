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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2,
                "end": 5,
                "name": "src",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
