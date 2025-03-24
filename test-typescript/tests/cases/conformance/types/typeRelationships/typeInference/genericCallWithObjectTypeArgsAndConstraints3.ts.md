__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 88,
  "end": 840,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 117,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 117,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 115,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 118,
      "end": 163,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 151,
            "end": 161,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 131,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 140,
        "end": 144,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 164,
      "end": 210,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 192,
        "end": 210,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 198,
            "end": 208,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 178,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 187,
        "end": 191,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 289,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 289,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 264,
            "end": 273,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 268,
                "end": 272,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 272,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 272,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 271,
                      "end": 272,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 278,
            "end": 287,
            "argument": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "r",
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
        "start": 221,
        "end": 222,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 239,
          "end": 256,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 256,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 242,
              "end": 256,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 244,
                  "end": 249,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 245,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 247,
                      "end": 248,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 248,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 250,
                  "end": 254,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 251,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 253,
                      "end": 254,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 222,
        "end": 238,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 237,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 237,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 237,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
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
      "start": 291,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 300,
            "end": 342,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 302,
                "end": 341,
                "properties": [
                  {
                    "type": "Property",
                    "start": 304,
                    "end": 320,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 305,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 307,
                      "end": 320,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 318,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 322,
                    "end": 339,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 323,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 325,
                      "end": 339,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 337,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 396,
      "end": 487,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 456,
        "end": 487,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 462,
            "end": 471,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 466,
                "end": 470,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 470,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 467,
                    "end": 470,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 469,
                      "end": 470,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 470,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 476,
            "end": 485,
            "argument": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "decorators": [],
              "name": "r",
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
        "start": 405,
        "end": 407,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 450,
          "end": 454,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 451,
            "end": 454,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 453,
              "end": 454,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 453,
                "end": 454,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 407,
        "end": 449,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 408,
            "end": 422,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 418,
              "end": 422,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 418,
                "end": 422,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 424,
            "end": 448,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 434,
              "end": 448,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 436,
                  "end": 441,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 439,
                      "end": 440,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 440,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 442,
                  "end": 446,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 446,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 445,
                      "end": 446,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 446,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 424,
              "end": 425,
              "decorators": [],
              "name": "U",
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
      "start": 489,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 541,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 495,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 498,
            "end": 541,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 501,
                "end": 540,
                "properties": [
                  {
                    "type": "Property",
                    "start": 503,
                    "end": 519,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 504,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 506,
                      "end": 519,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 510,
                        "end": 517,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 521,
                    "end": 538,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 521,
                      "end": 522,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 524,
                      "end": 538,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 528,
                        "end": 536,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 498,
              "end": 500,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 549,
      "end": 602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 601,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 558,
            "end": 601,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 561,
                "end": 600,
                "properties": [
                  {
                    "type": "Property",
                    "start": 563,
                    "end": 579,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 563,
                      "end": 564,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 566,
                      "end": 579,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 577,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 581,
                    "end": 598,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 582,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 584,
                      "end": 598,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 596,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 560,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 611,
      "end": 684,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 661,
        "end": 684,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 667,
            "end": 682,
            "argument": {
              "type": "CallExpression",
              "start": 674,
              "end": 681,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 676,
                  "end": 680,
                  "raw": "null",
                  "value": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 674,
                "end": 675,
                "decorators": [],
                "name": "y",
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
        "start": 620,
        "end": 622,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 639,
          "end": 653,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 653,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 642,
              "end": 653,
              "params": [
                {
                  "type": "Identifier",
                  "start": 643,
                  "end": 647,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 644,
                    "end": 647,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 646,
                      "end": 647,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 646,
                        "end": 647,
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
                "start": 649,
                "end": 653,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 652,
                  "end": 653,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 653,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 655,
          "end": 659,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 656,
            "end": 659,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 658,
              "end": 659,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 658,
                "end": 659,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 622,
        "end": 638,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 623,
            "end": 637,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 633,
              "end": 637,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 633,
                "end": 637,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 623,
              "end": 624,
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
      "start": 745,
      "end": 777,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 776,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 751,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 754,
            "end": 776,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 757,
                "end": 763,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 763,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 757,
                    "end": 758,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "NewExpression",
                "start": 765,
                "end": 775,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 773,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 754,
              "end": 756,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 778,
      "end": 813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 782,
          "end": 812,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 784,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 787,
            "end": 812,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 790,
                "end": 796,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 796,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "NewExpression",
                "start": 798,
                "end": 811,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 809,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 787,
              "end": 789,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 814,
      "end": 840,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 818,
          "end": 839,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 818,
            "end": 820,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 823,
            "end": 839,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 826,
                "end": 832,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 826,
                    "end": 827,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 834,
                "end": 838,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 823,
              "end": 825,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
