typeSatisfaction_contextualTyping2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 57,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 57,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 9,
                "end": 57,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 9,
                    "end": 31,
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "start": 11,
                        "end": 29,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 11,
                          "end": 12,
                          "decorators": [],
                          "name": "f",
                          "optional": false
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 13,
                            "end": 22,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 14,
                              "end": 22,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 16,
                                "end": 22
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 23,
                          "end": 29,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 25,
                            "end": 29
                          }
                        },
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 34,
                    "end": 57,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 40,
                      "end": 57,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 41,
                          "end": 47
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 49,
                          "end": 56
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 40,
                      "decorators": [],
                      "name": "Record",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 60,
            "end": 184,
            "expression": {
              "type": "ObjectExpression",
              "start": 60,
              "end": 125,
              "properties": [
                {
                  "type": "Property",
                  "start": 66,
                  "end": 74,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 67,
                    "end": 74,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 71,
                      "end": 74,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "Property",
                  "start": 115,
                  "end": 123,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 116,
                    "end": 123,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 123,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 136,
              "end": 184,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 136,
                  "end": 158,
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "start": 138,
                      "end": 156,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 139,
                        "decorators": [],
                        "name": "g",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 140,
                          "end": 149,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 141,
                            "end": 149,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 143,
                              "end": 149
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 150,
                        "end": 156,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 152,
                          "end": 156
                        }
                      },
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 161,
                  "end": 184,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 167,
                    "end": 184,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 168,
                        "end": 174
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 176,
                        "end": 183
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 167,
                    "decorators": [],
                    "name": "Record",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 245,
      "end": 293,
      "expression": {
        "type": "TSSatisfiesExpression",
        "start": 245,
        "end": 292,
        "expression": {
          "type": "ObjectExpression",
          "start": 246,
          "end": 258,
          "properties": [
            {
              "type": "Property",
              "start": 248,
              "end": 256,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 249,
                "end": 256,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 253,
                  "end": 256,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 270,
          "end": 292,
          "members": [
            {
              "type": "TSMethodSignature",
              "start": 272,
              "end": 290,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 274,
                  "end": 283,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 283,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 277,
                      "end": 283
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 284,
                "end": 290,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 286,
                  "end": 290
                }
              },
              "static": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
