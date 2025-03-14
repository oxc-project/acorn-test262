__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
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
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 22,
            "end": 43,
            "properties": [
              {
                "type": "Property",
                "start": 24,
                "end": 41,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 31,
                  "end": 41,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 38,
                    "end": 41,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 32,
                      "end": 36,
                      "decorators": [],
                      "name": "eval",
                      "optional": false
                    }
                  ]
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
