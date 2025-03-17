__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 126,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 126,
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
        "end": 126,
        "body": [
          {
            "type": "IfStatement",
            "start": 37,
            "end": 124,
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
              "end": 124,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 66,
                  "end": 86,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 70,
                      "end": 85,
                      "id": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 79,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 82,
                        "end": 85,
                        "value": 100,
                        "raw": "100"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 95,
                  "end": 118,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 102,
                    "end": 117,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 117,
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
