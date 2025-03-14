collisionRestParameterInType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 47,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 47,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 8,
                "end": 47,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9,
                    "end": 19,
                    "decorators": [],
                    "name": "_i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 11,
                      "end": 19,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 13,
                        "end": 19
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 21,
                    "end": 38,
                    "argument": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 38,
                      "decorators": [],
                      "name": "restParameters",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 43,
                    "end": 47
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 359,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 359,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 359,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 83,
                "end": 359,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 89,
                    "end": 121,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 90,
                        "end": 100,
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 92,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 94,
                            "end": 100
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 102,
                        "end": 119,
                        "argument": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 119,
                          "decorators": [],
                          "name": "restParameters",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 152,
                    "end": 188,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 157,
                        "end": 167,
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 159,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 161,
                            "end": 167
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 169,
                        "end": 186,
                        "argument": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 186,
                          "decorators": [],
                          "name": "restParameters",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 219,
                    "end": 254,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 222,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 223,
                        "end": 233,
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 225,
                          "end": 233,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 227,
                            "end": 233
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 235,
                        "end": 252,
                        "argument": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 252,
                          "decorators": [],
                          "name": "restParameters",
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 285,
                    "end": 331,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 289,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 289,
                      "end": 330,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 291,
                        "end": 330,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 292,
                            "end": 302,
                            "decorators": [],
                            "name": "_i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 294,
                              "end": 302,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 296,
                                "end": 302
                              }
                            }
                          },
                          {
                            "type": "RestElement",
                            "start": 304,
                            "end": 321,
                            "argument": {
                              "type": "Identifier",
                              "start": 307,
                              "end": 321,
                              "decorators": [],
                              "name": "restParameters",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 323,
                          "end": 330,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 326,
                            "end": 330
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
