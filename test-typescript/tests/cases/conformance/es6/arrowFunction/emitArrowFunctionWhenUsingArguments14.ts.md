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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 128,
        "body": [
          {
            "type": "IfStatement",
            "start": 37,
            "end": 126,
            "alternate": null,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 81,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 84,
                        "end": 87,
                        "raw": "100",
                        "value": 100
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 97,
                  "end": 120,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 104,
                    "end": 119,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 119,
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
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 41,
              "end": 54,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 41,
                "end": 52,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 45,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 52,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
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
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
