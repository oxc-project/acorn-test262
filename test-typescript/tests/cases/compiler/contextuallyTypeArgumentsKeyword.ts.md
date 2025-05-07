__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 30,
            "end": 100,
            "properties": [
              {
                "type": "Property",
                "start": 36,
                "end": 98,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 39,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 39,
                  "end": 98,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 42,
                    "end": 98,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 52,
                        "end": 92,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 52,
                          "end": 91,
                          "arguments": [
                            {
                              "type": "FunctionExpression",
                              "start": 63,
                              "end": 87,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 74,
                                "end": 87,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 76,
                                    "end": 85,
                                    "directive": null,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 76,
                                      "end": 85,
                                      "decorators": [],
                                      "name": "arguments",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            },
                            {
                              "type": "Literal",
                              "start": 89,
                              "end": 90,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 52,
                            "end": 62,
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "typeAnnotation": null
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
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
