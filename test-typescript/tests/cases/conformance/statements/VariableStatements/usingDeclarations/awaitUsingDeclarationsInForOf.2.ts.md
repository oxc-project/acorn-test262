__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "name": "main",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 64,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 28,
            "end": 62,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 47,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 47,
                    "name": "of",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "await using",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 51,
              "end": 53,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 55,
              "end": 62,
              "body": []
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
