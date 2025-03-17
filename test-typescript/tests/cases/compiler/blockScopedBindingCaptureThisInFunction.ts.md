__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 164,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 164,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 56,
        "end": 163,
        "id": null,
        "expression": true,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "FunctionExpression",
          "start": 62,
          "end": 163,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 74,
            "end": 163,
            "body": [
              {
                "type": "ForInStatement",
                "start": 80,
                "end": 161,
                "left": {
                  "type": "VariableDeclaration",
                  "start": 85,
                  "end": 96,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 89,
                      "end": 96,
                      "id": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 96,
                        "name": "someKey",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 100,
                  "end": 102,
                  "properties": []
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 104,
                  "end": 161,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 114,
                      "end": 132,
                      "expression": {
                        "type": "CallExpression",
                        "start": 114,
                        "end": 131,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 114,
                          "end": 129,
                          "object": {
                            "type": "ThisExpression",
                            "start": 114,
                            "end": 118
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 129,
                            "name": "helloWorld",
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
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 141,
                      "end": 155,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "start": 141,
                        "end": 154,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 154,
                          "name": "someKey",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "directive": null
                    }
                  ]
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        },
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
