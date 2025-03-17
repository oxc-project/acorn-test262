__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 104,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 104,
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
        "end": 104,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 56,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 51,
                  "name": "_arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 54,
                  "end": 56,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 62,
            "end": 102,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 101,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 70,
                  "end": 101,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 71,
                      "end": 80,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 85,
                    "end": 101,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 101,
                      "name": "_arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
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
