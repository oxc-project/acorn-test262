__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 75,
  "end": 370,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 75,
      "end": 114,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 114,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 103,
            "end": 112,
            "argument": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 95,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 95,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 95,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 174,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 123,
                "end": 174,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 129,
                    "end": 149,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 139,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 131,
                          "end": 139,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 133,
                            "end": 139
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 140,
                      "end": 148,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 142,
                        "end": 148,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 148,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 154,
                    "end": 172,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 155,
                        "end": 164,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 156,
                          "end": 164,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 158,
                            "end": 164
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 165,
                      "end": 171,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 171,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 171,
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 184,
            "end": 190,
            "arguments": [
              {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 184,
              "end": 187,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 370,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 232,
        "end": 370,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 238,
            "end": 305,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 242,
                "end": 304,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 304,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 245,
                      "end": 304,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 255,
                          "end": 275,
                          "accessibility": null,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 256,
                              "end": 265,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 257,
                                "end": 265,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 259,
                                  "end": 265
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 266,
                            "end": 274,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 268,
                              "end": 274,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 274,
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "TSIndexSignature",
                          "start": 284,
                          "end": 298,
                          "accessibility": null,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 285,
                              "end": 294,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 286,
                                "end": 294,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 288,
                                  "end": 294
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 295,
                            "end": 298,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 297,
                              "end": 298,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 297,
                                "end": 298,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
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
          },
          {
            "type": "VariableDeclaration",
            "start": 310,
            "end": 326,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 314,
                "end": 325,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 316,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 319,
                  "end": 325,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 323,
                      "end": 324,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 322,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 331,
            "end": 345,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 335,
                "end": 344,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 339,
                  "end": 344,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 339,
                    "end": 341,
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 342,
                    "end": 343,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 351,
            "end": 367,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 366,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 359,
                  "end": 366,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 361,
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 362,
                    "end": 365,
                    "raw": "'1'",
                    "value": "1"
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 207,
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 224,
          "end": 230,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 222,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 222,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 222,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
