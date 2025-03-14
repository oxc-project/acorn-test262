__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 385,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 50,
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 50,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 48,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "T",
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
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 107,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 64,
        "decorators": [],
        "name": "BoxTypes",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 67,
        "end": 106,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 67,
            "end": 85,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 70,
              "end": 85,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 71,
                  "end": 84,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 73,
                      "end": 82,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 74,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 74,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 76,
                          "end": 82
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "Box",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 88,
            "end": 106,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 91,
              "end": 106,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 92,
                  "end": 105,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 94,
                      "end": 103,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 95,
                        "end": 103,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 97,
                          "end": 103
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "Box",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 109,
      "end": 221,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 131,
        "decorators": [],
        "name": "BoxFactoryFactory",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 140,
        "end": 220,
        "checkType": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 144,
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 144,
            "decorators": [],
            "name": "TBox",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 153,
          "end": 165,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 156,
            "end": 165,
            "params": [
              {
                "type": "TSInferType",
                "start": 157,
                "end": 164,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 163,
                  "end": 164,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 153,
            "end": 156,
            "decorators": [],
            "name": "Box",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 215,
          "end": 220
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 168,
          "end": 212,
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 172,
              "end": 210,
              "params": [
                {
                  "type": "Identifier",
                  "start": 173,
                  "end": 179,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 179,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
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
                "start": 180,
                "end": 210,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 182,
                  "end": 210,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 182,
                      "end": 198,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 192,
                        "end": 198,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 193,
                            "end": 197,
                            "typeName": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 197,
                              "decorators": [],
                              "name": "TBox",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 192,
                        "decorators": [],
                        "name": "BoxFactory",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 201,
                      "end": 210
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 137,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 136,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "TBox",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 265,
      "body": {
        "type": "TSInterfaceBody",
        "start": 247,
        "end": 265,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 251,
            "end": 263,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 257,
              "decorators": [],
              "name": "getBox",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 259,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 261,
                "end": 262,
                "typeName": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
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
        "start": 233,
        "end": 243,
        "decorators": [],
        "name": "BoxFactory",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 243,
        "end": 246,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 244,
            "end": 245,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 311,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 311,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 301,
                  "end": 311,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 302,
                      "end": 310,
                      "typeName": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 310,
                        "decorators": [],
                        "name": "BoxTypes",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 301,
                  "decorators": [],
                  "name": "BoxFactoryFactory",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ChainExpression",
            "start": 323,
            "end": 352,
            "expression": {
              "type": "CallExpression",
              "start": 323,
              "end": 352,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 323,
                "end": 350,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 323,
                  "end": 342,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 325,
                      "end": 341,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 327,
                          "end": 332,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 327,
                            "end": 328,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 330,
                            "end": 332,
                            "raw": "\"\"",
                            "value": ""
                          }
                        },
                        {
                          "type": "Property",
                          "start": 334,
                          "end": 339,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 335,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 337,
                            "end": 339,
                            "raw": "\"\"",
                            "value": ""
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 324,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 350,
                  "decorators": [],
                  "name": "getBox",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 354,
      "end": 384,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 361,
        "end": 384,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 382,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 371,
                "end": 381,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 375,
                  "end": 381,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 381,
                    "decorators": [],
                    "name": "data",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 358,
        "end": 359,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
