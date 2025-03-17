__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 32,
                  "end": 57,
                  "callee": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 37,
                    "name": "await",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 53,
                          "name": "resolve",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 54,
                          "end": 55,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
