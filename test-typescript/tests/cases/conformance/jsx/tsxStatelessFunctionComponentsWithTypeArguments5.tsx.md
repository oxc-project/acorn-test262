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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 58,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 84,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 92,
          "name": "l",
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 99,
              "end": 106,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 132,
        "name": "createComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 167,
          "name": "arg",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 181,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 184,
                  "end": 206,
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
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
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
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 218,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 221,
                  "end": 249,
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
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
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
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 132,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 159,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 149,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
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
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 254,
      "end": 321,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 288,
        "name": "ComponentSpecific",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 292,
          "end": 306,
          "name": "l",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 301,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 288,
        "end": 291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 289,
            "end": 290,
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 313,
              "end": 320,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 322,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 357,
        "name": "ComponentSpecific1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 361,
          "end": 398,
          "name": "l",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 370,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 375,
                  "end": 396,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 375,
                    "end": 388,
                    "value": "ignore-prop",
                    "raw": "\"ignore-prop\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 388,
                    "end": 396,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 390,
                      "end": 396
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 357,
        "end": 360,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 359,
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 405,
              "end": 412,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 415,
      "end": 777,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 427,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 456,
          "end": 462,
          "name": "arg",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 476,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 479,
                  "end": 526,
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
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
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
                          "value": "hi",
                          "raw": "\"hi\""
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 480,
                      "end": 497,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 554,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 557,
                  "end": 605,
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
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
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
                            "value": 10,
                            "raw": "10"
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
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 633,
                  "name": "a3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 636,
                  "end": 679,
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
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
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
                          "value": "hello",
                          "raw": "\"hello\""
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 637,
                      "end": 654,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 709,
                  "name": "a4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 712,
                  "end": 756,
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
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
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
                          "value": "hello",
                          "raw": "\"hello\""
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 713,
                      "end": 730,
                      "name": "ComponentSpecific"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 427,
        "end": 455,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 428,
            "end": 454,
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 444,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 444,
                    "end": 452,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 446,
                      "end": 452
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
