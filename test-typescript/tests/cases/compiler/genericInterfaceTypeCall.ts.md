genericInterfaceTypeCall.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 345,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 46,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 29,
              "decorators": [],
              "name": "reject",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 35,
                    "end": 36,
                    "typeName": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 43,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 39,
                "end": 43
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
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "type": "VariableDeclaration",
      "start": 47,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 67,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 67,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 59,
                  "end": 67,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 59,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 176,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 176,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 93,
            "end": 129,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 97,
              "decorators": [],
              "name": "fail",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 98,
                "end": 120,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 104,
                    "end": 120,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 105,
                        "end": 111,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 108,
                          "end": 111,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 110,
                            "end": 111,
                            "typeName": {
                              "type": "Identifier",
                              "start": 110,
                              "end": 111,
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
                      "start": 113,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 116,
                        "end": 120
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 128,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 124,
                "end": 128
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 134,
            "end": 174,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 139,
              "decorators": [],
              "name": "fail2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 140,
                "end": 166,
                "decorators": [],
                "name": "func2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 147,
                    "end": 166,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 149,
                        "end": 164,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 150,
                            "end": 156,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 153,
                              "end": 156,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 155,
                                "end": 156,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 155,
                                  "end": 156,
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
                          "start": 157,
                          "end": 163,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 159,
                            "end": 163
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 173,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 169,
                "end": 173
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
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 86,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
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
      "type": "VariableDeclaration",
      "start": 177,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 198,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 198,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 198,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 198,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 190,
                  "end": 198,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 191,
                      "end": 197
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 190,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 202,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 235,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 212,
            "end": 234,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 219,
              "end": 234,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 230,
                  "end": 233,
                  "decorators": [],
                  "name": "arg",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 219,
                "end": 229,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 222,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 229,
                  "decorators": [],
                  "name": "reject",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 212,
                "end": 215,
                "decorators": [],
                "name": "arg",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 211,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 211,
            "decorators": [],
            "name": "fail",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 237,
      "end": 272,
      "expression": {
        "type": "CallExpression",
        "start": 237,
        "end": 271,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 248,
            "end": 270,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 255,
              "end": 270,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 266,
                  "end": 269,
                  "decorators": [],
                  "name": "arg",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 255,
                "end": 265,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 258,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 265,
                  "decorators": [],
                  "name": "reject",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "decorators": [],
                "name": "arg",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 237,
          "end": 247,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 247,
            "decorators": [],
            "name": "fail2",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
