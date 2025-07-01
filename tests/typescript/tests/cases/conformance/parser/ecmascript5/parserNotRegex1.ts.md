__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "indexOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "optional": false,
          "computed": false,
          "start": 6,
          "end": 15
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 18,
                "end": 19
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 20,
                "end": 21
              },
              "start": 18,
              "end": 21
            },
            "prefix": true,
            "start": 16,
            "end": 22
          }
        ],
        "optional": false,
        "start": 6,
        "end": 23
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 112,
              "end": 116
            },
            "start": 105,
            "end": 117
          }
        ],
        "start": 99,
        "end": 121
      },
      "alternate": null,
      "start": 2,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 121
}
```
