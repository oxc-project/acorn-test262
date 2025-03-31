__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 581,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 51,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 30,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 29,
              "value": "A",
              "raw": "'A'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 48,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
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
      "type": "ClassDeclaration",
      "start": 53,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 83,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 79,
              "end": 82,
              "value": "B",
              "raw": "'B'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 101,
              "end": 105,
              "value": true,
              "raw": "true"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 98,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 91,
                "end": 98
              }
            },
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
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 116,
        "end": 138,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 137,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 127,
              "end": 137,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 129,
                  "end": 135,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 132,
                      "end": 135
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 141,
        "end": 153,
        "typeName": {
          "type": "Identifier",
          "start": 141,
          "end": 145,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 145,
          "end": 153,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 146,
              "end": 147,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSLiteralType",
              "start": 149,
              "end": 152,
              "literal": {
                "type": "Literal",
                "start": 149,
                "end": 152,
                "value": "x",
                "raw": "'x'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 156,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 165,
        "end": 169,
        "typeName": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 166,
          "end": 169,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 167,
              "end": 168,
              "typeName": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "name": "A",
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
      "type": "TSTypeAliasDeclaration",
      "start": 171,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 180,
        "end": 184,
        "typeName": {
          "type": "Identifier",
          "start": 180,
          "end": 181,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 181,
          "end": 184,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 182,
              "end": 183,
              "typeName": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "name": "B",
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
      "type": "TSTypeAliasDeclaration",
      "start": 187,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 203,
        "name": "C_extends_D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 206,
        "end": 232,
        "checkType": {
          "type": "TSTypeReference",
          "start": 206,
          "end": 207,
          "typeName": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 216,
          "end": 217,
          "typeName": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 220,
          "end": 224,
          "literal": {
            "type": "Literal",
            "start": 220,
            "end": 224,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 227,
          "end": 232,
          "literal": {
            "type": "Literal",
            "start": 227,
            "end": 232,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 275,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 299,
        "name": "PickA_extends_PickB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 302,
        "end": 350,
        "checkType": {
          "type": "TSTypeReference",
          "start": 302,
          "end": 314,
          "typeName": {
            "type": "Identifier",
            "start": 302,
            "end": 306,
            "name": "Pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 306,
            "end": 314,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 307,
                "end": 308,
                "typeName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSLiteralType",
                "start": 310,
                "end": 313,
                "literal": {
                  "type": "Literal",
                  "start": 310,
                  "end": 313,
                  "value": "x",
                  "raw": "'x'"
                }
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 323,
          "end": 335,
          "typeName": {
            "type": "Identifier",
            "start": 323,
            "end": 327,
            "name": "Pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 327,
            "end": 335,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 328,
                "end": 329,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSLiteralType",
                "start": 331,
                "end": 334,
                "literal": {
                  "type": "Literal",
                  "start": 331,
                  "end": 334,
                  "value": "x",
                  "raw": "'x'"
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 338,
          "end": 342,
          "literal": {
            "type": "Literal",
            "start": 338,
            "end": 342,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 345,
          "end": 350,
          "literal": {
            "type": "Literal",
            "start": 345,
            "end": 350,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 363,
      "end": 417,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 381,
        "name": "TA_extends_TB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 384,
        "end": 416,
        "checkType": {
          "type": "TSTypeReference",
          "start": 384,
          "end": 388,
          "typeName": {
            "type": "Identifier",
            "start": 384,
            "end": 385,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 385,
            "end": 388,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 386,
                "end": 387,
                "typeName": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 387,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 397,
          "end": 401,
          "typeName": {
            "type": "Identifier",
            "start": 397,
            "end": 398,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 398,
            "end": 401,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 399,
                "end": 400,
                "typeName": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 400,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 404,
          "end": 408,
          "literal": {
            "type": "Literal",
            "start": 404,
            "end": 408,
            "value": true,
            "raw": "true"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 411,
          "end": 416,
          "literal": {
            "type": "Literal",
            "start": 411,
            "end": 416,
            "value": false,
            "raw": "false"
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 481,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 481,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 475,
              "end": 481,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 477,
                "end": 481,
                "typeName": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 478,
                  "end": 481,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 479,
                      "end": 480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 480,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 483,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 502,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 498,
                "end": 502,
                "typeName": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 499,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 499,
                  "end": 502,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 501,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 501,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 504,
      "end": 521,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 520,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 520,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 517,
              "end": 520,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 519,
                "end": 520,
                "typeName": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 520,
                  "name": "C",
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 522,
      "end": 539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 538,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 538,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 538,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 537,
                "end": 538,
                "typeName": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 538,
                  "name": "D",
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 547,
      "expression": {
        "type": "AssignmentExpression",
        "start": 541,
        "end": 546,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 541,
          "end": 542,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 545,
          "end": 546,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 575,
      "end": 581,
      "expression": {
        "type": "AssignmentExpression",
        "start": 575,
        "end": 580,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 575,
          "end": 576,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 579,
          "end": 580,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
