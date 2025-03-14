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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 51,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 30,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 29,
              "raw": "'A'",
              "value": "A"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 49,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 48,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 83,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": {
              "type": "Literal",
              "start": 79,
              "end": 82,
              "raw": "'B'",
              "value": "B"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 106,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": {
              "type": "Literal",
              "start": 101,
              "end": 105,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 110,
      "end": 154,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 141,
        "end": 153,
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
                "decorators": [],
                "name": "X",
                "optional": false
              }
            },
            {
              "type": "TSLiteralType",
              "start": 149,
              "end": 152,
              "literal": {
                "type": "Literal",
                "start": 149,
                "end": 152,
                "raw": "'x'",
                "value": "x"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 141,
          "end": 145,
          "decorators": [],
          "name": "Pick",
          "optional": false
        }
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
            "const": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 132,
                      "end": 135
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 156,
      "end": 170,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 165,
        "end": 169,
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
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 171,
      "end": 185,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 180,
        "end": 184,
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
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 180,
          "end": 181,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 187,
      "end": 233,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 203,
        "decorators": [],
        "name": "C_extends_D",
        "optional": false
      },
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
            "decorators": [],
            "name": "C",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 216,
          "end": 217,
          "typeName": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "D",
            "optional": false
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
            "raw": "false",
            "value": false
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 220,
          "end": 224,
          "literal": {
            "type": "Literal",
            "start": 220,
            "end": 224,
            "raw": "true",
            "value": true
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 275,
      "end": 351,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 299,
        "decorators": [],
        "name": "PickA_extends_PickB",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 302,
        "end": 350,
        "checkType": {
          "type": "TSTypeReference",
          "start": 302,
          "end": 314,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSLiteralType",
                "start": 310,
                "end": 313,
                "literal": {
                  "type": "Literal",
                  "start": 310,
                  "end": 313,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 302,
            "end": 306,
            "decorators": [],
            "name": "Pick",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 323,
          "end": 335,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              {
                "type": "TSLiteralType",
                "start": 331,
                "end": 334,
                "literal": {
                  "type": "Literal",
                  "start": 331,
                  "end": 334,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 323,
            "end": 327,
            "decorators": [],
            "name": "Pick",
            "optional": false
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
            "raw": "false",
            "value": false
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
            "raw": "true",
            "value": true
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 363,
      "end": 417,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 381,
        "decorators": [],
        "name": "TA_extends_TB",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 384,
        "end": 416,
        "checkType": {
          "type": "TSTypeReference",
          "start": 384,
          "end": 388,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 384,
            "end": 385,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 397,
          "end": 401,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 397,
            "end": 398,
            "decorators": [],
            "name": "T",
            "optional": false
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
            "raw": "false",
            "value": false
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
            "raw": "true",
            "value": true
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 481,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 475,
              "end": 481,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 477,
                "end": 481,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 502,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 498,
                "end": 502,
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
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 499,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 520,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 538,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 545,
          "end": 546,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 579,
          "end": 580,
          "decorators": [],
          "name": "d",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
