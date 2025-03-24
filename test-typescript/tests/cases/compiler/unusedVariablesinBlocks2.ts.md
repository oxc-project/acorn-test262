__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
        "start": 15,
        "end": 66,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 32,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 31,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 29,
                  "end": 31,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "BlockStatement",
            "start": 37,
            "end": 64,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 47,
                "end": 58,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 51,
                    "end": 57,
                    "id": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 55,
                      "end": 57,
                      "value": 11,
                      "raw": "11"
                    },
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              }
            ]
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
