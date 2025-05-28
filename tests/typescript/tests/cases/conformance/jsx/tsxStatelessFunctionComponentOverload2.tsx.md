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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 32,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 57,
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 72,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 72,
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
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 99,
        "decorators": [],
        "name": "OneThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 106,
                    "decorators": [],
                    "name": "yy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 106,
                    "end": 114,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 108,
                      "end": 114
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 116,
                  "end": 127,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 119,
                    "decorators": [],
                    "name": "yy1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 121,
                      "end": 127
                    }
                  },
                  "accessibility": null,
                  "static": false
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
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 187,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 187,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 165,
                  "end": 167,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 173,
                "end": 185,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 176,
                  "decorators": [],
                  "name": "yy1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 178,
                  "end": 185,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 216,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 216,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 210,
                  "end": 214,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 272,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 272,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 237,
                  "decorators": [],
                  "name": "yy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 239,
                  "end": 242,
                  "value": 500,
                  "raw": "500"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 248,
                "end": 270,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 248,
                  "end": 261,
                  "value": "ignore-prop",
                  "raw": "\"ignore-prop\""
                },
                "value": {
                  "type": "Literal",
                  "start": 263,
                  "end": 270,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 294,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 293,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 325,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 325,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 313,
              "end": 325,
              "name": {
                "type": "JSXIdentifier",
                "start": 314,
                "end": 322,
                "name": "OneThing"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 357,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 357,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 337,
              "end": 357,
              "name": {
                "type": "JSXIdentifier",
                "start": 338,
                "end": 346,
                "name": "OneThing"
              },
              "typeArguments": null,
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 389,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 389,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 369,
              "end": 389,
              "name": {
                "type": "JSXIdentifier",
                "start": 370,
                "end": 378,
                "name": "OneThing"
              },
              "typeArguments": null,
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 432,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 432,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 401,
              "end": 432,
              "name": {
                "type": "JSXIdentifier",
                "start": 402,
                "end": 410,
                "name": "OneThing"
              },
              "typeArguments": null,
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 490,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 490,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 444,
              "end": 490,
              "name": {
                "type": "JSXIdentifier",
                "start": 445,
                "end": 453,
                "name": "OneThing"
              },
              "typeArguments": null,
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
                      "value": 42,
                      "raw": "42"
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 477,
                          "end": 480,
                          "decorators": [],
                          "name": "yy1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 482,
                          "end": 486,
                          "value": "hi",
                          "raw": "\"hi\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 554,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 554,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 502,
              "end": 554,
              "name": {
                "type": "JSXIdentifier",
                "start": 503,
                "end": 511,
                "name": "OneThing"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 529,
                          "decorators": [],
                          "name": "yy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 531,
                          "end": 536,
                          "value": 10000,
                          "raw": "10000"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 538,
                        "end": 549,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 541,
                          "decorators": [],
                          "name": "yy1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 543,
                          "end": 549,
                          "value": "true",
                          "raw": "\"true\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 607,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 606,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 566,
              "end": 606,
              "name": {
                "type": "JSXIdentifier",
                "start": 567,
                "end": 575,
                "name": "OneThing"
              },
              "typeArguments": null,
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 691,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 656,
          "end": 691,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 661,
              "end": 691,
              "name": {
                "type": "JSXIdentifier",
                "start": 662,
                "end": 670,
                "name": "OneThing"
              },
              "typeArguments": null,
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
                      "value": 100,
                      "raw": "100"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 743,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 742,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 703,
              "end": 742,
              "name": {
                "type": "JSXIdentifier",
                "start": 704,
                "end": 712,
                "name": "OneThing"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "start": 719,
                          "end": 732,
                          "value": "ignore-prop",
                          "raw": "\"ignore-prop\""
                        },
                        "value": {
                          "type": "Literal",
                          "start": 733,
                          "end": 736,
                          "value": 200,
                          "raw": "200"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 744,
      "end": 789,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 750,
          "end": 788,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 756,
              "end": 788,
              "name": {
                "type": "JSXIdentifier",
                "start": 757,
                "end": 765,
                "name": "OneThing"
              },
              "typeArguments": null,
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
                    "value": "boo",
                    "raw": "\"boo\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
