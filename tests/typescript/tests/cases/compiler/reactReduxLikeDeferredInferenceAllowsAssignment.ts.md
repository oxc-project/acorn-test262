__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3865,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 166,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "P",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 63,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 42,
              "end": 63,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 61,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 50,
                      "end": 61,
                      "typeName": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 58,
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 58,
                        "end": 61,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 59,
                            "end": 60,
                            "typeName": {
                              "type": "Identifier",
                              "start": 59,
                              "end": 60,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 77,
              "end": 103,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 86,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 86,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 88,
                  "end": 101,
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 164,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 120,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 163,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 122,
                "end": 163,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 133,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 130,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 130,
                      "end": 133,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 131,
                          "end": 132,
                          "typeName": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 132,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 163,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 144,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 144,
                      "end": 163,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 145,
                          "end": 162,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 147,
                              "end": 160,
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 147,
                                "end": 155,
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 156,
                                "end": 160,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 158,
                                  "end": 160,
                                  "members": []
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
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 167,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 191,
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 191,
        "end": 199,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 192,
            "end": 198,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 196,
              "end": 198,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 200,
        "end": 339,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 204,
            "end": 248,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 209,
                "end": 217,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 214,
                  "end": 217,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 216,
                    "end": 217,
                    "typeName": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 217,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 219,
                "end": 232,
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 227,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 229,
                    "end": 232
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 247,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 244,
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 244,
                  "end": 247,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 245,
                      "end": 246,
                      "typeName": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 246,
                        "decorators": [],
                        "name": "P",
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
          {
            "type": "TSPropertySignature",
            "start": 251,
            "end": 284,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 260,
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 283,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 280,
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 280,
                  "end": 283,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 281,
                      "end": 282,
                      "typeName": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 282,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 287,
            "end": 313,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 299,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 312,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 312,
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 309,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 309,
                  "end": 312,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 310,
                      "end": 311,
                      "typeName": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 311,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 316,
            "end": 337,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 327,
              "decorators": [],
              "name": "displayName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 336,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 330,
                "end": 336
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
      "start": 340,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 367,
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 367,
        "end": 375,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 368,
            "end": 374,
            "name": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 372,
              "end": 374,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 376,
        "end": 528,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 380,
            "end": 437,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 381,
                "end": 409,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 386,
                  "end": 409,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 388,
                    "end": 409,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 388,
                        "end": 389,
                        "typeName": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 389,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 392,
                        "end": 409,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 394,
                            "end": 407,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 394,
                              "end": 402,
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 403,
                              "end": 407,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 405,
                                "end": 407,
                                "members": []
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
              },
              {
                "type": "Identifier",
                "start": 411,
                "end": 424,
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 419,
                  "end": 424,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 421,
                    "end": 424
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 425,
              "end": 436,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 427,
                "end": 436,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 427,
                    "end": 429,
                    "members": []
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 432,
                    "end": 436
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 440,
            "end": 473,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 440,
              "end": 449,
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 450,
              "end": 472,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 452,
                "end": 472,
                "typeName": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 469,
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 469,
                  "end": 472,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 470,
                      "end": 471,
                      "typeName": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 471,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 476,
            "end": 502,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 476,
              "end": 488,
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 489,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 491,
                "end": 501,
                "typeName": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 498,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 498,
                  "end": 501,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 499,
                      "end": 500,
                      "typeName": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 500,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 505,
            "end": 526,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 516,
              "decorators": [],
              "name": "displayName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 517,
              "end": 525,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 519,
                "end": 525
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
      "type": "VariableDeclaration",
      "start": 530,
      "end": 575,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 544,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 544,
            "end": 574,
            "decorators": [],
            "name": "nominalTypeHack",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 574,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 561,
                "end": 574,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 568,
                  "end": 574
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
      "type": "TSInterfaceDeclaration",
      "start": 576,
      "end": 765,
      "id": {
        "type": "Identifier",
        "start": 586,
        "end": 595,
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 595,
        "end": 598,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 596,
            "end": 597,
            "name": {
              "type": "Identifier",
              "start": 596,
              "end": 597,
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
        "start": 599,
        "end": 765,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 603,
            "end": 738,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 609,
                "end": 622,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 614,
                  "end": 622,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 616,
                    "end": 622
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 628,
                "end": 644,
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 636,
                  "end": 644,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 638,
                    "end": 644
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 650,
                "end": 671,
                "decorators": [],
                "name": "componentName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 663,
                  "end": 671,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 665,
                    "end": 671
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 677,
                "end": 693,
                "decorators": [],
                "name": "location",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 685,
                  "end": 693,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 687,
                    "end": 693
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 699,
                "end": 719,
                "decorators": [],
                "name": "propFullName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 711,
                  "end": 719,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 713,
                    "end": 719
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 723,
              "end": 737,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 725,
                "end": 737,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 725,
                    "end": 730,
                    "typeName": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 730,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 733,
                    "end": 737
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 741,
            "end": 763,
            "computed": true,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 742,
              "end": 757,
              "decorators": [],
              "name": "nominalTypeHack",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 759,
              "end": 762,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 761,
                "end": 762,
                "typeName": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 762,
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
      "start": 766,
      "end": 968,
      "id": {
        "type": "Identifier",
        "start": 771,
        "end": 788,
        "decorators": [],
        "name": "WeakValidationMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 788,
        "end": 791,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 789,
            "end": 790,
            "name": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 794,
        "end": 967,
        "key": {
          "type": "Identifier",
          "start": 799,
          "end": 800,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 804,
          "end": 811,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 810,
            "end": 811,
            "typeName": {
              "type": "Identifier",
              "start": 810,
              "end": 811,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 815,
          "end": 965,
          "checkType": {
            "type": "TSNullKeyword",
            "start": 815,
            "end": 819
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 828,
            "end": 832,
            "objectType": {
              "type": "TSTypeReference",
              "start": 828,
              "end": 829,
              "typeName": {
                "type": "Identifier",
                "start": 828,
                "end": 829,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 830,
              "end": 831,
              "typeName": {
                "type": "Identifier",
                "start": 830,
                "end": 831,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 839,
            "end": 873,
            "typeName": {
              "type": "Identifier",
              "start": 839,
              "end": 848,
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 848,
              "end": 873,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 849,
                  "end": 872,
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 849,
                      "end": 853,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 849,
                        "end": 850,
                        "typeName": {
                          "type": "Identifier",
                          "start": 849,
                          "end": 850,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 851,
                        "end": 852,
                        "typeName": {
                          "type": "Identifier",
                          "start": 851,
                          "end": 852,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 856,
                      "end": 860
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 863,
                      "end": 872
                    }
                  ]
                }
              ]
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 880,
            "end": 965,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 880,
              "end": 889
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 898,
              "end": 902,
              "objectType": {
                "type": "TSTypeReference",
                "start": 898,
                "end": 899,
                "typeName": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 899,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 900,
                "end": 901,
                "typeName": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 901,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 909,
              "end": 943,
              "typeName": {
                "type": "Identifier",
                "start": 909,
                "end": 918,
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 918,
                "end": 943,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 919,
                    "end": 942,
                    "types": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 919,
                        "end": 923,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 919,
                          "end": 920,
                          "typeName": {
                            "type": "Identifier",
                            "start": 919,
                            "end": 920,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 921,
                          "end": 922,
                          "typeName": {
                            "type": "Identifier",
                            "start": 921,
                            "end": 922,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 926,
                        "end": 930
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 933,
                        "end": 942
                      }
                    ]
                  }
                ]
              }
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 950,
              "end": 965,
              "typeName": {
                "type": "Identifier",
                "start": 950,
                "end": 959,
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 959,
                "end": 965,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 960,
                    "end": 964,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 960,
                      "end": 961,
                      "typeName": {
                        "type": "Identifier",
                        "start": 960,
                        "end": 961,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 962,
                      "end": 963,
                      "typeName": {
                        "type": "Identifier",
                        "start": 962,
                        "end": 963,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          }
        },
        "optional": true,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 969,
      "end": 1039,
      "id": {
        "type": "Identifier",
        "start": 974,
        "end": 987,
        "decorators": [],
        "name": "ComponentType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 987,
        "end": 995,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 988,
            "end": 994,
            "name": {
              "type": "Identifier",
              "start": 988,
              "end": 989,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 992,
              "end": 994,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 998,
        "end": 1038,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 998,
            "end": 1015,
            "typeName": {
              "type": "Identifier",
              "start": 998,
              "end": 1012,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1012,
              "end": 1015,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1013,
                  "end": 1014,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1013,
                    "end": 1014,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1018,
            "end": 1038,
            "typeName": {
              "type": "Identifier",
              "start": 1018,
              "end": 1035,
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1035,
              "end": 1038,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1036,
                  "end": 1037,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1036,
                    "end": 1037,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "start": 1041,
      "end": 1330,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1052,
        "decorators": [],
        "name": "Shared",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1052,
        "end": 1149,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1056,
            "end": 1069,
            "name": {
              "type": "Identifier",
              "start": 1056,
              "end": 1069,
              "decorators": [],
              "name": "InjectedProps",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1073,
            "end": 1147,
            "name": {
              "type": "Identifier",
              "start": 1073,
              "end": 1094,
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1103,
              "end": 1147,
              "typeName": {
                "type": "Identifier",
                "start": 1103,
                "end": 1109,
                "decorators": [],
                "name": "Shared",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1109,
                "end": 1147,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1110,
                    "end": 1123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1110,
                      "end": 1123,
                      "decorators": [],
                      "name": "InjectedProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1125,
                    "end": 1146,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1125,
                      "end": 1146,
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false,
                      "typeAnnotation": null
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1152,
        "end": 1329,
        "key": {
          "type": "Identifier",
          "start": 1157,
          "end": 1158,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 1162,
          "end": 1231,
          "typeName": {
            "type": "Identifier",
            "start": 1162,
            "end": 1169,
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1169,
            "end": 1231,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 1175,
                "end": 1194,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1181,
                  "end": 1194,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1181,
                    "end": 1194,
                    "decorators": [],
                    "name": "InjectedProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSTypeOperator",
                "start": 1200,
                "end": 1227,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1206,
                  "end": 1227,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1206,
                    "end": 1227,
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1235,
          "end": 1327,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 1235,
            "end": 1251,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1235,
              "end": 1248,
              "typeName": {
                "type": "Identifier",
                "start": 1235,
                "end": 1248,
                "decorators": [],
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1249,
              "end": 1250,
              "typeName": {
                "type": "Identifier",
                "start": 1249,
                "end": 1250,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 1260,
            "end": 1284,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1260,
              "end": 1281,
              "typeName": {
                "type": "Identifier",
                "start": 1260,
                "end": 1281,
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1282,
              "end": 1283,
              "typeName": {
                "type": "Identifier",
                "start": 1282,
                "end": 1283,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 1291,
            "end": 1315,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1291,
              "end": 1312,
              "typeName": {
                "type": "Identifier",
                "start": 1291,
                "end": 1312,
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1313,
              "end": 1314,
              "typeName": {
                "type": "Identifier",
                "start": 1313,
                "end": 1314,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1322,
            "end": 1327
          }
        },
        "optional": true,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1369,
      "end": 1433,
      "id": {
        "type": "Identifier",
        "start": 1374,
        "end": 1382,
        "decorators": [],
        "name": "GetProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1382,
        "end": 1385,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1383,
            "end": 1384,
            "name": {
              "type": "Identifier",
              "start": 1383,
              "end": 1384,
              "decorators": [],
              "name": "C",
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
        "start": 1388,
        "end": 1432,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1388,
          "end": 1389,
          "typeName": {
            "type": "Identifier",
            "start": 1388,
            "end": 1389,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1398,
          "end": 1420,
          "typeName": {
            "type": "Identifier",
            "start": 1398,
            "end": 1411,
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1411,
            "end": 1420,
            "params": [
              {
                "type": "TSInferType",
                "start": 1412,
                "end": 1419,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1418,
                  "end": 1419,
                  "name": {
                    "type": "Identifier",
                    "start": 1418,
                    "end": 1419,
                    "decorators": [],
                    "name": "P",
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
          "type": "TSTypeReference",
          "start": 1423,
          "end": 1424,
          "typeName": {
            "type": "Identifier",
            "start": 1423,
            "end": 1424,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1427,
          "end": 1432
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1435,
      "end": 1550,
      "id": {
        "type": "Identifier",
        "start": 1440,
        "end": 1463,
        "decorators": [],
        "name": "ConnectedComponentClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1463,
        "end": 1496,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1464,
            "end": 1492,
            "name": {
              "type": "Identifier",
              "start": 1464,
              "end": 1465,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1474,
              "end": 1492,
              "typeName": {
                "type": "Identifier",
                "start": 1474,
                "end": 1487,
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1487,
                "end": 1492,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1488,
                    "end": 1491
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1494,
            "end": 1495,
            "name": {
              "type": "Identifier",
              "start": 1494,
              "end": 1495,
              "decorators": [],
              "name": "P",
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
        "type": "TSIntersectionType",
        "start": 1499,
        "end": 1549,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1499,
            "end": 1520,
            "typeName": {
              "type": "Identifier",
              "start": 1499,
              "end": 1513,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1513,
              "end": 1520,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1517,
                  "end": 1518,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1517,
                    "end": 1518,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 1523,
            "end": 1549,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1527,
                "end": 1547,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1527,
                  "end": 1543,
                  "decorators": [],
                  "name": "WrappedComponent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1543,
                  "end": 1546,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1545,
                    "end": 1546,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1545,
                      "end": 1546,
                      "decorators": [],
                      "name": "C",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1552,
      "end": 1823,
      "id": {
        "type": "Identifier",
        "start": 1557,
        "end": 1565,
        "decorators": [],
        "name": "Matching",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1565,
        "end": 1603,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1566,
            "end": 1579,
            "name": {
              "type": "Identifier",
              "start": 1566,
              "end": 1579,
              "decorators": [],
              "name": "InjectedProps",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1581,
            "end": 1602,
            "name": {
              "type": "Identifier",
              "start": 1581,
              "end": 1602,
              "decorators": [],
              "name": "DecorationTargetProps",
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
        "type": "TSMappedType",
        "start": 1606,
        "end": 1822,
        "key": {
          "type": "Identifier",
          "start": 1611,
          "end": 1612,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1616,
          "end": 1643,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1622,
            "end": 1643,
            "typeName": {
              "type": "Identifier",
              "start": 1622,
              "end": 1643,
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1646,
          "end": 1820,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1646,
            "end": 1647,
            "typeName": {
              "type": "Identifier",
              "start": 1646,
              "end": 1647,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "start": 1656,
            "end": 1675,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1662,
              "end": 1675,
              "typeName": {
                "type": "Identifier",
                "start": 1662,
                "end": 1675,
                "decorators": [],
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 1682,
            "end": 1789,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 1682,
              "end": 1698,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1682,
                "end": 1695,
                "typeName": {
                  "type": "Identifier",
                  "start": 1682,
                  "end": 1695,
                  "decorators": [],
                  "name": "InjectedProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1696,
                "end": 1697,
                "typeName": {
                  "type": "Identifier",
                  "start": 1696,
                  "end": 1697,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 1707,
              "end": 1731,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1707,
                "end": 1728,
                "typeName": {
                  "type": "Identifier",
                  "start": 1707,
                  "end": 1728,
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1729,
                "end": 1730,
                "typeName": {
                  "type": "Identifier",
                  "start": 1729,
                  "end": 1730,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "start": 1740,
              "end": 1764,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1740,
                "end": 1761,
                "typeName": {
                  "type": "Identifier",
                  "start": 1740,
                  "end": 1761,
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1762,
                "end": 1763,
                "typeName": {
                  "type": "Identifier",
                  "start": 1762,
                  "end": 1763,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "falseType": {
              "type": "TSIndexedAccessType",
              "start": 1773,
              "end": 1789,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1773,
                "end": 1786,
                "typeName": {
                  "type": "Identifier",
                  "start": 1773,
                  "end": 1786,
                  "decorators": [],
                  "name": "InjectedProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1787,
                "end": 1788,
                "typeName": {
                  "type": "Identifier",
                  "start": 1787,
                  "end": 1788,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "start": 1796,
            "end": 1820,
            "objectType": {
              "type": "TSTypeReference",
              "start": 1796,
              "end": 1817,
              "typeName": {
                "type": "Identifier",
                "start": 1796,
                "end": 1817,
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 1818,
              "end": 1819,
              "typeName": {
                "type": "Identifier",
                "start": 1818,
                "end": 1819,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1825,
      "end": 1888,
      "id": {
        "type": "Identifier",
        "start": 1830,
        "end": 1834,
        "decorators": [],
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1834,
        "end": 1856,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1835,
            "end": 1836,
            "name": {
              "type": "Identifier",
              "start": 1835,
              "end": 1836,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1838,
            "end": 1855,
            "name": {
              "type": "Identifier",
              "start": 1838,
              "end": 1839,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1848,
              "end": 1855,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1854,
                "end": 1855,
                "typeName": {
                  "type": "Identifier",
                  "start": 1854,
                  "end": 1855,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1859,
        "end": 1887,
        "typeName": {
          "type": "Identifier",
          "start": 1859,
          "end": 1863,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1863,
          "end": 1887,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1864,
              "end": 1865,
              "typeName": {
                "type": "Identifier",
                "start": 1864,
                "end": 1865,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1867,
              "end": 1886,
              "typeName": {
                "type": "Identifier",
                "start": 1867,
                "end": 1874,
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1874,
                "end": 1886,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 1875,
                    "end": 1882,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1881,
                      "end": 1882,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1881,
                        "end": 1882,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1884,
                    "end": 1885,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1884,
                      "end": 1885,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 1890,
      "end": 2161,
      "id": {
        "type": "Identifier",
        "start": 1895,
        "end": 1930,
        "decorators": [],
        "name": "InferableComponentEnhancerWithProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1930,
        "end": 1959,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1931,
            "end": 1945,
            "name": {
              "type": "Identifier",
              "start": 1931,
              "end": 1945,
              "decorators": [],
              "name": "TInjectedProps",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1947,
            "end": 1958,
            "name": {
              "type": "Identifier",
              "start": 1947,
              "end": 1958,
              "decorators": [],
              "name": "TNeedsProps",
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
        "type": "TSFunctionType",
        "start": 1962,
        "end": 2160,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1962,
          "end": 2030,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1966,
              "end": 2028,
              "name": {
                "type": "Identifier",
                "start": 1966,
                "end": 1967,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1976,
                "end": 2028,
                "typeName": {
                  "type": "Identifier",
                  "start": 1976,
                  "end": 1989,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1989,
                  "end": 2028,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1990,
                      "end": 2027,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1990,
                        "end": 1998,
                        "decorators": [],
                        "name": "Matching",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1998,
                        "end": 2027,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1999,
                            "end": 2013,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1999,
                              "end": 2013,
                              "decorators": [],
                              "name": "TInjectedProps",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2015,
                            "end": 2026,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2015,
                              "end": 2023,
                              "decorators": [],
                              "name": "GetProps",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2023,
                              "end": 2026,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2024,
                                  "end": 2025,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2024,
                                    "end": 2025,
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        ]
                      }
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
        "params": [
          {
            "type": "Identifier",
            "start": 2034,
            "end": 2046,
            "decorators": [],
            "name": "component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2043,
              "end": 2046,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2045,
                "end": 2046,
                "typeName": {
                  "type": "Identifier",
                  "start": 2045,
                  "end": 2046,
                  "decorators": [],
                  "name": "C",
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
          "start": 2049,
          "end": 2160,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2052,
            "end": 2160,
            "typeName": {
              "type": "Identifier",
              "start": 2052,
              "end": 2075,
              "decorators": [],
              "name": "ConnectedComponentClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2075,
              "end": 2160,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2079,
                  "end": 2080,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2079,
                    "end": 2080,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSIntersectionType",
                  "start": 2084,
                  "end": 2158,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 2084,
                      "end": 2144,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2084,
                        "end": 2088,
                        "decorators": [],
                        "name": "Omit",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2088,
                        "end": 2144,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2089,
                            "end": 2100,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2089,
                              "end": 2097,
                              "decorators": [],
                              "name": "GetProps",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 2097,
                              "end": 2100,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2098,
                                  "end": 2099,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2098,
                                    "end": 2099,
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
                          {
                            "type": "TSTypeOperator",
                            "start": 2102,
                            "end": 2143,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2108,
                              "end": 2143,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2108,
                                "end": 2114,
                                "decorators": [],
                                "name": "Shared",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2114,
                                "end": 2143,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2115,
                                    "end": 2129,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2115,
                                      "end": 2129,
                                      "decorators": [],
                                      "name": "TInjectedProps",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2131,
                                    "end": 2142,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2131,
                                      "end": 2139,
                                      "decorators": [],
                                      "name": "GetProps",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2139,
                                      "end": 2142,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2140,
                                          "end": 2141,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2140,
                                            "end": 2141,
                                            "decorators": [],
                                            "name": "C",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2147,
                      "end": 2158,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2147,
                        "end": 2158,
                        "decorators": [],
                        "name": "TNeedsProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2163,
      "end": 2420,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2177,
          "end": 2419,
          "id": {
            "type": "Identifier",
            "start": 2177,
            "end": 2419,
            "decorators": [],
            "name": "connect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2184,
              "end": 2419,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2186,
                "end": 2419,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 2190,
                    "end": 2417,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 2190,
                      "end": 2242,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 2191,
                          "end": 2204,
                          "name": {
                            "type": "Identifier",
                            "start": 2191,
                            "end": 2199,
                            "decorators": [],
                            "name": "no_state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "start": 2202,
                            "end": 2204,
                            "members": []
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 2206,
                          "end": 2225,
                          "name": {
                            "type": "Identifier",
                            "start": 2206,
                            "end": 2220,
                            "decorators": [],
                            "name": "TDispatchProps",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "start": 2223,
                            "end": 2225,
                            "members": []
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 2227,
                          "end": 2241,
                          "name": {
                            "type": "Identifier",
                            "start": 2227,
                            "end": 2236,
                            "decorators": [],
                            "name": "TOwnProps",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "start": 2239,
                            "end": 2241,
                            "members": []
                          },
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2248,
                        "end": 2281,
                        "decorators": [],
                        "name": "mapStateToProps",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2263,
                          "end": 2281,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 2265,
                            "end": 2281,
                            "types": [
                              {
                                "type": "TSNullKeyword",
                                "start": 2265,
                                "end": 2269
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 2272,
                                "end": 2281
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 2287,
                        "end": 2321,
                        "decorators": [],
                        "name": "mapDispatchToProps",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2305,
                          "end": 2321,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2307,
                            "end": 2321,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2307,
                              "end": 2321,
                              "decorators": [],
                              "name": "TDispatchProps",
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
                      "start": 2325,
                      "end": 2416,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2327,
                        "end": 2416,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2327,
                          "end": 2362,
                          "decorators": [],
                          "name": "InferableComponentEnhancerWithProps",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2362,
                          "end": 2416,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2368,
                              "end": 2397,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2368,
                                "end": 2381,
                                "decorators": [],
                                "name": "ResolveThunks",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2381,
                                "end": 2397,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2382,
                                    "end": 2396,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2382,
                                      "end": 2396,
                                      "decorators": [],
                                      "name": "TDispatchProps",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 2403,
                              "end": 2412,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2403,
                                "end": 2412,
                                "decorators": [],
                                "name": "TOwnProps",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 2422,
      "end": 2651,
      "id": {
        "type": "Identifier",
        "start": 2427,
        "end": 2454,
        "decorators": [],
        "name": "InferThunkActionCreatorType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2454,
        "end": 2506,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2458,
            "end": 2504,
            "name": {
              "type": "Identifier",
              "start": 2458,
              "end": 2472,
              "decorators": [],
              "name": "TActionCreator",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 2481,
              "end": 2504,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2482,
                  "end": 2496,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2485,
                    "end": 2489,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2489,
                    "end": 2496,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2491,
                      "end": 2496,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2491,
                        "end": 2494
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2498,
                "end": 2504,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2501,
                  "end": 2504
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2509,
        "end": 2650,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2509,
          "end": 2523,
          "typeName": {
            "type": "Identifier",
            "start": 2509,
            "end": 2523,
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 2532,
          "end": 2597,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 2536,
              "end": 2558,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 2539,
                "end": 2543,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2543,
                "end": 2558,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2545,
                  "end": 2558,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2551,
                    "end": 2558,
                    "name": {
                      "type": "Identifier",
                      "start": 2551,
                      "end": 2558,
                      "decorators": [],
                      "name": "TParams",
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
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2561,
            "end": 2597,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2564,
              "end": 2597,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2565,
                  "end": 2579,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2568,
                    "end": 2572,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2572,
                    "end": 2579,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2574,
                      "end": 2579,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2574,
                        "end": 2577
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2581,
                "end": 2597,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2584,
                  "end": 2597,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2590,
                    "end": 2597,
                    "name": {
                      "type": "Identifier",
                      "start": 2590,
                      "end": 2597,
                      "decorators": [],
                      "name": "TReturn",
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
              }
            }
          }
        },
        "trueType": {
          "type": "TSFunctionType",
          "start": 2602,
          "end": 2631,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 2603,
              "end": 2619,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 2606,
                "end": 2610,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2610,
                "end": 2619,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2612,
                  "end": 2619,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2612,
                    "end": 2619,
                    "decorators": [],
                    "name": "TParams",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2621,
            "end": 2631,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2624,
              "end": 2631,
              "typeName": {
                "type": "Identifier",
                "start": 2624,
                "end": 2631,
                "decorators": [],
                "name": "TReturn",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 2636,
          "end": 2650,
          "typeName": {
            "type": "Identifier",
            "start": 2636,
            "end": 2650,
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2653,
      "end": 2819,
      "id": {
        "type": "Identifier",
        "start": 2658,
        "end": 2682,
        "decorators": [],
        "name": "HandleThunkActionCreator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2682,
        "end": 2698,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2683,
            "end": 2697,
            "name": {
              "type": "Identifier",
              "start": 2683,
              "end": 2697,
              "decorators": [],
              "name": "TActionCreator",
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
        "start": 2701,
        "end": 2818,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2701,
          "end": 2715,
          "typeName": {
            "type": "Identifier",
            "start": 2701,
            "end": 2715,
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 2724,
          "end": 2751,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 2728,
              "end": 2742,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 2731,
                "end": 2735,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2735,
                "end": 2742,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 2737,
                  "end": 2742,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2737,
                    "end": 2740
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2745,
            "end": 2751,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2748,
              "end": 2751
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2756,
          "end": 2799,
          "typeName": {
            "type": "Identifier",
            "start": 2756,
            "end": 2783,
            "decorators": [],
            "name": "InferThunkActionCreatorType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2783,
            "end": 2799,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2784,
                "end": 2798,
                "typeName": {
                  "type": "Identifier",
                  "start": 2784,
                  "end": 2798,
                  "decorators": [],
                  "name": "TActionCreator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 2804,
          "end": 2818,
          "typeName": {
            "type": "Identifier",
            "start": 2804,
            "end": 2818,
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2821,
      "end": 3007,
      "id": {
        "type": "Identifier",
        "start": 2826,
        "end": 2839,
        "decorators": [],
        "name": "ResolveThunks",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2839,
        "end": 2855,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2840,
            "end": 2854,
            "name": {
              "type": "Identifier",
              "start": 2840,
              "end": 2854,
              "decorators": [],
              "name": "TDispatchProps",
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
        "start": 2858,
        "end": 3006,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2858,
          "end": 2872,
          "typeName": {
            "type": "Identifier",
            "start": 2858,
            "end": 2872,
            "decorators": [],
            "name": "TDispatchProps",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 2881,
          "end": 2906,
          "members": [
            {
              "type": "TSIndexSignature",
              "start": 2885,
              "end": 2904,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 2886,
                  "end": 2897,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2889,
                    "end": 2897,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2891,
                      "end": 2897
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2898,
                "end": 2903,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2900,
                  "end": 2903
                }
              },
              "readonly": false,
              "static": false,
              "accessibility": null
            }
          ]
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 2911,
          "end": 2987,
          "key": {
            "type": "Identifier",
            "start": 2914,
            "end": 2915,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 2919,
            "end": 2939,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2925,
              "end": 2939,
              "typeName": {
                "type": "Identifier",
                "start": 2925,
                "end": 2939,
                "decorators": [],
                "name": "TDispatchProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2942,
            "end": 2985,
            "typeName": {
              "type": "Identifier",
              "start": 2942,
              "end": 2966,
              "decorators": [],
              "name": "HandleThunkActionCreator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2966,
              "end": 2985,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 2967,
                  "end": 2984,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 2967,
                    "end": 2981,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2967,
                      "end": 2981,
                      "decorators": [],
                      "name": "TDispatchProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 2982,
                    "end": 2983,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2982,
                      "end": 2983,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": false,
          "readonly": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 2992,
          "end": 3006,
          "typeName": {
            "type": "Identifier",
            "start": 2992,
            "end": 3006,
            "decorators": [],
            "name": "TDispatchProps",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3009,
      "end": 3092,
      "id": {
        "type": "Identifier",
        "start": 3019,
        "end": 3027,
        "decorators": [],
        "name": "Dispatch",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3027,
        "end": 3057,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3028,
            "end": 3056,
            "name": {
              "type": "Identifier",
              "start": 3028,
              "end": 3029,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3038,
              "end": 3044,
              "typeName": {
                "type": "Identifier",
                "start": 3038,
                "end": 3044,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 3047,
              "end": 3056,
              "typeName": {
                "type": "Identifier",
                "start": 3047,
                "end": 3056,
                "decorators": [],
                "name": "AnyAction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3058,
        "end": 3092,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 3062,
            "end": 3090,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3062,
              "end": 3075,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3063,
                  "end": 3074,
                  "name": {
                    "type": "Identifier",
                    "start": 3063,
                    "end": 3064,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3073,
                    "end": 3074,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3073,
                      "end": 3074,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
            "params": [
              {
                "type": "Identifier",
                "start": 3076,
                "end": 3085,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3082,
                  "end": 3085,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3084,
                    "end": 3085,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3084,
                      "end": 3085,
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
              "start": 3086,
              "end": 3089,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3088,
                "end": 3089,
                "typeName": {
                  "type": "Identifier",
                  "start": 3088,
                  "end": 3089,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3093,
      "end": 3133,
      "id": {
        "type": "Identifier",
        "start": 3103,
        "end": 3109,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3109,
        "end": 3118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3110,
            "end": 3117,
            "name": {
              "type": "Identifier",
              "start": 3110,
              "end": 3111,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 3114,
              "end": 3117
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3119,
        "end": 3133,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3123,
            "end": 3131,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3123,
              "end": 3127,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3127,
              "end": 3130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3129,
                "end": 3130,
                "typeName": {
                  "type": "Identifier",
                  "start": 3129,
                  "end": 3130,
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
      "type": "TSInterfaceDeclaration",
      "start": 3134,
      "end": 3201,
      "id": {
        "type": "Identifier",
        "start": 3144,
        "end": 3153,
        "decorators": [],
        "name": "AnyAction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 3162,
          "end": 3168,
          "expression": {
            "type": "Identifier",
            "start": 3162,
            "end": 3168,
            "decorators": [],
            "name": "Action",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3169,
        "end": 3201,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 3173,
            "end": 3199,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3174,
                "end": 3192,
                "decorators": [],
                "name": "extraProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3184,
                  "end": 3192,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3186,
                    "end": 3192
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3193,
              "end": 3198,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3195,
                "end": 3198
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3203,
      "end": 3287,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3209,
          "end": 3286,
          "id": {
            "type": "Identifier",
            "start": 3209,
            "end": 3221,
            "decorators": [],
            "name": "simpleAction",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3224,
            "end": 3286,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3225,
                "end": 3241,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3232,
                  "end": 3241,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 3234,
                    "end": 3241
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 3247,
              "end": 3285,
              "properties": [
                {
                  "type": "Property",
                  "start": 3251,
                  "end": 3272,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3251,
                    "end": 3255,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3257,
                    "end": 3272,
                    "value": "SIMPLE_ACTION",
                    "raw": "\"SIMPLE_ACTION\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3276,
                  "end": 3283,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3276,
                    "end": 3283,
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3276,
                    "end": 3283,
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3288,
      "end": 3417,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3294,
          "end": 3416,
          "id": {
            "type": "Identifier",
            "start": 3294,
            "end": 3305,
            "decorators": [],
            "name": "thunkAction",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3308,
            "end": 3416,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3309,
                "end": 3323,
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3315,
                  "end": 3323,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3317,
                    "end": 3323
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3325,
                "end": 3339,
                "decorators": [],
                "name": "param2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3331,
                  "end": 3339,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3333,
                    "end": 3339
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 3344,
              "end": 3416,
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3354,
                  "end": 3372,
                  "decorators": [],
                  "name": "dispatch",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3362,
                    "end": 3372,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3364,
                      "end": 3372,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3364,
                        "end": 3372,
                        "decorators": [],
                        "name": "Dispatch",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "ObjectPattern",
                  "start": 3376,
                  "end": 3393,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3378,
                      "end": 3381,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 3378,
                        "end": 3381,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 3378,
                        "end": 3381,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3383,
                    "end": 3393,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3385,
                      "end": 3393,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3385,
                        "end": 3393,
                        "decorators": [],
                        "name": "OwnProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3399,
                "end": 3416,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3403,
                    "end": 3414,
                    "argument": {
                      "type": "Identifier",
                      "start": 3410,
                      "end": 3413,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3418,
      "end": 3455,
      "id": {
        "type": "Identifier",
        "start": 3428,
        "end": 3436,
        "decorators": [],
        "name": "OwnProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3437,
        "end": 3455,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3441,
            "end": 3453,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3441,
              "end": 3444,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3444,
              "end": 3452,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3446,
                "end": 3452
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
      "start": 3456,
      "end": 3606,
      "id": {
        "type": "Identifier",
        "start": 3466,
        "end": 3484,
        "decorators": [],
        "name": "TestComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 3493,
          "end": 3501,
          "expression": {
            "type": "Identifier",
            "start": 3493,
            "end": 3501,
            "decorators": [],
            "name": "OwnProps",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3502,
        "end": 3606,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3506,
            "end": 3540,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3506,
              "end": 3518,
              "decorators": [],
              "name": "simpleAction",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3518,
              "end": 3539,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3520,
                "end": 3539,
                "exprName": {
                  "type": "Identifier",
                  "start": 3527,
                  "end": 3539,
                  "decorators": [],
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 3543,
            "end": 3604,
            "key": {
              "type": "Identifier",
              "start": 3543,
              "end": 3554,
              "decorators": [],
              "name": "thunkAction",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3555,
                "end": 3569,
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3561,
                  "end": 3569,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3563,
                    "end": 3569
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3571,
                "end": 3585,
                "decorators": [],
                "name": "param2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3577,
                  "end": 3585,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3579,
                    "end": 3585
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3586,
              "end": 3603,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3588,
                "end": 3603,
                "typeName": {
                  "type": "Identifier",
                  "start": 3588,
                  "end": 3595,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3595,
                  "end": 3603,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3596,
                      "end": 3602
                    }
                  ]
                }
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
      "start": 3607,
      "end": 3667,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3613,
        "end": 3626,
        "decorators": [],
        "name": "TestComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 3635,
        "end": 3644,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 3644,
        "end": 3664,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 3645,
            "end": 3663,
            "typeName": {
              "type": "Identifier",
              "start": 3645,
              "end": 3663,
              "decorators": [],
              "name": "TestComponentProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3665,
        "end": 3667,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3668,
      "end": 3725,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3674,
          "end": 3724,
          "id": {
            "type": "Identifier",
            "start": 3674,
            "end": 3692,
            "decorators": [],
            "name": "mapDispatchToProps",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3695,
            "end": 3724,
            "properties": [
              {
                "type": "Property",
                "start": 3697,
                "end": 3709,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3697,
                  "end": 3709,
                  "decorators": [],
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 3697,
                  "end": 3709,
                  "decorators": [],
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 3711,
                "end": 3722,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3711,
                  "end": 3722,
                  "decorators": [],
                  "name": "thunkAction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 3711,
                  "end": 3722,
                  "decorators": [],
                  "name": "thunkAction",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3727,
      "end": 3782,
      "id": {
        "type": "Identifier",
        "start": 3732,
        "end": 3733,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3736,
        "end": 3781,
        "typeName": {
          "type": "Identifier",
          "start": 3736,
          "end": 3760,
          "decorators": [],
          "name": "HandleThunkActionCreator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3760,
          "end": 3781,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 3761,
              "end": 3780,
              "exprName": {
                "type": "Identifier",
                "start": 3768,
                "end": 3780,
                "decorators": [],
                "name": "simpleAction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3784,
      "end": 3853,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3790,
          "end": 3852,
          "id": {
            "type": "Identifier",
            "start": 3790,
            "end": 3795,
            "decorators": [],
            "name": "Test1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3798,
            "end": 3852,
            "callee": {
              "type": "CallExpression",
              "start": 3798,
              "end": 3837,
              "callee": {
                "type": "Identifier",
                "start": 3798,
                "end": 3805,
                "decorators": [],
                "name": "connect",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 3809,
                  "end": 3813,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Identifier",
                  "start": 3817,
                  "end": 3835,
                  "decorators": [],
                  "name": "mapDispatchToProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3838,
                "end": 3851,
                "decorators": [],
                "name": "TestComponent",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3855,
      "end": 3865,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
