__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 789,
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
      "start": 32,
      "end": 73,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 57,
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 72,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 72,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 61,
            "end": 72,
            "left": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 65,
              "end": 72,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 143,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 99,
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 100,
          "end": 128,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 101,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 103,
              "end": 128,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 104,
                  "end": 115,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 106,
                    "decorators": [],
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 106,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 108,
                      "end": 114
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 116,
                  "end": 127,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 119,
                    "decorators": [],
                    "name": "yy1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 121,
                      "end": 127
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
        "start": 129,
        "end": 142,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 142,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 131,
            "end": 142,
            "left": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 135,
              "end": 142,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 152,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 155,
            "end": 187,
            "properties": [
              {
                "type": "Property",
                "start": 161,
                "end": 167,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 165,
                  "end": 167,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 173,
                "end": 185,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "decorators": [],
                  "name": "yy1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 178,
                  "end": 185,
                  "raw": "\"hello\"",
                  "value": "hello"
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
      "start": 189,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 216,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 197,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 200,
            "end": 216,
            "properties": [
              {
                "type": "Property",
                "start": 206,
                "end": 214,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 210,
                  "end": 214,
                  "raw": "true",
                  "value": true
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
      "start": 218,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 229,
            "end": 272,
            "properties": [
              {
                "type": "Property",
                "start": 235,
                "end": 242,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 237,
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 239,
                  "end": 242,
                  "raw": "500",
                  "value": 500
                }
              },
              {
                "type": "Property",
                "start": 248,
                "end": 270,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 248,
                  "end": 261,
                  "raw": "\"ignore-prop\"",
                  "value": "ignore-prop"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 263,
                  "end": 270,
                  "raw": "\"hello\"",
                  "value": "hello"
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
      "start": 274,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 293,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 293,
            "decorators": [],
            "name": "defaultObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 293,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 290,
                "end": 293
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 310,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 313,
            "end": 325,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 313,
              "end": 325,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 314,
                "end": 322,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 337,
            "end": 357,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 337,
              "end": 357,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 347,
                  "end": 355,
                  "argument": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 354,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 338,
                "end": 346,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 389,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 366,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 369,
            "end": 389,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 369,
              "end": 389,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 379,
                  "end": 386,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 383,
                    "end": 385,
                    "properties": []
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 370,
                "end": 378,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 432,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 398,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 401,
            "end": 432,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 401,
              "end": 432,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 411,
                  "end": 420,
                  "argument": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 419,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 421,
                  "end": 429,
                  "argument": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 428,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 402,
                "end": 410,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 490,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 441,
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 444,
            "end": 490,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 444,
              "end": 490,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 454,
                  "end": 463,
                  "argument": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 462,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 464,
                  "end": 471,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 464,
                    "end": 466,
                    "name": "yy"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 467,
                    "end": 471,
                    "expression": {
                      "type": "Literal",
                      "start": 468,
                      "end": 470,
                      "raw": "42",
                      "value": 42
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 472,
                  "end": 488,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 476,
                    "end": 487,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 477,
                        "end": 486,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 480,
                          "decorators": [],
                          "name": "yy1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 482,
                          "end": 486,
                          "raw": "\"hi\"",
                          "value": "hi"
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 445,
                "end": 453,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 554,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 499,
            "decorators": [],
            "name": "c6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 502,
            "end": 554,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 502,
              "end": 554,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 512,
                  "end": 521,
                  "argument": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 520,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 522,
                  "end": 551,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 526,
                    "end": 550,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 527,
                        "end": 536,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 529,
                          "decorators": [],
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 531,
                          "end": 536,
                          "raw": "10000",
                          "value": 10000
                        }
                      },
                      {
                        "type": "Property",
                        "start": 538,
                        "end": 549,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 541,
                          "decorators": [],
                          "name": "yy1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 543,
                          "end": 549,
                          "raw": "\"true\"",
                          "value": "true"
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 503,
                "end": 511,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 606,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 563,
            "decorators": [],
            "name": "c7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 566,
            "end": 606,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 566,
              "end": 606,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 576,
                  "end": 591,
                  "argument": {
                    "type": "Identifier",
                    "start": 580,
                    "end": 590,
                    "decorators": [],
                    "name": "defaultObj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 592,
                  "end": 594,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 592,
                    "end": 594,
                    "name": "yy"
                  },
                  "value": null
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 595,
                  "end": 603,
                  "argument": {
                    "type": "Identifier",
                    "start": 599,
                    "end": 602,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 567,
                "end": 575,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 656,
          "end": 691,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 656,
            "end": 658,
            "decorators": [],
            "name": "c8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 661,
            "end": 691,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 661,
              "end": 691,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 671,
                  "end": 688,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 671,
                    "end": 682,
                    "name": "ignore-prop"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 683,
                    "end": 688,
                    "expression": {
                      "type": "Literal",
                      "start": 684,
                      "end": 687,
                      "raw": "100",
                      "value": 100
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 662,
                "end": 670,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 742,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 700,
            "decorators": [],
            "name": "c9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 703,
            "end": 742,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 703,
              "end": 742,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 713,
                  "end": 739,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 717,
                    "end": 738,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 719,
                        "end": 736,
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "start": 719,
                          "end": 732,
                          "raw": "\"ignore-prop\"",
                          "value": "ignore-prop"
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 733,
                          "end": 736,
                          "raw": "200",
                          "value": 200
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 704,
                "end": 712,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 744,
      "end": 789,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 750,
          "end": 788,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 750,
            "end": 753,
            "decorators": [],
            "name": "c10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 756,
            "end": 788,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 756,
              "end": 788,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 766,
                  "end": 775,
                  "argument": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 774,
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 776,
                  "end": 785,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 776,
                    "end": 779,
                    "name": "yy1"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 780,
                    "end": 785,
                    "raw": "\"boo\"",
                    "value": "boo"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 757,
                "end": 765,
                "name": "OneThing"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
