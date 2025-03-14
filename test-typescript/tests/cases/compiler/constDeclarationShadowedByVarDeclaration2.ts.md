__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 139,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 71,
            "end": 83,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 77,
                "end": 82,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "FunctionDeclaration",
            "start": 88,
            "end": 137,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 105,
              "end": 137,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 115,
                  "end": 131,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 119,
                      "end": 130,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 120,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 123,
                        "end": 130,
                        "raw": "\"inner\"",
                        "value": "inner"
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
              "start": 97,
              "end": 102,
              "decorators": [],
              "name": "inner",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "decorators": [],
        "name": "outer",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
