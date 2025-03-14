__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 64,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 64,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 30,
                  "end": 40,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 34,
                      "end": 39,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 38,
                        "end": 39,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 49,
                  "end": 58,
                  "argument": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
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
