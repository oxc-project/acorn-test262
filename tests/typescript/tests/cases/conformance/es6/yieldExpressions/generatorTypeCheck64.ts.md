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
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 25
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 35
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 40,
                              "end": 46
                            },
                            "start": 38,
                            "end": 46
                          },
                          "start": 37,
                          "end": 46
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 51,
                          "end": 57
                        },
                        "start": 48,
                        "end": 57
                      },
                      "start": 36,
                      "end": 57
                    }
                  ],
                  "start": 35,
                  "end": 58
                },
                "start": 26,
                "end": 58
              }
            ],
            "start": 25,
            "end": 59
          },
          "start": 16,
          "end": 59
        },
        "start": 14,
        "end": 59
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 101,
                                "end": 102
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 106,
                                "end": 107
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 108,
                                "end": 114
                              },
                              "optional": false,
                              "computed": false,
                              "start": 106,
                              "end": 114
                            },
                            "id": null,
                            "generator": false,
                            "start": 101,
                            "end": 114
                          },
                          "start": 95,
                          "end": 114
                        },
                        "directive": null,
                        "start": 95,
                        "end": 115
                      }
                    ],
                    "start": 85,
                    "end": 121
                  },
                  "expression": false,
                  "start": 72,
                  "end": 121
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 72,
                "end": 124
              },
              "start": 66,
              "end": 124
            },
            "directive": null,
            "start": 66,
            "end": 124
          }
        ],
        "start": 60,
        "end": 126
      },
      "expression": false,
      "start": 0,
      "end": 126
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 140
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 152
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 161
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 166,
                              "end": 172
                            },
                            "start": 164,
                            "end": 172
                          },
                          "start": 163,
                          "end": 172
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 177,
                          "end": 183
                        },
                        "start": 174,
                        "end": 183
                      },
                      "start": 162,
                      "end": 183
                    }
                  ],
                  "start": 161,
                  "end": 184
                },
                "start": 153,
                "end": 184
              }
            ],
            "start": 152,
            "end": 185
          },
          "start": 144,
          "end": 185
        },
        "start": 142,
        "end": 185
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 223,
                                "end": 224
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 229,
                                "end": 230
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 231,
                                "end": 237
                              },
                              "optional": false,
                              "computed": false,
                              "start": 229,
                              "end": 237
                            },
                            "id": null,
                            "generator": false,
                            "start": 222,
                            "end": 237
                          },
                          "start": 216,
                          "end": 237
                        },
                        "directive": null,
                        "start": 216,
                        "end": 238
                      }
                    ],
                    "start": 210,
                    "end": 242
                  },
                  "expression": false,
                  "start": 197,
                  "end": 242
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 196,
                "end": 245
              },
              "start": 190,
              "end": 245
            },
            "directive": null,
            "start": 190,
            "end": 246
          }
        ],
        "start": 186,
        "end": 248
      },
      "expression": false,
      "start": 128,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 248
}
```
