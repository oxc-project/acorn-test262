__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 22,
            "end": 40,
            "properties": [
              {
                "type": "Property",
                "start": 26,
                "end": 30,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 29,
                  "end": 30,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 34,
                "end": 38,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
