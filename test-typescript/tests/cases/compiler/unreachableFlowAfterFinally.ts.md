__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
        "start": 13,
        "end": 130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 30,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 27,
                  "end": 30,
                  "value": 100,
                  "raw": "100"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "TryStatement",
            "start": 36,
            "end": 128,
            "block": {
              "type": "BlockStatement",
              "start": 40,
              "end": 67,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 50,
                  "end": 61,
                  "argument": {
                    "type": "Literal",
                    "start": 56,
                    "end": 61,
                    "value": "WAT",
                    "raw": "\"WAT\""
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 72,
              "end": 90,
              "param": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 90,
                "body": []
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 103,
              "end": 128,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 113,
                  "end": 122,
                  "argument": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
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
