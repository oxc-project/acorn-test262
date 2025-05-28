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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
        "start": 15,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 58,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 57,
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
                  "callee": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 37,
                    "decorators": [],
                    "name": "await",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 38,
                      "end": 56,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 38,
                        "end": 53,
                        "object": {
                          "type": "Identifier",
                          "start": 38,
                          "end": 45,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 53,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 54,
                          "end": 55,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
