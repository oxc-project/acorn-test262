__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 45,
      "test": {
        "type": "Identifier",
        "start": 4,
        "end": 5,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 7,
        "end": 45,
        "expression": {
          "type": "CallExpression",
          "start": 7,
          "end": 44,
          "callee": {
            "type": "MemberExpression",
            "start": 7,
            "end": 36,
            "object": {
              "type": "Literal",
              "start": 7,
              "end": 30,
              "value": null,
              "raw": "/ (\\\\ ? | & ) rct = j /",
              "regex": {
                "flags": "",
                "pattern": " (\\\\ ? | & ) rct = j "
              }
            },
            "property": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 37,
              "end": 43,
              "object": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 39,
                "end": 43,
                "name": "href",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
