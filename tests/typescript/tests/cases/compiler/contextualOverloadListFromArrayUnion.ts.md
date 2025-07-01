__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNeverKeyword",
                      "start": 17,
                      "end": 22
                    },
                    "start": 17,
                    "end": 24
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    },
                    "start": 27,
                    "end": 35
                  }
                ],
                "start": 17,
                "end": 35
              },
              "start": 15,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "yThen",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 55
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 63
                },
                "optional": false,
                "computed": false,
                "start": 58,
                "end": 63
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 68
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 76
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 77,
                      "end": 83
                    },
                    "optional": false,
                    "computed": false,
                    "start": 72,
                    "end": 83
                  },
                  "id": null,
                  "generator": false,
                  "start": 64,
                  "end": 83
                }
              ],
              "optional": false,
              "start": 58,
              "end": 84
            },
            "definite": false,
            "start": 50,
            "end": 84
          }
        ],
        "declare": false,
        "start": 44,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      },
                      "start": 17,
                      "end": 25
                    },
                    "start": 17,
                    "end": 27
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    },
                    "start": 30,
                    "end": 38
                  }
                ],
                "start": 17,
                "end": 38
              },
              "start": 15,
              "end": 38
            },
            "start": 14,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 38
        }
      ],
      "declare": true,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "yThen",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 58
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 66
                },
                "optional": false,
                "computed": false,
                "start": 61,
                "end": 66
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 71
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 79
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 86
                    },
                    "optional": false,
                    "computed": false,
                    "start": 75,
                    "end": 86
                  },
                  "id": null,
                  "generator": false,
                  "start": 67,
                  "end": 86
                }
              ],
              "optional": false,
              "start": 61,
              "end": 87
            },
            "definite": false,
            "start": 53,
            "end": 87
          }
        ],
        "declare": false,
        "start": 47,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizeObserverCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 42
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ResizeObserverEntry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 59,
                        "end": 78
                      },
                      "typeArguments": null,
                      "start": 59,
                      "end": 78
                    },
                    "start": 59,
                    "end": 80
                  },
                  "start": 57,
                  "end": 80
                },
                "start": 50,
                "end": 80
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResizeObserver",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 92,
                    "end": 106
                  },
                  "start": 90,
                  "end": 106
                },
                "start": 82,
                "end": 106
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 109,
                "end": 113
              },
              "start": 107,
              "end": 113
            },
            "start": 49,
            "end": 114
          }
        ],
        "start": 43,
        "end": 116
      },
      "declare": false,
      "start": 10,
      "end": 116
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizeObserverCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 149
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ResizeObserverEntry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 209
                      },
                      "typeArguments": null,
                      "start": 190,
                      "end": 209
                    },
                    "start": 190,
                    "end": 211
                  },
                  "start": 188,
                  "end": 211
                },
                "start": 181,
                "end": 211
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResizeObserver",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 237
                    },
                    "typeArguments": null,
                    "start": 223,
                    "end": 237
                  },
                  "start": 221,
                  "end": 237
                },
                "start": 213,
                "end": 237
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 240,
                "end": 244
              },
              "start": 238,
              "end": 244
            },
            "start": 180,
            "end": 245
          }
        ],
        "start": 150,
        "end": 247
      },
      "declare": false,
      "start": 117,
      "end": 247
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "resizeObserver",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 269
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResizeObserver",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 290
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 298
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 299
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 315
                      },
                      "directive": null,
                      "start": 310,
                      "end": 315
                    }
                  ],
                  "start": 304,
                  "end": 317
                },
                "id": null,
                "generator": false,
                "start": 291,
                "end": 317
              }
            ],
            "start": 272,
            "end": 318
          },
          "definite": false,
          "start": 255,
          "end": 318
        }
      ],
      "declare": false,
      "start": 249,
      "end": 319
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 359
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 361
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 360,
            "end": 361
          }
        ],
        "start": 359,
        "end": 362
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 377,
                    "end": 381
                  },
                  "start": 375,
                  "end": 381
                },
                "start": 370,
                "end": 381
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 392
                    },
                    "typeArguments": null,
                    "start": 391,
                    "end": 392
                  },
                  "start": 389,
                  "end": 392
                },
                "start": 383,
                "end": 392
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 395,
                "end": 402
              },
              "start": 393,
              "end": 402
            },
            "start": 369,
            "end": 402
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 415,
                      "end": 420
                    },
                    "typeArguments": null,
                    "start": 415,
                    "end": 420
                  },
                  "start": 413,
                  "end": 420
                },
                "start": 408,
                "end": 420
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 430,
                    "end": 434
                  },
                  "start": 428,
                  "end": 434
                },
                "start": 422,
                "end": 434
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 437,
                "end": 444
              },
              "start": 435,
              "end": 444
            },
            "start": 407,
            "end": 444
          }
        ],
        "start": 363,
        "end": 446
      },
      "declare": false,
      "start": 341,
      "end": 446
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Task",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 462
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          }
        ],
        "start": 462,
        "end": 465
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 491
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 493
                          },
                          "typeArguments": null,
                          "start": 492,
                          "end": 493
                        }
                      ],
                      "start": 491,
                      "end": 494
                    },
                    "start": 483,
                    "end": 494
                  },
                  "start": 481,
                  "end": 494
                },
                "start": 473,
                "end": 494
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 497,
                "end": 504
              },
              "start": 495,
              "end": 504
            },
            "start": 472,
            "end": 504
          }
        ],
        "start": 466,
        "end": 506
      },
      "declare": false,
      "start": 448,
      "end": 506
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "series",
          "optional": false,
          "typeAnnotation": null,
          "start": 524,
          "end": 530
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 532
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 531,
              "end": 532
            }
          ],
          "start": 530,
          "end": 533
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tasks",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Task",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 541,
                    "end": 545
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 546,
                          "end": 547
                        },
                        "typeArguments": null,
                        "start": 546,
                        "end": 547
                      }
                    ],
                    "start": 545,
                    "end": 548
                  },
                  "start": 541,
                  "end": 548
                },
                "start": 541,
                "end": 550
              },
              "start": 539,
              "end": 550
            },
            "start": 534,
            "end": 550
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "callback",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 570
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 571,
                          "end": 572
                        },
                        "typeArguments": null,
                        "start": 571,
                        "end": 572
                      },
                      "start": 571,
                      "end": 574
                    }
                  ],
                  "start": 570,
                  "end": 575
                },
                "start": 562,
                "end": 575
              },
              "start": 560,
              "end": 575
            },
            "start": 552,
            "end": 575
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 578,
            "end": 582
          },
          "start": 576,
          "end": 582
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 598
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 601,
                    "end": 602
                  },
                  "definite": false,
                  "start": 593,
                  "end": 602
                }
              ],
              "declare": false,
              "start": 589,
              "end": 602
            },
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 620,
                            "end": 621
                          },
                          "typeArguments": null,
                          "start": 620,
                          "end": 621
                        },
                        "start": 620,
                        "end": 623
                      },
                      "start": 618,
                      "end": 623
                    },
                    "start": 611,
                    "end": 623
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 626,
                    "end": 628
                  },
                  "definite": false,
                  "start": 611,
                  "end": 628
                }
              ],
              "declare": false,
              "start": 607,
              "end": 628
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 647
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "task",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 668
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tasks",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 676
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 677,
                            "end": 682
                          },
                          "optional": false,
                          "computed": true,
                          "start": 671,
                          "end": 683
                        },
                        "definite": false,
                        "start": 664,
                        "end": 683
                      }
                    ],
                    "declare": false,
                    "start": 660,
                    "end": 683
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "task",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 697,
                        "end": 701
                      },
                      "prefix": true,
                      "start": 696,
                      "end": 701
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 717,
                              "end": 725
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 726,
                                "end": 730
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 732,
                                "end": 739
                              }
                            ],
                            "optional": false,
                            "start": 717,
                            "end": 740
                          },
                          "directive": null,
                          "start": 717,
                          "end": 740
                        }
                      ],
                      "start": 703,
                      "end": 750
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "task",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 770,
                              "end": 774
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "error",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 776,
                                    "end": 781
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "result",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 783,
                                    "end": 789
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "error",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 816,
                                        "end": 821
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "callback",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 845,
                                                "end": 853
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "error",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 854,
                                                  "end": 859
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": null,
                                                  "raw": "null",
                                                  "start": 861,
                                                  "end": 865
                                                }
                                              ],
                                              "optional": false,
                                              "start": 845,
                                              "end": 866
                                            },
                                            "directive": null,
                                            "start": 845,
                                            "end": 866
                                          }
                                        ],
                                        "start": 823,
                                        "end": 884
                                      },
                                      "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "results",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1070,
                                                  "end": 1077
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1078,
                                                  "end": 1082
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1070,
                                                "end": 1082
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "TSNonNullExpression",
                                                  "expression": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "result",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1083,
                                                    "end": 1089
                                                  },
                                                  "start": 1083,
                                                  "end": 1090
                                                }
                                              ],
                                              "optional": false,
                                              "start": 1070,
                                              "end": 1091
                                            },
                                            "directive": null,
                                            "start": 1070,
                                            "end": 1091
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "next",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1112,
                                                "end": 1116
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false,
                                              "start": 1112,
                                              "end": 1118
                                            },
                                            "directive": null,
                                            "start": 1112,
                                            "end": 1118
                                          }
                                        ],
                                        "start": 890,
                                        "end": 1136
                                      },
                                      "start": 812,
                                      "end": 1136
                                    }
                                  ],
                                  "start": 794,
                                  "end": 1150
                                },
                                "id": null,
                                "generator": false,
                                "start": 775,
                                "end": 1150
                              }
                            ],
                            "optional": false,
                            "start": 770,
                            "end": 1151
                          },
                          "directive": null,
                          "start": 770,
                          "end": 1151
                        }
                      ],
                      "start": 756,
                      "end": 1161
                    },
                    "start": 692,
                    "end": 1161
                  }
                ],
                "start": 650,
                "end": 1167
              },
              "expression": false,
              "start": 634,
              "end": 1167
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1172,
                  "end": 1176
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1172,
                "end": 1178
              },
              "directive": null,
              "start": 1172,
              "end": 1178
            }
          ],
          "start": 583,
          "end": 1180
        },
        "expression": false,
        "start": 515,
        "end": 1180
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 508,
      "end": 1180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "series",
          "optional": false,
          "typeAnnotation": null,
          "start": 1182,
          "end": 1188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1195,
                    "end": 1197
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1211
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1218,
                          "end": 1220
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1221,
                            "end": 1225
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1227,
                            "end": 1228
                          }
                        ],
                        "optional": false,
                        "start": 1218,
                        "end": 1229
                      },
                      "id": null,
                      "generator": false,
                      "start": 1212,
                      "end": 1229
                    },
                    {
                      "type": "Literal",
                      "value": 300,
                      "raw": "300",
                      "start": 1231,
                      "end": 1234
                    }
                  ],
                  "optional": false,
                  "start": 1201,
                  "end": 1235
                },
                "id": null,
                "generator": false,
                "start": 1195,
                "end": 1235
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1243
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1257
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1264,
                          "end": 1266
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1267,
                            "end": 1271
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1273,
                            "end": 1274
                          }
                        ],
                        "optional": false,
                        "start": 1264,
                        "end": 1275
                      },
                      "id": null,
                      "generator": false,
                      "start": 1258,
                      "end": 1275
                    },
                    {
                      "type": "Literal",
                      "value": 200,
                      "raw": "200",
                      "start": 1277,
                      "end": 1280
                    }
                  ],
                  "optional": false,
                  "start": 1247,
                  "end": 1281
                },
                "id": null,
                "generator": false,
                "start": 1241,
                "end": 1281
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1289
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1303
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1310,
                          "end": 1312
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1313,
                            "end": 1317
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1319,
                            "end": 1320
                          }
                        ],
                        "optional": false,
                        "start": 1310,
                        "end": 1321
                      },
                      "id": null,
                      "generator": false,
                      "start": 1304,
                      "end": 1321
                    },
                    {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 1323,
                      "end": 1326
                    }
                  ],
                  "optional": false,
                  "start": 1293,
                  "end": 1327
                },
                "id": null,
                "generator": false,
                "start": 1287,
                "end": 1327
              }
            ],
            "start": 1189,
            "end": 1330
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 1333,
                "end": 1338
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1347
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1362,
                    "end": 1367
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1379,
                              "end": 1386
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1387,
                              "end": 1392
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1379,
                            "end": 1392
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1393,
                              "end": 1398
                            }
                          ],
                          "optional": false,
                          "start": 1379,
                          "end": 1399
                        },
                        "directive": null,
                        "start": 1379,
                        "end": 1399
                      }
                    ],
                    "start": 1369,
                    "end": 1405
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1421,
                              "end": 1428
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1429,
                              "end": 1432
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1421,
                            "end": 1432
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1433,
                              "end": 1440
                            }
                          ],
                          "optional": false,
                          "start": 1421,
                          "end": 1441
                        },
                        "directive": null,
                        "start": 1421,
                        "end": 1441
                      }
                    ],
                    "start": 1411,
                    "end": 1447
                  },
                  "start": 1358,
                  "end": 1447
                }
              ],
              "start": 1352,
              "end": 1449
            },
            "id": null,
            "generator": false,
            "start": 1332,
            "end": 1449
          }
        ],
        "optional": false,
        "start": 1182,
        "end": 1450
      },
      "directive": null,
      "start": 1182,
      "end": 1450
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 10,
  "end": 1450
}
```
