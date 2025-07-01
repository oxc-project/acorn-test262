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
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 81,
                  "end": 82
                },
                "definite": false,
                "start": 77,
                "end": 82
              }
            ],
            "declare": false,
            "start": 71,
            "end": 83
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 102
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 120
                      },
                      "init": {
                        "type": "Literal",
                        "value": "inner",
                        "raw": "\"inner\"",
                        "start": 123,
                        "end": 130
                      },
                      "definite": false,
                      "start": 119,
                      "end": 130
                    }
                  ],
                  "declare": false,
                  "start": 115,
                  "end": 131
                }
              ],
              "start": 105,
              "end": 137
            },
            "expression": false,
            "start": 88,
            "end": 137
          }
        ],
        "start": 65,
        "end": 139
      },
      "expression": false,
      "start": 48,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 48,
  "end": 139
}
```
