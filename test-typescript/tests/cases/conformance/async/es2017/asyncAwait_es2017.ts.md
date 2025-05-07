__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1033,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "MyPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 20,
        "end": 30,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 27,
          "end": 30,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
          "start": 20,
          "end": 27,
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "start": 32,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 69,
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 55,
                "end": 69,
                "exprName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 69,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 71,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 101,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 101,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 93,
                  "end": 101,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 94,
                      "end": 100
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 93,
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
      "start": 103,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 136,
            "decorators": [],
            "name": "mp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 136,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 128,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 129,
                      "end": 135
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 128,
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
      "start": 139,
      "end": 162,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 159,
        "end": 162,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 156,
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
      "start": 163,
      "end": 201,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 198,
        "end": 201,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 180,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 182,
        "end": 197,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 184,
          "end": 197,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 191,
            "end": 197,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 192,
                "end": 196
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 184,
            "end": 191,
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
      "start": 202,
      "end": 242,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 239,
        "end": 242,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 219,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 221,
        "end": 238,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 223,
          "end": 238,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 232,
            "end": 238,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 233,
                "end": 237
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 223,
            "end": 232,
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
      "start": 244,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 253,
            "end": 273,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 270,
              "end": 273,
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
      "start": 274,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 280,
            "decorators": [],
            "name": "f5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 283,
            "end": 318,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 315,
              "end": 318,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 301,
                "end": 314,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 308,
                  "end": 314,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 309,
                      "end": 313
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 308,
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
      "start": 319,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 365,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 325,
            "decorators": [],
            "name": "f6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 328,
            "end": 365,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 362,
              "end": 365,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 361,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 346,
                "end": 361,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 355,
                  "end": 361,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 356,
                      "end": 360
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 355,
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
      "start": 367,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 391,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 373,
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 376,
            "end": 391,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 388,
              "end": 391,
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
      "start": 393,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 399,
            "decorators": [],
            "name": "f8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 402,
            "end": 432,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 429,
              "end": 432,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 410,
              "end": 425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 412,
                "end": 425,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 419,
                  "end": 425,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 420,
                      "end": 424
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 419,
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
      "start": 434,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 475,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 440,
            "decorators": [],
            "name": "f9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 443,
            "end": 475,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 472,
              "end": 475,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 468,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 462,
                  "end": 468,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 463,
                      "end": 467
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 462,
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
      "start": 477,
      "end": 501,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 500,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 484,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 487,
            "end": 500,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
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
      "start": 502,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 526,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 506,
            "end": 509,
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 512,
            "end": 526,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 524,
              "end": 526,
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
      "start": 528,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 532,
          "end": 569,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 535,
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 538,
            "end": 569,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 567,
              "end": 569,
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
              "start": 546,
              "end": 563,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 548,
                "end": 563,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 555,
                  "end": 563,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 556,
                      "end": 562
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 555,
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
      "start": 571,
      "end": 614,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 613,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "decorators": [],
            "name": "f13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 581,
            "end": 613,
            "async": true,
            "body": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
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
              "start": 589,
              "end": 608,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 591,
                "end": 608,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 600,
                  "end": 608,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 601,
                      "end": 607
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 600,
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
      "start": 616,
      "end": 710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 709,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 624,
            "end": 709,
            "properties": [
              {
                "type": "Property",
                "start": 627,
                "end": 641,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 633,
                  "end": 635,
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
                  "start": 635,
                  "end": 641,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 638,
                    "end": 641,
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
                "start": 644,
                "end": 673,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 652,
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
                  "start": 652,
                  "end": 673,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 670,
                    "end": 673,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 654,
                    "end": 669,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 656,
                      "end": 669,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 663,
                        "end": 669,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 664,
                            "end": 668
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 663,
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
                "start": 676,
                "end": 707,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 684,
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
                  "start": 684,
                  "end": 707,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 704,
                    "end": 707,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 686,
                    "end": 703,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 688,
                      "end": 703,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 697,
                        "end": 703,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 698,
                            "end": 702
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 688,
                        "end": 697,
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
      "start": 712,
      "end": 904,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 720,
        "end": 904,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 723,
            "end": 737,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 729,
              "end": 731,
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
              "start": 731,
              "end": 737,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 734,
                "end": 737,
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
            "start": 739,
            "end": 768,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 747,
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
              "start": 747,
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
                "start": 749,
                "end": 764,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 751,
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
                    "start": 751,
                    "end": 758,
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
            "start": 770,
            "end": 801,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 776,
              "end": 778,
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
              "start": 778,
              "end": 801,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 798,
                "end": 801,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 780,
                "end": 797,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 782,
                  "end": 797,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 791,
                    "end": 797,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 792,
                        "end": 796
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 782,
                    "end": 791,
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
            "start": 803,
            "end": 824,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 816,
              "end": 818,
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
              "start": 818,
              "end": 824,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 821,
                "end": 824,
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
            "start": 826,
            "end": 862,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 839,
              "end": 841,
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
              "start": 841,
              "end": 862,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 859,
                "end": 862,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 843,
                "end": 858,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 845,
                  "end": 858,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 852,
                    "end": 858,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 853,
                        "end": 857
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 845,
                    "end": 852,
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
            "start": 864,
            "end": 902,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 877,
              "end": 879,
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
              "start": 879,
              "end": 902,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 899,
                "end": 902,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 881,
                "end": 898,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 883,
                  "end": 898,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 892,
                    "end": 898,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 893,
                        "end": 897
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 892,
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
        "start": 718,
        "end": 719,
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
      "start": 906,
      "end": 950,
      "body": {
        "type": "TSModuleBlock",
        "start": 915,
        "end": 950,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 918,
            "end": 948,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 925,
              "end": 948,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 945,
                "end": 948,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 940,
                "end": 942,
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
        "start": 913,
        "end": 914,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 952,
      "end": 1033,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 973,
        "end": 1033,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 979,
            "end": 1031,
            "body": {
              "type": "BlockStatement",
              "start": 986,
              "end": 1031,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 996,
                  "end": 1004,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 996,
                    "end": 1003,
                    "argument": {
                      "type": "Literal",
                      "start": 1002,
                      "end": 1003,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 1013,
                  "end": 1025,
                  "label": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1024,
                    "decorators": [],
                    "name": "block",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "label": {
              "type": "Identifier",
              "start": 979,
              "end": 984,
              "decorators": [],
              "name": "block",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 970,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
