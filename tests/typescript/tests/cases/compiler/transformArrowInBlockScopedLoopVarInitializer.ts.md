__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 63,
        "end": 67
      },
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
                  "name": "local",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 84
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 87,
                  "end": 91
                },
                "definite": false,
                "start": 79,
                "end": 91
              }
            ],
            "declare": false,
            "start": 75,
            "end": 92
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 102
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "local",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 116
                  },
                  "id": null,
                  "generator": false,
                  "start": 105,
                  "end": 116
                },
                "definite": false,
                "start": 101,
                "end": 116
              }
            ],
            "declare": false,
            "start": 97,
            "end": 117
          }
        ],
        "start": 69,
        "end": 167
      },
      "start": 56,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 167
}
```
