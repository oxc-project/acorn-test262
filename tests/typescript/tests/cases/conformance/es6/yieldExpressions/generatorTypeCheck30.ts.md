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
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 16,
          "end": 57,
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
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
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
                }
              }
            ]
          }
        }
      },
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
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 99,
                                "end": 100,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "MemberExpression",
                              "start": 104,
                              "end": 112,
                              "object": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 105,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 106,
                                "end": 112,
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
