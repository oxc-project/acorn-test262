__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 514,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Kind",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 16,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 23,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 27,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 63,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 61,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 60,
                  "name": "Kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 65,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 85,
          "end": 89,
          "expression": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 90,
        "end": 125,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 109,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 108,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 102,
                  "end": 108,
                  "left": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 106,
                    "name": "Kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 123,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "name": "yar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 147,
          "end": 151,
          "expression": {
            "type": "Identifier",
            "start": 147,
            "end": 151,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 152,
        "end": 187,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 158,
            "end": 171,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 162,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 170,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 164,
                  "end": 170,
                  "left": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 168,
                    "name": "Kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 185,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "name": "gar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 184,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 189,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 198,
        "name": "Both",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 201,
        "end": 206,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 201,
            "end": 202,
            "typeName": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 205,
            "end": 206,
            "typeName": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 223,
        "name": "isBoth",
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
          "end": 231,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 225,
            "end": 231,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 227,
              "end": 231,
              "typeName": {
                "type": "Identifier",
                "start": 227,
                "end": 231,
                "name": "Base",
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
        "start": 244,
        "end": 264,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 250,
            "end": 262,
            "argument": {
              "type": "Literal",
              "start": 257,
              "end": 261,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 232,
        "end": 243,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 234,
          "end": 243,
          "parameterName": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 239,
            "end": 243,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 239,
              "end": 243,
              "typeName": {
                "type": "Identifier",
                "start": 239,
                "end": 243,
                "name": "Both",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 279,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 279,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 282,
            "end": 291,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 293,
      "end": 513,
      "test": {
        "type": "CallExpression",
        "start": 297,
        "end": 308,
        "callee": {
          "type": "Identifier",
          "start": 297,
          "end": 303,
          "name": "isBoth",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 304,
            "end": 307,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 310,
        "end": 513,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 316,
            "end": 511,
            "discriminant": {
              "type": "MemberExpression",
              "start": 324,
              "end": 332,
              "object": {
                "type": "Identifier",
                "start": 324,
                "end": 327,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 328,
                "end": 332,
                "name": "kind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 344,
                "end": 433,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 369,
                    "end": 388,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 375,
                        "end": 387,
                        "id": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 381,
                          "name": "myA",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 378,
                            "end": 381,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 380,
                              "end": 381,
                              "typeName": {
                                "type": "Identifier",
                                "start": 380,
                                "end": 381,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 387,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 427,
                    "end": 433,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 349,
                  "end": 355,
                  "object": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 353,
                    "name": "Kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 355,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 442,
                "end": 505,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 467,
                    "end": 486,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 473,
                        "end": 485,
                        "id": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 479,
                          "name": "myB",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 476,
                            "end": 479,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 478,
                              "end": 479,
                              "typeName": {
                                "type": "Identifier",
                                "start": 478,
                                "end": 479,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 485,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 499,
                    "end": 505,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 447,
                  "end": 453,
                  "object": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 451,
                    "name": "Kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
