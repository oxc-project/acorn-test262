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
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 69,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 68,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 60,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 104,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 103,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 95,
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 130,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 147,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 168,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 186,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "MyPromise",
            "optional": false,
            "typeAnnotation": null
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
      },
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 209,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 240,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 240,
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
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 237,
              "end": 240,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 285,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 285,
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
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
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
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
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
            },
            "body": {
              "type": "BlockStatement",
              "start": 282,
              "end": 285,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 332,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 332,
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
            "id": null,
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
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
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null
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
            },
            "body": {
              "type": "BlockStatement",
              "start": 329,
              "end": 332,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 359,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 358,
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
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 355,
              "end": 358,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 400,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 399,
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
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
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
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
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
            },
            "body": {
              "type": "BlockStatement",
              "start": 396,
              "end": 399,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 443,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 442,
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
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
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
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null
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
            },
            "body": {
              "type": "BlockStatement",
              "start": 439,
              "end": 442,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 445,
      "end": 469,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 452,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 455,
            "end": 468,
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 470,
      "end": 495,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 494,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 477,
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 480,
            "end": 494,
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 492,
              "end": 494,
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 496,
      "end": 538,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 503,
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 506,
            "end": 537,
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
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
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
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
            },
            "body": {
              "type": "Identifier",
              "start": 535,
              "end": 537,
              "decorators": [],
              "name": "mp",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 539,
      "end": 582,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 546,
            "decorators": [],
            "name": "f13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 549,
            "end": 581,
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
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
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false,
                  "typeAnnotation": null
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
            },
            "body": {
              "type": "Identifier",
              "start": 580,
              "end": 581,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 678,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 677,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 603,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 603,
                  "end": 609,
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 606,
                    "end": 609,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 612,
                "end": 641,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 620,
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 620,
                  "end": 641,
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
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
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
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
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 638,
                    "end": 641,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 644,
                "end": 675,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 652,
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 652,
                  "end": 675,
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
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
                        "decorators": [],
                        "name": "MyPromise",
                        "optional": false,
                        "typeAnnotation": null
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
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 672,
                    "end": 675,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 680,
      "end": 872,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 687,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 688,
        "end": 872,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 691,
            "end": 705,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 697,
              "end": 699,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 699,
              "end": 705,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 702,
                "end": 705,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 707,
            "end": 736,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 713,
              "end": 715,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 715,
              "end": 736,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 733,
                "end": 736,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 738,
            "end": 769,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 744,
              "end": 746,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 746,
              "end": 769,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 766,
                "end": 769,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 771,
            "end": 792,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 784,
              "end": 786,
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 786,
              "end": 792,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 789,
                "end": 792,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 794,
            "end": 830,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 807,
              "end": 809,
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 809,
              "end": 830,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 827,
                "end": 830,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 832,
            "end": 870,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 845,
              "end": 847,
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 847,
              "end": 870,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "MyPromise",
                    "optional": false,
                    "typeAnnotation": null
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 867,
                "end": 870,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 874,
      "end": 918,
      "id": {
        "type": "Identifier",
        "start": 881,
        "end": 882,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 913,
                "end": 916,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
