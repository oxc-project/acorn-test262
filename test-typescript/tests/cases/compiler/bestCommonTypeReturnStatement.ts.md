bestCommonTypeReturnStatement.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 131,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 131,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 129,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 32,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 74,
                "decorators": [],
                "name": "successCallback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 50,
                    "end": 74,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 51,
                        "end": 66,
                        "decorators": [],
                        "name": "promiseValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 63,
                          "end": 66,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 65,
                            "end": 66,
                            "typeName": {
                              "type": "Identifier",
                              "start": 65,
                              "end": 66,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 76,
                "end": 112,
                "decorators": [],
                "name": "errorCallback",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 92,
                    "end": 112,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 104,
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 99,
                          "end": 104,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 101,
                            "end": 104
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 106,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 109,
                        "end": 112
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 128,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 123,
                  "end": 128,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 124,
                      "end": 127
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 123,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "IPromise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 191,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 191,
        "body": [
          {
            "type": "IfStatement",
            "start": 152,
            "end": 173,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 162,
              "end": 173,
              "argument": {
                "type": "CallExpression",
                "start": 169,
                "end": 172,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false
              }
            },
            "test": {
              "type": "Literal",
              "start": 156,
              "end": 160,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ReturnStatement",
            "start": 178,
            "end": 189,
            "argument": {
              "type": "CallExpression",
              "start": 185,
              "end": 188,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 239,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 223,
        "end": 239,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 225,
            "end": 237,
            "argument": {
              "type": "Literal",
              "start": 232,
              "end": 236,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 206,
        "end": 222,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 208,
          "end": 222,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 216,
            "end": 222,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 217,
                "end": 221
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 208,
            "end": 216,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 240,
      "end": 284,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 268,
        "end": 284,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 270,
            "end": 282,
            "argument": {
              "type": "Literal",
              "start": 277,
              "end": 281,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 250,
        "decorators": [],
        "name": "d",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 252,
        "end": 267,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 254,
          "end": 267,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 262,
            "end": 267,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 263,
                "end": 266
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 254,
            "end": 262,
            "decorators": [],
            "name": "IPromise",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
