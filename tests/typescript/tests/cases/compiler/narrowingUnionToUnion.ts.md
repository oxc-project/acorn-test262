__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 6018,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Falsy",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 13,
        "end": 51,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 13,
            "end": 18,
            "literal": {
              "type": "Literal",
              "start": 13,
              "end": 18,
              "value": false,
              "raw": "false"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 21,
            "end": 22,
            "literal": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 25,
            "end": 27,
            "literal": {
              "type": "Literal",
              "start": 25,
              "end": 27,
              "value": null,
              "raw": "0n",
              "bigint": "0"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 30,
            "end": 32,
            "literal": {
              "type": "Literal",
              "start": 30,
              "end": 32,
              "value": "",
              "raw": "''"
            }
          },
          {
            "type": "TSNullKeyword",
            "start": 35,
            "end": 39
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 42,
            "end": 51
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 54,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 78,
        "decorators": [],
        "name": "isFalsy",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 93,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 93,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 86,
              "end": 93
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 94,
        "end": 110,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 96,
          "end": 110,
          "parameterName": {
            "type": "Identifier",
            "start": 96,
            "end": 101,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 110,
                "decorators": [],
                "name": "Falsy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 113,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 125,
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 126,
          "end": 156,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 127,
            "end": 156,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 129,
              "end": 156,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 138,
                  "end": 144
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 147,
                  "end": 156
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 223,
        "body": [
          {
            "type": "IfStatement",
            "start": 164,
            "end": 221,
            "test": {
              "type": "CallExpression",
              "start": 168,
              "end": 178,
              "callee": {
                "type": "Identifier",
                "start": 168,
                "end": 175,
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 180,
              "end": 221,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 190,
                  "end": 192,
                  "expression": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 191,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 225,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 237,
        "decorators": [],
        "name": "fx2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 237,
        "end": 240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 238,
            "end": 239,
            "name": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 257,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 257,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 244,
              "end": 257,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 244,
                  "end": 245,
                  "typeName": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 248,
                  "end": 257
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 259,
        "end": 327,
        "body": [
          {
            "type": "IfStatement",
            "start": 265,
            "end": 325,
            "test": {
              "type": "CallExpression",
              "start": 269,
              "end": 279,
              "callee": {
                "type": "Identifier",
                "start": 269,
                "end": 276,
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 277,
                  "end": 278,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 281,
              "end": 325,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 291,
                  "end": 293,
                  "expression": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 329,
      "end": 436,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 341,
        "decorators": [],
        "name": "fx3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 341,
        "end": 368,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 342,
            "end": 367,
            "name": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 352,
              "end": 367,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 352,
                  "end": 358
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 361,
                  "end": 367
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
      "params": [
        {
          "type": "Identifier",
          "start": 369,
          "end": 373,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 370,
            "end": 373,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 372,
              "end": 373,
              "typeName": {
                "type": "Identifier",
                "start": 372,
                "end": 373,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 375,
        "end": 436,
        "body": [
          {
            "type": "IfStatement",
            "start": 381,
            "end": 434,
            "test": {
              "type": "CallExpression",
              "start": 385,
              "end": 395,
              "callee": {
                "type": "Identifier",
                "start": 385,
                "end": 392,
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 393,
                  "end": 394,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 397,
              "end": 434,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 407,
                  "end": 409,
                  "expression": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 438,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 458,
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 459,
          "end": 471,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 462,
            "end": 471,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 464,
              "end": 471
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 472,
        "end": 504,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 474,
          "end": 504,
          "parameterName": {
            "type": "Identifier",
            "start": 474,
            "end": 477,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 481,
            "end": 504,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 481,
              "end": 504,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 481,
                  "end": 493,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 483,
                      "end": 491,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 484,
                        "end": 491,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 486,
                          "end": 491,
                          "literal": {
                            "type": "Literal",
                            "start": 486,
                            "end": 491,
                            "value": false,
                            "raw": "false"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 496,
                  "end": 504,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 498,
                      "end": 502,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 498,
                        "end": 499,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 499,
                        "end": 502,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 501,
                          "end": 502,
                          "literal": {
                            "type": "Literal",
                            "start": 501,
                            "end": 502,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 507,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 519,
        "decorators": [],
        "name": "fx4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 520,
          "end": 538,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 523,
            "end": 538,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 525,
              "end": 538,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 527,
                  "end": 536,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 528,
                    "end": 536,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 530,
                      "end": 536
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 540,
        "end": 595,
        "body": [
          {
            "type": "IfStatement",
            "start": 546,
            "end": 593,
            "test": {
              "type": "CallExpression",
              "start": 550,
              "end": 558,
              "callee": {
                "type": "Identifier",
                "start": 550,
                "end": 553,
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 554,
                  "end": 557,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 560,
              "end": 593,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 570,
                  "end": 574,
                  "expression": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 573,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 597,
      "end": 626,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 612,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 613,
        "end": 626,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 615,
            "end": 624,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 615,
              "end": 616,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 624,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 618,
                "end": 624
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 627,
      "end": 668,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 641,
        "end": 643,
        "decorators": [],
        "name": "XS",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 652,
        "end": 653,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 654,
        "end": 668,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 656,
            "end": 666,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 656,
              "end": 658,
              "decorators": [],
              "name": "xs",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 658,
              "end": 666,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 660,
                "end": 666
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 670,
      "end": 699,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 684,
        "end": 685,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 686,
        "end": 699,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 688,
            "end": 697,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 688,
              "end": 689,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 689,
              "end": 697,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 691,
                "end": 697
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 700,
      "end": 741,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 714,
        "end": 716,
        "decorators": [],
        "name": "YS",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 725,
        "end": 726,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 727,
        "end": 741,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 729,
            "end": 739,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 729,
              "end": 731,
              "decorators": [],
              "name": "ys",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 731,
              "end": 739,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 733,
                "end": 739
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
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 743,
      "end": 797,
      "id": {
        "type": "Identifier",
        "start": 760,
        "end": 767,
        "decorators": [],
        "name": "isXSorY",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 768,
          "end": 780,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 771,
            "end": 780,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 773,
              "end": 780
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 781,
        "end": 796,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 783,
          "end": 796,
          "parameterName": {
            "type": "Identifier",
            "start": 783,
            "end": 786,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 790,
            "end": 796,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 790,
              "end": 796,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 790,
                  "end": 792,
                  "typeName": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 792,
                    "decorators": [],
                    "name": "XS",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 795,
                  "end": 796,
                  "typeName": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 796,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 799,
      "end": 980,
      "id": {
        "type": "Identifier",
        "start": 808,
        "end": 811,
        "decorators": [],
        "name": "fx5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 811,
        "end": 824,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 812,
            "end": 823,
            "name": {
              "type": "Identifier",
              "start": 812,
              "end": 813,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 822,
              "end": 823,
              "typeName": {
                "type": "Identifier",
                "start": 822,
                "end": 823,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 825,
          "end": 836,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 828,
            "end": 836,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 830,
              "end": 836,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 830,
                  "end": 831,
                  "typeName": {
                    "type": "Identifier",
                    "start": 830,
                    "end": 831,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 834,
                  "end": 836,
                  "typeName": {
                    "type": "Identifier",
                    "start": 834,
                    "end": 836,
                    "decorators": [],
                    "name": "YS",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 838,
          "end": 861,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 839,
            "end": 861,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 841,
              "end": 861,
              "types": [
                {
                  "type": "TSTypeQuery",
                  "start": 841,
                  "end": 850,
                  "exprName": {
                    "type": "Identifier",
                    "start": 848,
                    "end": 850,
                    "decorators": [],
                    "name": "XS",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeQuery",
                  "start": 853,
                  "end": 861,
                  "exprName": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 861,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 863,
        "end": 980,
        "body": [
          {
            "type": "IfStatement",
            "start": 869,
            "end": 923,
            "test": {
              "type": "BinaryExpression",
              "start": 873,
              "end": 889,
              "left": {
                "type": "Identifier",
                "start": 873,
                "end": 876,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 888,
                "end": 889,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 891,
              "end": 923,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 901,
                  "end": 905,
                  "expression": {
                    "type": "Identifier",
                    "start": 901,
                    "end": 904,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 928,
            "end": 978,
            "test": {
              "type": "CallExpression",
              "start": 932,
              "end": 944,
              "callee": {
                "type": "Identifier",
                "start": 932,
                "end": 939,
                "decorators": [],
                "name": "isXSorY",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 940,
                  "end": 943,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 946,
              "end": 978,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 956,
                  "end": 960,
                  "expression": {
                    "type": "Identifier",
                    "start": 956,
                    "end": 959,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1004,
      "end": 1080,
      "id": {
        "type": "Identifier",
        "start": 1021,
        "end": 1042,
        "decorators": [],
        "name": "isEmptyStrOrUndefined",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1043,
          "end": 1053,
          "decorators": [],
          "name": "mixed",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1048,
            "end": 1053,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1050,
              "end": 1053
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1054,
        "end": 1079,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1056,
          "end": 1079,
          "parameterName": {
            "type": "Identifier",
            "start": 1056,
            "end": 1061,
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1065,
            "end": 1079,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1065,
              "end": 1079,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1065,
                  "end": 1067,
                  "literal": {
                    "type": "Literal",
                    "start": 1065,
                    "end": 1067,
                    "value": "",
                    "raw": "\"\""
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1070,
                  "end": 1079
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1082,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1091,
        "end": 1095,
        "decorators": [],
        "name": "fx10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1096,
          "end": 1117,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1097,
            "end": 1117,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1099,
              "end": 1117,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1099,
                  "end": 1105
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1108,
                  "end": 1117
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1119,
        "end": 1310,
        "body": [
          {
            "type": "IfStatement",
            "start": 1125,
            "end": 1308,
            "test": {
              "type": "CallExpression",
              "start": 1129,
              "end": 1153,
              "callee": {
                "type": "Identifier",
                "start": 1129,
                "end": 1150,
                "decorators": [],
                "name": "isEmptyStrOrUndefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1151,
                  "end": 1152,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1155,
              "end": 1308,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1165,
                  "end": 1167,
                  "expression": {
                    "type": "Identifier",
                    "start": 1165,
                    "end": 1166,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1195,
                  "end": 1302,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1199,
                    "end": 1213,
                    "left": {
                      "type": "Identifier",
                      "start": 1199,
                      "end": 1200,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "==",
                    "right": {
                      "type": "Identifier",
                      "start": 1204,
                      "end": 1213,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1215,
                    "end": 1255,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1229,
                        "end": 1231,
                        "expression": {
                          "type": "Identifier",
                          "start": 1229,
                          "end": 1230,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1269,
                    "end": 1302,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1283,
                        "end": 1285,
                        "expression": {
                          "type": "Identifier",
                          "start": 1283,
                          "end": 1284,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1334,
      "end": 1390,
      "id": {
        "type": "Identifier",
        "start": 1343,
        "end": 1345,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1346,
          "end": 1352,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1347,
            "end": 1352,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1349,
              "end": 1352
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1353,
        "end": 1386,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1355,
          "end": 1386,
          "parameterName": {
            "type": "Identifier",
            "start": 1363,
            "end": 1364,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1368,
            "end": 1386,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1368,
              "end": 1386,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1368,
                  "end": 1374
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1377,
                  "end": 1386
                }
              ]
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1387,
        "end": 1390,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1391,
      "end": 1427,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1395,
          "end": 1426,
          "id": {
            "type": "Identifier",
            "start": 1395,
            "end": 1426,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1397,
              "end": 1426,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1399,
                "end": 1426,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1399,
                    "end": 1405
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1408,
                    "end": 1414
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1417,
                    "end": 1426
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1428,
      "end": 1435,
      "expression": {
        "type": "CallExpression",
        "start": 1428,
        "end": 1434,
        "callee": {
          "type": "Identifier",
          "start": 1428,
          "end": 1430,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1431,
            "end": 1433,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1436,
      "end": 1439,
      "expression": {
        "type": "Identifier",
        "start": 1436,
        "end": 1438,
        "decorators": [],
        "name": "v1",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1464,
      "end": 1515,
      "id": {
        "type": "Identifier",
        "start": 1473,
        "end": 1475,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1476,
          "end": 1482,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1477,
            "end": 1482,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1479,
              "end": 1482
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1483,
        "end": 1511,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1485,
          "end": 1511,
          "parameterName": {
            "type": "Identifier",
            "start": 1493,
            "end": 1494,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1498,
            "end": 1511,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1498,
              "end": 1511,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1498,
                  "end": 1499,
                  "literal": {
                    "type": "Literal",
                    "start": 1498,
                    "end": 1499,
                    "value": 6,
                    "raw": "6"
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1502,
                  "end": 1511
                }
              ]
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1512,
        "end": 1515,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1516,
      "end": 1552,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1520,
          "end": 1551,
          "id": {
            "type": "Identifier",
            "start": 1520,
            "end": 1551,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1522,
              "end": 1551,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1524,
                "end": 1551,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1524,
                    "end": 1530
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1533,
                    "end": 1539
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1542,
                    "end": 1551
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1553,
      "end": 1560,
      "expression": {
        "type": "CallExpression",
        "start": 1553,
        "end": 1559,
        "callee": {
          "type": "Identifier",
          "start": 1553,
          "end": 1555,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1556,
            "end": 1558,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1561,
      "end": 1564,
      "expression": {
        "type": "Identifier",
        "start": 1561,
        "end": 1563,
        "decorators": [],
        "name": "v2",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1595,
      "end": 1654,
      "id": {
        "type": "Identifier",
        "start": 1612,
        "end": 1625,
        "decorators": [],
        "name": "isEmptyString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1626,
          "end": 1639,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1631,
            "end": 1639,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1633,
              "end": 1639
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1640,
        "end": 1653,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1642,
          "end": 1653,
          "parameterName": {
            "type": "Identifier",
            "start": 1642,
            "end": 1647,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1651,
            "end": 1653,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 1651,
              "end": 1653,
              "literal": {
                "type": "Literal",
                "start": 1651,
                "end": 1653,
                "value": "",
                "raw": "''"
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1655,
      "end": 1757,
      "id": {
        "type": "Identifier",
        "start": 1672,
        "end": 1690,
        "decorators": [],
        "name": "isMaybeEmptyString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1691,
          "end": 1723,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1696,
            "end": 1723,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1698,
              "end": 1723,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1698,
                  "end": 1704
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1707,
                  "end": 1711
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1714,
                  "end": 1723
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1724,
        "end": 1756,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1726,
          "end": 1756,
          "parameterName": {
            "type": "Identifier",
            "start": 1726,
            "end": 1731,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1735,
            "end": 1756,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1735,
              "end": 1756,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1735,
                  "end": 1737,
                  "literal": {
                    "type": "Literal",
                    "start": 1735,
                    "end": 1737,
                    "value": "",
                    "raw": "''"
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1740,
                  "end": 1744
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1747,
                  "end": 1756
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1759,
      "end": 1810,
      "id": {
        "type": "Identifier",
        "start": 1776,
        "end": 1782,
        "decorators": [],
        "name": "isZero",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1783,
          "end": 1796,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1788,
            "end": 1796,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1790,
              "end": 1796
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1797,
        "end": 1809,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1799,
          "end": 1809,
          "parameterName": {
            "type": "Identifier",
            "start": 1799,
            "end": 1804,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1808,
            "end": 1809,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 1808,
              "end": 1809,
              "literal": {
                "type": "Literal",
                "start": 1808,
                "end": 1809,
                "value": 0,
                "raw": "0"
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1811,
      "end": 1905,
      "id": {
        "type": "Identifier",
        "start": 1828,
        "end": 1839,
        "decorators": [],
        "name": "isMaybeZero",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1840,
          "end": 1872,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1845,
            "end": 1872,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1847,
              "end": 1872,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1847,
                  "end": 1853
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1856,
                  "end": 1860
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1863,
                  "end": 1872
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1873,
        "end": 1904,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1875,
          "end": 1904,
          "parameterName": {
            "type": "Identifier",
            "start": 1875,
            "end": 1880,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1884,
            "end": 1904,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1884,
              "end": 1904,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1884,
                  "end": 1885,
                  "literal": {
                    "type": "Literal",
                    "start": 1884,
                    "end": 1885,
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1888,
                  "end": 1892
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1895,
                  "end": 1904
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1907,
      "end": 1965,
      "id": {
        "type": "Identifier",
        "start": 1924,
        "end": 1936,
        "decorators": [],
        "name": "isEmptyArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1936,
        "end": 1939,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1937,
            "end": 1938,
            "name": {
              "type": "Identifier",
              "start": 1937,
              "end": 1938,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1940,
          "end": 1950,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1945,
            "end": 1950,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1947,
              "end": 1950,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1947,
                "end": 1948,
                "typeName": {
                  "type": "Identifier",
                  "start": 1947,
                  "end": 1948,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1951,
        "end": 1964,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1953,
          "end": 1964,
          "parameterName": {
            "type": "Identifier",
            "start": 1953,
            "end": 1958,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1962,
            "end": 1964,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1962,
              "end": 1964,
              "elementTypes": []
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1966,
      "end": 2067,
      "id": {
        "type": "Identifier",
        "start": 1983,
        "end": 2000,
        "decorators": [],
        "name": "isMaybeEmptyArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2000,
        "end": 2003,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2001,
            "end": 2002,
            "name": {
              "type": "Identifier",
              "start": 2001,
              "end": 2002,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2004,
          "end": 2033,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2009,
            "end": 2033,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2011,
              "end": 2033,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 2011,
                  "end": 2014,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 2011,
                    "end": 2012,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2011,
                      "end": 2012,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2017,
                  "end": 2021
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2024,
                  "end": 2033
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2034,
        "end": 2066,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2036,
          "end": 2066,
          "parameterName": {
            "type": "Identifier",
            "start": 2036,
            "end": 2041,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2045,
            "end": 2066,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2045,
              "end": 2066,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 2045,
                  "end": 2047,
                  "elementTypes": []
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2050,
                  "end": 2054
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2057,
                  "end": 2066
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2069,
      "end": 3478,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2075,
          "end": 3477,
          "id": {
            "type": "Identifier",
            "start": 2075,
            "end": 2085,
            "decorators": [],
            "name": "TEST_CASES",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2088,
            "end": 3477,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2094,
                "end": 2379,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2095,
                    "end": 2108,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2100,
                      "end": 2108,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2102,
                        "end": 2108
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2113,
                  "end": 2379,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 2123,
                      "end": 2241,
                      "test": {
                        "type": "CallExpression",
                        "start": 2127,
                        "end": 2147,
                        "callee": {
                          "type": "Identifier",
                          "start": 2127,
                          "end": 2140,
                          "decorators": [],
                          "name": "isEmptyString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2141,
                            "end": 2146,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 2149,
                        "end": 2186,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2163,
                            "end": 2169,
                            "expression": {
                              "type": "Identifier",
                              "start": 2163,
                              "end": 2168,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 2200,
                        "end": 2241,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2214,
                            "end": 2220,
                            "expression": {
                              "type": "Identifier",
                              "start": 2214,
                              "end": 2219,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "IfStatement",
                      "start": 2250,
                      "end": 2373,
                      "test": {
                        "type": "CallExpression",
                        "start": 2254,
                        "end": 2279,
                        "callee": {
                          "type": "Identifier",
                          "start": 2254,
                          "end": 2272,
                          "decorators": [],
                          "name": "isMaybeEmptyString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2273,
                            "end": 2278,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 2281,
                        "end": 2318,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2295,
                            "end": 2301,
                            "expression": {
                              "type": "Identifier",
                              "start": 2295,
                              "end": 2300,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 2332,
                        "end": 2373,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2346,
                            "end": 2352,
                            "expression": {
                              "type": "Identifier",
                              "start": 2346,
                              "end": 2351,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2385,
                "end": 2556,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2386,
                    "end": 2400,
                    "decorators": [],
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2392,
                      "end": 2400,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2394,
                        "end": 2400
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2405,
                  "end": 2556,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 2415,
                      "end": 2550,
                      "test": {
                        "type": "CallExpression",
                        "start": 2419,
                        "end": 2444,
                        "callee": {
                          "type": "Identifier",
                          "start": 2419,
                          "end": 2437,
                          "decorators": [],
                          "name": "isMaybeEmptyString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2438,
                            "end": 2443,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 2446,
                        "end": 2495,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2460,
                            "end": 2466,
                            "expression": {
                              "type": "Identifier",
                              "start": 2460,
                              "end": 2465,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 2509,
                        "end": 2550,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2523,
                            "end": 2529,
                            "expression": {
                              "type": "Identifier",
                              "start": 2523,
                              "end": 2528,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2562,
                "end": 2830,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2563,
                    "end": 2576,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2568,
                      "end": 2576,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2570,
                        "end": 2576
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2581,
                  "end": 2830,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 2591,
                      "end": 2701,
                      "test": {
                        "type": "CallExpression",
                        "start": 2595,
                        "end": 2608,
                        "callee": {
                          "type": "Identifier",
                          "start": 2595,
                          "end": 2601,
                          "decorators": [],
                          "name": "isZero",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2602,
                            "end": 2607,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 2610,
                        "end": 2646,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2624,
                            "end": 2630,
                            "expression": {
                              "type": "Identifier",
                              "start": 2624,
                              "end": 2629,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 2660,
                        "end": 2701,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2674,
                            "end": 2680,
                            "expression": {
                              "type": "Identifier",
                              "start": 2674,
                              "end": 2679,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "IfStatement",
                      "start": 2710,
                      "end": 2824,
                      "test": {
                        "type": "CallExpression",
                        "start": 2714,
                        "end": 2732,
                        "callee": {
                          "type": "Identifier",
                          "start": 2714,
                          "end": 2725,
                          "decorators": [],
                          "name": "isMaybeZero",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2726,
                            "end": 2731,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 2734,
                        "end": 2769,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2748,
                            "end": 2754,
                            "expression": {
                              "type": "Identifier",
                              "start": 2748,
                              "end": 2753,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 2783,
                        "end": 2824,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2797,
                            "end": 2803,
                            "expression": {
                              "type": "Identifier",
                              "start": 2797,
                              "end": 2802,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 2836,
                "end": 2999,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2837,
                    "end": 2851,
                    "decorators": [],
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2843,
                      "end": 2851,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2845,
                        "end": 2851
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2856,
                  "end": 2999,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 2866,
                      "end": 2993,
                      "test": {
                        "type": "CallExpression",
                        "start": 2870,
                        "end": 2888,
                        "callee": {
                          "type": "Identifier",
                          "start": 2870,
                          "end": 2881,
                          "decorators": [],
                          "name": "isMaybeZero",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2882,
                            "end": 2887,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 2890,
                        "end": 2938,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2904,
                            "end": 2910,
                            "expression": {
                              "type": "Identifier",
                              "start": 2904,
                              "end": 2909,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 2952,
                        "end": 2993,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2966,
                            "end": 2972,
                            "expression": {
                              "type": "Identifier",
                              "start": 2966,
                              "end": 2971,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3005,
                "end": 3294,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3006,
                    "end": 3021,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3011,
                      "end": 3021,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3013,
                        "end": 3021,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3013,
                          "end": 3019
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3026,
                  "end": 3294,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 3036,
                      "end": 3155,
                      "test": {
                        "type": "CallExpression",
                        "start": 3040,
                        "end": 3059,
                        "callee": {
                          "type": "Identifier",
                          "start": 3040,
                          "end": 3052,
                          "decorators": [],
                          "name": "isEmptyArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 3053,
                            "end": 3058,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 3061,
                        "end": 3098,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3075,
                            "end": 3081,
                            "expression": {
                              "type": "Identifier",
                              "start": 3075,
                              "end": 3080,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 3112,
                        "end": 3155,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3126,
                            "end": 3132,
                            "expression": {
                              "type": "Identifier",
                              "start": 3126,
                              "end": 3131,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "IfStatement",
                      "start": 3164,
                      "end": 3288,
                      "test": {
                        "type": "CallExpression",
                        "start": 3168,
                        "end": 3192,
                        "callee": {
                          "type": "Identifier",
                          "start": 3168,
                          "end": 3185,
                          "decorators": [],
                          "name": "isMaybeEmptyArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 3186,
                            "end": 3191,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 3194,
                        "end": 3231,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3208,
                            "end": 3214,
                            "expression": {
                              "type": "Identifier",
                              "start": 3208,
                              "end": 3213,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 3245,
                        "end": 3288,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3259,
                            "end": 3265,
                            "expression": {
                              "type": "Identifier",
                              "start": 3259,
                              "end": 3264,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3300,
                "end": 3474,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3301,
                    "end": 3317,
                    "decorators": [],
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3307,
                      "end": 3317,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 3309,
                        "end": 3317,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3309,
                          "end": 3315
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 3322,
                  "end": 3474,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 3332,
                      "end": 3468,
                      "test": {
                        "type": "CallExpression",
                        "start": 3336,
                        "end": 3360,
                        "callee": {
                          "type": "Identifier",
                          "start": 3336,
                          "end": 3353,
                          "decorators": [],
                          "name": "isMaybeEmptyArray",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 3354,
                            "end": 3359,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 3362,
                        "end": 3411,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3376,
                            "end": 3382,
                            "expression": {
                              "type": "Identifier",
                              "start": 3376,
                              "end": 3381,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 3425,
                        "end": 3468,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3439,
                            "end": 3445,
                            "expression": {
                              "type": "Identifier",
                              "start": 3439,
                              "end": 3444,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3502,
      "end": 3543,
      "id": {
        "type": "Identifier",
        "start": 3507,
        "end": 3518,
        "decorators": [],
        "name": "EmptyString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3521,
        "end": 3542,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 3521,
            "end": 3523,
            "literal": {
              "type": "Literal",
              "start": 3521,
              "end": 3523,
              "value": "",
              "raw": "''"
            }
          },
          {
            "type": "TSNullKeyword",
            "start": 3526,
            "end": 3530
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 3533,
            "end": 3542
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3545,
      "end": 3682,
      "id": {
        "type": "Identifier",
        "start": 3554,
        "end": 3561,
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3562,
          "end": 3589,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3567,
            "end": 3589,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3569,
              "end": 3589,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3569,
                  "end": 3575
                },
                {
                  "type": "TSTypeReference",
                  "start": 3578,
                  "end": 3589,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3578,
                    "end": 3589,
                    "decorators": [],
                    "name": "EmptyString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3590,
        "end": 3612,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3592,
          "end": 3612,
          "parameterName": {
            "type": "Identifier",
            "start": 3592,
            "end": 3597,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3601,
            "end": 3612,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3601,
              "end": 3612,
              "typeName": {
                "type": "Identifier",
                "start": 3601,
                "end": 3612,
                "decorators": [],
                "name": "EmptyString",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3613,
        "end": 3682,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3619,
            "end": 3680,
            "argument": {
              "type": "LogicalExpression",
              "start": 3626,
              "end": 3679,
              "left": {
                "type": "LogicalExpression",
                "start": 3626,
                "end": 3656,
                "left": {
                  "type": "BinaryExpression",
                  "start": 3626,
                  "end": 3638,
                  "left": {
                    "type": "Identifier",
                    "start": 3626,
                    "end": 3631,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3636,
                    "end": 3638,
                    "value": "",
                    "raw": "''"
                  }
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "start": 3642,
                  "end": 3656,
                  "left": {
                    "type": "Identifier",
                    "start": 3642,
                    "end": 3647,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3652,
                    "end": 3656,
                    "value": null,
                    "raw": "null"
                  }
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 3660,
                "end": 3679,
                "left": {
                  "type": "Identifier",
                  "start": 3660,
                  "end": 3665,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 3670,
                  "end": 3679,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3684,
      "end": 3720,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3688,
          "end": 3719,
          "id": {
            "type": "Identifier",
            "start": 3688,
            "end": 3719,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3692,
              "end": 3719,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3694,
                "end": 3719,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3694,
                    "end": 3700
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 3703,
                    "end": 3707
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 3710,
                    "end": 3719
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 3722,
      "end": 3770,
      "test": {
        "type": "CallExpression",
        "start": 3726,
        "end": 3739,
        "callee": {
          "type": "Identifier",
          "start": 3726,
          "end": 3733,
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 3734,
            "end": 3738,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 3741,
        "end": 3770,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3747,
            "end": 3752,
            "expression": {
              "type": "Identifier",
              "start": 3747,
              "end": 3751,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3794,
      "end": 3852,
      "id": {
        "type": "Identifier",
        "start": 3811,
        "end": 3817,
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3817,
        "end": 3820,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3818,
            "end": 3819,
            "name": {
              "type": "Identifier",
              "start": 3818,
              "end": 3819,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3821,
          "end": 3831,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3826,
            "end": 3831,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3828,
              "end": 3831
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3832,
        "end": 3852,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3834,
          "end": 3852,
          "parameterName": {
            "type": "Identifier",
            "start": 3842,
            "end": 3847,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3851,
            "end": 3852,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3851,
              "end": 3852,
              "typeName": {
                "type": "Identifier",
                "start": 3851,
                "end": 3852,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3854,
      "end": 3957,
      "id": {
        "type": "Identifier",
        "start": 3863,
        "end": 3868,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3869,
          "end": 3899,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3872,
            "end": 3899,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3874,
              "end": 3899,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 3874,
                  "end": 3880
                },
                {
                  "type": "TSStringKeyword",
                  "start": 3883,
                  "end": 3889
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 3892,
                  "end": 3899
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3901,
        "end": 3957,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3907,
            "end": 3931,
            "expression": {
              "type": "CallExpression",
              "start": 3907,
              "end": 3930,
              "callee": {
                "type": "Identifier",
                "start": 3907,
                "end": 3913,
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3913,
                "end": 3925,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 3914,
                    "end": 3924,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 3914,
                        "end": 3915,
                        "literal": {
                          "type": "Literal",
                          "start": 3914,
                          "end": 3915,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 3918,
                        "end": 3924
                      }
                    ]
                  }
                ]
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3926,
                  "end": 3929,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3936,
            "end": 3940,
            "expression": {
              "type": "Identifier",
              "start": 3936,
              "end": 3939,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3981,
      "end": 4073,
      "id": {
        "type": "Identifier",
        "start": 3990,
        "end": 3996,
        "decorators": [],
        "name": "check1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3997,
          "end": 4007,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3998,
            "end": 4007,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4000,
              "end": 4007
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4008,
        "end": 4027,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 4010,
          "end": 4027,
          "parameterName": {
            "type": "Identifier",
            "start": 4010,
            "end": 4011,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4016,
            "end": 4026,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4016,
              "end": 4026,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4016,
                  "end": 4022
                },
                {
                  "type": "TSLiteralType",
                  "start": 4025,
                  "end": 4026,
                  "literal": {
                    "type": "Literal",
                    "start": 4025,
                    "end": 4026,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4028,
        "end": 4073,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4031,
            "end": 4071,
            "argument": {
              "type": "LogicalExpression",
              "start": 4038,
              "end": 4070,
              "left": {
                "type": "BinaryExpression",
                "start": 4038,
                "end": 4059,
                "left": {
                  "type": "UnaryExpression",
                  "start": 4038,
                  "end": 4046,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 4045,
                    "end": 4046,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 4051,
                  "end": 4059,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 4063,
                "end": 4070,
                "left": {
                  "type": "Identifier",
                  "start": 4063,
                  "end": 4064,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 4069,
                  "end": 4070,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4075,
      "end": 4160,
      "id": {
        "type": "Identifier",
        "start": 4084,
        "end": 4090,
        "decorators": [],
        "name": "check2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4091,
          "end": 4101,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4092,
            "end": 4101,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4094,
              "end": 4101
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4102,
        "end": 4122,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 4104,
          "end": 4122,
          "parameterName": {
            "type": "Identifier",
            "start": 4104,
            "end": 4105,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4110,
            "end": 4121,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4110,
              "end": 4121,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 4110,
                  "end": 4117,
                  "literal": {
                    "type": "Literal",
                    "start": 4110,
                    "end": 4117,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 4120,
                  "end": 4121,
                  "literal": {
                    "type": "Literal",
                    "start": 4120,
                    "end": 4121,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4123,
        "end": 4160,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4126,
            "end": 4158,
            "argument": {
              "type": "LogicalExpression",
              "start": 4133,
              "end": 4157,
              "left": {
                "type": "BinaryExpression",
                "start": 4133,
                "end": 4146,
                "left": {
                  "type": "Identifier",
                  "start": 4133,
                  "end": 4134,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 4139,
                  "end": 4146,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 4150,
                "end": 4157,
                "left": {
                  "type": "Identifier",
                  "start": 4150,
                  "end": 4151,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 4156,
                  "end": 4157,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4162,
      "end": 4402,
      "id": {
        "type": "Identifier",
        "start": 4171,
        "end": 4176,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4177,
          "end": 4187,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4178,
            "end": 4187,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4180,
              "end": 4187
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4189,
        "end": 4402,
        "body": [
          {
            "type": "IfStatement",
            "start": 4192,
            "end": 4314,
            "test": {
              "type": "LogicalExpression",
              "start": 4196,
              "end": 4228,
              "left": {
                "type": "BinaryExpression",
                "start": 4196,
                "end": 4217,
                "left": {
                  "type": "UnaryExpression",
                  "start": 4196,
                  "end": 4204,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 4203,
                    "end": 4204,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 4209,
                  "end": 4217,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 4221,
                "end": 4228,
                "left": {
                  "type": "Identifier",
                  "start": 4221,
                  "end": 4222,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 4227,
                  "end": 4228,
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4230,
              "end": 4314,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4234,
                  "end": 4236,
                  "expression": {
                    "type": "Identifier",
                    "start": 4234,
                    "end": 4235,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 4254,
                  "end": 4311,
                  "test": {
                    "type": "LogicalExpression",
                    "start": 4258,
                    "end": 4282,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 4258,
                      "end": 4271,
                      "left": {
                        "type": "Identifier",
                        "start": 4258,
                        "end": 4259,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 4264,
                        "end": 4271,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 4275,
                      "end": 4282,
                      "left": {
                        "type": "Identifier",
                        "start": 4275,
                        "end": 4276,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 4281,
                        "end": 4282,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 4284,
                    "end": 4311,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4289,
                        "end": 4291,
                        "expression": {
                          "type": "Identifier",
                          "start": 4289,
                          "end": 4290,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4316,
            "end": 4400,
            "test": {
              "type": "CallExpression",
              "start": 4320,
              "end": 4329,
              "callee": {
                "type": "Identifier",
                "start": 4320,
                "end": 4326,
                "decorators": [],
                "name": "check1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 4327,
                  "end": 4328,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4331,
              "end": 4400,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4335,
                  "end": 4337,
                  "expression": {
                    "type": "Identifier",
                    "start": 4335,
                    "end": 4336,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 4355,
                  "end": 4397,
                  "test": {
                    "type": "CallExpression",
                    "start": 4359,
                    "end": 4368,
                    "callee": {
                      "type": "Identifier",
                      "start": 4359,
                      "end": 4365,
                      "decorators": [],
                      "name": "check2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 4366,
                        "end": 4367,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 4370,
                    "end": 4397,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4375,
                        "end": 4377,
                        "expression": {
                          "type": "Identifier",
                          "start": 4375,
                          "end": 4376,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4426,
      "end": 4532,
      "id": {
        "type": "Identifier",
        "start": 4435,
        "end": 4468,
        "decorators": [],
        "name": "assertRelationIsNullOrStringArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4469,
          "end": 4498,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4470,
            "end": 4498,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4472,
              "end": 4498,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 4472,
                  "end": 4491,
                  "elementType": {
                    "type": "TSUnionType",
                    "start": 4473,
                    "end": 4488,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4473,
                        "end": 4479
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 4482,
                        "end": 4488
                      }
                    ]
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4494,
                  "end": 4498
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4499,
        "end": 4529,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 4501,
          "end": 4529,
          "parameterName": {
            "type": "Identifier",
            "start": 4509,
            "end": 4510,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4514,
            "end": 4529,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4514,
              "end": 4529,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 4514,
                  "end": 4522,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4514,
                    "end": 4520
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4525,
                  "end": 4529
                }
              ]
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4530,
        "end": 4532,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4534,
      "end": 4656,
      "id": {
        "type": "Identifier",
        "start": 4543,
        "end": 4546,
        "decorators": [],
        "name": "f1x",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4547,
          "end": 4578,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4550,
            "end": 4578,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4552,
              "end": 4578,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 4552,
                  "end": 4571,
                  "elementType": {
                    "type": "TSUnionType",
                    "start": 4553,
                    "end": 4568,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4553,
                        "end": 4559
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 4562,
                        "end": 4568
                      }
                    ]
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4574,
                  "end": 4578
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4580,
        "end": 4656,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4586,
            "end": 4625,
            "expression": {
              "type": "CallExpression",
              "start": 4586,
              "end": 4624,
              "callee": {
                "type": "Identifier",
                "start": 4586,
                "end": 4619,
                "decorators": [],
                "name": "assertRelationIsNullOrStringArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 4620,
                  "end": 4623,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 4630,
            "end": 4634,
            "expression": {
              "type": "Identifier",
              "start": 4630,
              "end": 4633,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4680,
      "end": 4768,
      "id": {
        "type": "Identifier",
        "start": 4685,
        "end": 4705,
        "decorators": [],
        "name": "MyDiscriminatedUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4708,
        "end": 4767,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 4708,
            "end": 4736,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4710,
                "end": 4720,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4710,
                  "end": 4714,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4714,
                  "end": 4719,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4716,
                    "end": 4719,
                    "literal": {
                      "type": "Literal",
                      "start": 4716,
                      "end": 4719,
                      "value": "A",
                      "raw": "'A'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 4721,
                "end": 4734,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4721,
                  "end": 4726,
                  "decorators": [],
                  "name": "aProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4726,
                  "end": 4734,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4728,
                    "end": 4734
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 4739,
            "end": 4767,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4741,
                "end": 4751,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4741,
                  "end": 4745,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4745,
                  "end": 4750,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4747,
                    "end": 4750,
                    "literal": {
                      "type": "Literal",
                      "start": 4747,
                      "end": 4750,
                      "value": "B",
                      "raw": "'B'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 4752,
                "end": 4765,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4752,
                  "end": 4757,
                  "decorators": [],
                  "name": "bProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4757,
                  "end": 4765,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4759,
                    "end": 4765
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 4770,
      "end": 4855,
      "id": {
        "type": "Identifier",
        "start": 4787,
        "end": 4809,
        "decorators": [],
        "name": "isMyDiscriminatedUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4810,
          "end": 4823,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4814,
            "end": 4823,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4816,
              "end": 4823
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4824,
        "end": 4854,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 4826,
          "end": 4854,
          "parameterName": {
            "type": "Identifier",
            "start": 4826,
            "end": 4830,
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4834,
            "end": 4854,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4834,
              "end": 4854,
              "typeName": {
                "type": "Identifier",
                "start": 4834,
                "end": 4854,
                "decorators": [],
                "name": "MyDiscriminatedUnion",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4857,
      "end": 4888,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4871,
          "end": 4887,
          "id": {
            "type": "Identifier",
            "start": 4871,
            "end": 4887,
            "decorators": [],
            "name": "working",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4878,
              "end": 4887,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 4880,
                "end": 4887
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
      "start": 4889,
      "end": 4943,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4903,
          "end": 4942,
          "id": {
            "type": "Identifier",
            "start": 4903,
            "end": 4942,
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4909,
              "end": 4942,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4911,
                "end": 4942,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 4911,
                    "end": 4930,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4911,
                      "end": 4917,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4917,
                      "end": 4930,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4918,
                          "end": 4924
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 4926,
                          "end": 4929
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4933,
                    "end": 4942
                  }
                ]
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
      "start": 4944,
      "end": 5014,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4958,
          "end": 5013,
          "id": {
            "type": "Identifier",
            "start": 4958,
            "end": 5013,
            "decorators": [],
            "name": "workingAgain",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4970,
              "end": 5013,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4972,
                "end": 5013,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 4972,
                    "end": 4991,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4972,
                      "end": 4978,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4978,
                      "end": 4991,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4979,
                          "end": 4985
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 4987,
                          "end": 4990
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4994,
                    "end": 5003
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 5006,
                    "end": 5013
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 5016,
      "end": 5089,
      "expression": {
        "type": "LogicalExpression",
        "start": 5016,
        "end": 5088,
        "left": {
          "type": "LogicalExpression",
          "start": 5016,
          "end": 5071,
          "left": {
            "type": "CallExpression",
            "start": 5016,
            "end": 5047,
            "callee": {
              "type": "Identifier",
              "start": 5016,
              "end": 5038,
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5039,
                "end": 5046,
                "decorators": [],
                "name": "working",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "start": 5051,
            "end": 5071,
            "left": {
              "type": "MemberExpression",
              "start": 5051,
              "end": 5063,
              "object": {
                "type": "Identifier",
                "start": 5051,
                "end": 5058,
                "decorators": [],
                "name": "working",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5059,
                "end": 5063,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 5068,
              "end": 5071,
              "value": "A",
              "raw": "'A'"
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 5075,
          "end": 5088,
          "object": {
            "type": "Identifier",
            "start": 5075,
            "end": 5082,
            "decorators": [],
            "name": "working",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 5083,
            "end": 5088,
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5090,
      "end": 5160,
      "expression": {
        "type": "LogicalExpression",
        "start": 5090,
        "end": 5159,
        "left": {
          "type": "LogicalExpression",
          "start": 5090,
          "end": 5143,
          "left": {
            "type": "CallExpression",
            "start": 5090,
            "end": 5120,
            "callee": {
              "type": "Identifier",
              "start": 5090,
              "end": 5112,
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5113,
                "end": 5119,
                "decorators": [],
                "name": "broken",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "start": 5124,
            "end": 5143,
            "left": {
              "type": "MemberExpression",
              "start": 5124,
              "end": 5135,
              "object": {
                "type": "Identifier",
                "start": 5124,
                "end": 5130,
                "decorators": [],
                "name": "broken",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5131,
                "end": 5135,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 5140,
              "end": 5143,
              "value": "A",
              "raw": "'A'"
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 5147,
          "end": 5159,
          "object": {
            "type": "Identifier",
            "start": 5147,
            "end": 5153,
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 5154,
            "end": 5159,
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5161,
      "end": 5249,
      "expression": {
        "type": "LogicalExpression",
        "start": 5161,
        "end": 5248,
        "left": {
          "type": "LogicalExpression",
          "start": 5161,
          "end": 5226,
          "left": {
            "type": "CallExpression",
            "start": 5161,
            "end": 5197,
            "callee": {
              "type": "Identifier",
              "start": 5161,
              "end": 5183,
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 5184,
                "end": 5196,
                "decorators": [],
                "name": "workingAgain",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "start": 5201,
            "end": 5226,
            "left": {
              "type": "MemberExpression",
              "start": 5201,
              "end": 5218,
              "object": {
                "type": "Identifier",
                "start": 5201,
                "end": 5213,
                "decorators": [],
                "name": "workingAgain",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 5214,
                "end": 5218,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 5223,
              "end": 5226,
              "value": "A",
              "raw": "'A'"
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 5230,
          "end": 5248,
          "object": {
            "type": "Identifier",
            "start": 5230,
            "end": 5242,
            "decorators": [],
            "name": "workingAgain",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 5243,
            "end": 5248,
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5273,
      "end": 5370,
      "id": {
        "type": "Identifier",
        "start": 5278,
        "end": 5283,
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 5290,
        "end": 5369,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 5292,
            "end": 5317,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 5294,
                "end": 5304,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 5294,
                  "end": 5298,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5298,
                  "end": 5303,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 5300,
                    "end": 5303,
                    "literal": {
                      "type": "Literal",
                      "start": 5300,
                      "end": 5303,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 5305,
                "end": 5315,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 5305,
                  "end": 5312,
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5312,
                  "end": 5315,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 5314,
                    "end": 5315,
                    "literal": {
                      "type": "Literal",
                      "start": 5314,
                      "end": 5315,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 5324,
            "end": 5349,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 5326,
                "end": 5336,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 5326,
                  "end": 5330,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5330,
                  "end": 5335,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 5332,
                    "end": 5335,
                    "literal": {
                      "type": "Literal",
                      "start": 5332,
                      "end": 5335,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 5337,
                "end": 5347,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 5337,
                  "end": 5344,
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5344,
                  "end": 5347,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 5346,
                    "end": 5347,
                    "literal": {
                      "type": "Literal",
                      "start": 5346,
                      "end": 5347,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 5356,
            "end": 5369,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 5358,
                "end": 5367,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 5358,
                  "end": 5362,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5362,
                  "end": 5367,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 5364,
                    "end": 5367,
                    "literal": {
                      "type": "Literal",
                      "start": 5364,
                      "end": 5367,
                      "value": "b",
                      "raw": "'b'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5372,
      "end": 5574,
      "id": {
        "type": "Identifier",
        "start": 5381,
        "end": 5389,
        "decorators": [],
        "name": "example1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 5390,
          "end": 5402,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5395,
            "end": 5402,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5397,
              "end": 5402,
              "typeName": {
                "type": "Identifier",
                "start": 5397,
                "end": 5402,
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5403,
        "end": 5437,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 5405,
          "end": 5437,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 5405,
              "end": 5430,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5407,
                  "end": 5417,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5407,
                    "end": 5411,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5411,
                    "end": 5416,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 5413,
                      "end": 5416,
                      "literal": {
                        "type": "Literal",
                        "start": 5413,
                        "end": 5416,
                        "value": "a",
                        "raw": "'a'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5418,
                  "end": 5428,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5418,
                    "end": 5425,
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5425,
                    "end": 5428,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 5427,
                      "end": 5428,
                      "literal": {
                        "type": "Literal",
                        "start": 5427,
                        "end": 5428,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSNullKeyword",
              "start": 5433,
              "end": 5437
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 5438,
        "end": 5574,
        "body": [
          {
            "type": "IfStatement",
            "start": 5444,
            "end": 5496,
            "test": {
              "type": "BinaryExpression",
              "start": 5448,
              "end": 5466,
              "left": {
                "type": "MemberExpression",
                "start": 5448,
                "end": 5458,
                "object": {
                  "type": "Identifier",
                  "start": 5448,
                  "end": 5453,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5454,
                  "end": 5458,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 5463,
                "end": 5466,
                "value": "a",
                "raw": "'a'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5468,
              "end": 5496,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5478,
                  "end": 5490,
                  "argument": {
                    "type": "Literal",
                    "start": 5485,
                    "end": 5489,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 5501,
            "end": 5554,
            "test": {
              "type": "BinaryExpression",
              "start": 5505,
              "end": 5524,
              "left": {
                "type": "MemberExpression",
                "start": 5505,
                "end": 5518,
                "object": {
                  "type": "Identifier",
                  "start": 5505,
                  "end": 5510,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5511,
                  "end": 5518,
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 5523,
                "end": 5524,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5526,
              "end": 5554,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5536,
                  "end": 5548,
                  "argument": {
                    "type": "Literal",
                    "start": 5543,
                    "end": 5547,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 5559,
            "end": 5572,
            "argument": {
              "type": "Identifier",
              "start": 5566,
              "end": 5571,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5576,
      "end": 5800,
      "id": {
        "type": "Identifier",
        "start": 5585,
        "end": 5593,
        "decorators": [],
        "name": "example2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 5594,
          "end": 5606,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5599,
            "end": 5606,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5601,
              "end": 5606,
              "typeName": {
                "type": "Identifier",
                "start": 5601,
                "end": 5606,
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5607,
        "end": 5641,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 5609,
          "end": 5641,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 5609,
              "end": 5634,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5611,
                  "end": 5621,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5611,
                    "end": 5615,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5615,
                    "end": 5620,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 5617,
                      "end": 5620,
                      "literal": {
                        "type": "Literal",
                        "start": 5617,
                        "end": 5620,
                        "value": "a",
                        "raw": "'a'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5622,
                  "end": 5632,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5622,
                    "end": 5629,
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5629,
                    "end": 5632,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 5631,
                      "end": 5632,
                      "literal": {
                        "type": "Literal",
                        "start": 5631,
                        "end": 5632,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSNullKeyword",
              "start": 5637,
              "end": 5641
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 5642,
        "end": 5800,
        "body": [
          {
            "type": "IfStatement",
            "start": 5648,
            "end": 5700,
            "test": {
              "type": "BinaryExpression",
              "start": 5652,
              "end": 5670,
              "left": {
                "type": "MemberExpression",
                "start": 5652,
                "end": 5662,
                "object": {
                  "type": "Identifier",
                  "start": 5652,
                  "end": 5657,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5658,
                  "end": 5662,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 5667,
                "end": 5670,
                "value": "a",
                "raw": "'a'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5672,
              "end": 5700,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5682,
                  "end": 5694,
                  "argument": {
                    "type": "Literal",
                    "start": 5689,
                    "end": 5693,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 5705,
            "end": 5780,
            "test": {
              "type": "LogicalExpression",
              "start": 5709,
              "end": 5750,
              "left": {
                "type": "BinaryExpression",
                "start": 5709,
                "end": 5727,
                "left": {
                  "type": "MemberExpression",
                  "start": 5709,
                  "end": 5719,
                  "object": {
                    "type": "Identifier",
                    "start": 5709,
                    "end": 5714,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5715,
                    "end": 5719,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 5724,
                  "end": 5727,
                  "value": "a",
                  "raw": "'a'"
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 5731,
                "end": 5750,
                "left": {
                  "type": "MemberExpression",
                  "start": 5731,
                  "end": 5744,
                  "object": {
                    "type": "Identifier",
                    "start": 5731,
                    "end": 5736,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5737,
                    "end": 5744,
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 5749,
                  "end": 5750,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5752,
              "end": 5780,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5762,
                  "end": 5774,
                  "argument": {
                    "type": "Literal",
                    "start": 5769,
                    "end": 5773,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 5785,
            "end": 5798,
            "argument": {
              "type": "Identifier",
              "start": 5792,
              "end": 5797,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5802,
      "end": 6018,
      "id": {
        "type": "Identifier",
        "start": 5811,
        "end": 5819,
        "decorators": [],
        "name": "example3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 5820,
          "end": 5832,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5825,
            "end": 5832,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5827,
              "end": 5832,
              "typeName": {
                "type": "Identifier",
                "start": 5827,
                "end": 5832,
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5833,
        "end": 5867,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 5835,
          "end": 5867,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 5835,
              "end": 5860,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5837,
                  "end": 5847,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5837,
                    "end": 5841,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5841,
                    "end": 5846,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 5843,
                      "end": 5846,
                      "literal": {
                        "type": "Literal",
                        "start": 5843,
                        "end": 5846,
                        "value": "a",
                        "raw": "'a'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5848,
                  "end": 5858,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5848,
                    "end": 5855,
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5855,
                    "end": 5858,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 5857,
                      "end": 5858,
                      "literal": {
                        "type": "Literal",
                        "start": 5857,
                        "end": 5858,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSNullKeyword",
              "start": 5863,
              "end": 5867
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 5868,
        "end": 6018,
        "body": [
          {
            "type": "IfStatement",
            "start": 5874,
            "end": 5926,
            "test": {
              "type": "BinaryExpression",
              "start": 5878,
              "end": 5896,
              "left": {
                "type": "MemberExpression",
                "start": 5878,
                "end": 5888,
                "object": {
                  "type": "Identifier",
                  "start": 5878,
                  "end": 5883,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5884,
                  "end": 5888,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 5893,
                "end": 5896,
                "value": "a",
                "raw": "'a'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5898,
              "end": 5926,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5908,
                  "end": 5920,
                  "argument": {
                    "type": "Literal",
                    "start": 5915,
                    "end": 5919,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 5931,
            "end": 5998,
            "test": {
              "type": "LogicalExpression",
              "start": 5935,
              "end": 5968,
              "left": {
                "type": "MemberExpression",
                "start": 5935,
                "end": 5945,
                "object": {
                  "type": "Identifier",
                  "start": 5935,
                  "end": 5940,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5941,
                  "end": 5945,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 5949,
                "end": 5968,
                "left": {
                  "type": "MemberExpression",
                  "start": 5949,
                  "end": 5962,
                  "object": {
                    "type": "Identifier",
                    "start": 5949,
                    "end": 5954,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5955,
                    "end": 5962,
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 5967,
                  "end": 5968,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5970,
              "end": 5998,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5980,
                  "end": 5992,
                  "argument": {
                    "type": "Literal",
                    "start": 5987,
                    "end": 5991,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 6003,
            "end": 6016,
            "argument": {
              "type": "Identifier",
              "start": 6010,
              "end": 6015,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
