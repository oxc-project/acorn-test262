__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 121,
  "body": [
    {
      "type": "IfStatement",
      "start": 2,
      "end": 121,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 99,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 105,
            "end": 117,
            "argument": {
              "type": "Literal",
              "start": 112,
              "end": 116,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 6,
        "end": 23,
        "arguments": [
          {
            "type": "UnaryExpression",
            "start": 16,
            "end": 22,
            "argument": {
              "type": "BinaryExpression",
              "start": 18,
              "end": 21,
              "operator": "/",
              "left": {
                "type": "Literal",
                "start": 18,
                "end": 19,
                "raw": "4",
                "value": 4
              },
              "right": {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "raw": "3",
                "value": 3
              }
            },
            "operator": "-",
            "prefix": true
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 6,
          "end": 15,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "indexOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
