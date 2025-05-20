__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 587,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 20,
      "end": 70,
      "body": {
        "type": "TSInterfaceBody",
        "start": 45,
        "end": 70,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 51,
            "end": 68,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 55,
                "end": 63,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 63,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 63,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 38,
        "decorators": [],
        "name": "Settable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 40,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 310,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 310,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 145,
            "end": 162,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 158,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 160,
                "end": 161,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 178,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 189,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 199,
                    "end": 217,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 199,
                      "end": 216,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 199,
                        "end": 208,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 199,
                          "end": 203
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 208,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 216,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 179,
                  "end": 187,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 186,
                      "end": 187,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 228,
            "end": 308,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 308,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 295,
                          "end": 300,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 291,
                        "decorators": [],
                        "name": "Identity",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 291,
                        "end": 294,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 292,
                            "end": 293,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 292,
                              "end": 293,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 247,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 244,
                    "end": 247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 246,
                      "end": 247,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 247,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 248,
                "end": 261,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 250,
                  "end": 261,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 258,
                    "end": 261,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 259,
                        "end": 260,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 260,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 258,
                    "decorators": [],
                    "name": "Identity",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 99,
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "Settable",
            "optional": false,
            "typeAnnotation": null
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 131,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 133,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 133,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 131,
                  "decorators": [],
                  "name": "Identity",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 136,
                "end": 137,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 341,
      "end": 403,
      "body": {
        "type": "TSInterfaceBody",
        "start": 400,
        "end": 403,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 356,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 356,
        "end": 399,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 357,
            "end": 358,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 398,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 370,
              "end": 384,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 378,
                "end": 384,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 379,
                    "end": 380,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 380,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 382,
                    "end": 383,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 383,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 378,
                "decorators": [],
                "name": "Settable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 398,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 395,
                "end": 398,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 396,
                    "end": 397,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 397,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 395,
                "decorators": [],
                "name": "Identity",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 429,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 416,
                "end": 429,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 421,
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 465,
      "end": 517,
      "body": {
        "type": "TSInterfaceBody",
        "start": 514,
        "end": 517,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 475,
        "end": 484,
        "decorators": [],
        "name": "Test2Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 484,
        "end": 513,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 485,
            "end": 486,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 488,
            "end": 512,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 498,
              "end": 512,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 506,
                "end": 512,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 507,
                    "end": 508,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 508,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 510,
                    "end": 511,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 511,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 498,
                "end": 506,
                "decorators": [],
                "name": "Settable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
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
      "type": "EmptyStatement",
      "start": 517,
      "end": 518
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 519,
      "end": 561,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 524,
        "end": 529,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 535,
        "end": 560,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 544,
          "end": 560,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 545,
              "end": 546,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 548,
              "end": 559,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 556,
                "end": 559,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 557,
                    "end": 558,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 558,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 556,
                "decorators": [],
                "name": "Identity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 535,
          "end": 544,
          "decorators": [],
          "name": "Test2Base",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "decorators": [],
              "name": "V",
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
      "start": 562,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 586,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 586,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 586,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 573,
                "end": 586,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 578,
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
