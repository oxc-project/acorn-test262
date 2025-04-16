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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "name": "MyPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 20,
        "end": 30,
        "typeName": {
          "type": "Identifier",
          "start": 20,
          "end": 27,
          "name": "Promise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 27,
          "end": 30,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 32,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 69,
            "name": "MyPromise",
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
                  "name": "Promise",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 101,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 93,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 103,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 136,
            "name": "mp",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 128,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 139,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 156,
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
        "start": 159,
        "end": 162,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 180,
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
        "start": 198,
        "end": 201,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 182,
        "end": 197,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 184,
          "end": 197,
          "typeName": {
            "type": "Identifier",
            "start": 184,
            "end": 191,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 219,
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
        "start": 239,
        "end": 242,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 221,
        "end": 238,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 223,
          "end": 238,
          "typeName": {
            "type": "Identifier",
            "start": 223,
            "end": 232,
            "name": "MyPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "name": "f4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 253,
            "end": 273,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 270,
              "end": 273,
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
      "start": 274,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 280,
            "name": "f5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 283,
            "end": 318,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 315,
              "end": 318,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 301,
                "end": 314,
                "typeName": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 308,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 319,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 365,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 325,
            "name": "f6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 328,
            "end": 365,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 362,
              "end": 365,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 361,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 346,
                "end": 361,
                "typeName": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 355,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 367,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 373,
            "name": "f7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 376,
            "end": 391,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 388,
              "end": 391,
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
      "start": 393,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 399,
            "name": "f8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 402,
            "end": 432,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 429,
              "end": 432,
              "body": []
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 410,
              "end": 425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 412,
                "end": 425,
                "typeName": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 419,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 434,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 475,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 440,
            "name": "f9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 443,
            "end": 475,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 472,
              "end": 475,
              "body": []
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 468,
                "typeName": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 462,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 477,
      "end": 501,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 500,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 484,
            "name": "f10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 487,
            "end": 500,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
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
      "start": 502,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 506,
            "end": 509,
            "name": "f11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 512,
            "end": 526,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 524,
              "end": 526,
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
      "start": 528,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 532,
          "end": 569,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 535,
            "name": "f12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 538,
            "end": 569,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 567,
              "end": 569,
              "name": "mp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 546,
              "end": 563,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 548,
                "end": 563,
                "typeName": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 555,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 571,
      "end": 614,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 613,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "name": "f13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 581,
            "end": 613,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 589,
              "end": 608,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 591,
                "end": 608,
                "typeName": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 600,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 616,
      "end": 710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 709,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 621,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 633,
                  "end": 635,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 635,
                  "end": 641,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 638,
                    "end": 641,
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
                "start": 644,
                "end": 673,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 652,
                  "name": "m2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 652,
                  "end": 673,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 670,
                    "end": 673,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 654,
                    "end": 669,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 656,
                      "end": 669,
                      "typeName": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 663,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 676,
                "end": 707,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 684,
                  "name": "m3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 684,
                  "end": 707,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 704,
                    "end": 707,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 686,
                    "end": 703,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 688,
                      "end": 703,
                      "typeName": {
                        "type": "Identifier",
                        "start": 688,
                        "end": 697,
                        "name": "MyPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
      "start": 712,
      "end": 904,
      "id": {
        "type": "Identifier",
        "start": 718,
        "end": 719,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 720,
        "end": 904,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 723,
            "end": 737,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 729,
              "end": 731,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 731,
              "end": 737,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 734,
                "end": 737,
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
            "start": 739,
            "end": 768,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 747,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 747,
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
                "start": 749,
                "end": 764,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 751,
                  "end": 764,
                  "typeName": {
                    "type": "Identifier",
                    "start": 751,
                    "end": 758,
                    "name": "Promise",
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
            "end": 801,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 776,
              "end": 778,
              "name": "m3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 778,
              "end": 801,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 798,
                "end": 801,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 780,
                "end": 797,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 782,
                  "end": 797,
                  "typeName": {
                    "type": "Identifier",
                    "start": 782,
                    "end": 791,
                    "name": "MyPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
            "start": 803,
            "end": 824,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 816,
              "end": 818,
              "name": "m4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 818,
              "end": 824,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 821,
                "end": 824,
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
            "start": 826,
            "end": 862,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 839,
              "end": 841,
              "name": "m5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 841,
              "end": 862,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 859,
                "end": 862,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 843,
                "end": 858,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 845,
                  "end": 858,
                  "typeName": {
                    "type": "Identifier",
                    "start": 845,
                    "end": 852,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
            "start": 864,
            "end": 902,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 877,
              "end": 879,
              "name": "m6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 879,
              "end": 902,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 899,
                "end": 902,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 881,
                "end": 898,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 883,
                  "end": 898,
                  "typeName": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 892,
                    "name": "MyPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
      "start": 906,
      "end": 950,
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 914,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 915,
        "end": 950,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 918,
            "end": 948,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 925,
              "end": 948,
              "id": {
                "type": "Identifier",
                "start": 940,
                "end": 942,
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
                "start": 945,
                "end": 948,
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 952,
      "end": 1033,
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 970,
        "name": "f14",
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
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 996,
                    "end": 1003,
                    "argument": {
                      "type": "Literal",
                      "start": 1002,
                      "end": 1003,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "BreakStatement",
                  "start": 1013,
                  "end": 1025,
                  "label": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1024,
                    "name": "block",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "label": {
              "type": "Identifier",
              "start": 979,
              "end": 984,
              "name": "block",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
