generatorTypeCheck29.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 124,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 124,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 122,
            "expression": {
              "type": "YieldExpression",
              "start": 64,
              "end": 122,
              "argument": {
                "type": "CallExpression",
                "start": 70,
                "end": 122,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 70,
                  "end": 119,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 83,
                    "end": 119,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 93,
                        "end": 113,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 93,
                          "end": 112,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 99,
                            "end": 112,
                            "async": false,
                            "body": {
                              "type": "MemberExpression",
                              "start": 104,
                              "end": 112,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 105,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 106,
                                "end": 112,
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
                                "start": 99,
                                "end": 100,
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
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 16,
          "end": 57,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 24,
            "end": 57,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 25,
                "end": 56,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 33,
                  "end": 56,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 34,
                      "end": 55,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 35,
                          "end": 44,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 36,
                            "end": 44,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 38,
                              "end": 44
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 46,
                        "end": 55,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 49,
                          "end": 55
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 33,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false
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
