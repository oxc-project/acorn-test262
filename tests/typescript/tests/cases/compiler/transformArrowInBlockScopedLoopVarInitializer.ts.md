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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 79,
                "end": 91,
                "id": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 84,
                  "decorators": [],
                  "name": "local",
                  "optional": false,
                  "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 117,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 116,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 105,
                  "end": 116,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 116,
                    "decorators": [],
                    "name": "local",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
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
