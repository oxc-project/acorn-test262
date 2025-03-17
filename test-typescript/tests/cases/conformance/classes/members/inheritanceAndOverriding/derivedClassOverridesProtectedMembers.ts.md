__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 950,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 23,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 21,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 12,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 20,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 14,
                        "end": 20
                      }
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 24,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 60,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 60,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 33,
                    "end": 45,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 36,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 38,
                        "end": 44
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 46,
                    "end": 58,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 49,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  }
                ]
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
      "type": "ClassDeclaration",
      "start": 62,
      "end": 492,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 492,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 101,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 92,
                "end": 100,
                "exprName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 134,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 134,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 134,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 118,
                  "end": 129,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 121,
                      "end": 129,
                      "exprName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 170,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 170,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 159,
                    "end": 168,
                    "argument": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 175,
            "end": 207,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 207,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 204,
                "end": 207,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 202,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 202,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 194,
                      "end": 202,
                      "exprName": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 212,
            "end": 247,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 246,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 225,
                "end": 246,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 226,
                    "end": 237,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 237,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 229,
                        "end": 237,
                        "exprName": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 237,
                          "decorators": [],
                          "name": "x",
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
                  "start": 239,
                  "end": 246,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 242,
                    "end": 246
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 253,
            "end": 282,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 273,
                "end": 281,
                "exprName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 287,
            "end": 322,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 305,
              "end": 322,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 319,
                "end": 322,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 306,
                  "end": 317,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 307,
                    "end": 317,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 309,
                      "end": 317,
                      "exprName": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 317,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 365,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 365,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 352,
                "end": 365,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 354,
                    "end": 363,
                    "argument": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 362,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 370,
            "end": 409,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 392,
              "end": 409,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 406,
                "end": 409,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 393,
                  "end": 404,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 396,
                      "end": 404,
                      "exprName": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 404,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 414,
            "end": 456,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 455,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 434,
                "end": 455,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 435,
                    "end": 446,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 436,
                      "end": 446,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 438,
                        "end": 446,
                        "exprName": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 446,
                          "decorators": [],
                          "name": "x",
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
                  "start": 448,
                  "end": 455,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 451,
                    "end": 455
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 462,
            "end": 490,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 462,
              "end": 473,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 490,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 487,
                "end": 490,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 474,
                  "end": 485,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 485,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 477,
                      "end": 485,
                      "exprName": {
                        "type": "Identifier",
                        "start": 484,
                        "end": 485,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 72,
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
      "start": 494,
      "end": 949,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 521,
        "end": 949,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 527,
            "end": 549,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 548,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 540,
                "end": 548,
                "exprName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 548,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 554,
            "end": 582,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 564,
              "end": 565,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 565,
              "end": 582,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 579,
                "end": 582,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 577,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 567,
                    "end": 577,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 569,
                      "end": 577,
                      "exprName": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 577,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 587,
            "end": 618,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 602,
              "end": 618,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 605,
                "end": 618,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 607,
                    "end": 616,
                    "argument": {
                      "type": "Identifier",
                      "start": 614,
                      "end": 615,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 623,
            "end": 655,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 637,
              "end": 638,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 638,
              "end": 655,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 652,
                "end": 655,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 639,
                  "end": 650,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 640,
                    "end": 650,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 642,
                      "end": 650,
                      "exprName": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 650,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 660,
            "end": 695,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 670,
              "end": 671,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 671,
              "end": 694,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 673,
                "end": 694,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 674,
                    "end": 685,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 675,
                      "end": 685,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 677,
                        "end": 685,
                        "exprName": {
                          "type": "Identifier",
                          "start": 684,
                          "end": 685,
                          "decorators": [],
                          "name": "y",
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
                  "start": 687,
                  "end": 694,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 690,
                    "end": 694
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 701,
            "end": 730,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 718,
              "end": 719,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 719,
              "end": 729,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 721,
                "end": 729,
                "exprName": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 729,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 735,
            "end": 770,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 752,
              "end": 753,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 753,
              "end": 770,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 767,
                "end": 770,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 765,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 755,
                    "end": 765,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 757,
                      "end": 765,
                      "exprName": {
                        "type": "Identifier",
                        "start": 764,
                        "end": 765,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 775,
            "end": 813,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 796,
              "end": 797,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 797,
              "end": 813,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 800,
                "end": 813,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 802,
                    "end": 811,
                    "argument": {
                      "type": "Identifier",
                      "start": 809,
                      "end": 810,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 818,
            "end": 857,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 839,
              "end": 840,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 840,
              "end": 857,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 854,
                "end": 857,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 841,
                  "end": 852,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 842,
                    "end": 852,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 844,
                      "end": 852,
                      "exprName": {
                        "type": "Identifier",
                        "start": 851,
                        "end": 852,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 862,
            "end": 904,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 879,
              "end": 880,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 880,
              "end": 903,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 882,
                "end": 903,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 883,
                    "end": 894,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 884,
                      "end": 894,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 886,
                        "end": 894,
                        "exprName": {
                          "type": "Identifier",
                          "start": 893,
                          "end": 894,
                          "decorators": [],
                          "name": "y",
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
                  "start": 896,
                  "end": 903,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 899,
                    "end": 903
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 910,
            "end": 947,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 910,
              "end": 921,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 921,
              "end": 947,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 935,
                "end": 947,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 937,
                    "end": 945,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 937,
                      "end": 945,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 943,
                          "end": 944,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 937,
                        "end": 942
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 922,
                  "end": 933,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 923,
                    "end": 933,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 925,
                      "end": 933,
                      "exprName": {
                        "type": "Identifier",
                        "start": 932,
                        "end": 933,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 507,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 516,
        "end": 520,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
