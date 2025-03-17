__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 855,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 43,
        "name": "Banana",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 101,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 99,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 75,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 75,
              "end": 99,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 76,
                  "end": 85,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 79,
                      "end": 85
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 98,
                  "name": "property",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 97,
                      "end": 98,
                      "typeName": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 98,
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 133,
        "name": "fruitFactory1",
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
          "start": 142,
          "end": 179,
          "name": "Fruit",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 179,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 149,
              "end": 179,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 154,
                  "end": 168,
                  "argument": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 161,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 161,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 163,
                      "end": 168,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 163,
                        "end": 166
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 170,
                "end": 179,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 173,
                  "end": 179,
                  "typeName": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 179,
                    "name": "TFruit",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 133,
        "end": 141,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 140,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 140,
              "name": "TFruit",
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
        "start": 180,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 182,
          "end": 188,
          "typeName": {
            "type": "Identifier",
            "start": 182,
            "end": 188,
            "name": "TFruit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 202,
            "name": "banana1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 205,
            "end": 226,
            "callee": {
              "type": "Identifier",
              "start": 205,
              "end": 218,
              "name": "fruitFactory1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 219,
                "end": 225,
                "name": "Banana",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    {
      "type": "TSDeclareFunction",
      "start": 243,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 273,
        "name": "fruitFactory2",
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
          "start": 282,
          "end": 330,
          "name": "Fruit",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 287,
            "end": 330,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 289,
              "end": 330,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 294,
                  "end": 303,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 295,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 297,
                      "end": 303
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 305,
                  "end": 319,
                  "argument": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 312,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 312,
                    "end": 319,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 314,
                      "end": 319,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 314,
                        "end": 317
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 321,
                "end": 330,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 324,
                  "end": 330,
                  "typeName": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 330,
                    "name": "TFruit",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 273,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 274,
            "end": 280,
            "name": {
              "type": "Identifier",
              "start": 274,
              "end": 280,
              "name": "TFruit",
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
        "start": 331,
        "end": 339,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 333,
          "end": 339,
          "typeName": {
            "type": "Identifier",
            "start": 333,
            "end": 339,
            "name": "TFruit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 346,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 346,
            "end": 353,
            "name": "banana2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 356,
            "end": 377,
            "callee": {
              "type": "Identifier",
              "start": 356,
              "end": 369,
              "name": "fruitFactory2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 376,
                "name": "Banana",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    {
      "type": "TSDeclareFunction",
      "start": 394,
      "end": 500,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 424,
        "name": "fruitFactory3",
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
          "start": 433,
          "end": 491,
          "name": "Fruit",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 491,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 440,
              "end": 491,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 445,
                  "end": 454,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 446,
                    "end": 454,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 448,
                      "end": 454
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 456,
                  "end": 464,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 457,
                    "end": 464,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 459,
                      "end": 464,
                      "literal": {
                        "type": "Literal",
                        "start": 459,
                        "end": 464,
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 466,
                  "end": 480,
                  "argument": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 473,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 473,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 475,
                      "end": 480,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 475,
                        "end": 478
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 482,
                "end": 491,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 485,
                  "end": 491,
                  "typeName": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 491,
                    "name": "TFruit",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 424,
        "end": 432,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 425,
            "end": 431,
            "name": {
              "type": "Identifier",
              "start": 425,
              "end": 431,
              "name": "TFruit",
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
        "start": 492,
        "end": 500,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 494,
          "end": 500,
          "typeName": {
            "type": "Identifier",
            "start": 494,
            "end": 500,
            "name": "TFruit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 538,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 538,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 514,
            "name": "banana3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 517,
            "end": 538,
            "callee": {
              "type": "Identifier",
              "start": 517,
              "end": 530,
              "name": "fruitFactory3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 531,
                "end": 537,
                "name": "Banana",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    {
      "type": "TSDeclareFunction",
      "start": 557,
      "end": 655,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 587,
        "name": "fruitFactory4",
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
          "start": 596,
          "end": 646,
          "name": "Fruit",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 601,
            "end": 646,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 603,
              "end": 646,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 608,
                  "end": 617,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 609,
                    "end": 617,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 611,
                      "end": 617
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 619,
                  "end": 635,
                  "argument": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 626,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 626,
                    "end": 635,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 628,
                      "end": 635,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 628,
                        "end": 633,
                        "literal": {
                          "type": "Literal",
                          "start": 628,
                          "end": 633,
                          "value": "foo",
                          "raw": "\"foo\""
                        }
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 637,
                "end": 646,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 640,
                  "end": 646,
                  "typeName": {
                    "type": "Identifier",
                    "start": 640,
                    "end": 646,
                    "name": "TFruit",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 587,
        "end": 595,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 588,
            "end": 594,
            "name": {
              "type": "Identifier",
              "start": 588,
              "end": 594,
              "name": "TFruit",
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
        "start": 647,
        "end": 655,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 649,
          "end": 655,
          "typeName": {
            "type": "Identifier",
            "start": 649,
            "end": 655,
            "name": "TFruit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 656,
      "end": 693,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 693,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 669,
            "name": "banana4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 672,
            "end": 693,
            "callee": {
              "type": "Identifier",
              "start": 672,
              "end": 685,
              "name": "fruitFactory4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 686,
                "end": 692,
                "name": "Banana",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    {
      "type": "TSDeclareFunction",
      "start": 712,
      "end": 799,
      "id": {
        "type": "Identifier",
        "start": 729,
        "end": 742,
        "name": "fruitFactory5",
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
          "start": 751,
          "end": 790,
          "name": "Fruit",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 756,
            "end": 790,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 758,
              "end": 790,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 763,
                  "end": 779,
                  "argument": {
                    "type": "Identifier",
                    "start": 766,
                    "end": 770,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 770,
                    "end": 779,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 772,
                      "end": 779,
                      "elementType": {
                        "type": "TSLiteralType",
                        "start": 772,
                        "end": 777,
                        "literal": {
                          "type": "Literal",
                          "start": 772,
                          "end": 777,
                          "value": "foo",
                          "raw": "\"foo\""
                        }
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 781,
                "end": 790,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 784,
                  "end": 790,
                  "typeName": {
                    "type": "Identifier",
                    "start": 784,
                    "end": 790,
                    "name": "TFruit",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 742,
        "end": 750,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 743,
            "end": 749,
            "name": {
              "type": "Identifier",
              "start": 743,
              "end": 749,
              "name": "TFruit",
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
        "start": 791,
        "end": 799,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 793,
          "end": 799,
          "typeName": {
            "type": "Identifier",
            "start": 793,
            "end": 799,
            "name": "TFruit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 800,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 806,
          "end": 837,
          "id": {
            "type": "Identifier",
            "start": 806,
            "end": 813,
            "name": "banana5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 816,
            "end": 837,
            "callee": {
              "type": "Identifier",
              "start": 816,
              "end": 829,
              "name": "fruitFactory5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 830,
                "end": 836,
                "name": "Banana",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
