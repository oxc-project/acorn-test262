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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 32,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 30,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 85,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 83,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 142,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 142,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 122,
            "end": 140,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 130,
              "decorators": [],
              "name": "trueNess",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 227,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 227,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 158,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 173,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 175,
                      "end": 176,
                      "value": 2,
                      "raw": "2"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 178,
                    "end": 193,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 186,
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 188,
                      "end": 193,
                      "value": false,
                      "raw": "false"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 205,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 207,
                      "end": 208,
                      "value": 3,
                      "raw": "3"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 210,
                    "end": 223,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 214,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 216,
                      "end": 223,
                      "value": "three",
                      "raw": "\"three\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 288,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 288,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 243,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                "callee": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 265,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 273,
                "end": 286,
                "callee": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 284,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 367,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 367,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 304,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                "callee": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 325,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 333,
                "end": 346,
                "callee": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 344,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 352,
                "end": 365,
                "callee": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 363,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 369,
      "end": 476,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 476,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 381,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 381,
                        "end": 389,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 383,
                          "end": 389
                        }
                      },
                      "accessibility": null,
                      "static": false
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 414,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 416,
                      "end": 417,
                      "value": 2,
                      "raw": "2"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 419,
                    "end": 434,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 427,
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 429,
                      "end": 434,
                      "value": false,
                      "raw": "false"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 448,
                      "end": 450,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 452,
                      "end": 453,
                      "value": 3,
                      "raw": "3"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 455,
                    "end": 468,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 459,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 461,
                      "end": 468,
                      "value": "three",
                      "raw": "\"three\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 561,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 561,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 490,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 490,
                        "end": 498,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 492,
                          "end": 498
                        }
                      },
                      "accessibility": null,
                      "static": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 530,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 542,
                "end": 555,
                "callee": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 553,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 668,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 567,
          "end": 668,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 573,
                        "end": 575,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 575,
                        "end": 583,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 577,
                          "end": 583
                        }
                      },
                      "accessibility": null,
                      "static": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 614,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 626,
                "end": 639,
                "callee": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 637,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 649,
                "end": 662,
                "callee": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 660,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
