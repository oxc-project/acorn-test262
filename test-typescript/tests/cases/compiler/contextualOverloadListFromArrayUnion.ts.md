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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 35,
            "decorators": [],
            "name": "y",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 84,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "decorators": [],
              "name": "yThen",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 58,
              "end": 84,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 64,
                  "end": 83,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 72,
                    "end": 83,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 76,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 83,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 58,
                "end": 63,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 38,
            "decorators": [],
            "name": "y",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 88,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 88,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 87,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 58,
              "decorators": [],
              "name": "yThen",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 61,
              "end": 87,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 67,
                  "end": 86,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 75,
                    "end": 86,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 79,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 86,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 67,
                      "end": 71,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 61,
                "end": 66,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 116,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 49,
            "end": 114,
            "params": [
              {
                "type": "Identifier",
                "start": 50,
                "end": 80,
                "decorators": [],
                "name": "entries",
                "optional": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 78,
                        "decorators": [],
                        "name": "ResizeObserverEntry",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 82,
                "end": 106,
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 92,
                    "end": 106,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 106,
                      "decorators": [],
                      "name": "ResizeObserver",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 42,
        "decorators": [],
        "name": "ResizeObserverCallback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 117,
      "end": 247,
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 247,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 180,
            "end": 245,
            "params": [
              {
                "type": "Identifier",
                "start": 181,
                "end": 211,
                "decorators": [],
                "name": "entries",
                "optional": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 209,
                        "decorators": [],
                        "name": "ResizeObserverEntry",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 213,
                "end": 237,
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 221,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 237,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 237,
                      "decorators": [],
                      "name": "ResizeObserver",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 149,
        "decorators": [],
        "name": "ResizeObserverCallback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 269,
            "decorators": [],
            "name": "resizeObserver",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 272,
            "end": 318,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 291,
                "end": 317,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 304,
                  "end": 317,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 310,
                      "end": 315,
                      "directive": null,
                      "expression": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 315,
                        "decorators": [],
                        "name": "entry",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "start": 292,
                    "end": 299,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 293,
                        "end": 298,
                        "decorators": [],
                        "name": "entry",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 276,
              "end": 290,
              "decorators": [],
              "name": "ResizeObserver",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 341,
      "end": 446,
      "body": {
        "type": "TSInterfaceBody",
        "start": 363,
        "end": 446,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 369,
            "end": 402,
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 381,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 381,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 377,
                    "end": 381
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 383,
                "end": 392,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 389,
                  "end": 392,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 391,
                    "end": 392,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 392,
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
              "start": 393,
              "end": 402,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 395,
                "end": 402
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 407,
            "end": 444,
            "params": [
              {
                "type": "Identifier",
                "start": 408,
                "end": 420,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 413,
                  "end": 420,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 415,
                    "end": 420,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 420,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 422,
                "end": 434,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 434,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 430,
                    "end": 434
                  }
                }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 359,
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 359,
        "end": 362,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 361,
            "const": false,
            "constraint": null,
            "default": null,
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
      "type": "TSInterfaceDeclaration",
      "start": 448,
      "end": 506,
      "body": {
        "type": "TSInterfaceBody",
        "start": 466,
        "end": 506,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 472,
            "end": 504,
            "params": [
              {
                "type": "Identifier",
                "start": 473,
                "end": 494,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 481,
                  "end": 494,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 483,
                    "end": 494,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 491,
                      "end": 494,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 492,
                          "end": 493,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 493,
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
                      "start": 483,
                      "end": 491,
                      "decorators": [],
                      "name": "Callback",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 462,
        "decorators": [],
        "name": "Task",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 465,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
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
      "start": 508,
      "end": 1180,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 515,
        "end": 1180,
        "async": false,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 598,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 601,
                    "end": 602,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 623,
                    "decorators": [],
                    "name": "results",
                    "optional": false,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 620,
                            "end": 621,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 626,
                    "end": 628,
                    "elements": []
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "FunctionDeclaration",
              "start": 634,
              "end": 1167,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 668,
                          "decorators": [],
                          "name": "task",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 671,
                          "end": 683,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 671,
                            "end": 676,
                            "decorators": [],
                            "name": "tasks",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 677,
                            "end": 682,
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "IfStatement",
                    "start": 692,
                    "end": 1161,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 756,
                      "end": 1161,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 770,
                          "end": 1151,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 770,
                            "end": 1151,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 775,
                                "end": 1150,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 794,
                                  "end": 1150,
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "start": 812,
                                      "end": 1136,
                                      "alternate": {
                                        "type": "BlockStatement",
                                        "start": 890,
                                        "end": 1136,
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 1070,
                                            "end": 1091,
                                            "directive": null,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 1070,
                                              "end": 1091,
                                              "arguments": [
                                                {
                                                  "type": "TSNonNullExpression",
                                                  "start": 1083,
                                                  "end": 1090,
                                                  "expression": {
                                                    "type": "Identifier",
                                                    "start": 1083,
                                                    "end": 1089,
                                                    "decorators": [],
                                                    "name": "result",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                }
                                              ],
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 1070,
                                                "end": 1082,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 1070,
                                                  "end": 1077,
                                                  "decorators": [],
                                                  "name": "results",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 1078,
                                                  "end": 1082,
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              },
                                              "optional": false,
                                              "typeArguments": null
                                            }
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 1112,
                                            "end": 1118,
                                            "directive": null,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 1112,
                                              "end": 1118,
                                              "arguments": [],
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 1112,
                                                "end": 1116,
                                                "decorators": [],
                                                "name": "next",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "typeArguments": null
                                            }
                                          }
                                        ]
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
                                            "directive": null,
                                            "expression": {
                                              "type": "CallExpression",
                                              "start": 845,
                                              "end": 866,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "start": 854,
                                                  "end": 859,
                                                  "decorators": [],
                                                  "name": "error",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                {
                                                  "type": "Literal",
                                                  "start": 861,
                                                  "end": 865,
                                                  "raw": "null",
                                                  "value": null
                                                }
                                              ],
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 845,
                                                "end": 853,
                                                "decorators": [],
                                                "name": "callback",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "typeArguments": null
                                            }
                                          }
                                        ]
                                      },
                                      "test": {
                                        "type": "Identifier",
                                        "start": 816,
                                        "end": 821,
                                        "decorators": [],
                                        "name": "error",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 776,
                                    "end": 781,
                                    "decorators": [],
                                    "name": "error",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 783,
                                    "end": 789,
                                    "decorators": [],
                                    "name": "result",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 770,
                              "end": 774,
                              "decorators": [],
                              "name": "task",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
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
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 717,
                            "end": 740,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 726,
                                "end": 730,
                                "raw": "null",
                                "value": null
                              },
                              {
                                "type": "Identifier",
                                "start": 732,
                                "end": 739,
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 717,
                              "end": 725,
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "start": 696,
                      "end": 701,
                      "argument": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 701,
                        "decorators": [],
                        "name": "task",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 643,
                "end": 647,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "ExpressionStatement",
              "start": 1172,
              "end": 1178,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 1172,
                "end": 1178,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 1172,
                  "end": 1176,
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 524,
          "end": 530,
          "decorators": [],
          "name": "series",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 534,
            "end": 550,
            "decorators": [],
            "name": "tasks",
            "optional": false,
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
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 545,
                    "end": 548,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 546,
                        "end": 547,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 546,
                          "end": 547,
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
                    "start": 541,
                    "end": 545,
                    "decorators": [],
                    "name": "Task",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 552,
            "end": 575,
            "decorators": [],
            "name": "callback",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 560,
              "end": 575,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 562,
                "end": 575,
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 571,
                          "end": 572,
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
                  "start": 562,
                  "end": 570,
                  "decorators": [],
                  "name": "Callback",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 576,
          "end": 582,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 578,
            "end": 582
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 530,
          "end": 533,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 531,
              "end": 532,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 531,
                "end": 532,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 1182,
      "end": 1450,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1182,
        "end": 1450,
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
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 1201,
                  "end": 1235,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1212,
                      "end": 1229,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 1218,
                        "end": 1229,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1221,
                            "end": 1225,
                            "raw": "null",
                            "value": null
                          },
                          {
                            "type": "Literal",
                            "start": 1227,
                            "end": 1228,
                            "raw": "1",
                            "value": 1
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1218,
                          "end": 1220,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    },
                    {
                      "type": "Literal",
                      "start": 1231,
                      "end": 1234,
                      "raw": "300",
                      "value": 300
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1201,
                    "end": 1211,
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1197,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1241,
                "end": 1281,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 1247,
                  "end": 1281,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1258,
                      "end": 1275,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 1264,
                        "end": 1275,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1267,
                            "end": 1271,
                            "raw": "null",
                            "value": null
                          },
                          {
                            "type": "Literal",
                            "start": 1273,
                            "end": 1274,
                            "raw": "2",
                            "value": 2
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1264,
                          "end": 1266,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    },
                    {
                      "type": "Literal",
                      "start": 1277,
                      "end": 1280,
                      "raw": "200",
                      "value": 200
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1247,
                    "end": 1257,
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1243,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1287,
                "end": 1327,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 1293,
                  "end": 1327,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1304,
                      "end": 1321,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 1310,
                        "end": 1321,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1313,
                            "end": 1317,
                            "raw": "null",
                            "value": null
                          },
                          {
                            "type": "Literal",
                            "start": 1319,
                            "end": 1320,
                            "raw": "3",
                            "value": 3
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1312,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    },
                    {
                      "type": "Literal",
                      "start": 1323,
                      "end": 1326,
                      "raw": "100",
                      "value": 100
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1293,
                    "end": 1303,
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1287,
                    "end": 1289,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1332,
            "end": 1449,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1352,
              "end": 1449,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1358,
                  "end": 1447,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1411,
                    "end": 1447,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1421,
                        "end": 1441,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1421,
                          "end": 1441,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1433,
                              "end": 1440,
                              "decorators": [],
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1421,
                            "end": 1432,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1421,
                              "end": 1428,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1429,
                              "end": 1432,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
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
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1379,
                          "end": 1399,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1393,
                              "end": 1398,
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1379,
                            "end": 1392,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1379,
                              "end": 1386,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1387,
                              "end": 1392,
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1362,
                    "end": 1367,
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1333,
                "end": 1338,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1340,
                "end": 1347,
                "decorators": [],
                "name": "results",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1182,
          "end": 1188,
          "decorators": [],
          "name": "series",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
