__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DropdownMenu",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 170
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 194
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "icon",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 205
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 207,
                      "end": 213
                    },
                    "start": 205,
                    "end": 213
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 201,
                  "end": 214
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "label",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 224
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    },
                    "start": 224,
                    "end": 232
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 219,
                  "end": 233
                }
              ],
              "start": 195,
              "end": 237
            },
            "declare": false,
            "start": 175,
            "end": 237
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsWithChildren",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 267
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 285
                },
                "typeArguments": null,
                "start": 276,
                "end": 285
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 300
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "onClose",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 310,
                                "end": 317
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 325,
                                      "end": 329
                                    },
                                    "start": 322,
                                    "end": 329
                                  },
                                  "start": 319,
                                  "end": 329
                                },
                                "start": 317,
                                "end": 329
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 310,
                              "end": 329
                            }
                          ],
                          "start": 308,
                          "end": 331
                        },
                        "start": 306,
                        "end": 331
                      },
                      "start": 301,
                      "end": 331
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 334,
                          "end": 337
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 338,
                          "end": 345
                        },
                        "start": 334,
                        "end": 345
                      },
                      "typeArguments": null,
                      "start": 334,
                      "end": 345
                    },
                    "start": 332,
                    "end": 345
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 292,
                  "end": 346
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "controls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 362,
                      "end": 379
                    },
                    "start": 360,
                    "end": 379
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 351,
                  "end": 380
                }
              ],
              "start": 286,
              "end": 384
            },
            "declare": false,
            "start": 240,
            "end": 384
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsWithControls",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 414
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 432
                },
                "typeArguments": null,
                "start": 423,
                "end": 432
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "controls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 447
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Control",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 449,
                          "end": 456
                        },
                        "typeArguments": null,
                        "start": 449,
                        "end": 456
                      },
                      "start": 449,
                      "end": 458
                    },
                    "start": 447,
                    "end": 458
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 439,
                  "end": 459
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 472
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 475,
                      "end": 492
                    },
                    "start": 473,
                    "end": 492
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 464,
                  "end": 493
                }
              ],
              "start": 433,
              "end": 497
            },
            "declare": false,
            "start": 387,
            "end": 497
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Control",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 517
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 529
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 531,
                      "end": 537
                    },
                    "start": 529,
                    "end": 537
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 524,
                  "end": 538
                }
              ],
              "start": 518,
              "end": 542
            },
            "declare": false,
            "start": 500,
            "end": 542
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 555
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropsWithChildren",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 575
                  },
                  "typeArguments": null,
                  "start": 558,
                  "end": 575
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropsWithControls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 595
                  },
                  "typeArguments": null,
                  "start": 578,
                  "end": 595
                }
              ],
              "start": 558,
              "end": 595
            },
            "declare": false,
            "start": 545,
            "end": 596
          }
        ],
        "start": 171,
        "end": 598
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 140,
      "end": 598
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "DropdownMenu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 632
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 646
                  },
                  "start": 627,
                  "end": 646
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DropdownMenu",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 647,
                          "end": 659
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 660,
                          "end": 665
                        },
                        "start": 647,
                        "end": 665
                      },
                      "typeArguments": null,
                      "start": 647,
                      "end": 665
                    }
                  ],
                  "start": 646,
                  "end": 666
                },
                "start": 627,
                "end": 666
              },
              "start": 625,
              "end": 666
            },
            "start": 613,
            "end": 666
          },
          "init": null,
          "definite": false,
          "start": 613,
          "end": 666
        }
      ],
      "declare": true,
      "start": 599,
      "end": 667
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "DropdownMenu",
            "start": 670,
            "end": 682
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "icon",
                "start": 683,
                "end": 687
              },
              "value": {
                "type": "Literal",
                "value": "move",
                "raw": "\"move\"",
                "start": 688,
                "end": 694
              },
              "start": 683,
              "end": 694
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "label",
                "start": 695,
                "end": 700
              },
              "value": {
                "type": "Literal",
                "value": "Select a direction",
                "raw": "\"Select a direction\"",
                "start": 701,
                "end": 721
              },
              "start": 695,
              "end": 721
            }
          ],
          "selfClosing": false,
          "start": 669,
          "end": 722
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n  ",
            "raw": "\n  ",
            "start": 722,
            "end": 725
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onClose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 736
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onClose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 736
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 729,
                      "end": 736
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 727,
                  "end": 738
                }
              ],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 750,
                    "end": 753
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 749,
                  "end": 754
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "\n      ",
                    "raw": "\n      ",
                    "start": 754,
                    "end": 761
                  },
                  {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 762,
                        "end": 768
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "onClick",
                            "start": 769,
                            "end": 776
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "onClose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 778,
                              "end": 785
                            },
                            "start": 777,
                            "end": 786
                          },
                          "start": 769,
                          "end": 786
                        }
                      ],
                      "selfClosing": false,
                      "start": 761,
                      "end": 787
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "Click me",
                        "raw": "Click me",
                        "start": 787,
                        "end": 795
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 797,
                        "end": 803
                      },
                      "start": 795,
                      "end": 804
                    },
                    "start": 761,
                    "end": 804
                  },
                  {
                    "type": "JSXText",
                    "value": "\n    ",
                    "raw": "\n    ",
                    "start": 804,
                    "end": 809
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 811,
                    "end": 814
                  },
                  "start": 809,
                  "end": 815
                },
                "start": 749,
                "end": 815
              },
              "id": null,
              "generator": false,
              "start": 726,
              "end": 819
            },
            "start": 725,
            "end": 820
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 820,
            "end": 821
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "DropdownMenu",
            "start": 823,
            "end": 835
          },
          "start": 821,
          "end": 836
        },
        "start": 669,
        "end": 836
      },
      "directive": null,
      "start": 669,
      "end": 837
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "DropdownMenu",
            "start": 840,
            "end": 852
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "icon",
                "start": 855,
                "end": 859
              },
              "value": {
                "type": "Literal",
                "value": "move",
                "raw": "\"move\"",
                "start": 860,
                "end": 866
              },
              "start": 855,
              "end": 866
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "label",
                "start": 869,
                "end": 874
              },
              "value": {
                "type": "Literal",
                "value": "Select a direction",
                "raw": "\"Select a direction\"",
                "start": 875,
                "end": 895
              },
              "start": 869,
              "end": 895
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "children",
                "start": 898,
                "end": 906
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onClose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 911,
                            "end": 918
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onClose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 911,
                            "end": 918
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 911,
                          "end": 918
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 909,
                      "end": 920
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 932,
                        "end": 935
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 931,
                      "end": 936
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "\n      ",
                        "raw": "\n      ",
                        "start": 936,
                        "end": 943
                      },
                      {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "button",
                            "start": 944,
                            "end": 950
                          },
                          "typeArguments": null,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "onClick",
                                "start": 951,
                                "end": 958
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "onClose",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 960,
                                  "end": 967
                                },
                                "start": 959,
                                "end": 968
                              },
                              "start": 951,
                              "end": 968
                            }
                          ],
                          "selfClosing": false,
                          "start": 943,
                          "end": 969
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "Click me",
                            "raw": "Click me",
                            "start": 969,
                            "end": 977
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "button",
                            "start": 979,
                            "end": 985
                          },
                          "start": 977,
                          "end": 986
                        },
                        "start": 943,
                        "end": 986
                      },
                      {
                        "type": "JSXText",
                        "value": "\n    ",
                        "raw": "\n    ",
                        "start": 986,
                        "end": 991
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 993,
                        "end": 996
                      },
                      "start": 991,
                      "end": 997
                    },
                    "start": 931,
                    "end": 997
                  },
                  "id": null,
                  "generator": false,
                  "start": 908,
                  "end": 1001
                },
                "start": 907,
                "end": 1002
              },
              "start": 898,
              "end": 1002
            }
          ],
          "selfClosing": true,
          "start": 839,
          "end": 1005
        },
        "children": [],
        "closingElement": null,
        "start": 839,
        "end": 1005
      },
      "directive": null,
      "start": 839,
      "end": 1006
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 1006
}
```
