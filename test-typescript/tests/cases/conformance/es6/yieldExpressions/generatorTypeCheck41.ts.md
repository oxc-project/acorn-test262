__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 58,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 56,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 56,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 28,
                  "end": 56,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 38,
                      "end": 50,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 39,
                        "end": 46,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 45,
                          "end": 46,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "value": {
                        "type": "Literal",
                        "start": 49,
                        "end": 50,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
