unionSignaturesWithThisParameter.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 168,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 167,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 147,
        "end": 167,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 165,
            "expression": {
              "type": "NewExpression",
              "start": 153,
              "end": 164,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "t",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 157,
                "end": 161,
                "decorators": [],
                "name": "ctor",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 36,
          "end": 139,
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 139,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 42,
              "end": 139,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 42,
                  "end": 94,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 48,
                      "end": 71,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 49,
                          "end": 57,
                          "decorators": [],
                          "name": "this",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 53,
                            "end": 57,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 55,
                              "end": 57,
                              "members": []
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 59,
                          "end": 63,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 60,
                            "end": 63,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 62,
                              "end": 63,
                              "typeName": {
                                "type": "Identifier",
                                "start": 62,
                                "end": 63,
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
                        "start": 64,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 66,
                          "end": 70
                        }
                      }
                    },
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 76,
                      "end": 92,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 80,
                          "end": 84,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 81,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 83,
                              "end": 84,
                              "typeName": {
                                "type": "Identifier",
                                "start": 83,
                                "end": 84,
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
                        "start": 85,
                        "end": 91,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 87,
                          "end": 91
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 97,
                  "end": 139,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 103,
                      "end": 116,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 104,
                          "end": 108,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 105,
                            "end": 108,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 107,
                              "end": 108,
                              "typeName": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 108,
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
                        "start": 109,
                        "end": 115,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 111,
                          "end": 115
                        }
                      }
                    },
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "start": 121,
                      "end": 137,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 125,
                          "end": 129,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 126,
                            "end": 129,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 128,
                              "end": 129,
                              "typeName": {
                                "type": "Identifier",
                                "start": 128,
                                "end": 129,
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
                        "start": 130,
                        "end": 136,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 132,
                          "end": 136
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 141,
          "end": 145,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 145,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 144,
              "end": 145,
              "typeName": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
