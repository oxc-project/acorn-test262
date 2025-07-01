__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "eachPerson",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 295
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 311
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 318
                      },
                      "value": {
                        "type": "Literal",
                        "value": "Empty",
                        "raw": "\"Empty\"",
                        "start": 320,
                        "end": 327
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 314,
                      "end": 327
                    }
                  ],
                  "start": 312,
                  "end": 329
                }
              ],
              "optional": false,
              "start": 303,
              "end": 330
            },
            "directive": null,
            "start": 303,
            "end": 331
          }
        ],
        "start": 297,
        "end": 333
      },
      "expression": false,
      "start": 267,
      "end": 333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 267,
  "end": 333
}
```
