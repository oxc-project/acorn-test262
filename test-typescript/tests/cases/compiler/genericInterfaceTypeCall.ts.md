__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "reject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "arg",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 67,
            "name": "foo",
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "fail",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "func",
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
                        "name": "arg",
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": false
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
              "name": "fail2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "func2",
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
                            "name": "arg",
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
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                },
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 198,
            "name": "test",
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
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 211,
            "name": "fail",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 212,
            "end": 234,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 212,
                "end": 215,
                "name": "arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 229,
                  "name": "reject",
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
                  "start": 230,
                  "end": 233,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 247,
            "name": "fail2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 248,
            "end": 270,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "name": "arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 265,
                  "name": "reject",
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
                  "start": 266,
                  "end": 269,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
