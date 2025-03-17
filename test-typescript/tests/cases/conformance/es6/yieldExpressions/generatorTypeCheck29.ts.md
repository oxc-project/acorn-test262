__ESTREE_TEST__:PASS:
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
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "start": 70,
                "end": 122,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 70,
                  "end": 119,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
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
                          "delegate": false,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 99,
                            "end": 112,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 99,
                                "end": 100,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "MemberExpression",
                              "start": 104,
                              "end": 112,
                              "object": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 105,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 106,
                                "end": 112,
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
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 16,
          "end": 57,
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
            "end": 57,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 25,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 33,
                  "name": "Iterable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 33,
                  "end": 56,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 34,
                      "end": 55,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 35,
                          "end": 44,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 36,
                            "end": 44,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 38,
                              "end": 44
                            }
                          },
                          "decorators": [],
                          "optional": false
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
