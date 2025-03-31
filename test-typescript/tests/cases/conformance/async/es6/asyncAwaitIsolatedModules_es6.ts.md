__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 918,
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
      "start": 445,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 452,
            "name": "f10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 455,
            "end": 468,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
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
      "start": 470,
      "end": 495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 494,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 477,
            "name": "f11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 480,
            "end": 494,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 492,
              "end": 494,
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
      "start": 496,
      "end": 538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 503,
            "name": "f12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 506,
            "end": 537,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 535,
              "end": 537,
              "name": "mp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 514,
              "end": 531,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 516,
                "end": 531,
                "typeName": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 523,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 523,
                  "end": 531,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 524,
                      "end": 530
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
      "start": 539,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 546,
            "name": "f13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 549,
            "end": 581,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 580,
              "end": 581,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 557,
              "end": 576,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 559,
                "end": 576,
                "typeName": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 568,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 568,
                  "end": 576,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 569,
                      "end": 575
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
      "start": 584,
      "end": 678,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 677,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 592,
            "end": 677,
            "properties": [
              {
                "type": "Property",
                "start": 595,
                "end": 609,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 603,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 603,
                  "end": 609,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 606,
                    "end": 609,
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
                "start": 612,
                "end": 641,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 620,
                  "name": "m2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 620,
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
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 637,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 637,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 631,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 631,
                        "end": 637,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 632,
                            "end": 636
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
                "start": 644,
                "end": 675,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 652,
                  "name": "m3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 652,
                  "end": 675,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 672,
                    "end": 675,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 654,
                    "end": 671,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 656,
                      "end": 671,
                      "typeName": {
                        "type": "Identifier",
                        "start": 656,
                        "end": 665,
                        "name": "MyPromise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 665,
                        "end": 671,
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 666,
                            "end": 670
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
      "start": 680,
      "end": 872,
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 687,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 688,
        "end": 872,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 691,
            "end": 705,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 697,
              "end": 699,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 699,
              "end": 705,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 702,
                "end": 705,
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
            "start": 707,
            "end": 736,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 713,
              "end": 715,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 715,
              "end": 736,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 733,
                "end": 736,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 717,
                "end": 732,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 719,
                  "end": 732,
                  "typeName": {
                    "type": "Identifier",
                    "start": 719,
                    "end": 726,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 726,
                    "end": 732,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 727,
                        "end": 731
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
            "start": 738,
            "end": 769,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 744,
              "end": 746,
              "name": "m3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 746,
              "end": 769,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 766,
                "end": 769,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 748,
                "end": 765,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 750,
                  "end": 765,
                  "typeName": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 759,
                    "name": "MyPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 759,
                    "end": 765,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 760,
                        "end": 764
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
            "start": 771,
            "end": 792,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 784,
              "end": 786,
              "name": "m4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 786,
              "end": 792,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 789,
                "end": 792,
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
            "start": 794,
            "end": 830,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 807,
              "end": 809,
              "name": "m5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 809,
              "end": 830,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 827,
                "end": 830,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 811,
                "end": 826,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 813,
                  "end": 826,
                  "typeName": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 820,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 820,
                    "end": 826,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 821,
                        "end": 825
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
            "start": 832,
            "end": 870,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 845,
              "end": 847,
              "name": "m6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 847,
              "end": 870,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 867,
                "end": 870,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 849,
                "end": 866,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 851,
                  "end": 866,
                  "typeName": {
                    "type": "Identifier",
                    "start": 851,
                    "end": 860,
                    "name": "MyPromise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 860,
                    "end": 866,
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 861,
                        "end": 865
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
      "start": 874,
      "end": 918,
      "id": {
        "type": "Identifier",
        "start": 881,
        "end": 882,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 883,
        "end": 918,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 886,
            "end": 916,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 893,
              "end": 916,
              "id": {
                "type": "Identifier",
                "start": 908,
                "end": 910,
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
                "start": 913,
                "end": 916,
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
