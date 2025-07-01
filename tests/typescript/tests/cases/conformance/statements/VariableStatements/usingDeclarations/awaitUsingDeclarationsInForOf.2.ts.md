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
        "name": "main",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
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
            "await": false,
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
                    "start": 45,
                    "end": 47
                  },
                  "init": null,
                  "definite": false,
                  "start": 45,
                  "end": 47
                }
              ],
              "declare": false,
              "start": 33,
              "end": 47
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 51,
              "end": 53
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 55,
              "end": 62
            },
            "start": 28,
            "end": 62
          }
        ],
        "start": 22,
        "end": 64
      },
      "expression": false,
      "start": 0,
      "end": 64
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
