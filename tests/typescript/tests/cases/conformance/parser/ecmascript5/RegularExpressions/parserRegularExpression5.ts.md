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
      "alternate": null,
      "consequent": {
        "type": "ExpressionStatement",
        "start": 7,
        "end": 45,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 7,
          "end": 44,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 37,
              "end": 43,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 39,
                "end": 43,
                "decorators": [],
                "name": "href",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 7,
            "end": 36,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 7,
              "end": 30,
              "raw": "/ (\\\\ ? | & ) rct = j /",
              "regex": {
                "flags": "",
                "pattern": " (\\\\ ? | & ) rct = j "
              },
              "value": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "test": {
        "type": "Identifier",
        "start": 4,
        "end": 5,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
