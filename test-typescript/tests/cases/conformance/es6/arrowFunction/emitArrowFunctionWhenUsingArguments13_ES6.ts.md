__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 86,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 86,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 39,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 38,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 33,
                  "decorators": [],
                  "name": "_arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 36,
                  "end": 38,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 84,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 83,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 52,
                  "end": 83,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 67,
                    "end": 83,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 83,
                      "decorators": [],
                      "name": "_arguments",
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
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 53,
                      "end": 62,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
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
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
