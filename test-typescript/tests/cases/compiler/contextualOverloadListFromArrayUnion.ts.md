__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 35,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 35,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 17,
                    "end": 24,
                    "elementType": {
                      "type": "TSNeverKeyword",
                      "start": 17,
                      "end": 22
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 27,
                    "end": 35,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 85,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "name": "yThen",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 58,
              "end": 84,
              "callee": {
                "type": "MemberExpression",
                "start": 58,
                "end": 63,
                "object": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 64,
                  "end": 83,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "MemberExpression",
                    "start": 72,
                    "end": 83,
                    "object": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 76,
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 83,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 38,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 38,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 38,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 17,
                    "end": 27,
                    "elementType": {
                      "type": "TSArrayType",
                      "start": 17,
                      "end": 25,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 30,
                    "end": 38,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 88,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 88,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 87,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 58,
              "name": "yThen",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 61,
              "end": 87,
              "callee": {
                "type": "MemberExpression",
                "start": 61,
                "end": 66,
                "object": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 67,
                  "end": 86,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 67,
                      "end": 71,
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "MemberExpression",
                    "start": 75,
                    "end": 86,
                    "object": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 79,
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 86,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 1451,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 10,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 42,
        "name": "ResizeObserverCallback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 116,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 49,
            "end": 114,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 50,
                "end": 80,
                "name": "entries",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 80,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 59,
                    "end": 80,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 59,
                      "end": 78,
                      "typeName": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 78,
                        "name": "ResizeObserverEntry",
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
                "start": 82,
                "end": 106,
                "name": "observer",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 92,
                    "end": 106,
                    "typeName": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 106,
                      "name": "ResizeObserver",
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
              "start": 107,
              "end": 113,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 109,
                "end": 113
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 117,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 149,
        "name": "ResizeObserverCallback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 247,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 180,
            "end": 245,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 181,
                "end": 211,
                "name": "entries",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 211,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 190,
                    "end": 211,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 190,
                      "end": 209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 209,
                        "name": "ResizeObserverEntry",
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
                "start": 213,
                "end": 237,
                "name": "observer",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 221,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 237,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 237,
                      "name": "ResizeObserver",
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
              "start": 238,
              "end": 244,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 240,
                "end": 244
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 269,
            "name": "resizeObserver",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 272,
            "end": 318,
            "callee": {
              "type": "Identifier",
              "start": 276,
              "end": 290,
              "name": "ResizeObserver",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 291,
                "end": 317,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "start": 292,
                    "end": 299,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 293,
                        "end": 298,
                        "name": "entry",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 304,
                  "end": 317,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 310,
                      "end": 315,
                      "expression": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 315,
                        "name": "entry",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 341,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 359,
        "name": "Callback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 359,
        "end": 362,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 361,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 363,
        "end": 446,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 369,
            "end": 402,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 381,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 381,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 377,
                    "end": 381
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 383,
                "end": 392,
                "name": "result",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 389,
                  "end": 392,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 391,
                    "end": 392,
                    "typeName": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 392,
                      "name": "T",
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
              "start": 393,
              "end": 402,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 395,
                "end": 402
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 407,
            "end": 444,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 408,
                "end": 420,
                "name": "error",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 413,
                  "end": 420,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 415,
                    "end": 420,
                    "typeName": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 420,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 422,
                "end": 434,
                "name": "result",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 434,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 430,
                    "end": 434
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 444,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 437,
                "end": 444
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 448,
      "end": 506,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 462,
        "name": "Task",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 465,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 466,
        "end": 506,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 472,
            "end": 504,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 473,
                "end": 494,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 481,
                  "end": 494,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 483,
                    "end": 494,
                    "typeName": {
                      "type": "Identifier",
                      "start": 483,
                      "end": 491,
                      "name": "Callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 491,
                      "end": 494,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 492,
                          "end": 493,
                          "typeName": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 493,
                            "name": "T",
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 504,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 497,
                "end": 504
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 508,
      "end": 1180,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 515,
        "end": 1180,
        "id": {
          "type": "Identifier",
          "start": 524,
          "end": 530,
          "name": "series",
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
            "start": 534,
            "end": 550,
            "name": "tasks",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 539,
              "end": 550,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 541,
                "end": 550,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 541,
                  "end": 548,
                  "typeName": {
                    "type": "Identifier",
                    "start": 541,
                    "end": 545,
                    "name": "Task",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 545,
                    "end": 548,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 546,
                        "end": 547,
                        "typeName": {
                          "type": "Identifier",
                          "start": 546,
                          "end": 547,
                          "name": "T",
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
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 552,
            "end": 575,
            "name": "callback",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 560,
              "end": 575,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 562,
                "end": 575,
                "typeName": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 570,
                  "name": "Callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 570,
                  "end": 575,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 571,
                      "end": 574,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 571,
                        "end": 572,
                        "typeName": {
                          "type": "Identifier",
                          "start": 571,
                          "end": 572,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 583,
          "end": 1180,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 589,
              "end": 602,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 593,
                  "end": 602,
                  "id": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 598,
                    "name": "index",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 601,
                    "end": 602,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 607,
              "end": 628,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 611,
                  "end": 628,
                  "id": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 623,
                    "name": "results",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 618,
                      "end": 623,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 620,
                        "end": 623,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 620,
                          "end": 621,
                          "typeName": {
                            "type": "Identifier",
                            "start": 620,
                            "end": 621,
                            "name": "T",
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
                  "init": {
                    "type": "ArrayExpression",
                    "start": 626,
                    "end": 628,
                    "elements": []
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "FunctionDeclaration",
              "start": 634,
              "end": 1167,
              "id": {
                "type": "Identifier",
                "start": 643,
                "end": 647,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 650,
                "end": 1167,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 660,
                    "end": 683,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 664,
                        "end": 683,
                        "id": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 668,
                          "name": "task",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 671,
                          "end": 683,
                          "object": {
                            "type": "Identifier",
                            "start": 671,
                            "end": 676,
                            "name": "tasks",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 677,
                            "end": 682,
                            "name": "index",
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
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 692,
                    "end": 1161,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 696,
                      "end": 701,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 701,
                        "name": "task",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 703,
                      "end": 750,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 717,
                          "end": 740,
                          "expression": {
                            "type": "CallExpression",
                            "start": 717,
                            "end": 740,
                            "callee": {
                              "type": "Identifier",
                              "start": 717,
                              "end": 725,
                              "name": "callback",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 726,
                                "end": 730,
                                "value": null,
                                "raw": "null"
                              },
                              {
                                "type": "Identifier",
                                "start": 732,
                                "end": 739,
                                "name": "results",
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
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 756,
                      "end": 1161,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 770,
                          "end": 1151,
                          "expression": {
                            "type": "CallExpression",
                            "start": 770,
                            "end": 1151,
                            "callee": {
                              "type": "Identifier",
                              "start": 770,
                              "end": 774,
                              "name": "task",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 775,
                                "end": 1150,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 776,
                                    "end": 781,
                                    "name": "error",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 783,
                                    "end": 789,
                                    "name": "result",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 794,
                                  "end": 1150,
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "start": 812,
                                      "end": 1136,
                                      "test": {
                                        "type": "Identifier",
                                        "start": 816,
                                        "end": 821,
                                        "name": "error",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "start": 823,
                                        "end": 884,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 845,
                                            "end": 866,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 845,
                                              "end": 866,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 845,
                                                "end": 853,
                                                "name": "callback",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "start": 854,
                                                  "end": 859,
                                                  "name": "error",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                {
                                                  "type": "Literal",
                                                  "start": 861,
                                                  "end": 865,
                                                  "value": null,
                                                  "raw": "null"
                                                }
                                              ],
                                              "optional": false,
                                              "typeArguments": null
                                            },
                                            "directive": null
                                          }
                                        ]
                                      },
                                      "alternate": {
                                        "type": "BlockStatement",
                                        "start": 890,
                                        "end": 1136,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 1070,
                                            "end": 1091,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 1070,
                                              "end": 1091,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 1070,
                                                "end": 1082,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 1070,
                                                  "end": 1077,
                                                  "name": "results",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 1078,
                                                  "end": 1082,
                                                  "name": "push",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              },
                                              "arguments": [
                                                {
                                                  "type": "TSNonNullExpression",
                                                  "start": 1083,
                                                  "end": 1090,
                                                  "expression": {
                                                    "type": "Identifier",
                                                    "start": 1083,
                                                    "end": 1089,
                                                    "name": "result",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  }
                                                }
                                              ],
                                              "optional": false,
                                              "typeArguments": null
                                            },
                                            "directive": null
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 1112,
                                            "end": 1118,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 1112,
                                              "end": 1118,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 1112,
                                                "end": 1116,
                                                "name": "next",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "arguments": [],
                                              "optional": false,
                                              "typeArguments": null
                                            },
                                            "directive": null
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                "typeParameters": null,
                                "returnType": null
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            {
              "type": "ExpressionStatement",
              "start": 1172,
              "end": 1178,
              "expression": {
                "type": "CallExpression",
                "start": 1172,
                "end": 1178,
                "callee": {
                  "type": "Identifier",
                  "start": 1172,
                  "end": 1176,
                  "name": "next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
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
          "start": 530,
          "end": 533,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 531,
              "end": 532,
              "name": {
                "type": "Identifier",
                "start": 531,
                "end": 532,
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
          "start": 576,
          "end": 582,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 578,
            "end": 582
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 1182,
      "end": 1450,
      "expression": {
        "type": "CallExpression",
        "start": 1182,
        "end": 1450,
        "callee": {
          "type": "Identifier",
          "start": 1182,
          "end": 1188,
          "name": "series",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 1189,
            "end": 1330,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1195,
                "end": 1235,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1197,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 1201,
                  "end": 1235,
                  "callee": {
                    "type": "Identifier",
                    "start": 1201,
                    "end": 1211,
                    "name": "setTimeout",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1212,
                      "end": 1229,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1218,
                        "end": 1229,
                        "callee": {
                          "type": "Identifier",
                          "start": 1218,
                          "end": 1220,
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1221,
                            "end": 1225,
                            "value": null,
                            "raw": "null"
                          },
                          {
                            "type": "Literal",
                            "start": 1227,
                            "end": 1228,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "Literal",
                      "start": 1231,
                      "end": 1234,
                      "value": 300,
                      "raw": "300"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1241,
                "end": 1281,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1243,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 1247,
                  "end": 1281,
                  "callee": {
                    "type": "Identifier",
                    "start": 1247,
                    "end": 1257,
                    "name": "setTimeout",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1258,
                      "end": 1275,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1264,
                        "end": 1275,
                        "callee": {
                          "type": "Identifier",
                          "start": 1264,
                          "end": 1266,
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1267,
                            "end": 1271,
                            "value": null,
                            "raw": "null"
                          },
                          {
                            "type": "Literal",
                            "start": 1273,
                            "end": 1274,
                            "value": 2,
                            "raw": "2"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "Literal",
                      "start": 1277,
                      "end": 1280,
                      "value": 200,
                      "raw": "200"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1287,
                "end": 1327,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1287,
                    "end": 1289,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 1293,
                  "end": 1327,
                  "callee": {
                    "type": "Identifier",
                    "start": 1293,
                    "end": 1303,
                    "name": "setTimeout",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1304,
                      "end": 1321,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 1310,
                        "end": 1321,
                        "callee": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1312,
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1313,
                            "end": 1317,
                            "value": null,
                            "raw": "null"
                          },
                          {
                            "type": "Literal",
                            "start": 1319,
                            "end": 1320,
                            "value": 3,
                            "raw": "3"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "Literal",
                      "start": 1323,
                      "end": 1326,
                      "value": 100,
                      "raw": "100"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1332,
            "end": 1449,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1333,
                "end": 1338,
                "name": "error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1340,
                "end": 1347,
                "name": "results",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 1352,
              "end": 1449,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1358,
                  "end": 1447,
                  "test": {
                    "type": "Identifier",
                    "start": 1362,
                    "end": 1367,
                    "name": "error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1369,
                    "end": 1405,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1379,
                        "end": 1399,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1379,
                          "end": 1399,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1379,
                            "end": 1392,
                            "object": {
                              "type": "Identifier",
                              "start": 1379,
                              "end": 1386,
                              "name": "console",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1387,
                              "end": 1392,
                              "name": "error",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1393,
                              "end": 1398,
                              "name": "error",
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
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1411,
                    "end": 1447,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1421,
                        "end": 1441,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1421,
                          "end": 1441,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1421,
                            "end": 1432,
                            "object": {
                              "type": "Identifier",
                              "start": 1421,
                              "end": 1428,
                              "name": "console",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1429,
                              "end": 1432,
                              "name": "log",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1433,
                              "end": 1440,
                              "name": "results",
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
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
