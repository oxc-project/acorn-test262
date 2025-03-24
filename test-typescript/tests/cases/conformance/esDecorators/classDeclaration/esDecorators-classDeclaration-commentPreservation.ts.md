__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 820,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "type": "ClassDeclaration",
      "start": 29,
      "end": 819,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 819,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 75,
                "end": 79,
                "expression": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 79,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 94,
                "end": 98,
                "expression": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 98,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 119,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 124,
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
            "start": 140,
            "end": 199,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 140,
                "end": 144,
                "expression": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 159,
                "end": 163,
                "expression": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 163,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 183,
              "end": 199,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 199,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 188,
                    "end": 197,
                    "argument": {
                      "type": "Literal",
                      "start": 195,
                      "end": 196,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
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
            "start": 216,
            "end": 280,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 216,
                "end": 220,
                "expression": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 220,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 236,
                "end": 240,
                "expression": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 240,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 261,
              "end": 280,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 277,
                "end": 280,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 275,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 275,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 269,
                      "end": 275
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 297,
            "end": 343,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 297,
                "end": 301,
                "expression": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 301,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 317,
                "end": 321,
                "expression": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 321,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 341,
              "end": 342,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "AccessorProperty",
            "start": 360,
            "end": 415,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 360,
                "end": 364,
                "expression": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 364,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 380,
                "end": 384,
                "expression": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 384,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 413,
              "end": 414,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 432,
            "end": 491,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 432,
                "end": 436,
                "expression": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 436,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 452,
                "end": 456,
                "expression": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 456,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 479,
              "end": 486,
              "name": "method"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 486,
              "end": 491,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 489,
                "end": 491,
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
            "start": 508,
            "end": 577,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 508,
                "end": 512,
                "expression": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 512,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 528,
                "end": 532,
                "expression": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 532,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 559,
              "end": 561,
              "name": "x"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 561,
              "end": 577,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 564,
                "end": 577,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 566,
                    "end": 575,
                    "argument": {
                      "type": "Literal",
                      "start": 573,
                      "end": 574,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
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
            "start": 594,
            "end": 666,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 594,
                "end": 598,
                "expression": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 598,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 614,
                "end": 618,
                "expression": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 618,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 645,
              "end": 647,
              "name": "x"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 647,
              "end": 666,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 663,
                "end": 666,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 648,
                  "end": 661,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 653,
                    "end": 661,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 655,
                      "end": 661
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 683,
            "end": 737,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 683,
                "end": 687,
                "expression": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 687,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 703,
                "end": 707,
                "expression": {
                  "type": "Identifier",
                  "start": 704,
                  "end": 707,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 730,
              "end": 732,
              "name": "y"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 735,
              "end": 736,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "AccessorProperty",
            "start": 754,
            "end": 817,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 754,
                "end": 758,
                "expression": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 758,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 774,
                "end": 778,
                "expression": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 778,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 810,
              "end": 812,
              "name": "z"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 815,
              "end": 816,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 29,
          "end": 33,
          "expression": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "Decorator",
          "start": 40,
          "end": 44,
          "expression": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 7,
  "end": 109,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 38,
        "end": 49,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 46,
          "end": 49,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 7,
            "end": 11,
            "expression": {
              "type": "Identifier",
              "start": 8,
              "end": 11,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Decorator",
            "start": 19,
            "end": 23,
            "expression": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 82,
      "end": 108,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 97,
        "end": 108,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 105,
          "end": 108,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 58,
            "end": 62,
            "expression": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Decorator",
            "start": 70,
            "end": 74,
            "expression": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 7,
  "end": 122,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 7,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 21,
        "end": 56,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 53,
          "end": 56,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 21,
            "end": 25,
            "expression": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Decorator",
            "start": 33,
            "end": 37,
            "expression": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 65,
      "end": 122,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 87,
        "end": 122,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 119,
          "end": 122,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 87,
            "end": 91,
            "expression": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Decorator",
            "start": 99,
            "end": 103,
            "expression": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
