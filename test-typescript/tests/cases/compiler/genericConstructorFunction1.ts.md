__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 374,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 22,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
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
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 169,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 30,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 79,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 79,
                  "name": "v1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 38,
                      "end": 79,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 40,
                          "end": 77,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 41,
                              "end": 54,
                              "name": "index",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 46,
                                "end": 54,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 48,
                                  "end": 54
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 55,
                            "end": 77,
                            "typeAnnotation": {
                              "type": "TSConstructorType",
                              "start": 57,
                              "end": 77,
                              "abstract": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 62,
                                  "end": 68,
                                  "name": "arg",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 65,
                                    "end": 68,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 67,
                                      "end": 68,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 67,
                                        "end": 68,
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
                                "start": 70,
                                "end": 77,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 73,
                                  "end": 77,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 73,
                                    "end": 77,
                                    "name": "Date",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
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
            "type": "VariableDeclaration",
            "start": 85,
            "end": 105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 89,
                "end": 104,
                "id": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 91,
                  "name": "v2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 94,
                  "end": 104,
                  "object": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 96,
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 97,
                    "end": 103,
                    "value": "test",
                    "raw": "'test'"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 119,
            "expression": {
              "type": "CallExpression",
              "start": 110,
              "end": 118,
              "callee": {
                "type": "Identifier",
                "start": 110,
                "end": 112,
                "name": "v2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 117,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 125,
            "end": 145,
            "argument": {
              "type": "NewExpression",
              "start": 132,
              "end": 144,
              "callee": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "name": "v2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 143,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 172,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 186,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
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
        "start": 188,
        "end": 210,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 190,
            "end": 208,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 201,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 198,
                  "end": 201,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 200,
                    "end": 201,
                    "typeName": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 201,
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
              "start": 202,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 208,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 210,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 223,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 227,
          "end": 234,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
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
      "body": {
        "type": "BlockStatement",
        "start": 236,
        "end": 374,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 242,
            "end": 277,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 246,
                "end": 276,
                "id": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 276,
                  "name": "v1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 276,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 250,
                      "end": 276,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 252,
                          "end": 274,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 253,
                              "end": 266,
                              "name": "index",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 258,
                                "end": 266,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 260,
                                  "end": 266
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 267,
                            "end": 274,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 269,
                              "end": 274,
                              "typeName": {
                                "type": "Identifier",
                                "start": 269,
                                "end": 271,
                                "name": "I1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 271,
                                "end": 274,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 272,
                                    "end": 273,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 272,
                                      "end": 273,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
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
            "type": "VariableDeclaration",
            "start": 282,
            "end": 302,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 286,
                "end": 301,
                "id": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 288,
                  "name": "v2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 291,
                  "end": 301,
                  "object": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 293,
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 294,
                    "end": 300,
                    "value": "test",
                    "raw": "'test'"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 307,
            "end": 324,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 311,
                "end": 323,
                "id": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 315,
                  "end": 323,
                  "callee": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 317,
                    "name": "v2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 318,
                      "end": 322,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 330,
            "end": 350,
            "argument": {
              "type": "NewExpression",
              "start": 337,
              "end": 349,
              "callee": {
                "type": "Identifier",
                "start": 341,
                "end": 343,
                "name": "v2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 344,
                  "end": 348,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 223,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 224,
            "end": 225,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
