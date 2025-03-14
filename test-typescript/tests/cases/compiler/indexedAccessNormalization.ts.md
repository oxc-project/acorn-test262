indexedAccessNormalization.ts
```json
{
  "type": "Program",
  "start": 27,
  "end": 473,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 27,
      "end": 107,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "MyMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 58,
        "end": 107,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 70,
          "end": 77,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 76,
            "end": 77,
            "typeName": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "M",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 80,
          "end": 105,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 90,
              "end": 99,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 93,
                  "end": 99
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 37,
        "end": 55,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 38,
            "end": 54,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 48,
              "end": 54
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 109,
      "end": 148,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 140,
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
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
        "start": 141,
        "end": 147,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 143,
          "end": 147
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 127,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 129,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 258,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 258,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 215,
            "end": 240,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 221,
                "end": 239,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 228,
                  "decorators": [],
                  "name": "elemofM",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 231,
                  "end": 239,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 236,
                    "decorators": [],
                    "name": "mymap",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 245,
            "end": 256,
            "expression": {
              "type": "CallExpression",
              "start": 245,
              "end": 255,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 254,
                  "decorators": [],
                  "name": "elemofM",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 161,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 180,
          "end": 195,
          "decorators": [],
          "name": "mymap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 187,
              "end": 195,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 192,
                "end": 195,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 193,
                    "end": 194,
                    "typeName": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 187,
                "end": 192,
                "decorators": [],
                "name": "MyMap",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 197,
          "end": 207,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 207,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 200,
              "end": 207,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 207,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 179,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 178,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 172,
              "end": 178
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 260,
      "end": 472,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 337,
        "end": 472,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 343,
            "end": 375,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 349,
                "end": 374,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 370,
                  "decorators": [],
                  "name": "q1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 353,
                      "end": 370,
                      "indexType": {
                        "type": "TSTypeOperator",
                        "start": 362,
                        "end": 369,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 368,
                          "end": 369,
                          "typeName": {
                            "type": "Identifier",
                            "start": 368,
                            "end": 369,
                            "decorators": [],
                            "name": "M",
                            "optional": false
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 353,
                        "end": 361,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 358,
                          "end": 361,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 359,
                              "end": 360,
                              "typeName": {
                                "type": "Identifier",
                                "start": 359,
                                "end": 360,
                                "decorators": [],
                                "name": "M",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 353,
                          "end": 358,
                          "decorators": [],
                          "name": "MyMap",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 374,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 380,
            "end": 424,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 386,
                "end": 423,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 419,
                  "decorators": [],
                  "name": "q2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 388,
                    "end": 419,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 390,
                      "end": 419,
                      "types": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 390,
                          "end": 407,
                          "indexType": {
                            "type": "TSTypeOperator",
                            "start": 399,
                            "end": 406,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 405,
                              "end": 406,
                              "typeName": {
                                "type": "Identifier",
                                "start": 405,
                                "end": 406,
                                "decorators": [],
                                "name": "M",
                                "optional": false
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 390,
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 396,
                                    "end": 397,
                                    "decorators": [],
                                    "name": "M",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 390,
                              "end": 395,
                              "decorators": [],
                              "name": "MyMap",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 410,
                          "end": 419
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 429,
            "end": 470,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 435,
                "end": 469,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 465,
                  "decorators": [],
                  "name": "q3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 465,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 439,
                      "end": 465,
                      "types": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 439,
                          "end": 456,
                          "indexType": {
                            "type": "TSTypeOperator",
                            "start": 448,
                            "end": 455,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 454,
                              "end": 455,
                              "typeName": {
                                "type": "Identifier",
                                "start": 454,
                                "end": 455,
                                "decorators": [],
                                "name": "M",
                                "optional": false
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 439,
                            "end": 447,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 444,
                              "end": 447,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 445,
                                  "end": 446,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 445,
                                    "end": 446,
                                    "decorators": [],
                                    "name": "M",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 439,
                              "end": 444,
                              "decorators": [],
                              "name": "MyMap",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 459,
                          "end": 465
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 271,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 290,
          "end": 305,
          "decorators": [],
          "name": "mymap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 295,
            "end": 305,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 297,
              "end": 305,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 302,
                "end": 305,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 303,
                    "end": 304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 304,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 297,
                "end": 302,
                "decorators": [],
                "name": "MyMap",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 307,
          "end": 317,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 308,
            "end": 317,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 310,
              "end": 317,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 316,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 319,
          "end": 335,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 320,
            "end": 335,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 322,
              "end": 335,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 324,
                  "end": 333,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 325,
                    "end": 333,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 327,
                      "end": 333
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 271,
        "end": 289,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 272,
            "end": 288,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 282,
              "end": 288
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
