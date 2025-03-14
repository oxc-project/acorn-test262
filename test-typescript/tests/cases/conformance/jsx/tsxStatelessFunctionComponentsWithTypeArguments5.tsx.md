__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 778,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 25,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 58,
      "end": 107,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 84,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 92,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 92,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 92,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 93,
        "end": 106,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 95,
          "end": 106,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 95,
            "end": 106,
            "left": {
              "type": "Identifier",
              "start": 95,
              "end": 98,
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 99,
              "end": 106,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 252,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 252,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 175,
            "end": 207,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 179,
                "end": 206,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 181,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 184,
                  "end": 206,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 184,
                    "end": 206,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 195,
                        "end": 203,
                        "argument": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 202,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 185,
                      "end": 194,
                      "name": "Component"
                    },
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 212,
            "end": 250,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 216,
                "end": 249,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 218,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 221,
                  "end": 249,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 221,
                    "end": 249,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 232,
                        "end": 240,
                        "argument": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 239,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 241,
                        "end": 246,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 241,
                          "end": 246,
                          "name": "prop1"
                        },
                        "value": null
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 222,
                      "end": 231,
                      "name": "Component"
                    },
                    "selfClosing": true
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
        "start": 117,
        "end": 132,
        "decorators": [],
        "name": "createComponent",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 167,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 164,
            "end": 167,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 166,
              "end": 167,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 132,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 159,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 143,
              "end": 159,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 145,
                  "end": 157,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 149,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 254,
      "end": 321,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 288,
        "decorators": [],
        "name": "ComponentSpecific",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 292,
          "end": 306,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 293,
            "end": 306,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 295,
              "end": 306,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 297,
                  "end": 304,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 301,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 301,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 303,
                      "end": 304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 303,
                        "end": 304,
                        "decorators": [],
                        "name": "U",
                        "optional": false
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
        "start": 307,
        "end": 320,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 309,
          "end": 320,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 309,
            "end": 320,
            "left": {
              "type": "Identifier",
              "start": 309,
              "end": 312,
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 313,
              "end": 320,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 288,
        "end": 291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 289,
            "end": 290,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 322,
      "end": 413,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 357,
        "decorators": [],
        "name": "ComponentSpecific1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 361,
          "end": 398,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 362,
            "end": 398,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 364,
              "end": 398,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 366,
                  "end": 374,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 370,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 375,
                  "end": 396,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 375,
                    "end": 388,
                    "raw": "\"ignore-prop\"",
                    "value": "ignore-prop"
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 388,
                    "end": 396,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 390,
                      "end": 396
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
        "start": 399,
        "end": 412,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 401,
          "end": 412,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 401,
            "end": 412,
            "left": {
              "type": "Identifier",
              "start": 401,
              "end": 404,
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 405,
              "end": 412,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 357,
        "end": 360,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 359,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 415,
      "end": 777,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 464,
        "end": 777,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 470,
            "end": 527,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 474,
                "end": 526,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 476,
                  "decorators": [],
                  "name": "a1",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 479,
                  "end": 526,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 479,
                    "end": 526,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 498,
                        "end": 506,
                        "argument": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 505,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 507,
                        "end": 523,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 507,
                          "end": 518,
                          "name": "ignore-prop"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 519,
                          "end": 523,
                          "raw": "\"hi\"",
                          "value": "hi"
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 480,
                      "end": 497,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 548,
            "end": 606,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 552,
                "end": 605,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 554,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 557,
                  "end": 605,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 557,
                    "end": 605,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 577,
                        "end": 585,
                        "argument": {
                          "type": "Identifier",
                          "start": 581,
                          "end": 584,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 586,
                        "end": 602,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 586,
                          "end": 597,
                          "name": "ignore-prop"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 598,
                          "end": 602,
                          "expression": {
                            "type": "Literal",
                            "start": 599,
                            "end": 601,
                            "raw": "10",
                            "value": 10
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 558,
                      "end": 576,
                      "name": "ComponentSpecific1"
                    },
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 627,
            "end": 680,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 631,
                "end": 679,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 633,
                  "decorators": [],
                  "name": "a3",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 636,
                  "end": 679,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 636,
                    "end": 679,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 655,
                        "end": 663,
                        "argument": {
                          "type": "Identifier",
                          "start": 659,
                          "end": 662,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 664,
                        "end": 676,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 664,
                          "end": 668,
                          "name": "prop"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 669,
                          "end": 676,
                          "raw": "\"hello\"",
                          "value": "hello"
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 637,
                      "end": 654,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 703,
            "end": 757,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 707,
                "end": 756,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 709,
                  "decorators": [],
                  "name": "a4",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 712,
                  "end": 756,
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 712,
                    "end": 756,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 731,
                        "end": 739,
                        "argument": {
                          "type": "Identifier",
                          "start": 735,
                          "end": 738,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 740,
                        "end": 753,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 740,
                          "end": 745,
                          "name": "prop1"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 746,
                          "end": 753,
                          "raw": "\"hello\"",
                          "value": "hello"
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 713,
                      "end": 730,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true
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
        "start": 424,
        "end": 427,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 456,
          "end": 462,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 459,
            "end": 462,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 461,
              "end": 462,
              "typeName": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 427,
        "end": 455,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 428,
            "end": 454,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 438,
              "end": 454,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 440,
                  "end": 452,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 444,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 444,
                    "end": 452,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 446,
                      "end": 452
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "T",
              "optional": false
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
