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
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 27,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 24,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Kind",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 63,
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
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 54,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "Kind",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 65,
      "end": 125,
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
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "Kind",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 123,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "decorators": [],
              "name": "yar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 85,
          "end": 89,
          "expression": {
            "type": "Identifier",
            "start": 85,
            "end": 89,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 127,
      "end": 187,
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
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 162,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "Kind",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 185,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "decorators": [],
              "name": "gar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 184,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 147,
          "end": 151,
          "expression": {
            "type": "Identifier",
            "start": 147,
            "end": 151,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 189,
      "end": 207,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 198,
        "decorators": [],
        "name": "Both",
        "optional": false
      },
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
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 205,
            "end": 206,
            "typeName": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 264,
      "async": false,
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
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 223,
        "decorators": [],
        "name": "isBoth",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 224,
          "end": 231,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 232,
        "end": 243,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 234,
          "end": 243,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "decorators": [],
            "name": "x",
            "optional": false
          },
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
                "decorators": [],
                "name": "Both",
                "optional": false
              }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 279,
            "decorators": [],
            "name": "foo",
            "optional": false,
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
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 282,
            "end": 291,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 293,
      "end": 513,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 310,
        "end": 513,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 316,
            "end": 511,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 381,
                          "decorators": [],
                          "name": "myA",
                          "optional": false,
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
                                "decorators": [],
                                "name": "A",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 387,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 353,
                    "decorators": [],
                    "name": "Kind",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 355,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 479,
                          "decorators": [],
                          "name": "myB",
                          "optional": false,
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
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 485,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 451,
                    "decorators": [],
                    "name": "Kind",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 324,
              "end": 332,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 324,
                "end": 327,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 328,
                "end": 332,
                "decorators": [],
                "name": "kind",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 297,
        "end": 308,
        "arguments": [
          {
            "type": "Identifier",
            "start": 304,
            "end": 307,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 297,
          "end": 303,
          "decorators": [],
          "name": "isBoth",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
