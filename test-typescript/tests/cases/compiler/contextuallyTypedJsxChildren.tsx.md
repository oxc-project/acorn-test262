__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 1006,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 140,
      "end": 598,
      "body": {
        "type": "TSModuleBlock",
        "start": 171,
        "end": 598,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 175,
            "end": 237,
            "body": {
              "type": "TSInterfaceBody",
              "start": 195,
              "end": 237,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 201,
                  "end": 214,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 205,
                    "decorators": [],
                    "name": "icon",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 207,
                      "end": 213
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 219,
                  "end": 233,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 224,
                    "decorators": [],
                    "name": "label",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 194,
              "decorators": [],
              "name": "BaseProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 240,
            "end": 384,
            "body": {
              "type": "TSInterfaceBody",
              "start": 286,
              "end": 384,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 292,
                  "end": 346,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 300,
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 301,
                      "end": 331,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 306,
                        "end": 331,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 308,
                          "end": 331,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 310,
                              "end": 329,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 310,
                                "end": 317,
                                "decorators": [],
                                "name": "onClose",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 317,
                                "end": 329,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 319,
                                  "end": 329,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 322,
                                    "end": 329,
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 325,
                                      "end": 329
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
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 332,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 334,
                      "end": 345,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 334,
                        "end": 345,
                        "left": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 337,
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 345,
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSPropertySignature",
                  "start": 351,
                  "end": 380,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 359,
                    "decorators": [],
                    "name": "controls",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 360,
                    "end": 379,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 362,
                      "end": 379,
                      "types": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 362,
                          "end": 367
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 370,
                          "end": 379
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 276,
                "end": 285,
                "expression": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 285,
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 250,
              "end": 267,
              "decorators": [],
              "name": "PropsWithChildren",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 387,
            "end": 497,
            "body": {
              "type": "TSInterfaceBody",
              "start": 433,
              "end": 497,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 439,
                  "end": 459,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 447,
                    "decorators": [],
                    "name": "controls",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 447,
                    "end": 458,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 449,
                      "end": 458,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 449,
                        "end": 456,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 456,
                          "decorators": [],
                          "name": "Control",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 464,
                  "end": 493,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 472,
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 473,
                    "end": 492,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 475,
                      "end": 492,
                      "types": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 475,
                          "end": 480
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 483,
                          "end": 492
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 423,
                "end": 432,
                "expression": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 432,
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 397,
              "end": 414,
              "decorators": [],
              "name": "PropsWithControls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 500,
            "end": 542,
            "body": {
              "type": "TSInterfaceBody",
              "start": 518,
              "end": 542,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 524,
                  "end": 538,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 529,
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 529,
                    "end": 537,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 531,
                      "end": 537
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 510,
              "end": 517,
              "decorators": [],
              "name": "Control",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 545,
            "end": 596,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 550,
              "end": 555,
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 558,
              "end": 595,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 558,
                  "end": 575,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 575,
                    "decorators": [],
                    "name": "PropsWithChildren",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 578,
                  "end": 595,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 595,
                    "decorators": [],
                    "name": "PropsWithControls",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 170,
        "decorators": [],
        "name": "DropdownMenu",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 599,
      "end": 667,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 666,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 666,
            "decorators": [],
            "name": "DropdownMenu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 625,
              "end": 666,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 627,
                "end": 666,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 646,
                  "end": 666,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 647,
                      "end": 665,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 647,
                        "end": 665,
                        "left": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 659,
                          "decorators": [],
                          "name": "DropdownMenu",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 660,
                          "end": 665,
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 627,
                  "end": 646,
                  "left": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 632,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 646,
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 669,
      "end": 837,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 669,
        "end": 836,
        "children": [
          {
            "type": "JSXText",
            "start": 722,
            "end": 725,
            "raw": "\n  ",
            "value": "\n  "
          },
          {
            "type": "JSXExpressionContainer",
            "start": 725,
            "end": 820,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 726,
              "end": 819,
              "async": false,
              "body": {
                "type": "JSXElement",
                "start": 749,
                "end": 815,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 754,
                    "end": 761,
                    "raw": "\n      ",
                    "value": "\n      "
                  },
                  {
                    "type": "JSXElement",
                    "start": 761,
                    "end": 804,
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 787,
                        "end": 795,
                        "raw": "Click me",
                        "value": "Click me"
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 795,
                      "end": 804,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 797,
                        "end": 803,
                        "name": "button"
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 761,
                      "end": 787,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "start": 769,
                          "end": 786,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 769,
                            "end": 776,
                            "name": "onClick"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "start": 777,
                            "end": 786,
                            "expression": {
                              "type": "Identifier",
                              "start": 778,
                              "end": 785,
                              "decorators": [],
                              "name": "onClose",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 762,
                        "end": 768,
                        "name": "button"
                      },
                      "selfClosing": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "JSXText",
                    "start": 804,
                    "end": 809,
                    "raw": "\n    ",
                    "value": "\n    "
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 809,
                  "end": 815,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 811,
                    "end": 814,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 749,
                  "end": 754,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 750,
                    "end": 753,
                    "name": "div"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 727,
                  "end": 738,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 729,
                      "end": 736,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 736,
                        "decorators": [],
                        "name": "onClose",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 736,
                        "decorators": [],
                        "name": "onClose",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "JSXText",
            "start": 820,
            "end": 821,
            "raw": "\n",
            "value": "\n"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 821,
          "end": 836,
          "name": {
            "type": "JSXIdentifier",
            "start": 823,
            "end": 835,
            "name": "DropdownMenu"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 669,
          "end": 722,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 683,
              "end": 694,
              "name": {
                "type": "JSXIdentifier",
                "start": 683,
                "end": 687,
                "name": "icon"
              },
              "value": {
                "type": "Literal",
                "start": 688,
                "end": 694,
                "raw": "\"move\"",
                "value": "move"
              }
            },
            {
              "type": "JSXAttribute",
              "start": 695,
              "end": 721,
              "name": {
                "type": "JSXIdentifier",
                "start": 695,
                "end": 700,
                "name": "label"
              },
              "value": {
                "type": "Literal",
                "start": 701,
                "end": 721,
                "raw": "\"Select a direction\"",
                "value": "Select a direction"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 670,
            "end": 682,
            "name": "DropdownMenu"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 839,
      "end": 1006,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 839,
        "end": 1005,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 839,
          "end": 1005,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 855,
              "end": 866,
              "name": {
                "type": "JSXIdentifier",
                "start": 855,
                "end": 859,
                "name": "icon"
              },
              "value": {
                "type": "Literal",
                "start": 860,
                "end": 866,
                "raw": "\"move\"",
                "value": "move"
              }
            },
            {
              "type": "JSXAttribute",
              "start": 869,
              "end": 895,
              "name": {
                "type": "JSXIdentifier",
                "start": 869,
                "end": 874,
                "name": "label"
              },
              "value": {
                "type": "Literal",
                "start": 875,
                "end": 895,
                "raw": "\"Select a direction\"",
                "value": "Select a direction"
              }
            },
            {
              "type": "JSXAttribute",
              "start": 898,
              "end": 1002,
              "name": {
                "type": "JSXIdentifier",
                "start": 898,
                "end": 906,
                "name": "children"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 907,
                "end": 1002,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 908,
                  "end": 1001,
                  "async": false,
                  "body": {
                    "type": "JSXElement",
                    "start": 931,
                    "end": 997,
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 936,
                        "end": 943,
                        "raw": "\n      ",
                        "value": "\n      "
                      },
                      {
                        "type": "JSXElement",
                        "start": 943,
                        "end": 986,
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 969,
                            "end": 977,
                            "raw": "Click me",
                            "value": "Click me"
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "start": 977,
                          "end": 986,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 979,
                            "end": 985,
                            "name": "button"
                          }
                        },
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 943,
                          "end": 969,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "start": 951,
                              "end": 968,
                              "name": {
                                "type": "JSXIdentifier",
                                "start": 951,
                                "end": 958,
                                "name": "onClick"
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "start": 959,
                                "end": 968,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 960,
                                  "end": 967,
                                  "decorators": [],
                                  "name": "onClose",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 944,
                            "end": 950,
                            "name": "button"
                          },
                          "selfClosing": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "JSXText",
                        "start": 986,
                        "end": 991,
                        "raw": "\n    ",
                        "value": "\n    "
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 991,
                      "end": 997,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 993,
                        "end": 996,
                        "name": "div"
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 931,
                      "end": 936,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 932,
                        "end": 935,
                        "name": "div"
                      },
                      "selfClosing": false,
                      "typeArguments": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 909,
                      "end": 920,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 911,
                          "end": 918,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 911,
                            "end": 918,
                            "decorators": [],
                            "name": "onClose",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 911,
                            "end": 918,
                            "decorators": [],
                            "name": "onClose",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
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
            "start": 840,
            "end": 852,
            "name": "DropdownMenu"
          },
          "selfClosing": true,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
