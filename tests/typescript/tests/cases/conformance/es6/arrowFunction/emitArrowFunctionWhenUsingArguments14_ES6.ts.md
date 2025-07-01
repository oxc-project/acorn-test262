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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 27
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 34
                },
                "optional": false,
                "computed": false,
                "start": 23,
                "end": 34
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 23,
              "end": 36
            },
            "consequent": {
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 52,
                        "end": 61
                      },
                      "init": {
                        "type": "Literal",
                        "value": 100,
                        "raw": "100",
                        "start": 64,
                        "end": 67
                      },
                      "definite": false,
                      "start": 52,
                      "end": 67
                    }
                  ],
                  "declare": false,
                  "start": 48,
                  "end": 68
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 99
                    },
                    "id": null,
                    "generator": false,
                    "start": 84,
                    "end": 99
                  },
                  "start": 77,
                  "end": 100
                }
              ],
              "start": 38,
              "end": 106
            },
            "alternate": null,
            "start": 19,
            "end": 106
          }
        ],
        "start": 13,
        "end": 108
      },
      "expression": false,
      "start": 0,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
