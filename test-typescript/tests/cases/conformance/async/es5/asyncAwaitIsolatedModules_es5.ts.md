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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "MyPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "MyPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 35,
        "value": "missing",
        "raw": "\"missing\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 68,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 60,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 103,
            "name": "mp",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 95,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 123,
        "name": "f0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 130,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 147,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 168,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 149,
        "end": 164,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 151,
          "end": 164,
          "typeName": {
            "type": "Identifier",
            "start": 151,
            "end": 158,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 186,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 209,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 188,
        "end": 205,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 190,
          "end": 205,
          "typeName": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "name": "MyPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 217,
            "name": "f4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 220,
            "end": 240,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 237,
              "end": 240,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 247,
            "name": "f5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 250,
            "end": 285,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 282,
              "end": 285,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 275,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 292,
            "name": "f6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 295,
            "end": 332,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 329,
              "end": 332,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 313,
                "end": 328,
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 322,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "name": "f7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 343,
            "end": 358,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 355,
              "end": 358,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 366,
            "name": "f8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 369,
            "end": 399,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 396,
              "end": 399,
              "body": []
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 392,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 386,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 407,
            "name": "f9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 410,
            "end": 442,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 439,
              "end": 442,
              "body": []
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 435,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 420,
                "end": 435,
                "typeName": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 429,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 451,
            "name": "f10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 454,
            "end": 467,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 476,
            "name": "f11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 479,
            "end": 493,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 491,
              "end": 493,
              "name": "mp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 499,
            "end": 502,
            "name": "f12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 505,
            "end": 536,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 534,
              "end": 536,
              "name": "mp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 515,
                "end": 530,
                "typeName": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 522,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 545,
            "name": "f13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 548,
            "end": 580,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 579,
              "end": 580,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 556,
              "end": 575,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 558,
                "end": 575,
                "typeName": {
                  "type": "Identifier",
                  "start": 558,
                  "end": 567,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 588,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 600,
                  "end": 602,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 602,
                  "end": 608,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 605,
                    "end": 608,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 611,
                "end": 640,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 619,
                  "name": "m2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 619,
                  "end": 640,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 637,
                    "end": 640,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 621,
                    "end": 636,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 623,
                      "end": 636,
                      "typeName": {
                        "type": "Identifier",
                        "start": 623,
                        "end": 630,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 643,
                "end": 674,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 651,
                  "name": "m3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 651,
                  "end": 674,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 671,
                    "end": 674,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 653,
                    "end": 670,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 655,
                      "end": 670,
                      "typeName": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 664,
                        "name": "MyPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 679,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 685,
        "end": 686,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 687,
        "end": 871,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 690,
            "end": 704,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 698,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 698,
              "end": 704,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 701,
                "end": 704,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 706,
            "end": 735,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 714,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 714,
              "end": 735,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 732,
                "end": 735,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 716,
                "end": 731,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 718,
                  "end": 731,
                  "typeName": {
                    "type": "Identifier",
                    "start": 718,
                    "end": 725,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 737,
            "end": 768,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 743,
              "end": 745,
              "name": "m3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 745,
              "end": 768,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 765,
                "end": 768,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 747,
                "end": 764,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 749,
                  "end": 764,
                  "typeName": {
                    "type": "Identifier",
                    "start": 749,
                    "end": 758,
                    "name": "MyPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 770,
            "end": 791,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 783,
              "end": 785,
              "name": "m4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 785,
              "end": 791,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 788,
                "end": 791,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 793,
            "end": 829,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 806,
              "end": 808,
              "name": "m5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 808,
              "end": 829,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 826,
                "end": 829,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 810,
                "end": 825,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 812,
                  "end": 825,
                  "typeName": {
                    "type": "Identifier",
                    "start": 812,
                    "end": 819,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 831,
            "end": 869,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 844,
              "end": 846,
              "name": "m6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 846,
              "end": 869,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 866,
                "end": 869,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 848,
                "end": 865,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 850,
                  "end": 865,
                  "typeName": {
                    "type": "Identifier",
                    "start": 850,
                    "end": 859,
                    "name": "MyPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 873,
      "end": 917,
      "id": {
        "type": "Identifier",
        "start": 880,
        "end": 881,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 882,
        "end": 917,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 885,
            "end": 915,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 892,
              "end": 915,
              "id": {
                "type": "Identifier",
                "start": 907,
                "end": 909,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 912,
                "end": 915,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
