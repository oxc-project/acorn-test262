__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 917,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 35,
        "raw": "\"missing\"",
        "value": "missing"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 68,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 68,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 60,
                  "end": 68,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 60,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 103,
            "decorators": [],
            "name": "mp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 103,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 95,
                  "end": 103,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 96,
                      "end": 102
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 95,
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 129,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 123,
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 130,
      "end": 168,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 168,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 147,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 149,
        "end": 164,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 151,
          "end": 164,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 158,
            "end": 164,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 159,
                "end": 163
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 151,
            "end": 158,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 209,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 209,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 186,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 188,
        "end": 205,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 190,
          "end": 205,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 199,
            "end": 205,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 200,
                "end": 204
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 240,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 217,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 220,
            "end": 240,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 237,
              "end": 240,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 247,
            "decorators": [],
            "name": "f5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 250,
            "end": 285,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 282,
              "end": 285,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 281,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 275,
                  "end": 281,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 276,
                      "end": 280
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 275,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 332,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 292,
            "decorators": [],
            "name": "f6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 295,
            "end": 332,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 329,
              "end": 332,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 313,
                "end": 328,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 322,
                  "end": 328,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 323,
                      "end": 327
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 322,
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 358,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 343,
            "end": 358,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 355,
              "end": 358,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 366,
            "decorators": [],
            "name": "f8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 369,
            "end": 399,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 396,
              "end": 399,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 392,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 386,
                  "end": 392,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 387,
                      "end": 391
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 386,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 442,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 407,
            "decorators": [],
            "name": "f9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 410,
            "end": 442,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 439,
              "end": 442,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 435,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 420,
                "end": 435,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 429,
                  "end": 435,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 430,
                      "end": 434
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 429,
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 467,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 451,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 454,
            "end": 467,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 493,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 476,
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 479,
            "end": 493,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 491,
              "end": 493,
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 495,
      "end": 537,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 499,
          "end": 536,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 502,
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 505,
            "end": 536,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 534,
              "end": 536,
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 515,
                "end": 530,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 522,
                  "end": 530,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 523,
                      "end": 529
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 522,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 538,
      "end": 581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 580,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 545,
            "decorators": [],
            "name": "f13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 548,
            "end": 580,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 579,
              "end": 580,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 556,
              "end": 575,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 558,
                "end": 575,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 567,
                  "end": 575,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 568,
                      "end": 574
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 567,
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 677,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 676,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 588,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 591,
            "end": 676,
            "properties": [
              {
                "type": "Property",
                "start": 594,
                "end": 608,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 600,
                  "end": 602,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 602,
                  "end": 608,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 605,
                    "end": 608,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 611,
                "end": 640,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 619,
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 619,
                  "end": 640,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 637,
                    "end": 640,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 621,
                    "end": 636,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 623,
                      "end": 636,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 630,
                        "end": 636,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 631,
                            "end": 635
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 623,
                        "end": 630,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 643,
                "end": 674,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 651,
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 651,
                  "end": 674,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 671,
                    "end": 674,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 653,
                    "end": 670,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 655,
                      "end": 670,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 664,
                        "end": 670,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 665,
                            "end": 669
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 664,
                        "decorators": [],
                        "name": "MyPromise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 679,
      "end": 871,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 687,
        "end": 871,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 690,
            "end": 704,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 698,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 698,
              "end": 704,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 701,
                "end": 704,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 706,
            "end": 735,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 714,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 714,
              "end": 735,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 732,
                "end": 735,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 716,
                "end": 731,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 718,
                  "end": 731,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 725,
                    "end": 731,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 726,
                        "end": 730
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 718,
                    "end": 725,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 737,
            "end": 768,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 745,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 745,
              "end": 768,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 765,
                "end": 768,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 747,
                "end": 764,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 749,
                  "end": 764,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 758,
                    "end": 764,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 759,
                        "end": 763
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 749,
                    "end": 758,
                    "decorators": [],
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 770,
            "end": 791,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 783,
              "end": 785,
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 785,
              "end": 791,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 788,
                "end": 791,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 793,
            "end": 829,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 806,
              "end": 808,
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 808,
              "end": 829,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 826,
                "end": 829,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 810,
                "end": 825,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 812,
                  "end": 825,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 819,
                    "end": 825,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 820,
                        "end": 824
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 812,
                    "end": 819,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 831,
            "end": 869,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 844,
              "end": 846,
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 846,
              "end": 869,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 866,
                "end": 869,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 848,
                "end": 865,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 850,
                  "end": 865,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 859,
                    "end": 865,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 860,
                        "end": 864
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 850,
                    "end": 859,
                    "decorators": [],
                    "name": "MyPromise",
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
        "start": 685,
        "end": 686,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 873,
      "end": 917,
      "body": {
        "type": "TSModuleBlock",
        "start": 882,
        "end": 917,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 885,
            "end": 915,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 892,
              "end": 915,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 912,
                "end": 915,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 907,
                "end": 909,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 880,
        "end": 881,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
