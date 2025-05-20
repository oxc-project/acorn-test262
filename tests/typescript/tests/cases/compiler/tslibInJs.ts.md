__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
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
        "value": "use strict"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 44,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 20,
            "end": 27,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 22,
                "end": 25,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 30,
            "end": 44,
            "arguments": [
              {
                "type": "Literal",
                "start": 38,
                "end": 43,
                "raw": "\"bar\"",
                "value": "bar"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 30,
              "end": 37,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
