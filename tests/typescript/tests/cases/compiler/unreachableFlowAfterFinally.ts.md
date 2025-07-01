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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "init": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 27,
                  "end": 30
                },
                "definite": false,
                "start": 23,
                "end": 30
              }
            ],
            "declare": false,
            "start": 19,
            "end": 31
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "WAT",
                    "raw": "\"WAT\"",
                    "start": 56,
                    "end": 61
                  },
                  "start": 50,
                  "end": 61
                }
              ],
              "start": 40,
              "end": 67
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 80
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 82,
                "end": 90
              },
              "start": 72,
              "end": 90
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 121
                  },
                  "start": 113,
                  "end": 122
                }
              ],
              "start": 103,
              "end": 128
            },
            "start": 36,
            "end": 128
          }
        ],
        "start": 13,
        "end": 130
      },
      "expression": false,
      "start": 0,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
