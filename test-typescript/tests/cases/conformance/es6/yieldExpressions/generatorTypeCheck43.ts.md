__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 71,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 71,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 69,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 69,
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
                  "end": 69,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 38,
                      "end": 63,
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 40,
                        "end": 47,
                        "argument": {
                          "type": "Literal",
                          "start": 46,
                          "end": 47,
                          "raw": "0",
                          "value": 0
                        },
                        "delegate": false
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 48,
                        "end": 63,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 51,
                          "end": 63,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": null,
                        "params": []
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
