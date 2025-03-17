__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "MyMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 48,
              "end": 54
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
        "start": 58,
        "end": 107,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 65,
          "end": 77,
          "name": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 93,
                  "end": 99
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "optional": null,
        "readonly": null,
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
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 109,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 131,
          "end": 140,
          "name": "value",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 127,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 129,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 141,
        "end": 147,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 143,
          "end": 147
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 161,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 180,
          "end": 195,
          "name": "mymap",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 187,
              "end": 195,
              "typeName": {
                "type": "Identifier",
                "start": 187,
                "end": 192,
                "name": "MyMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 197,
          "end": 207,
          "name": "k",
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
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 228,
                  "name": "elemofM",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 231,
                  "end": 239,
                  "object": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 236,
                    "name": "mymap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 238,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 245,
            "end": 256,
            "expression": {
              "type": "CallExpression",
              "start": 245,
              "end": 255,
              "callee": {
                "type": "Identifier",
                "start": 245,
                "end": 246,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 254,
                  "name": "elemofM",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 161,
        "end": 179,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 162,
            "end": 178,
            "name": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 172,
              "end": 178
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 260,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 271,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 290,
          "end": 305,
          "name": "mymap",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 295,
            "end": 305,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 297,
              "end": 305,
              "typeName": {
                "type": "Identifier",
                "start": 297,
                "end": 302,
                "name": "MyMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 307,
          "end": 317,
          "name": "k",
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
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 319,
          "end": 335,
          "name": "z",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 325,
                    "end": 333,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 327,
                      "end": 333
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 370,
                  "name": "q1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 353,
                      "end": 370,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 353,
                        "end": 361,
                        "typeName": {
                          "type": "Identifier",
                          "start": 353,
                          "end": 358,
                          "name": "MyMap",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      },
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
                            "name": "M",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 374,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 419,
                  "name": "q2",
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
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 390,
                            "end": 398,
                            "typeName": {
                              "type": "Identifier",
                              "start": 390,
                              "end": 395,
                              "name": "MyMap",
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
                                    "name": "M",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
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
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 465,
                  "name": "q3",
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
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 439,
                            "end": 447,
                            "typeName": {
                              "type": "Identifier",
                              "start": 439,
                              "end": 444,
                              "name": "MyMap",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "name": "M",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          },
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
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 271,
        "end": 289,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 272,
            "end": 288,
            "name": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 282,
              "end": 288
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
