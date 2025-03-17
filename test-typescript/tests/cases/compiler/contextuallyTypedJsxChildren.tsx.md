__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 1007,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 140,
      "end": 598,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 170,
        "name": "DropdownMenu",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 171,
        "end": 598,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 175,
            "end": 237,
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 194,
              "name": "BaseProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 195,
              "end": 237,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 201,
                  "end": 214,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 205,
                    "name": "icon",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 207,
                      "end": 213
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 219,
                  "end": 233,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 224,
                    "name": "label",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 240,
            "end": 384,
            "id": {
              "type": "Identifier",
              "start": 250,
              "end": 267,
              "name": "PropsWithChildren",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 276,
                "end": 285,
                "expression": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 285,
                  "name": "BaseProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 286,
              "end": 384,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 292,
                  "end": 346,
                  "key": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 300,
                    "name": "children",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 301,
                      "end": 331,
                      "name": "props",
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 310,
                                "end": 317,
                                "name": "onClose",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 317,
                                "end": 329,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 319,
                                  "end": 329,
                                  "typeParameters": null,
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
                                  }
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
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 332,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 334,
                      "end": 345,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 334,
                        "end": 345,
                        "left": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 337,
                          "name": "JSX",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 345,
                          "name": "Element",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 351,
                  "end": 380,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 359,
                    "name": "controls",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 387,
            "end": 497,
            "id": {
              "type": "Identifier",
              "start": 397,
              "end": 414,
              "name": "PropsWithControls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 423,
                "end": 432,
                "expression": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 432,
                  "name": "BaseProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 433,
              "end": 497,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 439,
                  "end": 459,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 447,
                    "name": "controls",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 456,
                          "name": "Control",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 464,
                  "end": 493,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 472,
                    "name": "children",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 500,
            "end": 542,
            "id": {
              "type": "Identifier",
              "start": 510,
              "end": 517,
              "name": "Control",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 518,
              "end": 542,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 524,
                  "end": 538,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 524,
                    "end": 529,
                    "name": "title",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 529,
                    "end": 537,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 531,
                      "end": 537
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 545,
            "end": 596,
            "id": {
              "type": "Identifier",
              "start": 550,
              "end": 555,
              "name": "Props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 558,
              "end": 595,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 558,
                  "end": 575,
                  "typeName": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 575,
                    "name": "PropsWithChildren",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 578,
                  "end": 595,
                  "typeName": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 595,
                    "name": "PropsWithControls",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 666,
            "name": "DropdownMenu",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 625,
              "end": 666,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 627,
                "end": 666,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 627,
                  "end": 646,
                  "left": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 632,
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 646,
                    "name": "ComponentType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 646,
                  "end": 666,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 647,
                      "end": 665,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 647,
                        "end": 665,
                        "left": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 659,
                          "name": "DropdownMenu",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 660,
                          "end": 665,
                          "name": "Props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 669,
      "end": 837,
      "expression": {
        "type": "JSXElement",
        "start": 669,
        "end": 836,
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
                "value": "move",
                "raw": "\"move\""
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
                "value": "Select a direction",
                "raw": "\"Select a direction\""
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
        },
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
        "children": [
          {
            "type": "JSXText",
            "start": 722,
            "end": 725,
            "value": "\n  ",
            "raw": "\n  "
          },
          {
            "type": "JSXExpressionContainer",
            "start": 725,
            "end": 820,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 726,
              "end": 819,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 727,
                  "end": 738,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 729,
                      "end": 736,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 736,
                        "name": "onClose",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 736,
                        "name": "onClose",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "JSXElement",
                "start": 749,
                "end": 815,
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
                },
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
                "children": [
                  {
                    "type": "JSXText",
                    "start": 754,
                    "end": 761,
                    "value": "\n      ",
                    "raw": "\n      "
                  },
                  {
                    "type": "JSXElement",
                    "start": 761,
                    "end": 804,
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
                              "name": "onClose",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                    },
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
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 787,
                        "end": 795,
                        "value": "Click me",
                        "raw": "Click me"
                      }
                    ]
                  },
                  {
                    "type": "JSXText",
                    "start": 804,
                    "end": 809,
                    "value": "\n    ",
                    "raw": "\n    "
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          {
            "type": "JSXText",
            "start": 820,
            "end": 821,
            "value": "\n",
            "raw": "\n"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 839,
      "end": 1006,
      "expression": {
        "type": "JSXElement",
        "start": 839,
        "end": 1005,
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
                "value": "move",
                "raw": "\"move\""
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
                "value": "Select a direction",
                "raw": "\"Select a direction\""
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
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 909,
                      "end": 920,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 911,
                          "end": 918,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 911,
                            "end": 918,
                            "name": "onClose",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 911,
                            "end": 918,
                            "name": "onClose",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "JSXElement",
                    "start": 931,
                    "end": 997,
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
                    },
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
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 936,
                        "end": 943,
                        "value": "\n      ",
                        "raw": "\n      "
                      },
                      {
                        "type": "JSXElement",
                        "start": 943,
                        "end": 986,
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
                                  "name": "onClose",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                        },
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
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 969,
                            "end": 977,
                            "value": "Click me",
                            "raw": "Click me"
                          }
                        ]
                      },
                      {
                        "type": "JSXText",
                        "start": 986,
                        "end": 991,
                        "value": "\n    ",
                        "raw": "\n    "
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
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
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
