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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "x",
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
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 39,
                        "end": 46,
                        "argument": {
                          "type": "Literal",
                          "start": 45,
                          "end": 46,
                          "raw": "0",
                          "value": 0
                        },
                        "delegate": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 49,
                        "end": 50,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
