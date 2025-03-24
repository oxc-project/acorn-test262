__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 1578,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 92,
      "end": 191,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 99,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 189,
        "end": 190,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 186,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 185,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 110,
              "end": 185,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 118,
                "end": 125,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 125,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 128,
                "end": 183,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 177,
                  "end": 182,
                  "literal": {
                    "type": "Literal",
                    "start": 177,
                    "end": 182,
                    "raw": "\"val\"",
                    "value": "val"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 128,
                  "end": 176,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 135,
                    "end": 176,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 136,
                        "end": 158,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 138,
                          "end": 157,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 145,
                            "end": 157,
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "start": 146,
                                "end": 153,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 152,
                                  "end": 153,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 152,
                                    "end": 153,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 155,
                                "end": 156,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 155,
                                  "end": 156,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 145,
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 136,
                          "end": 137,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 137,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 160,
                        "end": 175,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 162,
                            "end": 173,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 165,
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 165,
                              "end": 173,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 167,
                                "end": 173
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 135,
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 192,
      "end": 265,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 263,
        "end": 264,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 263,
          "end": 264,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 260,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 259,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 210,
              "end": 259,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 218,
                "end": 225,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 224,
                  "end": 225,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 225,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 213,
                "end": 214,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 228,
                "end": 257,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 251,
                  "end": 256,
                  "literal": {
                    "type": "Literal",
                    "start": 251,
                    "end": 256,
                    "raw": "\"val\"",
                    "value": "val"
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 228,
                  "end": 250,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 230,
                    "end": 249,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 237,
                      "end": 249,
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "start": 238,
                          "end": 245,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 244,
                            "end": 245,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 244,
                              "end": 245,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 247,
                          "end": 248,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 247,
                            "end": 248,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 237,
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 228,
                    "end": 229,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 290,
      "end": 329,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 300,
        "decorators": [],
        "name": "AProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 328,
        "end": 329,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 300,
        "end": 325,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 301,
            "end": 324,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 311,
              "end": 324,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 313,
                  "end": 322,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 314,
                    "end": 322,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 316,
                      "end": 322
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
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
      "type": "TSDeclareFunction",
      "start": 331,
      "end": 439,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 353,
        "decorators": [],
        "name": "myBug",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 429,
          "end": 435,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 432,
            "end": 435,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 434,
              "end": 435,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 434,
                "end": 435,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 436,
        "end": 439,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 438,
          "end": 439,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 438,
            "end": 439,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 353,
        "end": 428,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 357,
            "end": 426,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 367,
              "end": 426,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 375,
                "end": 382,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 381,
                  "end": 382,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 382,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 385,
                "end": 424,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 385,
                  "end": 389,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 387,
                    "end": 388,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 387,
                      "end": 388,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 385,
                    "end": 386,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 386,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 398,
                  "end": 412,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 403,
                    "end": 412,
                    "params": [
                      {
                        "type": "TSInferType",
                        "start": 404,
                        "end": 411,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 410,
                          "end": 411,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 410,
                            "end": 411,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 403,
                    "decorators": [],
                    "name": "AProp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 419,
                  "end": 424
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 415,
                  "end": 416,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 357,
              "end": 358,
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
      "type": "VariableDeclaration",
      "start": 441,
      "end": 479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 479,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 450,
            "decorators": [],
            "name": "out",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 453,
            "end": 479,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 459,
                "end": 478,
                "properties": [
                  {
                    "type": "Property",
                    "start": 460,
                    "end": 477,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 464,
                      "decorators": [],
                      "name": "obj1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 466,
                      "end": 477,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 467,
                          "end": 476,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 467,
                            "end": 468,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 470,
                            "end": 476,
                            "raw": "\"test\"",
                            "value": "test"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 453,
              "end": 458,
              "decorators": [],
              "name": "myBug",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 481,
      "end": 538,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 486,
        "end": 491,
        "decorators": [],
        "name": "Value",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 521,
        "end": 537,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 527,
          "end": 537,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 528,
              "end": 533,
              "literal": {
                "type": "Literal",
                "start": 528,
                "end": 533,
                "raw": "\"val\"",
                "value": "val"
              }
            },
            {
              "type": "TSTypeReference",
              "start": 535,
              "end": 536,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
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
          "start": 521,
          "end": 527,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 491,
        "end": 518,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 492,
            "end": 517,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 502,
              "end": 508
            },
            "default": {
              "type": "TSStringKeyword",
              "start": 511,
              "end": 517
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
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
      "type": "TSDeclareFunction",
      "start": 539,
      "end": 598,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 561,
        "decorators": [],
        "name": "value",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 580,
          "end": 586,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 583,
            "end": 586,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 585,
              "end": 586,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 585,
                "end": 586,
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
        "start": 587,
        "end": 597,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 589,
          "end": 597,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 594,
            "end": 597,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 595,
                "end": 596,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 596,
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
            "start": 589,
            "end": 594,
            "decorators": [],
            "name": "Value",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 561,
        "end": 579,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 562,
            "end": 578,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 572,
              "end": 578
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 562,
              "end": 563,
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
      "type": "TSDeclareFunction",
      "start": 600,
      "end": 800,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 635,
        "decorators": [],
        "name": "ensureNoDuplicates",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 785,
          "end": 792,
          "decorators": [],
          "name": "vals",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 789,
            "end": 792,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 791,
              "end": 792,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 791,
                "end": 792,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 793,
        "end": 799,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 795,
          "end": 799
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 635,
        "end": 784,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 639,
            "end": 782,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 649,
              "end": 782,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 661,
                "end": 668,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 667,
                  "end": 668,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 667,
                    "end": 668,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 656,
                "end": 657,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 671,
                "end": 778,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 671,
                  "end": 698,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 692,
                    "end": 697,
                    "literal": {
                      "type": "Literal",
                      "start": 692,
                      "end": 697,
                      "raw": "\"val\"",
                      "value": "val"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 671,
                    "end": 691,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 678,
                      "end": 691,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 679,
                          "end": 683,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 681,
                            "end": 682,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 681,
                              "end": 682,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 679,
                            "end": 680,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 679,
                              "end": 680,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 685,
                          "end": 690,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 685,
                            "end": 690,
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 678,
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "extendsType": {
                  "type": "TSIndexedAccessType",
                  "start": 707,
                  "end": 752,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 746,
                    "end": 751,
                    "literal": {
                      "type": "Literal",
                      "start": 746,
                      "end": 751,
                      "raw": "\"val\"",
                      "value": "val"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 707,
                    "end": 745,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 714,
                      "end": 745,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 715,
                          "end": 737,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 717,
                            "end": 736,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 724,
                              "end": 736,
                              "params": [
                                {
                                  "type": "TSTypeOperator",
                                  "start": 725,
                                  "end": 732,
                                  "operator": "keyof",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 731,
                                    "end": 732,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 731,
                                      "end": 732,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 734,
                                  "end": 735,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 734,
                                    "end": 735,
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 717,
                              "end": 724,
                              "decorators": [],
                              "name": "Exclude",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 715,
                            "end": 716,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 715,
                              "end": 716,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 739,
                          "end": 744,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 739,
                            "end": 744,
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 714,
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "falseType": {
                  "type": "TSAnyKeyword",
                  "start": 775,
                  "end": 778
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 761,
                  "end": 766
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 639,
              "end": 640,
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
      "type": "VariableDeclaration",
      "start": 802,
      "end": 887,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 886,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 815,
            "decorators": [],
            "name": "noError",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 818,
            "end": 886,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 837,
                "end": 885,
                "properties": [
                  {
                    "type": "Property",
                    "start": 838,
                    "end": 857,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 838,
                      "end": 842,
                      "decorators": [],
                      "name": "main",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 844,
                      "end": 857,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 850,
                          "end": 856,
                          "raw": "\"test\"",
                          "value": "test"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 844,
                        "end": 849,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 859,
                    "end": 884,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 859,
                      "end": 868,
                      "decorators": [],
                      "name": "alternate",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 870,
                      "end": 884,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 876,
                          "end": 883,
                          "raw": "\"test2\"",
                          "value": "test2"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 870,
                        "end": 875,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 818,
              "end": 836,
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 889,
      "end": 955,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 895,
          "end": 954,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 895,
            "end": 910,
            "decorators": [],
            "name": "shouldBeNoError",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 913,
            "end": 954,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 932,
                "end": 953,
                "properties": [
                  {
                    "type": "Property",
                    "start": 933,
                    "end": 952,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 933,
                      "end": 937,
                      "decorators": [],
                      "name": "main",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 939,
                      "end": 952,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 945,
                          "end": 951,
                          "raw": "\"test\"",
                          "value": "test"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 939,
                        "end": 944,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 913,
              "end": 931,
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 957,
      "end": 1045,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 963,
          "end": 1044,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 976,
            "decorators": [],
            "name": "shouldBeError",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 979,
            "end": 1044,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 998,
                "end": 1043,
                "properties": [
                  {
                    "type": "Property",
                    "start": 999,
                    "end": 1017,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1003,
                      "decorators": [],
                      "name": "main",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 1005,
                      "end": 1017,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1011,
                          "end": 1016,
                          "raw": "\"dup\"",
                          "value": "dup"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1005,
                        "end": 1010,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1019,
                    "end": 1042,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1028,
                      "decorators": [],
                      "name": "alternate",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "CallExpression",
                      "start": 1030,
                      "end": 1042,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1036,
                          "end": 1041,
                          "raw": "\"dup\"",
                          "value": "dup"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1035,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 979,
              "end": 997,
              "decorators": [],
              "name": "ensureNoDuplicates",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1069,
      "end": 1118,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1074,
        "end": 1078,
        "decorators": [],
        "name": "Cond",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1084,
        "end": 1117,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1084,
          "end": 1085,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1084,
            "end": 1085,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "start": 1094,
          "end": 1100
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1112,
          "end": 1117
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 1103,
          "end": 1109
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1078,
        "end": 1081,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1079,
            "end": 1080,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1079,
              "end": 1080,
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
      "type": "TSDeclareFunction",
      "start": 1119,
      "end": 1207,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1136,
        "end": 1145,
        "decorators": [],
        "name": "function1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1187,
        "end": 1206,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1189,
          "end": 1206,
          "indexType": {
            "type": "TSLiteralType",
            "start": 1200,
            "end": 1205,
            "literal": {
              "type": "Literal",
              "start": 1200,
              "end": 1205,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          "objectType": {
            "type": "TSIndexedAccessType",
            "start": 1189,
            "end": 1199,
            "indexType": {
              "type": "TSTypeOperator",
              "start": 1191,
              "end": 1198,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1197,
                "end": 1198,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1197,
                  "end": 1198,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1189,
              "end": 1190,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1189,
                "end": 1190,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1145,
        "end": 1185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1146,
            "end": 1184,
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "start": 1156,
              "end": 1184,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1163,
                "end": 1170,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1169,
                  "end": 1170,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1169,
                    "end": 1170,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 1158,
                "end": 1159,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1173,
                "end": 1183,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1177,
                  "end": 1183,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 1178,
                      "end": 1182,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 1180,
                        "end": 1181,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1180,
                          "end": 1181,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 1178,
                        "end": 1179,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1178,
                          "end": 1179,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1173,
                  "end": 1177,
                  "decorators": [],
                  "name": "Cond",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1146,
              "end": 1147,
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
      "type": "ExportNamedDeclaration",
      "start": 1231,
      "end": 1399,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1238,
        "end": 1399,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1243,
          "end": 1250,
          "decorators": [],
          "name": "Prepend",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1281,
          "end": 1398,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1281,
            "end": 1282,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1281,
              "end": 1282,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "start": 1291,
            "end": 1298
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1393,
            "end": 1398
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 1303,
            "end": 1388,
            "checkType": {
              "type": "TSFunctionType",
              "start": 1304,
              "end": 1334,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1313,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1308,
                    "end": 1313,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1310,
                      "end": 1313,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1310,
                        "end": 1313,
                        "decorators": [],
                        "name": "Elm",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1315,
                  "end": 1325,
                  "argument": {
                    "type": "Identifier",
                    "start": 1318,
                    "end": 1322,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1322,
                    "end": 1325,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1324,
                      "end": 1325,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1324,
                        "end": 1325,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1327,
                "end": 1334,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1330,
                  "end": 1334
                }
              },
              "typeParameters": null
            },
            "extendsType": {
              "type": "TSFunctionType",
              "start": 1345,
              "end": 1372,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1346,
                  "end": 1363,
                  "argument": {
                    "type": "Identifier",
                    "start": 1349,
                    "end": 1353,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1353,
                    "end": 1363,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 1355,
                      "end": 1363,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1361,
                        "end": 1363,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1361,
                          "end": 1363,
                          "decorators": [],
                          "name": "T2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1365,
                "end": 1372,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1368,
                  "end": 1372
                }
              },
              "typeParameters": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1383,
              "end": 1388
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 1376,
              "end": 1378,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1376,
                "end": 1378,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1250,
          "end": 1276,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1251,
              "end": 1254,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1251,
                "end": 1254,
                "decorators": [],
                "name": "Elm",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1256,
              "end": 1275,
              "const": false,
              "constraint": {
                "type": "TSArrayType",
                "start": 1266,
                "end": 1275,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1266,
                  "end": 1273
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1256,
                "end": 1257,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1400,
      "end": 1479,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1407,
        "end": 1479,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1412,
          "end": 1424,
          "decorators": [],
          "name": "ExactExtract",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1433,
          "end": 1478,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1433,
            "end": 1434,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1433,
              "end": 1434,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1443,
            "end": 1444,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1443,
              "end": 1444,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1473,
            "end": 1478
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 1447,
            "end": 1470,
            "checkType": {
              "type": "TSTypeReference",
              "start": 1447,
              "end": 1448,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1447,
                "end": 1448,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 1457,
              "end": 1458,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1457,
                "end": 1458,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1465,
              "end": 1470
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 1461,
              "end": 1462,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1461,
                "end": 1462,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1424,
          "end": 1430,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1425,
              "end": 1426,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1425,
                "end": 1426,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1428,
              "end": 1429,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1428,
                "end": 1429,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1481,
      "end": 1578,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1486,
        "end": 1490,
        "decorators": [],
        "name": "Conv",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 1505,
        "end": 1577,
        "indexType": {
          "type": "TSConditionalType",
          "start": 1557,
          "end": 1576,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1557,
            "end": 1558,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1557,
              "end": 1558,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1567,
            "end": 1568,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1567,
              "end": 1568,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 1575,
            "end": 1576,
            "literal": {
              "type": "Literal",
              "start": 1575,
              "end": 1576,
              "raw": "1",
              "value": 1
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 1571,
            "end": 1572,
            "literal": {
              "type": "Literal",
              "start": 1571,
              "end": 1572,
              "raw": "0",
              "value": 0
            }
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 1505,
          "end": 1556,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1507,
              "end": 1514,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 1507,
                "end": 1508,
                "raw": "0",
                "value": 0
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1508,
                "end": 1513,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 1510,
                  "end": 1513,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 1511,
                      "end": 1512,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1511,
                        "end": 1512,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 1515,
              "end": 1555,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 1515,
                "end": 1516,
                "raw": "1",
                "value": 1
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1516,
                "end": 1554,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1518,
                  "end": 1554,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1525,
                    "end": 1554,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1526,
                        "end": 1527,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1526,
                          "end": 1527,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1529,
                        "end": 1553,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1533,
                          "end": 1553,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1534,
                              "end": 1552,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1546,
                                "end": 1552,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1547,
                                    "end": 1548,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1547,
                                      "end": 1548,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1550,
                                    "end": 1551,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1550,
                                      "end": 1551,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 1534,
                                "end": 1546,
                                "decorators": [],
                                "name": "ExactExtract",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1529,
                          "end": 1533,
                          "decorators": [],
                          "name": "Conv",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1518,
                    "end": 1525,
                    "decorators": [],
                    "name": "Prepend",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1490,
        "end": 1500,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1491,
            "end": 1492,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1491,
              "end": 1492,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1494,
            "end": 1499,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1498,
              "end": 1499,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1498,
                "end": 1499,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1494,
              "end": 1495,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
