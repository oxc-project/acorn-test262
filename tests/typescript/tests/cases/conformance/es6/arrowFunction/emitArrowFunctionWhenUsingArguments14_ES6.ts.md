__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 108,
        "body": [
          {
            "type": "IfStatement",
            "start": 19,
            "end": 106,
            "test": {
              "type": "CallExpression",
              "start": 23,
              "end": 36,
              "callee": {
                "type": "MemberExpression",
                "start": 23,
                "end": 34,
                "object": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 27,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 34,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 38,
              "end": 106,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 48,
                  "end": 68,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 52,
                      "end": 67,
                      "id": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 61,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 64,
                        "end": 67,
                        "value": 100,
                        "raw": "100"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 77,
                  "end": 100,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 84,
                    "end": 99,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 99,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
