__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 752,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 82,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 59,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 67,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 81,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 70,
          "end": 81,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 70,
            "end": 81,
            "left": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 59,
        "end": 62,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 61,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 227,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 227,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 150,
            "end": 182,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 181,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 159,
                  "end": 181,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 159,
                    "end": 181,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 170,
                        "end": 178,
                        "argument": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 177,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 160,
                      "end": 169,
                      "name": "Component"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 187,
            "end": 225,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 191,
                "end": 224,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 193,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 196,
                  "end": 224,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 196,
                    "end": 224,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 207,
                        "end": 215,
                        "argument": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 214,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 216,
                        "end": 221,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 216,
                          "end": 221,
                          "name": "prop1"
                        },
                        "value": null
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 197,
                      "end": 206,
                      "name": "Component"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 107,
        "decorators": [],
        "name": "createComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 136,
          "end": 142,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 142,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 142,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 107,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 134,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 118,
              "end": 134,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 120,
                  "end": 132,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 124,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 229,
      "end": 296,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 263,
        "decorators": [],
        "name": "ComponentSpecific",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 267,
          "end": 281,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 268,
            "end": 281,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 270,
              "end": 281,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 272,
                  "end": 279,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 276,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 276,
                    "end": 279,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 278,
                      "end": 279,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 279,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 282,
        "end": 295,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 284,
          "end": 295,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 284,
            "end": 295,
            "left": {
              "type": "Identifier",
              "start": 284,
              "end": 287,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 288,
              "end": 295,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 263,
        "end": 266,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 264,
            "end": 265,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
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
      "type": "TSDeclareFunction",
      "start": 297,
      "end": 388,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 332,
        "decorators": [],
        "name": "ComponentSpecific1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 336,
          "end": 373,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 337,
            "end": 373,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 339,
              "end": 373,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 341,
                  "end": 349,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 345,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 348,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 347,
                      "end": 348,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 348,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 350,
                  "end": 371,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 350,
                    "end": 363,
                    "raw": "\"ignore-prop\"",
                    "value": "ignore-prop",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 365,
                      "end": 371
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 374,
        "end": 387,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 376,
          "end": 387,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 376,
            "end": 387,
            "left": {
              "type": "Identifier",
              "start": 376,
              "end": 379,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 380,
              "end": 387,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 332,
        "end": 335,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 333,
            "end": 334,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
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
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 752,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 439,
        "end": 752,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 445,
            "end": 502,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 449,
                "end": 501,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 451,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 454,
                  "end": 501,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 454,
                    "end": 501,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 473,
                        "end": 481,
                        "argument": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 480,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 482,
                        "end": 498,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 482,
                          "end": 493,
                          "name": "ignore-prop"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 494,
                          "end": 498,
                          "raw": "\"hi\"",
                          "value": "hi",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 455,
                      "end": 472,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 523,
            "end": 581,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 527,
                "end": 580,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 529,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 532,
                  "end": 580,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 532,
                    "end": 580,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 552,
                        "end": 560,
                        "argument": {
                          "type": "Identifier",
                          "start": 556,
                          "end": 559,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 561,
                        "end": 577,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 561,
                          "end": 572,
                          "name": "ignore-prop"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 573,
                          "end": 577,
                          "expression": {
                            "type": "Literal",
                            "start": 574,
                            "end": 576,
                            "raw": "10",
                            "value": 10,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 533,
                      "end": 551,
                      "name": "ComponentSpecific1"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 602,
            "end": 655,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 606,
                "end": 654,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 608,
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 611,
                  "end": 654,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 611,
                    "end": 654,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 630,
                        "end": 638,
                        "argument": {
                          "type": "Identifier",
                          "start": 634,
                          "end": 637,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 639,
                        "end": 651,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 639,
                          "end": 643,
                          "name": "prop"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 644,
                          "end": 651,
                          "raw": "\"hello\"",
                          "value": "hello",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 612,
                      "end": 629,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 678,
            "end": 732,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 731,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 684,
                  "decorators": [],
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 687,
                  "end": 731,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 687,
                    "end": 731,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 706,
                        "end": 714,
                        "argument": {
                          "type": "Identifier",
                          "start": 710,
                          "end": 713,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 715,
                        "end": 728,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 715,
                          "end": 720,
                          "name": "prop1"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 721,
                          "end": 728,
                          "raw": "\"hello\"",
                          "value": "hello",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 688,
                      "end": 705,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 402,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 431,
          "end": 437,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 437,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 436,
              "end": 437,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 402,
        "end": 430,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 403,
            "end": 429,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 413,
              "end": 429,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 415,
                  "end": 427,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 419,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 419,
                    "end": 427,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 421,
                      "end": 427
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
