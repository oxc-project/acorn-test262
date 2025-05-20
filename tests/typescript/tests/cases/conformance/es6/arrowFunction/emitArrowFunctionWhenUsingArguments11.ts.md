__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 48,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 47,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 42,
                  "decorators": [],
                  "name": "_arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 45,
                  "end": 47,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 53,
            "end": 83,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 57,
                "end": 82,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 61,
                  "end": 82,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 67,
                    "end": 82,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 82,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
