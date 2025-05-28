__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
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
        "end": 46,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 44,
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
      "start": 47,
      "end": 67,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 67,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 59,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
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
      "end": 176,
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
        "end": 176,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 93,
            "end": 129,
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
            "start": 134,
            "end": 174,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 139,
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
              "start": 167,
              "end": 173,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 169,
                "end": 173
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
      "start": 177,
      "end": 199,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 198,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 190,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
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
      "start": 202,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 235,
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 211,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 211,
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
            "start": 212,
            "end": 234,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 212,
                "end": 215,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 219,
              "end": 234,
              "callee": {
                "type": "MemberExpression",
                "start": 219,
                "end": 229,
                "object": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 222,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 229,
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
                  "start": 230,
                  "end": 233,
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
      "start": 237,
      "end": 272,
      "expression": {
        "type": "CallExpression",
        "start": 237,
        "end": 271,
        "callee": {
          "type": "MemberExpression",
          "start": 237,
          "end": 247,
          "object": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 247,
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
            "start": 248,
            "end": 270,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 255,
              "end": 270,
              "callee": {
                "type": "MemberExpression",
                "start": 255,
                "end": 265,
                "object": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 258,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 265,
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
                  "start": 266,
                  "end": 269,
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
