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
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "FunctionExpression",
          "start": 62,
          "end": 163,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 89,
                      "end": 96,
                      "id": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 96,
                        "decorators": [],
                        "name": "someKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
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
                            "decorators": [],
                            "name": "helloWorld",
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
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 154,
                          "decorators": [],
                          "name": "someKey",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "directive": null
                    }
                  ]
                }
              }
            ]
          },
          "expression": false
        },
        "id": null,
        "generator": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
