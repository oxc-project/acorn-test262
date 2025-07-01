__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rebase",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 27,
                      "end": 30
                    },
                    "start": 25,
                    "end": 30
                  },
                  "start": 21,
                  "end": 30
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 39
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 41,
                        "end": 44
                      },
                      "start": 41,
                      "end": 46
                    },
                    "start": 39,
                    "end": 46
                  },
                  "value": null,
                  "start": 32,
                  "end": 46
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 51,
                  "end": 54
                },
                "start": 48,
                "end": 54
              },
              "start": 20,
              "end": 54
            },
            "start": 18,
            "end": 54
          },
          "start": 16,
          "end": 54
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 65
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 67,
                    "end": 70
                  },
                  "start": 67,
                  "end": 72
                },
                "start": 65,
                "end": 72
              },
              "value": null,
              "start": 58,
              "end": 72
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 77,
              "end": 80
            },
            "start": 74,
            "end": 80
          },
          "start": 57,
          "end": 80
        },
        "start": 55,
        "end": 80
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    },
                    "start": 107,
                    "end": 112
                  },
                  "start": 103,
                  "end": 112
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 121
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 123,
                        "end": 126
                      },
                      "start": 123,
                      "end": 128
                    },
                    "start": 121,
                    "end": 128
                  },
                  "value": null,
                  "start": 114,
                  "end": 128
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 149
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 155
                        },
                        "optional": false,
                        "computed": false,
                        "start": 147,
                        "end": 155
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
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "ThisExpression",
                                  "start": 164,
                                  "end": 168
                                }
                              ],
                              "start": 162,
                              "end": 170
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "concat",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 177
                            },
                            "optional": false,
                            "computed": false,
                            "start": 162,
                            "end": 177
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 178,
                              "end": 182
                            }
                          ],
                          "optional": false,
                          "start": 162,
                          "end": 183
                        }
                      ],
                      "optional": false,
                      "start": 147,
                      "end": 184
                    },
                    "start": 140,
                    "end": 185
                  }
                ],
                "start": 130,
                "end": 191
              },
              "expression": false,
              "start": 94,
              "end": 191
            },
            "start": 87,
            "end": 192
          }
        ],
        "start": 81,
        "end": 194
      },
      "expression": false,
      "start": 0,
      "end": 194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 194
}
```
