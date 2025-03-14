__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 81,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 81,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 51,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 50,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "cats",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 33,
                  "end": 50,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 42,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 42,
                    "end": 48,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 43,
                        "end": 47,
                        "typeName": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 47,
                          "decorators": [],
                          "name": "WAWA",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
