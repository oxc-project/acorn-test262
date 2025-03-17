__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 619,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 46,
            "end": 48,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 68,
            "name": "obj1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 62,
                "end": 68,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 63,
                    "end": 67,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 67,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 66,
                        "end": 67,
                        "literal": {
                          "type": "Literal",
                          "start": 66,
                          "end": 67,
                          "value": 2,
                          "raw": "2"
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
          },
          "init": {
            "type": "ObjectExpression",
            "start": 71,
            "end": 83,
            "properties": [
              {
                "type": "Property",
                "start": 77,
                "end": 81,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 81,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 125,
            "name": "obj3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 96,
                "end": 125,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 106,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 98,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 100,
                        "end": 105,
                        "literal": {
                          "type": "Literal",
                          "start": 100,
                          "end": 105,
                          "value": false,
                          "raw": "false"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 107,
                    "end": 124,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 116,
                      "name": "overwrite",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 116,
                      "end": 124,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 118,
                        "end": 124
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
          },
          "init": {
            "type": "ObjectExpression",
            "start": 128,
            "end": 165,
            "properties": [
              {
                "type": "Property",
                "start": 134,
                "end": 142,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 137,
                  "end": 142,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 148,
                "end": 163,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 157,
                  "name": "overwrite",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 163,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 167,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 181,
        "name": "Prop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 182,
        "end": 229,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 188,
            "end": 192,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 192,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 191,
                "end": 192,
                "literal": {
                  "type": "Literal",
                  "start": 191,
                  "end": 192,
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 197,
            "end": 205,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 205,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 200,
                "end": 205,
                "literal": {
                  "type": "Literal",
                  "start": 200,
                  "end": 205,
                  "value": false,
                  "raw": "false"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 210,
            "end": 227,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 219,
              "name": "overwrite",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 227,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 221,
                "end": 227
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
      "type": "ClassDeclaration",
      "start": 231,
      "end": 342,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 250,
        "name": "OverWriteAttr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 259,
        "end": 274,
        "object": {
          "type": "Identifier",
          "start": 259,
          "end": 264,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 265,
          "end": 274,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 285,
        "end": 342,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 291,
            "end": 340,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 297,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 340,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 300,
                "end": 340,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 310,
                    "end": 334,
                    "argument": {
                      "type": "JSXElement",
                      "start": 317,
                      "end": 333,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 317,
                        "end": 322,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 318,
                          "end": 321,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 327,
                        "end": 333,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 329,
                          "end": 332,
                          "name": "div"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 322,
                          "end": 327,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 274,
        "end": 284,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 275,
            "end": 279,
            "typeName": {
              "type": "Identifier",
              "start": 275,
              "end": 279,
              "name": "Prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 281,
            "end": 283,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 359,
            "name": "anyobj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 359,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 356,
                "end": 359
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 371,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 375,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 375,
            "end": 376,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 379,
            "end": 432,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 379,
              "end": 432,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 394,
                  "end": 402,
                  "argument": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 401,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 403,
                  "end": 404,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 403,
                    "end": 404,
                    "name": "y"
                  },
                  "value": null
                },
                {
                  "type": "JSXAttribute",
                  "start": 405,
                  "end": 419,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 405,
                    "end": 414,
                    "name": "overwrite"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 415,
                    "end": 419,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 420,
                  "end": 429,
                  "argument": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 428,
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 380,
                "end": 393,
                "name": "OverWriteAttr"
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
      "start": 433,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 439,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 442,
            "end": 505,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 442,
              "end": 505,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 457,
                  "end": 471,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 457,
                    "end": 466,
                    "name": "overwrite"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 467,
                    "end": 471,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 472,
                  "end": 481,
                  "argument": {
                    "type": "Identifier",
                    "start": 476,
                    "end": 480,
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 482,
                  "end": 487,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 482,
                    "end": 483,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 484,
                    "end": 487,
                    "expression": {
                      "type": "Literal",
                      "start": 485,
                      "end": 486,
                      "value": 3,
                      "raw": "3"
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 488,
                  "end": 502,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 492,
                    "end": 501,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 493,
                        "end": 500,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 494,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 496,
                          "end": 500,
                          "value": true,
                          "raw": "true"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 443,
                "end": 456,
                "name": "OverWriteAttr"
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
      "start": 506,
      "end": 550,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 550,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 512,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 515,
            "end": 550,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 515,
              "end": 550,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 530,
                  "end": 541,
                  "argument": {
                    "type": "Identifier",
                    "start": 534,
                    "end": 540,
                    "name": "anyobj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 542,
                  "end": 547,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 542,
                    "end": 543,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 544,
                    "end": 547,
                    "expression": {
                      "type": "Literal",
                      "start": 545,
                      "end": 546,
                      "value": 3,
                      "raw": "3"
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 516,
                "end": 529,
                "name": "OverWriteAttr"
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
      "start": 551,
      "end": 617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 617,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 557,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 560,
            "end": 617,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 560,
              "end": 617,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 575,
                  "end": 589,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 575,
                    "end": 584,
                    "name": "overwrite"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 585,
                    "end": 589,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 590,
                  "end": 599,
                  "argument": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 598,
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 600,
                  "end": 614,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 604,
                    "end": 613,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 605,
                        "end": 612,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 606,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 608,
                          "end": 612,
                          "value": true,
                          "raw": "true"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 561,
                "end": 574,
                "name": "OverWriteAttr"
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
