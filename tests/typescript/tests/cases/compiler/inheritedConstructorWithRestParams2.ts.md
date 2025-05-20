__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 677,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
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
              "start": 39,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 49,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 44,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 44,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "IBaseBase",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 102,
      "body": {
        "type": "TSInterfaceBody",
        "start": 99,
        "end": 102,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 83,
          "end": 98,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 92,
            "decorators": [],
            "name": "IBaseBase",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 92,
            "end": 98,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "decorators": [],
        "name": "IBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 68,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 70,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
      "type": "ClassDeclaration",
      "start": 104,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 137,
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
              "start": 137,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 152,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 138,
                  "end": 147,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
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
        "start": 110,
        "end": 119,
        "decorators": [],
        "name": "BaseBase2",
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
      "start": 156,
      "end": 342,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 226,
        "end": 342,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 261,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 243,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 243,
              "end": 261,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 244,
                  "end": 248,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  "type": "RestElement",
                  "start": 250,
                  "end": 259,
                  "argument": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 254,
                    "end": 259,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 256,
                      "end": 259,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 256,
                        "end": 257,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 257,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 266,
            "end": 303,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 277,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 277,
              "end": 303,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 278,
                  "end": 283,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 280,
                    "end": 283,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 282,
                      "end": 283,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 283,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 285,
                  "end": 290,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 290,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 289,
                      "end": 290,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 289,
                        "end": 290,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 292,
                  "end": 301,
                  "argument": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 296,
                    "end": 301,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 298,
                      "end": 301,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 298,
                        "end": 299,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 298,
                          "end": 299,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 308,
            "end": 340,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 319,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 319,
              "end": 340,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 320,
                  "end": 325,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 322,
                    "end": 325,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 324,
                      "end": 325,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 325,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 327,
                  "end": 332,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 329,
                    "end": 332,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 331,
                      "end": 332,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 332,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 334,
                  "end": 338,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 335,
                    "end": 338,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 337,
                      "end": 338,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 178,
        "decorators": [],
        "name": "BaseBase",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 214,
          "end": 225,
          "expression": {
            "type": "Identifier",
            "start": 214,
            "end": 219,
            "decorators": [],
            "name": "IBase",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 219,
            "end": 225,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 220,
                "end": 221,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "superClass": {
        "type": "Identifier",
        "start": 193,
        "end": 202,
        "decorators": [],
        "name": "BaseBase2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 178,
        "end": 184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 180,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 183,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
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
      "type": "ClassDeclaration",
      "start": 344,
      "end": 391,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 388,
        "end": 391,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 354,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 363,
        "end": 371,
        "decorators": [],
        "name": "BaseBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 371,
        "end": 387,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 372,
            "end": 378
          },
          {
            "type": "TSNumberKeyword",
            "start": 380,
            "end": 386
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 393,
      "end": 423,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 420,
        "end": 423,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 406,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 415,
        "end": 419,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 431,
      "end": 451,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 431,
        "end": 450,
        "arguments": [
          {
            "type": "Literal",
            "start": 443,
            "end": 445,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 447,
            "end": 449,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 435,
          "end": 442,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 452,
      "end": 471,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 452,
        "end": 470,
        "arguments": [
          {
            "type": "Literal",
            "start": 464,
            "end": 466,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 468,
            "end": 469,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 456,
          "end": 463,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 494,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 472,
        "end": 493,
        "arguments": [
          {
            "type": "Literal",
            "start": 484,
            "end": 486,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 488,
            "end": 489,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 491,
            "end": 492,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 476,
          "end": 483,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 520,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 495,
        "end": 519,
        "arguments": [
          {
            "type": "Literal",
            "start": 507,
            "end": 509,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 511,
            "end": 512,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 514,
            "end": 515,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 517,
            "end": 518,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 506,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 521,
      "end": 544,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 521,
        "end": 543,
        "arguments": [
          {
            "type": "Literal",
            "start": 533,
            "end": 535,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 537,
            "end": 538,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 540,
            "end": 542,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 525,
          "end": 532,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 545,
      "end": 568,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 545,
        "end": 567,
        "arguments": [
          {
            "type": "Literal",
            "start": 557,
            "end": 559,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 561,
            "end": 563,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 565,
            "end": 566,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 549,
          "end": 556,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 595,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 569,
        "end": 594,
        "arguments": [
          {
            "type": "Literal",
            "start": 581,
            "end": 583,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 585,
            "end": 587,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 589,
            "end": 590,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 592,
            "end": 593,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 573,
          "end": 580,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 607,
      "end": 622,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 607,
        "end": 621,
        "arguments": [
          {
            "type": "Literal",
            "start": 619,
            "end": 620,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 611,
          "end": 618,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 623,
      "end": 649,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 623,
        "end": 648,
        "arguments": [
          {
            "type": "Literal",
            "start": 635,
            "end": 637,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 639,
            "end": 640,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 642,
            "end": 644,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 646,
            "end": 647,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 627,
          "end": 634,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 650,
      "end": 677,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 650,
        "end": 676,
        "arguments": [
          {
            "type": "Literal",
            "start": 662,
            "end": 664,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 666,
            "end": 667,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 669,
            "end": 671,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 673,
            "end": 675,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 654,
          "end": 661,
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
