__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 849,
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
          "value": "react"
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 122,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 68,
        "decorators": [],
        "name": "ComponentSpecific1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 107,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 107,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 75,
              "end": 107,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 76,
                  "end": 84,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 80,
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
                    "start": 80,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 83,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
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
                  "start": 85,
                  "end": 106,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 85,
                    "end": 98,
                    "raw": "\"ignore-prop\"",
                    "value": "ignore-prop"
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 100,
                      "end": 106
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
        "start": 108,
        "end": 121,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 110,
          "end": 121,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 110,
            "end": 121,
            "left": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 114,
              "end": 121,
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
        "start": 68,
        "end": 71,
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
      "start": 123,
      "end": 189,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 158,
        "decorators": [],
        "name": "ComponentSpecific2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 162,
          "end": 174,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 165,
              "end": 174,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 166,
                  "end": 173,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 170,
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
                    "start": 170,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 173,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
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
        "start": 175,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 188,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 177,
            "end": 188,
            "left": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 181,
              "end": 188,
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
        "start": 158,
        "end": 161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 159,
            "end": 160,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
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
      "start": 200,
      "end": 314,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 247,
        "end": 314,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 253,
            "end": 311,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 257,
                "end": 310,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 259,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 262,
                  "end": 310,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 262,
                    "end": 310,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 282,
                        "end": 290,
                        "argument": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 289,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 291,
                        "end": 307,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 291,
                          "end": 302,
                          "name": "ignore-prop"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 303,
                          "end": 307,
                          "expression": {
                            "type": "Literal",
                            "start": 304,
                            "end": 306,
                            "raw": "10",
                            "value": 10
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 263,
                      "end": 281,
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
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 212,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 239,
          "end": 245,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 245,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 244,
              "end": 245,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 244,
                "end": 245,
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
        "start": 212,
        "end": 238,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 213,
            "end": 237,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 223,
              "end": 237,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 224,
                  "end": 236,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 228,
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
                    "start": 228,
                    "end": 236,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 230,
                      "end": 236
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
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
      "type": "FunctionDeclaration",
      "start": 325,
      "end": 397,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 349,
        "end": 397,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 355,
            "end": 395,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 395,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 361,
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 364,
                  "end": 395,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 364,
                    "end": 395,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 384,
                        "end": 392,
                        "argument": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 391,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 365,
                      "end": 383,
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
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 337,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 341,
          "end": 347,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 344,
            "end": 347,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 346,
              "end": 347,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 346,
                "end": 347,
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
        "start": 337,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 338,
            "end": 339,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
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
      "start": 399,
      "end": 464,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 420,
        "decorators": [],
        "name": "Link",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 424,
          "end": 449,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 425,
            "end": 449,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 427,
              "end": 449,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 428,
                  "end": 448,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 432,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 448,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 434,
                      "end": 448,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 435,
                          "end": 441,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 438,
                            "end": 441,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 440,
                              "end": 441,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 440,
                                "end": 441,
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
                        "start": 442,
                        "end": 448,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 444,
                          "end": 448
                        }
                      },
                      "typeParameters": null
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
        "start": 450,
        "end": 463,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 452,
          "end": 463,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 452,
            "end": 463,
            "left": {
              "type": "Identifier",
              "start": 452,
              "end": 455,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 456,
              "end": 463,
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
        "start": 420,
        "end": 423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 422,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
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
      "start": 475,
      "end": 567,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 531,
        "end": 567,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 537,
            "end": 565,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 541,
                "end": 565,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 542,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 545,
                  "end": 565,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 545,
                    "end": 565,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 551,
                        "end": 562,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 551,
                          "end": 555,
                          "name": "func"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 556,
                          "end": 562,
                          "expression": {
                            "type": "Identifier",
                            "start": 557,
                            "end": 561,
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 546,
                      "end": 550,
                      "name": "Link"
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
        "start": 484,
        "end": 494,
        "decorators": [],
        "name": "createLink",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 495,
          "end": 529,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 499,
            "end": 529,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 501,
              "end": 529,
              "params": [
                {
                  "type": "Identifier",
                  "start": 502,
                  "end": 511,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 503,
                    "end": 511,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 505,
                      "end": 511
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 513,
                  "end": 522,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 514,
                    "end": 522,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 516,
                      "end": 522
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 523,
                "end": 529,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 525,
                  "end": 529
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 569,
      "end": 667,
      "body": {
        "type": "TSInterfaceBody",
        "start": 597,
        "end": 667,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 603,
            "end": 620,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 603,
              "end": 609,
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 609,
              "end": 619,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 611,
                "end": 619,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 616,
                  "end": 619,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 617,
                      "end": 618,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 617,
                        "end": 618,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 616,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 625,
            "end": 665,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 625,
              "end": 638,
              "decorators": [],
              "name": "selectHandler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 638,
              "end": 664,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 640,
                "end": 664,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 641,
                    "end": 655,
                    "decorators": [],
                    "name": "selectedVal",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 652,
                      "end": 655,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 654,
                        "end": 655,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 654,
                          "end": 655,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 657,
                  "end": 664,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 660,
                    "end": 664
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 579,
        "end": 593,
        "decorators": [],
        "name": "InferParamProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 593,
        "end": 596,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 594,
            "end": 595,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 594,
              "end": 595,
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
      "start": 669,
      "end": 747,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 705,
        "decorators": [],
        "name": "InferParamComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 709,
          "end": 732,
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 713,
            "end": 732,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 715,
              "end": 732,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 729,
                "end": 732,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 730,
                    "end": 731,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 731,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 715,
                "end": 729,
                "decorators": [],
                "name": "InferParamProp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 733,
        "end": 746,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 735,
          "end": 746,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 735,
            "end": 746,
            "left": {
              "type": "Identifier",
              "start": 735,
              "end": 738,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 739,
              "end": 746,
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
        "start": 705,
        "end": 708,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 706,
            "end": 707,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 706,
              "end": 707,
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
      "type": "VariableDeclaration",
      "start": 758,
      "end": 849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 762,
          "end": 848,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 762,
            "end": 763,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 766,
            "end": 848,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 766,
              "end": 848,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 787,
                  "end": 808,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 787,
                    "end": 793,
                    "name": "values"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 794,
                    "end": 808,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 795,
                      "end": 807,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 796,
                          "end": 797,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 799,
                          "end": 800,
                          "raw": "2",
                          "value": 2
                        },
                        {
                          "type": "Literal",
                          "start": 802,
                          "end": 803,
                          "raw": "3",
                          "value": 3
                        },
                        {
                          "type": "Literal",
                          "start": 805,
                          "end": 806,
                          "raw": "4",
                          "value": 4
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 809,
                  "end": 845,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 809,
                    "end": 822,
                    "name": "selectHandler"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 823,
                    "end": 845,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 824,
                      "end": 844,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 841,
                        "end": 844,
                        "body": []
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 825,
                          "end": 836,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 828,
                            "end": 836,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 830,
                              "end": 836
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 767,
                "end": 786,
                "name": "InferParamComponent"
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
