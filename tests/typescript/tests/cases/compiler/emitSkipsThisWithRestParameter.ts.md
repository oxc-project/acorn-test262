__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "rebase",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 54,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 54,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 20,
              "end": 54,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 30,
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 27,
                      "end": 30
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 32,
                  "end": 46,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 39,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 41,
                      "end": 46,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 41,
                        "end": 44
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 54,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 51,
                  "end": 54
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 55,
        "end": 80,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 57,
          "end": 80,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 58,
              "end": 72,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 61,
                "end": 65,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 65,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 67,
                  "end": 72,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 67,
                    "end": 70
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 80,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 77,
              "end": 80
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 194,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 87,
            "end": 192,
            "argument": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 191,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 112,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 114,
                  "end": 128,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 121,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 123,
                      "end": 128,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 123,
                        "end": 126
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 191,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 140,
                    "end": 185,
                    "argument": {
                      "type": "CallExpression",
                      "start": 147,
                      "end": 184,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 147,
                        "end": 155,
                        "object": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 149,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 155,
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 156,
                          "end": 160
                        },
                        {
                          "type": "CallExpression",
                          "start": 162,
                          "end": 183,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 162,
                            "end": 177,
                            "object": {
                              "type": "ArrayExpression",
                              "start": 162,
                              "end": 170,
                              "elements": [
                                {
                                  "type": "ThisExpression",
                                  "start": 164,
                                  "end": 168
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 177,
                              "decorators": [],
                              "name": "concat",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 178,
                              "end": 182,
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            }
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
