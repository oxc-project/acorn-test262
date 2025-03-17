__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 588,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 20,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 38,
        "name": "Settable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 40,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "V",
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
        "start": 45,
        "end": 70,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 51,
            "end": 68,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "name": "set",
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
                "start": 55,
                "end": 63,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 63,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 63,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "name": "V",
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
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "ClassDeclaration",
      "start": 85,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 99,
        "name": "Identity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 310,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 145,
            "end": 162,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 158,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 160,
                "end": 161,
                "typeName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 223,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 178,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 223,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 179,
                  "end": 187,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 186,
                      "end": 187,
                      "typeName": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
                        "name": "V",
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
                "start": 189,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 199,
                    "end": 217,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 199,
                      "end": 216,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 199,
                        "end": 208,
                        "object": {
                          "type": "ThisExpression",
                          "start": 199,
                          "end": 203
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 208,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 216,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 308,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 308,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 247,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 244,
                    "end": 247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 246,
                      "end": 247,
                      "typeName": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 247,
                        "name": "V",
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
                "start": 262,
                "end": 308,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 272,
                    "end": 302,
                    "argument": {
                      "type": "NewExpression",
                      "start": 279,
                      "end": 301,
                      "callee": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 291,
                        "name": "Identity",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 295,
                          "end": 300,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 291,
                        "end": 294,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 292,
                            "end": 293,
                            "typeName": {
                              "type": "Identifier",
                              "start": 292,
                              "end": 293,
                              "name": "V",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 248,
                "end": 261,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 250,
                  "end": 261,
                  "typeName": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 258,
                    "name": "Identity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 258,
                    "end": 261,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 259,
                        "end": 260,
                        "typeName": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 260,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "V",
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 114,
          "end": 138,
          "expression": {
            "type": "Identifier",
            "start": 114,
            "end": 122,
            "name": "Settable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 122,
            "end": 138,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 123,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 131,
                  "name": "Identity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 131,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "name": "V",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 136,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 341,
      "end": 403,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 356,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 356,
        "end": 399,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 357,
            "end": 358,
            "name": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 398,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 370,
              "end": 384,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 378,
                "name": "Settable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 378,
                "end": 384,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 379,
                    "end": 380,
                    "typeName": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 380,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 382,
                    "end": 383,
                    "typeName": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 383,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 398,
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 395,
                "name": "Identity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 395,
                "end": 398,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 396,
                    "end": 397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 397,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 400,
        "end": 403,
        "body": []
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 403,
      "end": 404
    },
    {
      "type": "VariableDeclaration",
      "start": 405,
      "end": 430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 429,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 429,
            "name": "test1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 416,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 421,
                  "name": "Test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 421,
                  "end": 429,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 422,
                      "end": 428
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 465,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 475,
        "end": 484,
        "name": "Test2Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 484,
        "end": 513,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 485,
            "end": 486,
            "name": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 488,
            "end": 512,
            "name": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 498,
              "end": 512,
              "typeName": {
                "type": "Identifier",
                "start": 498,
                "end": 506,
                "name": "Settable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 506,
                "end": 512,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 507,
                    "end": 508,
                    "typeName": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 508,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 510,
                    "end": 511,
                    "typeName": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 511,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 514,
        "end": 517,
        "body": []
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 517,
      "end": 518
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 519,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 524,
        "end": 529,
        "name": "Test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 529,
        "end": 532,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 530,
            "end": 531,
            "name": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "name": "V",
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 535,
        "end": 560,
        "typeName": {
          "type": "Identifier",
          "start": 535,
          "end": 544,
          "name": "Test2Base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 544,
          "end": 560,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 545,
              "end": 546,
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 548,
              "end": 559,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 556,
                "name": "Identity",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 556,
                "end": 559,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 557,
                    "end": 558,
                    "typeName": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 558,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 586,
            "name": "test2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 586,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 573,
                "end": 586,
                "typeName": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 578,
                  "name": "Test2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 578,
                  "end": 586,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 579,
                      "end": 585
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
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
