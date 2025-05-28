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
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null
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
                    }
                  }
                }
              }
            ]
          }
        }
      },
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
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 105,
                                "end": 106,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "MemberExpression",
                              "start": 110,
                              "end": 118,
                              "object": {
                                "type": "Identifier",
                                "start": 110,
                                "end": 111,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 118,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "id": null,
                            "generator": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
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
