__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 672,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 32,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
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
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Action",
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
      "start": 34,
      "end": 85,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
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
        "start": 40,
        "end": 47,
        "decorators": [],
        "name": "ActionA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 56,
        "end": 62,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 142,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 122,
            "end": 140,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 130,
              "decorators": [],
              "name": "trueNess",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 139,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 132,
                "end": 139
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
        "start": 93,
        "end": 100,
        "decorators": [],
        "name": "ActionB",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 115,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 160,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 160,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 152,
                "end": 160,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 152,
                  "end": 158,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 158,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 163,
            "end": 227,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 169,
                "end": 195,
                "properties": [
                  {
                    "type": "Property",
                    "start": 171,
                    "end": 176,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 173,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 175,
                      "end": 176,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "Property",
                    "start": 178,
                    "end": 193,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 186,
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 188,
                      "end": 193,
                      "raw": "false",
                      "value": false
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 201,
                "end": 225,
                "properties": [
                  {
                    "type": "Property",
                    "start": 203,
                    "end": 208,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 205,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 207,
                      "end": 208,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  {
                    "type": "Property",
                    "start": 210,
                    "end": 223,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 214,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 216,
                      "end": 223,
                      "raw": "\"three\"",
                      "value": "three"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 288,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 245,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 245,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 237,
                "end": 245,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 237,
                  "end": 243,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 243,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 248,
            "end": 288,
            "elements": [
              {
                "type": "NewExpression",
                "start": 254,
                "end": 267,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 265,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 273,
                "end": 286,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 284,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 367,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 306,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 306,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 298,
                "end": 306,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 298,
                  "end": 304,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 304,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 309,
            "end": 367,
            "elements": [
              {
                "type": "NewExpression",
                "start": 315,
                "end": 327,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 325,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 333,
                "end": 346,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 344,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 352,
                "end": 365,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 363,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 369,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 393,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 393,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 377,
                "end": 393,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 377,
                  "end": 391,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 379,
                      "end": 389,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 381,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 381,
                        "end": 389,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 383,
                          "end": 389
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 400,
            "end": 476,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 410,
                "end": 436,
                "properties": [
                  {
                    "type": "Property",
                    "start": 412,
                    "end": 417,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 414,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 416,
                      "end": 417,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "Property",
                    "start": 419,
                    "end": 434,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 427,
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 429,
                      "end": 434,
                      "raw": "false",
                      "value": false
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 446,
                "end": 470,
                "properties": [
                  {
                    "type": "Property",
                    "start": 448,
                    "end": 453,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 448,
                      "end": 450,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 452,
                      "end": 453,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  {
                    "type": "Property",
                    "start": 455,
                    "end": 468,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 459,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 461,
                      "end": 468,
                      "raw": "\"three\"",
                      "value": "three"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 561,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 502,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 484,
              "end": 502,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 486,
                "end": 502,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 486,
                  "end": 500,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 488,
                      "end": 498,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 490,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 490,
                        "end": 498,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 492,
                          "end": 498
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 509,
            "end": 561,
            "elements": [
              {
                "type": "NewExpression",
                "start": 519,
                "end": 532,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 530,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 542,
                "end": 555,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 553,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 668,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 567,
          "end": 668,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 567,
            "end": 587,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 569,
              "end": 587,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 571,
                "end": 587,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 571,
                  "end": 585,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 573,
                      "end": 583,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 573,
                        "end": 575,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 575,
                        "end": 583,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 577,
                          "end": 583
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 594,
            "end": 668,
            "elements": [
              {
                "type": "NewExpression",
                "start": 604,
                "end": 616,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 614,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 626,
                "end": 639,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 637,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 649,
                "end": 662,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 660,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
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
