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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "type": "ClassDeclaration",
      "start": 29,
      "end": 819,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 819,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 119,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 124,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 124,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 75,
                "end": 79,
                "expression": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 79,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 183,
              "end": 199,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 140,
                "end": 144,
                "expression": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 280,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 261,
              "end": 280,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 275,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 275,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 269,
                      "end": 275
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 277,
                "end": 280,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 216,
                "end": 220,
                "expression": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 220,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 297,
            "end": 343,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 341,
              "end": 342,
              "value": 1,
              "raw": "1"
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 297,
                "end": 301,
                "expression": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 301,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 360,
            "end": 415,
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 413,
              "end": 414,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 360,
                "end": 364,
                "expression": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 364,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 432,
            "end": 491,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 479,
              "end": 486,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 486,
              "end": 491,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 489,
                "end": 491,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 432,
                "end": 436,
                "expression": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 436,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 508,
            "end": 577,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 559,
              "end": 561,
              "name": "x"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 561,
              "end": 577,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 508,
                "end": 512,
                "expression": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 512,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 594,
            "end": 666,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 645,
              "end": 647,
              "name": "x"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 647,
              "end": 666,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 648,
                  "end": 661,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 653,
                    "end": 661,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 655,
                      "end": 661
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 663,
                "end": 666,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 594,
                "end": 598,
                "expression": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 598,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 683,
            "end": 737,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 730,
              "end": 732,
              "name": "y"
            },
            "value": {
              "type": "Literal",
              "start": 735,
              "end": 736,
              "value": 1,
              "raw": "1"
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 683,
                "end": 687,
                "expression": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 687,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 754,
            "end": 817,
            "key": {
              "type": "PrivateIdentifier",
              "start": 810,
              "end": 812,
              "name": "z"
            },
            "value": {
              "type": "Literal",
              "start": 815,
              "end": 816,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 754,
                "end": 758,
                "expression": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 758,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 29,
          "end": 33,
          "expression": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 38,
        "end": 49,
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 46,
          "end": 49,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 7,
            "end": 11,
            "expression": {
              "type": "Identifier",
              "start": 8,
              "end": 11,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 82,
      "end": 108,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 97,
        "end": 108,
        "id": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "name": "E",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 105,
          "end": 108,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 58,
            "end": 62,
            "expression": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
  "end": 123,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 7,
      "end": 56,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 21,
        "end": 56,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "name": "F",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 53,
          "end": 56,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 21,
            "end": 25,
            "expression": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 65,
      "end": 122,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 87,
        "end": 122,
        "id": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "name": "G",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 119,
          "end": 122,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 87,
            "end": 91,
            "expression": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
