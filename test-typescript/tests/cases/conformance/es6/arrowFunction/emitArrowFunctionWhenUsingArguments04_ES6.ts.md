__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
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
        "start": 31,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 51,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 50,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 79,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 64,
                  "end": 79,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 79,
                    "name": "arguments",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
