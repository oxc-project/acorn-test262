__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 128,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 128,
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
        "end": 128,
        "body": [
          {
            "type": "IfStatement",
            "start": 37,
            "end": 126,
            "test": {
              "type": "CallExpression",
              "start": 41,
              "end": 54,
              "callee": {
                "type": "MemberExpression",
                "start": 41,
                "end": 52,
                "object": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 45,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 52,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 56,
              "end": 126,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 66,
                  "end": 88,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 72,
                      "end": 87,
                      "id": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 81,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 84,
                        "end": 87,
                        "value": 100,
                        "raw": "100"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 97,
                  "end": 120,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 104,
                    "end": 119,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 119,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              ]
            },
            "alternate": null
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
