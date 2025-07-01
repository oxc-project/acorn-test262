__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "FunctionExpression",
          "id": null,
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
                "type": "ForInStatement",
                "left": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 96
                      },
                      "init": null,
                      "definite": false,
                      "start": 89,
                      "end": 96
                    }
                  ],
                  "declare": false,
                  "start": 85,
                  "end": 96
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 100,
                  "end": 102
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 114,
                            "end": 118
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "helloWorld",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 119,
                            "end": 129
                          },
                          "optional": false,
                          "computed": false,
                          "start": 114,
                          "end": 129
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 114,
                        "end": 131
                      },
                      "directive": null,
                      "start": 114,
                      "end": 132
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 154
                        },
                        "id": null,
                        "generator": false,
                        "start": 141,
                        "end": 154
                      },
                      "directive": null,
                      "start": 141,
                      "end": 155
                    }
                  ],
                  "start": 104,
                  "end": 161
                },
                "start": 80,
                "end": 161
              }
            ],
            "start": 74,
            "end": 163
          },
          "expression": false,
          "start": 62,
          "end": 163
        },
        "id": null,
        "generator": false,
        "start": 56,
        "end": 163
      },
      "directive": null,
      "start": 56,
      "end": 164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 164
}
```
