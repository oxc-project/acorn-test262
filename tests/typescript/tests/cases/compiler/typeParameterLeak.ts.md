__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 384,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
        "start": 39,
        "end": 50,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 48,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 51,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 64,
        "decorators": [],
        "name": "BoxTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 67,
        "end": 106,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 67,
            "end": 85,
            "typeName": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 74,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 74,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 76,
                          "end": 82
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 88,
            "end": 106,
            "typeName": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 95,
                        "end": 103,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 97,
                          "end": 103
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 109,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 131,
        "decorators": [],
        "name": "BoxFactoryFactory",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "TBox",
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 153,
          "end": 165,
          "typeName": {
            "type": "Identifier",
            "start": 153,
            "end": 156,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "name": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
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
              }
            ]
          }
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
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 192,
                        "decorators": [],
                        "name": "BoxFactory",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
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
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 215,
          "end": 220
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 243,
        "decorators": [],
        "name": "BoxFactory",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "A",
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
        "start": 247,
        "end": 265,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 251,
            "end": 263,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 257,
              "decorators": [],
              "name": "getBox",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 267,
      "end": 312,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 311,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 301,
                  "decorators": [],
                  "name": "BoxFactoryFactory",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 353,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ChainExpression",
            "start": 323,
            "end": 352,
            "expression": {
              "type": "CallExpression",
              "start": 323,
              "end": 352,
              "callee": {
                "type": "MemberExpression",
                "start": 323,
                "end": 350,
                "object": {
                  "type": "CallExpression",
                  "start": 323,
                  "end": 342,
                  "callee": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 324,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 327,
                            "end": 328,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 330,
                            "end": 332,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 334,
                          "end": 339,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 335,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 337,
                            "end": 339,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 350,
                  "decorators": [],
                  "name": "getBox",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 354,
      "end": 384,
      "test": {
        "type": "Identifier",
        "start": 358,
        "end": 359,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 361,
        "end": 384,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 382,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 371,
                "end": 381,
                "id": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 375,
                  "end": 381,
                  "object": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 376,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 381,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
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
