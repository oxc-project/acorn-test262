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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 76
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "of",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 108
                  },
                  "init": null,
                  "definite": false,
                  "start": 106,
                  "end": 108
                }
              ],
              "declare": false,
              "start": 94,
              "end": 108
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "of",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 114
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 116,
              "end": 118
            },
            "start": 83,
            "end": 118
          },
          {
            "type": "EmptyStatement",
            "start": 118,
            "end": 119
          }
        ],
        "start": 79,
        "end": 121
      },
      "expression": false,
      "start": 57,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 121
}
```
