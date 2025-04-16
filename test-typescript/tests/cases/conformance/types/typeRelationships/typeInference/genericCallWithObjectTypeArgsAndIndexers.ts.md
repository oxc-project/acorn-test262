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
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "name": "foo",
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
          "start": 91,
          "end": 95,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 95,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
      "type": "VariableDeclaration",
      "start": 116,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 174,
            "name": "a",
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 139,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 131,
                          "end": 139,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 133,
                            "end": 139
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 140,
                      "end": 148,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 142,
                        "end": 148,
                        "typeName": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 148,
                          "name": "Object",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 154,
                    "end": 172,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 155,
                        "end": 164,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 156,
                          "end": 164,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 158,
                            "end": 164
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 165,
                      "end": 171,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 171,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 171,
                          "name": "Date",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
      "start": 176,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 184,
            "end": 190,
            "callee": {
              "type": "Identifier",
              "start": 184,
              "end": 187,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "a",
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
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 207,
        "name": "other",
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
          "start": 224,
          "end": 230,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
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
                "id": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 304,
                  "name": "b",
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
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 256,
                              "end": 265,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 257,
                                "end": 265,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 259,
                                  "end": 265
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 266,
                            "end": 274,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 268,
                              "end": 274,
                              "typeName": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 274,
                                "name": "Object",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        },
                        {
                          "type": "TSIndexSignature",
                          "start": 284,
                          "end": 298,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 285,
                              "end": 294,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 286,
                                "end": 294,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 288,
                                  "end": 294
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 295,
                            "end": 298,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 297,
                              "end": 298,
                              "typeName": {
                                "type": "Identifier",
                                "start": 297,
                                "end": 298,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
            "start": 310,
            "end": 326,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 314,
                "end": 325,
                "id": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 316,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 319,
                  "end": 325,
                  "callee": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 322,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 323,
                      "end": 324,
                      "name": "b",
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
            "type": "VariableDeclaration",
            "start": 331,
            "end": 345,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 335,
                "end": 344,
                "id": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 339,
                  "end": 344,
                  "object": {
                    "type": "Identifier",
                    "start": 339,
                    "end": 341,
                    "name": "r2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 342,
                    "end": 343,
                    "value": 1,
                    "raw": "1"
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
            "start": 351,
            "end": 367,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 366,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 359,
                  "end": 366,
                  "object": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 361,
                    "name": "r2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 362,
                    "end": 365,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 207,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 208,
            "end": 222,
            "name": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 222,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 222,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
