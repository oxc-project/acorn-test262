__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 880,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 117,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 117,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 65,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 115,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "decorators": [],
              "name": "children",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 115,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 95,
                "end": 115,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 115,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 104,
                      "end": 115,
                      "left": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 107,
                        "decorators": [],
                        "name": "JSX",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 115,
                        "decorators": [],
                        "name": "Element",
                        "optional": false
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
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Prop",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 119,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 142,
        "end": 174,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 148,
            "end": 172,
            "argument": {
              "type": "JSXElement",
              "start": 155,
              "end": 171,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 160,
                  "end": 165,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 161,
                    "end": 164,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "decorators": [],
                      "name": "p",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 165,
                "end": 171,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 167,
                  "end": 170,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 155,
                "end": 160,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 156,
                  "end": 159,
                  "name": "div"
                },
                "selfClosing": false
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
        "start": 128,
        "end": 132,
        "decorators": [],
        "name": "Comp",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 133,
          "end": 140,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 140,
                "decorators": [],
                "name": "Prop",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 208,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 211,
            "end": 233,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 211,
              "end": 233,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 217,
                  "end": 223,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 217,
                    "end": 218,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 219,
                    "end": 223,
                    "expression": {
                      "type": "Literal",
                      "start": 220,
                      "end": 222,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 224,
                  "end": 230,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 224,
                    "end": 225,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 226,
                    "end": 230,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 212,
                "end": 216,
                "name": "Comp"
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
      "start": 236,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 242,
            "decorators": [],
            "name": "k0",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 249,
            "end": 318,
            "children": [
              {
                "type": "JSXText",
                "start": 288,
                "end": 311,
                "raw": "\n        hi hi hi!\n    ",
                "value": "\n        hi hi hi!\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 311,
              "end": 318,
              "name": {
                "type": "JSXIdentifier",
                "start": 313,
                "end": 317,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 249,
              "end": 288,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 255,
                  "end": 261,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 255,
                    "end": 256,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 257,
                    "end": 261,
                    "expression": {
                      "type": "Literal",
                      "start": 258,
                      "end": 260,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 262,
                  "end": 268,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 262,
                    "end": 263,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 264,
                    "end": 268,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 269,
                  "end": 286,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 269,
                    "end": 277,
                    "name": "children"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 278,
                    "end": 286,
                    "raw": "\"Random\"",
                    "value": "Random"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 250,
                "end": 254,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 326,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 329,
            "end": 355,
            "properties": [
              {
                "type": "Property",
                "start": 336,
                "end": 353,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 344,
                  "decorators": [],
                  "name": "children",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 345,
                  "end": 353,
                  "raw": "\"Random\"",
                  "value": "Random"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 362,
            "decorators": [],
            "name": "k1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 369,
            "end": 427,
            "children": [
              {
                "type": "JSXText",
                "start": 397,
                "end": 420,
                "raw": "\n        hi hi hi!\n    ",
                "value": "\n        hi hi hi!\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 420,
              "end": 427,
              "name": {
                "type": "JSXIdentifier",
                "start": 422,
                "end": 426,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 369,
              "end": 397,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 375,
                  "end": 381,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 375,
                    "end": 376,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 377,
                    "end": 381,
                    "expression": {
                      "type": "Literal",
                      "start": 378,
                      "end": 380,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 382,
                  "end": 388,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 382,
                    "end": 383,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 384,
                    "end": 388,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 389,
                  "end": 395,
                  "argument": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "decorators": [],
                    "name": "o",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 370,
                "end": 374,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 455,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 584,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 461,
            "decorators": [],
            "name": "k2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 468,
            "end": 584,
            "children": [
              {
                "type": "JSXText",
                "start": 488,
                "end": 497,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 497,
                "end": 516,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 502,
                    "end": 510,
                    "raw": " My Div ",
                    "value": " My Div "
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 510,
                  "end": 516,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 512,
                    "end": 515,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 497,
                  "end": 502,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 498,
                    "end": 501,
                    "name": "div"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 516,
                "end": 525,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 525,
                "end": 572,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 526,
                  "end": 571,
                  "async": false,
                  "body": {
                    "type": "JSXElement",
                    "start": 544,
                    "end": 571,
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 549,
                        "end": 558,
                        "raw": " My name ",
                        "value": " My name "
                      },
                      {
                        "type": "JSXExpressionContainer",
                        "start": 558,
                        "end": 564,
                        "expression": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 563,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXText",
                        "start": 564,
                        "end": 565,
                        "raw": " ",
                        "value": " "
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 565,
                      "end": 571,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 567,
                        "end": 570,
                        "name": "div"
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 544,
                      "end": 549,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 545,
                        "end": 548,
                        "name": "div"
                      },
                      "selfClosing": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 527,
                      "end": 539,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 531,
                        "end": 539,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 533,
                          "end": 539
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "JSXText",
                "start": 572,
                "end": 577,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 577,
              "end": 584,
              "name": {
                "type": "JSXIdentifier",
                "start": 579,
                "end": 583,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 468,
              "end": 488,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 474,
                  "end": 480,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 474,
                    "end": 475,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 476,
                    "end": 480,
                    "expression": {
                      "type": "Literal",
                      "start": 477,
                      "end": 479,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 481,
                  "end": 487,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 481,
                    "end": 482,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 483,
                    "end": 487,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 469,
                "end": 473,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 678,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 593,
            "decorators": [],
            "name": "k3",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 600,
            "end": 678,
            "children": [
              {
                "type": "JSXText",
                "start": 620,
                "end": 629,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 629,
                "end": 648,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 634,
                    "end": 642,
                    "raw": " My Div ",
                    "value": " My Div "
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 642,
                  "end": 648,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 644,
                    "end": 647,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 629,
                  "end": 634,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 630,
                    "end": 633,
                    "name": "div"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 648,
                "end": 657,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 657,
                "end": 666,
                "expression": {
                  "type": "Literal",
                  "start": 658,
                  "end": 665,
                  "raw": "1000000",
                  "value": 1000000
                }
              },
              {
                "type": "JSXText",
                "start": 666,
                "end": 671,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 671,
              "end": 678,
              "name": {
                "type": "JSXIdentifier",
                "start": 673,
                "end": 677,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 600,
              "end": 620,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 606,
                  "end": 612,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 606,
                    "end": 607,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 608,
                    "end": 612,
                    "expression": {
                      "type": "Literal",
                      "start": 609,
                      "end": 611,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 613,
                  "end": 619,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 613,
                    "end": 614,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 615,
                    "end": 619,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 601,
                "end": 605,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 681,
      "end": 774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 685,
          "end": 773,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 687,
            "decorators": [],
            "name": "k4",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 694,
            "end": 773,
            "children": [
              {
                "type": "JSXText",
                "start": 715,
                "end": 724,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 724,
                "end": 743,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 729,
                    "end": 737,
                    "raw": " My Div ",
                    "value": " My Div "
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 737,
                  "end": 743,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 739,
                    "end": 742,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 724,
                  "end": 729,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 725,
                    "end": 728,
                    "name": "div"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 743,
                "end": 766,
                "raw": "\n        hi hi hi!\n    ",
                "value": "\n        hi hi hi!\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 766,
              "end": 773,
              "name": {
                "type": "JSXIdentifier",
                "start": 768,
                "end": 772,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 694,
              "end": 715,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 700,
                  "end": 706,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 700,
                    "end": 701,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 702,
                    "end": 706,
                    "expression": {
                      "type": "Literal",
                      "start": 703,
                      "end": 705,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 707,
                  "end": 713,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 707,
                    "end": 708,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 709,
                    "end": 713,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 695,
                "end": 699,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 776,
      "end": 879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 878,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 782,
            "decorators": [],
            "name": "k5",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 789,
            "end": 878,
            "children": [
              {
                "type": "JSXText",
                "start": 810,
                "end": 819,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 819,
                "end": 838,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 824,
                    "end": 832,
                    "raw": " My Div ",
                    "value": " My Div "
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 832,
                  "end": 838,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 834,
                    "end": 837,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 819,
                  "end": 824,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 820,
                    "end": 823,
                    "name": "div"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 838,
                "end": 847,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 847,
                "end": 866,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 852,
                    "end": 860,
                    "raw": " My Div ",
                    "value": " My Div "
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 860,
                  "end": 866,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 862,
                    "end": 865,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 847,
                  "end": 852,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 848,
                    "end": 851,
                    "name": "div"
                  },
                  "selfClosing": false
                }
              },
              {
                "type": "JSXText",
                "start": 866,
                "end": 871,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 871,
              "end": 878,
              "name": {
                "type": "JSXIdentifier",
                "start": 873,
                "end": 877,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 789,
              "end": 810,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 795,
                  "end": 801,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 795,
                    "end": 796,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 797,
                    "end": 801,
                    "expression": {
                      "type": "Literal",
                      "start": 798,
                      "end": 800,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 802,
                  "end": 808,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 802,
                    "end": 803,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 804,
                    "end": 808,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 790,
                "end": 794,
                "name": "Comp"
              },
              "selfClosing": false
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
