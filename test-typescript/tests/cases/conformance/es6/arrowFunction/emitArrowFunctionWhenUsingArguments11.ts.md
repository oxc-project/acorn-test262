__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 103,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 103,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 46,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 50,
                "end": 65,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 60,
                  "decorators": [],
                  "name": "_arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 63,
                  "end": 65,
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
            "start": 71,
            "end": 101,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 75,
                "end": 100,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 79,
                  "end": 100,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 85,
                    "end": 100,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 100,
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
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 38,
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
