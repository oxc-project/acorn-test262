__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "g2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 130,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 70,
            "end": 128,
            "expression": {
              "type": "YieldExpression",
              "start": 70,
              "end": 128,
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "start": 76,
                "end": 128,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 76,
                  "end": 125,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 89,
                    "end": 125,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 99,
                        "end": 119,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 99,
                          "end": 118,
                          "delegate": false,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 105,
                            "end": 118,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 105,
                                "end": 106,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "MemberExpression",
                              "start": 110,
                              "end": 118,
                              "object": {
                                "type": "Identifier",
                                "start": 110,
                                "end": 111,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 118,
                                "name": "length",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 63,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 16,
          "end": 63,
          "typeName": {
            "type": "Identifier",
            "start": 16,
            "end": 24,
            "name": "Iterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 24,
            "end": 63,
            "params": [
              {
                "type": "TSFunctionType",
                "start": 25,
                "end": 62,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 62,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 62,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 39,
                      "name": "Iterable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 39,
                      "end": 62,
                      "params": [
                        {
                          "type": "TSFunctionType",
                          "start": 40,
                          "end": 61,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 41,
                              "end": 50,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 42,
                                "end": 50,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 44,
                                  "end": 50
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 52,
                            "end": 61,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 55,
                              "end": 61
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
