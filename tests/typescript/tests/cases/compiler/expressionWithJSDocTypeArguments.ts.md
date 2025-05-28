__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 674,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
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
          "start": 38,
          "end": 42,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 42,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 42,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 43,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 45,
          "end": 46,
          "typeName": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 59,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 49,
            "end": 57,
            "argument": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 106,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 74,
        "end": 106,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 104,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 87,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 104,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 88,
                  "end": 99,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 99,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 99,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 104,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 175,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 165,
            "decorators": [],
            "name": "WhatFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 168,
            "end": 174,
            "expression": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 171,
              "end": 174,
              "params": [
                {
                  "type": "TSJSDocUnknownType",
                  "start": 172,
                  "end": 173,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 204,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 188,
            "decorators": [],
            "name": "HuhFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 191,
            "end": 203,
            "expression": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 194,
              "end": 203,
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "start": 195,
                  "end": 202,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 194,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 195,
                      "end": 201
                    }
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 234,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 218,
            "decorators": [],
            "name": "NopeFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 221,
            "end": 233,
            "expression": {
              "type": "Identifier",
              "start": 221,
              "end": 224,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 224,
              "end": 233,
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "start": 225,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    }
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 267,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 266,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 250,
            "decorators": [],
            "name": "ComeOnFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 253,
            "end": 266,
            "expression": {
              "type": "Identifier",
              "start": 253,
              "end": 256,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 256,
              "end": 266,
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "start": 257,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 257,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSJSDocNullableType",
                      "start": 258,
                      "end": 265,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 257,
                        "end": 264,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 258,
                          "end": 264
                        }
                      },
                      "postfix": true,
                      "id": 0,
                      "original": null,
                      "emitNode": null
                    }
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 269,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 282,
        "decorators": [],
        "name": "TWhatFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 285,
        "end": 298,
        "exprName": {
          "type": "Identifier",
          "start": 292,
          "end": 295,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 295,
          "end": 298,
          "params": [
            {
              "type": "TSJSDocUnknownType",
              "start": 296,
              "end": 297,
              "id": 0,
              "original": null,
              "emitNode": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 300,
      "end": 335,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 312,
        "decorators": [],
        "name": "THuhFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 315,
        "end": 334,
        "exprName": {
          "type": "Identifier",
          "start": 322,
          "end": 325,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 325,
          "end": 334,
          "params": [
            {
              "type": "TSJSDocNullableType",
              "start": 326,
              "end": 333,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 325,
                "end": 332,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 326,
                  "end": 332
                }
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 336,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 349,
        "decorators": [],
        "name": "TNopeFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 352,
        "end": 371,
        "exprName": {
          "type": "Identifier",
          "start": 359,
          "end": 362,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 362,
          "end": 371,
          "params": [
            {
              "type": "TSJSDocNullableType",
              "start": 363,
              "end": 370,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 363,
                "end": 370,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 364,
                  "end": 370
                }
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 373,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 388,
        "decorators": [],
        "name": "TComeOnFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 391,
        "end": 411,
        "exprName": {
          "type": "Identifier",
          "start": 398,
          "end": 401,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 401,
          "end": 411,
          "params": [
            {
              "type": "TSJSDocNullableType",
              "start": 402,
              "end": 410,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 402,
                "end": 410,
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "start": 403,
                  "end": 410,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 402,
                    "end": 409,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 403,
                      "end": 409
                    }
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 437,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 427,
            "decorators": [],
            "name": "WhatBar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 430,
            "end": 436,
            "expression": {
              "type": "Identifier",
              "start": 430,
              "end": 433,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 433,
              "end": 436,
              "params": [
                {
                  "type": "TSJSDocUnknownType",
                  "start": 434,
                  "end": 435,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 466,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 450,
            "decorators": [],
            "name": "HuhBar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 453,
            "end": 465,
            "expression": {
              "type": "Identifier",
              "start": 453,
              "end": 456,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 456,
              "end": 465,
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "start": 457,
                  "end": 464,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 457,
                      "end": 463
                    }
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 467,
      "end": 496,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 480,
            "decorators": [],
            "name": "NopeBar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 483,
            "end": 495,
            "expression": {
              "type": "Identifier",
              "start": 483,
              "end": 486,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 486,
              "end": 495,
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "start": 487,
                  "end": 494,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 487,
                    "end": 494,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 488,
                      "end": 494
                    }
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 529,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 528,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 512,
            "decorators": [],
            "name": "ComeOnBar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSInstantiationExpression",
            "start": 515,
            "end": 528,
            "expression": {
              "type": "Identifier",
              "start": 515,
              "end": 518,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 518,
              "end": 528,
              "params": [
                {
                  "type": "TSJSDocNullableType",
                  "start": 519,
                  "end": 527,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 519,
                    "end": 527,
                    "typeAnnotation": {
                      "type": "TSJSDocNullableType",
                      "start": 520,
                      "end": 527,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 519,
                        "end": 526,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 520,
                          "end": 526
                        }
                      },
                      "postfix": true,
                      "id": 0,
                      "original": null,
                      "emitNode": null
                    }
                  },
                  "postfix": false,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 531,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 536,
        "end": 544,
        "decorators": [],
        "name": "TWhatBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 547,
        "end": 560,
        "exprName": {
          "type": "Identifier",
          "start": 554,
          "end": 557,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 557,
          "end": 560,
          "params": [
            {
              "type": "TSJSDocUnknownType",
              "start": 558,
              "end": 559,
              "id": 0,
              "original": null,
              "emitNode": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 562,
      "end": 597,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 574,
        "decorators": [],
        "name": "THuhBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 577,
        "end": 596,
        "exprName": {
          "type": "Identifier",
          "start": 584,
          "end": 587,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 587,
          "end": 596,
          "params": [
            {
              "type": "TSJSDocNullableType",
              "start": 588,
              "end": 595,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 587,
                "end": 594,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 588,
                  "end": 594
                }
              },
              "postfix": true,
              "id": 0,
              "original": null,
              "emitNode": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 598,
      "end": 634,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 611,
        "decorators": [],
        "name": "TNopeBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 614,
        "end": 633,
        "exprName": {
          "type": "Identifier",
          "start": 621,
          "end": 624,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 624,
          "end": 633,
          "params": [
            {
              "type": "TSJSDocNullableType",
              "start": 625,
              "end": 632,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 625,
                "end": 632,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 626,
                  "end": 632
                }
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 635,
      "end": 674,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 650,
        "decorators": [],
        "name": "TComeOnBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 653,
        "end": 673,
        "exprName": {
          "type": "Identifier",
          "start": 660,
          "end": 663,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 663,
          "end": 673,
          "params": [
            {
              "type": "TSJSDocNullableType",
              "start": 664,
              "end": 672,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 664,
                "end": 672,
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "start": 665,
                  "end": 672,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 664,
                    "end": 671,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 665,
                      "end": 671
                    }
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null
                }
              },
              "postfix": false,
              "id": 0,
              "original": null,
              "emitNode": null
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
