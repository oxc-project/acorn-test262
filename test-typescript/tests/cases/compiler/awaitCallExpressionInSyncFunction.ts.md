__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 75,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 58,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 57,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 32,
                  "end": 57,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 38,
                      "end": 56,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 54,
                          "end": 55,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 38,
                        "end": 53,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 38,
                          "end": 45,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 53,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 37,
                    "decorators": [],
                    "name": "await",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 73,
            "argument": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
