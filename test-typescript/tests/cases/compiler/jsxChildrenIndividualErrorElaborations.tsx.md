__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 1293,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 131,
      "body": {
        "type": "TSInterfaceBody",
        "start": 93,
        "end": 131,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 129,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 105,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 128,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 107,
                "end": 128,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 108,
                    "end": 117,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 109,
                      "end": 117,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 111,
                        "end": 117
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 119,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 122,
                    "end": 128
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
        "start": 87,
        "end": 92,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 187,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 140,
        "end": 187,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 168,
          "end": 187,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 172,
              "end": 185,
              "argument": {
                "type": "JSXFragment",
                "start": 179,
                "end": 184,
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 181,
                  "end": 184
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 179,
                  "end": 181
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 149,
          "end": 153,
          "decorators": [],
          "name": "Blah",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 154,
            "end": 166,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 166,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 166,
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 220,
            "end": 245,
            "children": [
              {
                "type": "JSXText",
                "start": 226,
                "end": 229,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 229,
                "end": 237,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 230,
                  "end": 236,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 237,
                "end": 238,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 238,
              "end": 245,
              "name": {
                "type": "JSXIdentifier",
                "start": 240,
                "end": 244,
                "name": "Blah"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 220,
              "end": 226,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 221,
                "end": 225,
                "name": "Blah"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 310,
            "end": 349,
            "children": [
              {
                "type": "JSXText",
                "start": 316,
                "end": 342,
                "raw": "\n  Hello unexpected text!\n",
                "value": "\n  Hello unexpected text!\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 342,
              "end": 349,
              "name": {
                "type": "JSXIdentifier",
                "start": 344,
                "end": 348,
                "name": "Blah"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 310,
              "end": 316,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 311,
                "end": 315,
                "name": "Blah"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 407,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 410,
            "end": 456,
            "children": [
              {
                "type": "JSXText",
                "start": 416,
                "end": 419,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 419,
                "end": 432,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 420,
                  "end": 431,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 425,
                    "end": 431,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 425,
                      "end": 427,
                      "raw": "\"\"",
                      "value": ""
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 431,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 420,
                      "end": 421,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 432,
                "end": 435,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 435,
                "end": 448,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 436,
                  "end": 447,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 441,
                    "end": 447,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 441,
                      "end": 443,
                      "raw": "\"\"",
                      "value": ""
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 447,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 436,
                      "end": 437,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 448,
                "end": 449,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 449,
              "end": 456,
              "name": {
                "type": "JSXIdentifier",
                "start": 451,
                "end": 455,
                "name": "Blah"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 410,
              "end": 416,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 411,
                "end": 415,
                "name": "Blah"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 458,
      "end": 519,
      "body": {
        "type": "TSInterfaceBody",
        "start": 477,
        "end": 519,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 481,
            "end": 517,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 481,
              "end": 489,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 489,
              "end": 516,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 491,
                "end": 516,
                "elementType": {
                  "type": "TSFunctionType",
                  "start": 492,
                  "end": 513,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 493,
                      "end": 502,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 494,
                        "end": 502,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 496,
                          "end": 502
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 504,
                    "end": 513,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 507,
                      "end": 513
                    }
                  },
                  "typeParameters": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 476,
        "decorators": [],
        "name": "PropsArr",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 521,
      "end": 579,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 528,
        "end": 579,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 560,
          "end": 579,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 564,
              "end": 577,
              "argument": {
                "type": "JSXFragment",
                "start": 571,
                "end": 576,
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 573,
                  "end": 576
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 571,
                  "end": 573
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 537,
          "end": 542,
          "decorators": [],
          "name": "Blah2",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 543,
            "end": 558,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 548,
              "end": 558,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 550,
                "end": 558,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 558,
                  "decorators": [],
                  "name": "PropsArr",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 604,
      "end": 639,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 639,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 612,
            "end": 639,
            "children": [
              {
                "type": "JSXText",
                "start": 619,
                "end": 622,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 622,
                "end": 630,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 623,
                  "end": 629,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 629,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 623,
                      "end": 624,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 630,
                "end": 631,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 631,
              "end": 639,
              "name": {
                "type": "JSXIdentifier",
                "start": 633,
                "end": 638,
                "name": "Blah2"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 612,
              "end": 619,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 613,
                "end": 618,
                "name": "Blah2"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 697,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 701,
          "end": 746,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 701,
            "end": 702,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 705,
            "end": 746,
            "children": [
              {
                "type": "JSXText",
                "start": 712,
                "end": 738,
                "raw": "\n  Hello unexpected text!\n",
                "value": "\n  Hello unexpected text!\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 738,
              "end": 746,
              "name": {
                "type": "JSXIdentifier",
                "start": 740,
                "end": 745,
                "name": "Blah2"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 705,
              "end": 712,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 706,
                "end": 711,
                "name": "Blah2"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 818,
      "end": 864,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 864,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 823,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 826,
            "end": 864,
            "children": [
              {
                "type": "JSXText",
                "start": 833,
                "end": 836,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 836,
                "end": 844,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 837,
                  "end": 843,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 843,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 837,
                      "end": 838,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 844,
                "end": 847,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 847,
                "end": 855,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 848,
                  "end": 854,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 853,
                    "end": 854,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 848,
                      "end": 849,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 855,
                "end": 856,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 856,
              "end": 864,
              "name": {
                "type": "JSXIdentifier",
                "start": 858,
                "end": 863,
                "name": "Blah2"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 826,
              "end": 833,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 827,
                "end": 832,
                "name": "Blah2"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 866,
      "end": 898,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 871,
        "end": 873,
        "decorators": [],
        "name": "Cb",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 876,
        "end": 897,
        "params": [
          {
            "type": "Identifier",
            "start": 877,
            "end": 886,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 878,
              "end": 886,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 880,
                "end": 886
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 888,
          "end": 897,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 891,
            "end": 897
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 899,
      "end": 946,
      "body": {
        "type": "TSInterfaceBody",
        "start": 920,
        "end": 946,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 924,
            "end": 944,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 924,
              "end": 932,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 932,
              "end": 943,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 934,
                "end": 943,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 934,
                    "end": 936,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 934,
                      "end": 936,
                      "decorators": [],
                      "name": "Cb",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 939,
                    "end": 943,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 939,
                      "end": 941,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 939,
                        "end": 941,
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 909,
        "end": 919,
        "decorators": [],
        "name": "PropsMixed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 948,
      "end": 1008,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 955,
        "end": 1008,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 989,
          "end": 1008,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 993,
              "end": 1006,
              "argument": {
                "type": "JSXFragment",
                "start": 1000,
                "end": 1005,
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 1002,
                  "end": 1005
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 1000,
                  "end": 1002
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 964,
          "end": 969,
          "decorators": [],
          "name": "Blah3",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 970,
            "end": 987,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 975,
              "end": 987,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 977,
                "end": 987,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 987,
                  "decorators": [],
                  "name": "PropsMixed",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1033,
      "end": 1068,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1037,
          "end": 1068,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1037,
            "end": 1038,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1041,
            "end": 1068,
            "children": [
              {
                "type": "JSXText",
                "start": 1048,
                "end": 1051,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 1051,
                "end": 1059,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 1052,
                  "end": 1058,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1052,
                      "end": 1053,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 1059,
                "end": 1060,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1060,
              "end": 1068,
              "name": {
                "type": "JSXIdentifier",
                "start": 1062,
                "end": 1067,
                "name": "Blah3"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1041,
              "end": 1048,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 1042,
                "end": 1047,
                "name": "Blah3"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1126,
      "end": 1175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1130,
          "end": 1175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1130,
            "end": 1131,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1134,
            "end": 1175,
            "children": [
              {
                "type": "JSXText",
                "start": 1141,
                "end": 1167,
                "raw": "\n  Hello unexpected text!\n",
                "value": "\n  Hello unexpected text!\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1167,
              "end": 1175,
              "name": {
                "type": "JSXIdentifier",
                "start": 1169,
                "end": 1174,
                "name": "Blah3"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1134,
              "end": 1141,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 1135,
                "end": 1140,
                "name": "Blah3"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1247,
      "end": 1293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1251,
          "end": 1293,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1251,
            "end": 1252,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1255,
            "end": 1293,
            "children": [
              {
                "type": "JSXText",
                "start": 1262,
                "end": 1265,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 1265,
                "end": 1273,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 1266,
                  "end": 1272,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1271,
                    "end": 1272,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1266,
                      "end": 1267,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 1273,
                "end": 1276,
                "raw": "\n  ",
                "value": "\n  "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 1276,
                "end": 1284,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 1277,
                  "end": 1283,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1282,
                    "end": 1283,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1277,
                      "end": 1278,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "JSXText",
                "start": 1284,
                "end": 1285,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 1285,
              "end": 1293,
              "name": {
                "type": "JSXIdentifier",
                "start": 1287,
                "end": 1292,
                "name": "Blah3"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1255,
              "end": 1262,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 1256,
                "end": 1261,
                "name": "Blah3"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
