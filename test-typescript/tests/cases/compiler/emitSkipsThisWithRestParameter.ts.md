__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "rebase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 54,
          "name": "fn",
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
                  "name": "base",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 27,
                      "end": 30
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 32,
                  "end": 46,
                  "argument": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 39,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 112,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 114,
                  "end": 128,
                  "argument": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 121,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                          "name": "fn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 155,
                          "name": "apply",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                              "name": "concat",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 178,
                              "end": 182,
                              "name": "args",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "argument": {
                "type": "Identifier",
                "start": 61,
                "end": 65,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
