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
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
                "pattern": " (\\\\ ? | & ) rct = j ",
                "flags": ""
              }
            },
            "property": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 37,
              "end": 43,
              "object": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 39,
                "end": 43,
                "decorators": [],
                "name": "href",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          ],
          "optional": false
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
