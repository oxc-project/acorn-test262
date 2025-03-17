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
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "name": "outer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 88,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 102,
              "name": "inner",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 120,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 123,
                        "end": 130,
                        "value": "inner",
                        "raw": "\"inner\""
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
