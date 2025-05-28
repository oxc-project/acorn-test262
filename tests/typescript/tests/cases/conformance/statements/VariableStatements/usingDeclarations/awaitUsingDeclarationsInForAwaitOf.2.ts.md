__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 121,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 79,
        "end": 121,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 83,
            "end": 118,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 108,
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 106,
                  "end": 108,
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 108,
                    "decorators": [],
                    "name": "of",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 112,
              "end": 114,
              "decorators": [],
              "name": "of",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 116,
              "end": 118,
              "body": []
            }
          },
          {
            "type": "EmptyStatement",
            "start": 118,
            "end": 119
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
