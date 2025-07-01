__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 92
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
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 111,
                        "end": 117
                      },
                      "start": 109,
                      "end": 117
                    },
                    "start": 108,
                    "end": 117
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 122,
                    "end": 128
                  },
                  "start": 119,
                  "end": 128
                },
                "start": 107,
                "end": 128
              },
              "start": 105,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 97,
            "end": 129
          }
        ],
        "start": 93,
        "end": 131
      },
      "declare": false,
      "start": 77,
      "end": 131
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 153
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 166
                },
                "typeArguments": null,
                "start": 161,
                "end": 166
              },
              "start": 159,
              "end": 166
            },
            "start": 154,
            "end": 166
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 179,
                  "end": 181
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 181,
                  "end": 184
                },
                "start": 179,
                "end": 184
              },
              "start": 172,
              "end": 185
            }
          ],
          "start": 168,
          "end": 187
        },
        "expression": false,
        "start": 140,
        "end": 187
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 133,
      "end": 187
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 221,
                "end": 225
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 220,
              "end": 226
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 226,
                "end": 229
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "id": null,
                  "generator": false,
                  "start": 230,
                  "end": 236
                },
                "start": 229,
                "end": 237
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 237,
                "end": 238
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 240,
                "end": 244
              },
              "start": 238,
              "end": 245
            },
            "start": 220,
            "end": 245
          },
          "definite": false,
          "start": 216,
          "end": 245
        }
      ],
      "declare": false,
      "start": 212,
      "end": 245
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 311,
                "end": 315
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 310,
              "end": 316
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  Hello unexpected text!\n",
                "raw": "\n  Hello unexpected text!\n",
                "start": 316,
                "end": 342
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 344,
                "end": 348
              },
              "start": 342,
              "end": 349
            },
            "start": 310,
            "end": 349
          },
          "definite": false,
          "start": 306,
          "end": 349
        }
      ],
      "declare": false,
      "start": 302,
      "end": 349
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 407
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 411,
                "end": 415
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 410,
              "end": 416
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 416,
                "end": 419
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 421
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 425,
                      "end": 427
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 431
                    },
                    "start": 425,
                    "end": 431
                  },
                  "id": null,
                  "generator": false,
                  "start": 420,
                  "end": 431
                },
                "start": 419,
                "end": 432
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 432,
                "end": 435
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 437
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 441,
                      "end": 443
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 447
                    },
                    "start": 441,
                    "end": 447
                  },
                  "id": null,
                  "generator": false,
                  "start": 436,
                  "end": 447
                },
                "start": 435,
                "end": 448
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 448,
                "end": 449
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah",
                "start": 451,
                "end": 455
              },
              "start": 449,
              "end": 456
            },
            "start": 410,
            "end": 456
          },
          "definite": false,
          "start": 406,
          "end": 456
        }
      ],
      "declare": false,
      "start": 402,
      "end": 456
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsArr",
        "optional": false,
        "typeAnnotation": null,
        "start": 468,
        "end": 476
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
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 489
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 496,
                          "end": 502
                        },
                        "start": 494,
                        "end": 502
                      },
                      "start": 493,
                      "end": 502
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 507,
                      "end": 513
                    },
                    "start": 504,
                    "end": 513
                  },
                  "start": 492,
                  "end": 513
                },
                "start": 491,
                "end": 516
              },
              "start": 489,
              "end": 516
            },
            "accessibility": null,
            "static": false,
            "start": 481,
            "end": 517
          }
        ],
        "start": 477,
        "end": 519
      },
      "declare": false,
      "start": 458,
      "end": 519
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blah2",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 542
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropsArr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 558
                },
                "typeArguments": null,
                "start": 550,
                "end": 558
              },
              "start": 548,
              "end": 558
            },
            "start": 543,
            "end": 558
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 571,
                  "end": 573
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 573,
                  "end": 576
                },
                "start": 571,
                "end": 576
              },
              "start": 564,
              "end": 577
            }
          ],
          "start": 560,
          "end": 579
        },
        "expression": false,
        "start": 528,
        "end": 579
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 521,
      "end": 579
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 609
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 613,
                "end": 618
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 612,
              "end": 619
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 619,
                "end": 622
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 623,
                      "end": 624
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 629
                  },
                  "id": null,
                  "generator": false,
                  "start": 623,
                  "end": 629
                },
                "start": 622,
                "end": 630
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 630,
                "end": 631
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 633,
                "end": 638
              },
              "start": 631,
              "end": 639
            },
            "start": 612,
            "end": 639
          },
          "definite": false,
          "start": 608,
          "end": 639
        }
      ],
      "declare": false,
      "start": 604,
      "end": 639
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 702
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 706,
                "end": 711
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 705,
              "end": 712
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  Hello unexpected text!\n",
                "raw": "\n  Hello unexpected text!\n",
                "start": 712,
                "end": 738
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 740,
                "end": 745
              },
              "start": 738,
              "end": 746
            },
            "start": 705,
            "end": 746
          },
          "definite": false,
          "start": 701,
          "end": 746
        }
      ],
      "declare": false,
      "start": 697,
      "end": 746
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 823
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 827,
                "end": 832
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 826,
              "end": 833
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 833,
                "end": 836
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 838
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 843
                  },
                  "id": null,
                  "generator": false,
                  "start": 837,
                  "end": 843
                },
                "start": 836,
                "end": 844
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 844,
                "end": 847
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 848,
                      "end": 849
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 853,
                    "end": 854
                  },
                  "id": null,
                  "generator": false,
                  "start": 848,
                  "end": 854
                },
                "start": 847,
                "end": 855
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 855,
                "end": 856
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah2",
                "start": 858,
                "end": 863
              },
              "start": 856,
              "end": 864
            },
            "start": 826,
            "end": 864
          },
          "definite": false,
          "start": 822,
          "end": 864
        }
      ],
      "declare": false,
      "start": 818,
      "end": 864
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cb",
        "optional": false,
        "typeAnnotation": null,
        "start": 871,
        "end": 873
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 880,
                "end": 886
              },
              "start": 878,
              "end": 886
            },
            "start": 877,
            "end": 886
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 891,
            "end": 897
          },
          "start": 888,
          "end": 897
        },
        "start": 876,
        "end": 897
      },
      "declare": false,
      "start": 866,
      "end": 898
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 919
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
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 934,
                      "end": 936
                    },
                    "typeArguments": null,
                    "start": 934,
                    "end": 936
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 939,
                        "end": 941
                      },
                      "typeArguments": null,
                      "start": 939,
                      "end": 941
                    },
                    "start": 939,
                    "end": 943
                  }
                ],
                "start": 934,
                "end": 943
              },
              "start": 932,
              "end": 943
            },
            "accessibility": null,
            "static": false,
            "start": 924,
            "end": 944
          }
        ],
        "start": 920,
        "end": 946
      },
      "declare": false,
      "start": 899,
      "end": 946
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blah3",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 969
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropsMixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 987
                },
                "typeArguments": null,
                "start": 977,
                "end": 987
              },
              "start": 975,
              "end": 987
            },
            "start": 970,
            "end": 987
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 1000,
                  "end": 1002
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 1002,
                  "end": 1005
                },
                "start": 1000,
                "end": 1005
              },
              "start": 993,
              "end": 1006
            }
          ],
          "start": 989,
          "end": 1008
        },
        "expression": false,
        "start": 955,
        "end": 1008
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 948,
      "end": 1008
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1038
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1042,
                "end": 1047
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 1041,
              "end": 1048
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 1048,
                "end": 1051
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1052,
                      "end": 1053
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1057,
                    "end": 1058
                  },
                  "id": null,
                  "generator": false,
                  "start": 1052,
                  "end": 1058
                },
                "start": 1051,
                "end": 1059
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 1059,
                "end": 1060
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1062,
                "end": 1067
              },
              "start": 1060,
              "end": 1068
            },
            "start": 1041,
            "end": 1068
          },
          "definite": false,
          "start": 1037,
          "end": 1068
        }
      ],
      "declare": false,
      "start": 1033,
      "end": 1068
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1130,
            "end": 1131
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1135,
                "end": 1140
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 1134,
              "end": 1141
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  Hello unexpected text!\n",
                "raw": "\n  Hello unexpected text!\n",
                "start": 1141,
                "end": 1167
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1169,
                "end": 1174
              },
              "start": 1167,
              "end": 1175
            },
            "start": 1134,
            "end": 1175
          },
          "definite": false,
          "start": 1130,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1126,
      "end": 1175
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1251,
            "end": 1252
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1256,
                "end": 1261
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 1255,
              "end": 1262
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 1262,
                "end": 1265
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1266,
                      "end": 1267
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1271,
                    "end": 1272
                  },
                  "id": null,
                  "generator": false,
                  "start": 1266,
                  "end": 1272
                },
                "start": 1265,
                "end": 1273
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 1273,
                "end": 1276
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1277,
                      "end": 1278
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1282,
                    "end": 1283
                  },
                  "id": null,
                  "generator": false,
                  "start": 1277,
                  "end": 1283
                },
                "start": 1276,
                "end": 1284
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 1284,
                "end": 1285
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Blah3",
                "start": 1287,
                "end": 1292
              },
              "start": 1285,
              "end": 1293
            },
            "start": 1255,
            "end": 1293
          },
          "definite": false,
          "start": 1251,
          "end": 1293
        }
      ],
      "declare": false,
      "start": 1247,
      "end": 1293
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 1293
}
```
