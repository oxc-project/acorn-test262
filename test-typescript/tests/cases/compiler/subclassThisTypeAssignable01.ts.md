tile1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 638,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 102,
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 102,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 81,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 43,
              "decorators": [],
              "name": "oninit",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 71,
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 52,
                    "end": 71,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 57,
                      "end": 71,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 58,
                          "end": 63,
                          "typeName": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 63,
                            "decorators": [],
                            "name": "Attrs",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 65,
                          "end": 70,
                          "typeName": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 70,
                            "decorators": [],
                            "name": "State",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 57,
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              }
            },
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 83,
            "end": 100,
            "parameters": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 87,
                    "end": 93
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 99,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "Lifecycle",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "decorators": [],
              "name": "Attrs",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 32,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "State",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 104,
      "end": 226,
      "body": {
        "type": "TSInterfaceBody",
        "start": 192,
        "end": 226,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 195,
            "end": 224,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 198,
              "decorators": [],
              "name": "tag",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 200,
                "end": 223,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 209,
                  "end": 223,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 210,
                      "end": 215,
                      "typeName": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 215,
                        "decorators": [],
                        "name": "Attrs",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 217,
                      "end": 222,
                      "typeName": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 222,
                        "decorators": [],
                        "name": "State",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 209,
                  "decorators": [],
                  "name": "Component",
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
        "start": 114,
        "end": 119,
        "decorators": [],
        "name": "Vnode",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 125,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "decorators": [],
              "name": "Attrs",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 127,
            "end": 190,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 164,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 150,
                "end": 164,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 156,
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 158,
                    "end": 163,
                    "typeName": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 163,
                      "decorators": [],
                      "name": "State",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 150,
                "decorators": [],
                "name": "Lifecycle",
                "optional": false
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 167,
              "end": 190,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 176,
                "end": 190,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 177,
                    "end": 182,
                    "typeName": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 182,
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 184,
                    "end": 189,
                    "typeName": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 189,
                      "decorators": [],
                      "name": "State",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 167,
                "end": 176,
                "decorators": [],
                "name": "Lifecycle",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 132,
              "decorators": [],
              "name": "State",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 228,
      "end": 321,
      "body": {
        "type": "TSInterfaceBody",
        "start": 262,
        "end": 321,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 265,
            "end": 319,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 269,
              "decorators": [],
              "name": "view",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 270,
                "end": 281,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 274,
                  "end": 281,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 276,
                    "end": 281,
                    "typeName": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 281,
                      "decorators": [],
                      "name": "State",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 283,
                "end": 309,
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 288,
                  "end": 309,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 290,
                    "end": 309,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 295,
                      "end": 309,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 296,
                          "end": 301,
                          "typeName": {
                            "type": "Identifier",
                            "start": 296,
                            "end": 301,
                            "decorators": [],
                            "name": "Attrs",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 303,
                          "end": 308,
                          "typeName": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 308,
                            "decorators": [],
                            "name": "State",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 295,
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 318,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 312,
                "end": 318
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
        "start": 238,
        "end": 247,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 247,
        "end": 261,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 248,
            "end": 253,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 248,
              "end": 253,
              "decorators": [],
              "name": "Attrs",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 255,
            "end": 260,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 255,
              "end": 260,
              "decorators": [],
              "name": "State",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 323,
      "end": 473,
      "body": {
        "type": "TSInterfaceBody",
        "start": 391,
        "end": 473,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 394,
            "end": 433,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 400,
              "decorators": [],
              "name": "oninit",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 402,
                "end": 423,
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 407,
                  "end": 423,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 409,
                    "end": 423,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 414,
                      "end": 423,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 415,
                          "end": 416,
                          "typeName": {
                            "type": "Identifier",
                            "start": 415,
                            "end": 416,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSThisType",
                          "start": 418,
                          "end": 422
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 409,
                      "end": 414,
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 424,
              "end": 432,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 426,
                "end": 432
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 435,
            "end": 471,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "decorators": [],
              "name": "view",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 440,
                "end": 461,
                "decorators": [],
                "name": "vnode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 445,
                  "end": 461,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 447,
                    "end": 461,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 452,
                      "end": 461,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 453,
                          "end": 454,
                          "typeName": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 454,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSThisType",
                          "start": 456,
                          "end": 460
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 452,
                      "decorators": [],
                      "name": "Vnode",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 470,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 464,
                "end": 470
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 359,
          "end": 390,
          "expression": {
            "type": "Identifier",
            "start": 359,
            "end": 368,
            "decorators": [],
            "name": "Lifecycle",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 368,
            "end": 390,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 369,
                "end": 370,
                "typeName": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 370,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 372,
                "end": 389,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 386,
                  "end": 389,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 387,
                      "end": 388,
                      "typeName": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 386,
                  "decorators": [],
                  "name": "ClassComponent",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 347,
        "decorators": [],
        "name": "ClassComponent",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 347,
        "end": 350,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 348,
            "end": 349,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
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
      "type": "TSInterfaceDeclaration",
      "start": 475,
      "end": 507,
      "body": {
        "type": "TSInterfaceBody",
        "start": 493,
        "end": 507,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 495,
            "end": 505,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 497,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 505,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 499,
                "end": 505
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 492,
        "decorators": [],
        "name": "MyAttrs",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 508,
      "end": 593,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 551,
        "end": 593,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 554,
            "end": 591,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 554,
              "end": 558,
              "decorators": [],
              "name": "view",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 558,
              "end": 591,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 578,
                "end": 591,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 580,
                    "end": 589,
                    "argument": {
                      "type": "Literal",
                      "start": 587,
                      "end": 588,
                      "raw": "0",
                      "value": 0
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
                  "start": 559,
                  "end": 576,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 560,
                    "end": 576,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 562,
                      "end": 576,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 567,
                        "end": 576,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 568,
                            "end": 575,
                            "typeName": {
                              "type": "Identifier",
                              "start": 568,
                              "end": 575,
                              "decorators": [],
                              "name": "MyAttrs",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 562,
                        "end": 567,
                        "decorators": [],
                        "name": "Vnode",
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
        "start": 514,
        "end": 515,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 527,
          "end": 550,
          "expression": {
            "type": "Identifier",
            "start": 527,
            "end": 541,
            "decorators": [],
            "name": "ClassComponent",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 541,
            "end": 550,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 542,
                "end": 549,
                "typeName": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 549,
                  "decorators": [],
                  "name": "MyAttrs",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 595,
      "end": 638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 601,
          "end": 637,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 627,
            "decorators": [],
            "name": "test8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 606,
              "end": 627,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 608,
                "end": 627,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 622,
                  "end": 627,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 623,
                      "end": 626
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 622,
                  "decorators": [],
                  "name": "ClassComponent",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 630,
            "end": 637,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 634,
              "end": 635,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
