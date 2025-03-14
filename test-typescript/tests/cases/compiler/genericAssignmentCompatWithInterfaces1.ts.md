genericAssignmentCompatWithInterfaces1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 444,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 59,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 29,
            "end": 57,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 38,
              "decorators": [],
              "name": "compareTo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 39,
                "end": 47,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 46,
                    "end": 47,
                    "typeName": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
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
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Comparable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 100,
      "body": {
        "type": "TSInterfaceBody",
        "start": 75,
        "end": 100,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 81,
            "end": 98,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 97,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 94,
                  "end": 97,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 95,
                      "end": 96,
                      "typeName": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 94,
                  "decorators": [],
                  "name": "Comparable",
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
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
      "type": "TSInterfaceDeclaration",
      "start": 101,
      "end": 131,
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 131,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 129,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 128,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 125,
                  "end": 128,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 126,
                      "end": 127,
                      "typeName": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "A",
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
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "K",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
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
      "type": "ClassDeclaration",
      "start": 132,
      "end": 205,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 168,
        "end": 205,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 170,
            "end": 203,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 179,
              "decorators": [],
              "name": "compareTo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 203,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 192,
                    "end": 201,
                    "argument": {
                      "type": "Literal",
                      "start": 199,
                      "end": 200,
                      "raw": "1",
                      "value": 1
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
                  "start": 180,
                  "end": 188,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 185,
                    "end": 188,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 187,
                      "end": 188,
                      "typeName": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 139,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 154,
          "end": 167,
          "expression": {
            "type": "Identifier",
            "start": 154,
            "end": 164,
            "decorators": [],
            "name": "Comparable",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 164,
            "end": 167,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 165,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 139,
        "end": 142,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 141,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
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
      "type": "VariableDeclaration",
      "start": 206,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 214,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 216,
                "end": 234,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 219,
                  "end": 234,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 224,
                    "end": 232,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 225,
                        "end": 231
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 280,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 255,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 246,
                "end": 255,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 247,
                  "end": 255,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 248,
                      "end": 254
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 258,
            "end": 280,
            "properties": [
              {
                "type": "Property",
                "start": 260,
                "end": 278,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 263,
                  "end": 278,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 268,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 268,
                    "end": 276,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 269,
                        "end": 275
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 383,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 299,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 299,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 291,
                  "end": 299,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 292,
                      "end": 298
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 302,
            "end": 383,
            "arguments": [],
            "callee": {
              "type": "FunctionExpression",
              "start": 302,
              "end": 380,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 380,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 337,
                    "end": 368,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 341,
                        "end": 367,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 341,
                          "end": 342,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 345,
                          "end": 367,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 347,
                              "end": 365,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 347,
                                "end": 348,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "NewExpression",
                                "start": 350,
                                "end": 365,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 354,
                                  "end": 355,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 355,
                                  "end": 363,
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 356,
                                      "end": 362
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 369,
                    "end": 378,
                    "argument": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 377,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 313,
                "end": 331,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 315,
                  "end": 331,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 317,
                      "end": 329,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 318,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 318,
                        "end": 329,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 320,
                          "end": 329,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 321,
                            "end": 329,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 322,
                                "end": 328
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 320,
                            "end": 321,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 407,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 406,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 402,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 402,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 393,
                "end": 402,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 394,
                  "end": 402,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 395,
                      "end": 401
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 394,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 408,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 425,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 416,
                "end": 425,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 417,
                  "end": 425,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 418,
                      "end": 424
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 417,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 428,
            "end": 440,
            "expression": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 429,
              "end": 438,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 430,
                "end": 438,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 431,
                    "end": 437
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 429,
                "end": 430,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
