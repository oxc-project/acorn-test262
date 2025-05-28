__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 267,
  "end": 333,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 267,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 286,
        "decorators": [],
        "name": "eachPerson",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 287,
          "end": 295,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 297,
        "end": 333,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 303,
            "end": 331,
            "expression": {
              "type": "CallExpression",
              "start": 303,
              "end": 330,
              "callee": {
                "type": "Identifier",
                "start": 303,
                "end": 311,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 312,
                  "end": 329,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 314,
                      "end": 327,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 318,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 320,
                        "end": 327,
                        "value": "Empty",
                        "raw": "\"Empty\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
