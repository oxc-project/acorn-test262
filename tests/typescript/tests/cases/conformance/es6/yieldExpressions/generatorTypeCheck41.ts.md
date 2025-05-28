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
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 58,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 56,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 56,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
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
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
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
