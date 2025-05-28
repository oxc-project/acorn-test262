__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 366,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 47,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 45,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 29,
              "decorators": [],
              "name": "reject",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 68,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 68,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 60,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 60,
                  "end": 68,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 61,
                      "end": 67
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 178,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 93,
            "end": 130,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 97,
              "decorators": [],
              "name": "fail",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                    "typeParameters": null,
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 135,
            "end": 176,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 140,
              "decorators": [],
              "name": "fail2",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 141,
                "end": 167,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 145,
                  "end": 167,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 147,
                    "end": 167,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 149,
                        "end": 165,
                        "typeParameters": null,
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 174,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 170,
                "end": 174
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 201,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 200,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 189,
                "end": 200,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 192,
                  "end": 200,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 193,
                      "end": 199
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 237,
      "expression": {
        "type": "CallExpression",
        "start": 203,
        "end": 236,
        "callee": {
          "type": "MemberExpression",
          "start": 203,
          "end": 212,
          "object": {
            "type": "Identifier",
            "start": 203,
            "end": 207,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 208,
            "end": 212,
            "decorators": [],
            "name": "fail",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 213,
            "end": 235,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 213,
                "end": 216,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 220,
              "end": 235,
              "callee": {
                "type": "MemberExpression",
                "start": 220,
                "end": 230,
                "object": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 223,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 230,
                  "decorators": [],
                  "name": "reject",
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
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 273,
      "expression": {
        "type": "CallExpression",
        "start": 238,
        "end": 272,
        "callee": {
          "type": "MemberExpression",
          "start": 238,
          "end": 248,
          "object": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 243,
            "end": 248,
            "decorators": [],
            "name": "fail2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 249,
            "end": 271,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 249,
                "end": 252,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 256,
              "end": 271,
              "callee": {
                "type": "MemberExpression",
                "start": 256,
                "end": 266,
                "object": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 259,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 266,
                  "decorators": [],
                  "name": "reject",
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
                  "start": 267,
                  "end": 270,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
