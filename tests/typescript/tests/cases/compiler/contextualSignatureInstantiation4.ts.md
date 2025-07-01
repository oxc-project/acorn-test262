__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Banana",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 60
          }
        ],
        "start": 43,
        "end": 61
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 75
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 79,
                      "end": 85
                    },
                    "start": 77,
                    "end": 85
                  },
                  "start": 76,
                  "end": 85
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "property",
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
                        "start": 97,
                        "end": 98
                      },
                      "typeArguments": null,
                      "start": 97,
                      "end": 98
                    },
                    "start": 95,
                    "end": 98
                  },
                  "start": 87,
                  "end": 98
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 75,
              "end": 99
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 64,
            "end": 99
          }
        ],
        "start": 62,
        "end": 101
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 101
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory1",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 133
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 140
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 134,
            "end": 140
          }
        ],
        "start": 133,
        "end": 141
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 161
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 163,
                        "end": 166
                      },
                      "start": 163,
                      "end": 168
                    },
                    "start": 161,
                    "end": 168
                  },
                  "value": null,
                  "start": 154,
                  "end": 168
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 179
                  },
                  "typeArguments": null,
                  "start": 173,
                  "end": 179
                },
                "start": 170,
                "end": 179
              },
              "start": 149,
              "end": 179
            },
            "start": 147,
            "end": 179
          },
          "start": 142,
          "end": 179
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "typeArguments": null,
          "start": 182,
          "end": 188
        },
        "start": 180,
        "end": 188
      },
      "body": null,
      "expression": false,
      "start": 103,
      "end": 188
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
            "name": "banana1",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 202
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory1",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 225
              }
            ],
            "optional": false,
            "start": 205,
            "end": 226
          },
          "definite": false,
          "start": 195,
          "end": 226
        }
      ],
      "declare": false,
      "start": 189,
      "end": 226
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory2",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 273
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 280
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 274,
            "end": 280
          }
        ],
        "start": 273,
        "end": 281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 297,
                      "end": 303
                    },
                    "start": 295,
                    "end": 303
                  },
                  "start": 294,
                  "end": 303
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 312
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 314,
                        "end": 317
                      },
                      "start": 314,
                      "end": 319
                    },
                    "start": 312,
                    "end": 319
                  },
                  "value": null,
                  "start": 305,
                  "end": 319
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 330
                  },
                  "typeArguments": null,
                  "start": 324,
                  "end": 330
                },
                "start": 321,
                "end": 330
              },
              "start": 289,
              "end": 330
            },
            "start": 287,
            "end": 330
          },
          "start": 282,
          "end": 330
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 339
          },
          "typeArguments": null,
          "start": 333,
          "end": 339
        },
        "start": 331,
        "end": 339
      },
      "body": null,
      "expression": false,
      "start": 243,
      "end": 339
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
            "name": "banana2",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 353
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory2",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 369
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 376
              }
            ],
            "optional": false,
            "start": 356,
            "end": 377
          },
          "definite": false,
          "start": 346,
          "end": 377
        }
      ],
      "declare": false,
      "start": 340,
      "end": 377
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory3",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 424
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 431
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 425,
            "end": 431
          }
        ],
        "start": 424,
        "end": 432
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 448,
                      "end": 454
                    },
                    "start": 446,
                    "end": 454
                  },
                  "start": 445,
                  "end": 454
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 459,
                        "end": 464
                      },
                      "start": 459,
                      "end": 464
                    },
                    "start": 457,
                    "end": 464
                  },
                  "start": 456,
                  "end": 464
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 473
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 475,
                        "end": 478
                      },
                      "start": 475,
                      "end": 480
                    },
                    "start": 473,
                    "end": 480
                  },
                  "value": null,
                  "start": 466,
                  "end": 480
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 491
                  },
                  "typeArguments": null,
                  "start": 485,
                  "end": 491
                },
                "start": 482,
                "end": 491
              },
              "start": 440,
              "end": 491
            },
            "start": 438,
            "end": 491
          },
          "start": 433,
          "end": 491
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 500
          },
          "typeArguments": null,
          "start": 494,
          "end": 500
        },
        "start": 492,
        "end": 500
      },
      "body": null,
      "expression": false,
      "start": 394,
      "end": 500
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
            "name": "banana3",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 514
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory3",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 530
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 537
              }
            ],
            "optional": false,
            "start": 517,
            "end": 538
          },
          "definite": false,
          "start": 507,
          "end": 538
        }
      ],
      "declare": false,
      "start": 501,
      "end": 538
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory4",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 587
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 594
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 588,
            "end": 594
          }
        ],
        "start": 587,
        "end": 595
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 611,
                      "end": 617
                    },
                    "start": 609,
                    "end": 617
                  },
                  "start": 608,
                  "end": 617
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 626
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 628,
                          "end": 633
                        },
                        "start": 628,
                        "end": 633
                      },
                      "start": 628,
                      "end": 635
                    },
                    "start": 626,
                    "end": 635
                  },
                  "value": null,
                  "start": 619,
                  "end": 635
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 640,
                    "end": 646
                  },
                  "typeArguments": null,
                  "start": 640,
                  "end": 646
                },
                "start": 637,
                "end": 646
              },
              "start": 603,
              "end": 646
            },
            "start": 601,
            "end": 646
          },
          "start": 596,
          "end": 646
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 655
          },
          "typeArguments": null,
          "start": 649,
          "end": 655
        },
        "start": 647,
        "end": 655
      },
      "body": null,
      "expression": false,
      "start": 557,
      "end": 655
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
            "name": "banana4",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 669
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory4",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 685
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 692
              }
            ],
            "optional": false,
            "start": 672,
            "end": 693
          },
          "definite": false,
          "start": 662,
          "end": 693
        }
      ],
      "declare": false,
      "start": 656,
      "end": 693
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fruitFactory5",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 742
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFruit",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 749
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 743,
            "end": 749
          }
        ],
        "start": 742,
        "end": 750
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Fruit",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 766,
                    "end": 770
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 772,
                          "end": 777
                        },
                        "start": 772,
                        "end": 777
                      },
                      "start": 772,
                      "end": 779
                    },
                    "start": 770,
                    "end": 779
                  },
                  "value": null,
                  "start": 763,
                  "end": 779
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFruit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 790
                  },
                  "typeArguments": null,
                  "start": 784,
                  "end": 790
                },
                "start": 781,
                "end": 790
              },
              "start": 758,
              "end": 790
            },
            "start": 756,
            "end": 790
          },
          "start": 751,
          "end": 790
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFruit",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 799
          },
          "typeArguments": null,
          "start": 793,
          "end": 799
        },
        "start": 791,
        "end": 799
      },
      "body": null,
      "expression": false,
      "start": 712,
      "end": 799
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
            "name": "banana5",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 813
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fruitFactory5",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 829
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Banana",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 836
              }
            ],
            "optional": false,
            "start": 816,
            "end": 837
          },
          "definite": false,
          "start": 806,
          "end": 837
        }
      ],
      "declare": false,
      "start": 800,
      "end": 837
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 854
}
```
