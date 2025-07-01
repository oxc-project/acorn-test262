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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 54,
                        "end": 63
                      },
                      "init": {
                        "type": "Literal",
                        "value": 100,
                        "raw": "100",
                        "start": 66,
                        "end": 69
                      },
                      "definite": false,
                      "start": 54,
                      "end": 69
                    }
                  ],
                  "declare": false,
                  "start": 48,
                  "end": 70
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
                      "start": 92,
                      "end": 101
                    },
                    "id": null,
                    "generator": false,
                    "start": 86,
                    "end": 101
                  },
                  "start": 79,
                  "end": 102
                }
              ],
              "start": 38,
              "end": 108
            },
            "alternate": null,
            "start": 19,
            "end": 108
          }
        ],
        "start": 13,
        "end": 110
      },
      "expression": false,
      "start": 0,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
