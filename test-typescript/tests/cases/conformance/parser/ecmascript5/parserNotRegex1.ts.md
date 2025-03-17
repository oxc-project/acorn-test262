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
      "test": {
        "type": "CallExpression",
        "start": 6,
        "end": 23,
        "callee": {
          "type": "MemberExpression",
          "start": 6,
          "end": 15,
          "object": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "name": "indexOf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "UnaryExpression",
            "start": 16,
            "end": 22,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 18,
              "end": 21,
              "left": {
                "type": "Literal",
                "start": 18,
                "end": 19,
                "value": 4,
                "raw": "4"
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "value": 3,
                "raw": "3"
              }
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
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
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
