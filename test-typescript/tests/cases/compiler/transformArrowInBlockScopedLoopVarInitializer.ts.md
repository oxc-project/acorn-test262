__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 167,
  "body": [
    {
      "type": "WhileStatement",
      "start": 56,
      "end": 167,
      "test": {
        "type": "Literal",
        "start": 63,
        "end": 67,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 167,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 75,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 79,
                "end": 91,
                "id": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 84,
                  "name": "local",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 87,
                  "end": 91,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 117,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 116,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 105,
                  "end": 116,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 116,
                    "name": "local",
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
