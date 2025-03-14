generatorTypeCheck31.ts
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
      "async": false,
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
              "argument": {
                "type": "CallExpression",
                "start": 76,
                "end": 128,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 76,
                  "end": 125,
                  "async": false,
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
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 105,
                            "end": 118,
                            "async": false,
                            "body": {
                              "type": "MemberExpression",
                              "start": 110,
                              "end": 118,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 110,
                                "end": 111,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 118,
                                "decorators": [],
                                "name": "length",
                                "optional": false
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 105,
                                "end": 106,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            ]
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                },
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "g2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 63,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 16,
          "end": 63,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 24,
            "end": 63,
            "params": [
              {
                "type": "TSFunctionType",
                "start": 25,
                "end": 62,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 62,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 62,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 39,
                      "end": 62,
                      "params": [
                        {
                          "type": "TSFunctionType",
                          "start": 40,
                          "end": 61,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 41,
                              "end": 50,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 42,
                                "end": 50,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 44,
                                  "end": 50
                                }
                              }
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 39,
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 16,
            "end": 24,
            "decorators": [],
            "name": "Iterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
