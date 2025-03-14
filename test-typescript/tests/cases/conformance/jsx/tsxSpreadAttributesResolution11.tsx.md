__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 765,
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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 46,
            "end": 48,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 70,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 62,
                "end": 70,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 64,
                    "end": 68,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 67,
                        "end": 68,
                        "literal": {
                          "type": "Literal",
                          "start": 67,
                          "end": 68,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 73,
            "end": 85,
            "properties": [
              {
                "type": "Property",
                "start": 79,
                "end": 83,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 82,
                  "end": 83,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 127,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 98,
                "end": 127,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 99,
                    "end": 107,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 102,
                        "end": 106,
                        "literal": {
                          "type": "Literal",
                          "start": 102,
                          "end": 106,
                          "raw": "true",
                          "value": true
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 108,
                    "end": 125,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 117,
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 117,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 119,
                        "end": 125
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 130,
            "end": 166,
            "properties": [
              {
                "type": "Property",
                "start": 136,
                "end": 143,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 139,
                  "end": 143,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 149,
                "end": 164,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 158,
                  "decorators": [],
                  "name": "overwrite",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 160,
                  "end": 164,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 168,
      "end": 229,
      "body": {
        "type": "TSInterfaceBody",
        "start": 183,
        "end": 229,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 189,
            "end": 193,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 193,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 192,
                "end": 193,
                "literal": {
                  "type": "Literal",
                  "start": 192,
                  "end": 193,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 198,
            "end": 205,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 205,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 201,
                "end": 205,
                "literal": {
                  "type": "Literal",
                  "start": 201,
                  "end": 205,
                  "raw": "true",
                  "value": true
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 210,
            "end": 227,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 219,
              "decorators": [],
              "name": "overwrite",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 227,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 221,
                "end": 227
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 182,
        "decorators": [],
        "name": "Prop",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 231,
      "end": 342,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 285,
        "end": 342,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 291,
            "end": 340,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 297,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 340,
              "async": false,
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 322,
                          "end": 327,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
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
                        "selfClosing": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 250,
        "decorators": [],
        "name": "OverWriteAttr",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 259,
        "end": 274,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 259,
          "end": 264,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 265,
          "end": 274,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
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
              "decorators": [],
              "name": "Prop",
              "optional": false
            }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 359,
            "decorators": [],
            "name": "anyobj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 359,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 356,
                "end": 359
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
      "start": 367,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 428,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 372,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 375,
            "end": 428,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 375,
              "end": 428,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 390,
                  "end": 398,
                  "argument": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 397,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 399,
                  "end": 400,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 399,
                    "end": 400,
                    "name": "y"
                  },
                  "value": null
                },
                {
                  "type": "JSXAttribute",
                  "start": 401,
                  "end": 415,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 401,
                    "end": 410,
                    "name": "overwrite"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 411,
                    "end": 415,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 416,
                  "end": 425,
                  "argument": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 424,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 376,
                "end": 389,
                "name": "OverWriteAttr"
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
      "start": 429,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 475,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 438,
            "end": 475,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 438,
              "end": 475,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 453,
                  "end": 462,
                  "argument": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 461,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 463,
                  "end": 472,
                  "argument": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 471,
                    "decorators": [],
                    "name": "obj3",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 439,
                "end": 452,
                "name": "OverWriteAttr"
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
      "start": 476,
      "end": 548,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 548,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 482,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 485,
            "end": 548,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 485,
              "end": 548,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 500,
                  "end": 505,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 500,
                    "end": 501,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 502,
                    "end": 505,
                    "expression": {
                      "type": "Literal",
                      "start": 503,
                      "end": 504,
                      "raw": "3",
                      "value": 3
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 506,
                  "end": 520,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 506,
                    "end": 515,
                    "name": "overwrite"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 516,
                    "end": 520,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 521,
                  "end": 530,
                  "argument": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 529,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 531,
                  "end": 545,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 535,
                    "end": 544,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 536,
                        "end": 543,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 536,
                          "end": 537,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 539,
                          "end": 543,
                          "raw": "true",
                          "value": true
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 486,
                "end": 499,
                "name": "OverWriteAttr"
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
      "start": 549,
      "end": 646,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 646,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "decorators": [],
            "name": "x3",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 558,
            "end": 646,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 558,
              "end": 646,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 573,
                  "end": 587,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 573,
                    "end": 582,
                    "name": "overwrite"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 583,
                    "end": 587,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 588,
                  "end": 597,
                  "argument": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 596,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 598,
                  "end": 603,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 598,
                    "end": 599,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 600,
                    "end": 603,
                    "expression": {
                      "type": "Literal",
                      "start": 601,
                      "end": 602,
                      "raw": "3",
                      "value": 3
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 604,
                  "end": 643,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 608,
                    "end": 642,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 609,
                        "end": 616,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 609,
                          "end": 610,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 612,
                          "end": 616,
                          "raw": "true",
                          "value": true
                        }
                      },
                      {
                        "type": "Property",
                        "start": 618,
                        "end": 622,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 618,
                          "end": 619,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 621,
                          "end": 622,
                          "raw": "2",
                          "value": 2
                        }
                      },
                      {
                        "type": "Property",
                        "start": 624,
                        "end": 641,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 624,
                          "end": 633,
                          "decorators": [],
                          "name": "overwrite",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 634,
                          "end": 641,
                          "raw": "\"world\"",
                          "value": "world"
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 559,
                "end": 572,
                "name": "OverWriteAttr"
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
      "start": 647,
      "end": 726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 726,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 653,
            "decorators": [],
            "name": "x4",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 656,
            "end": 726,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 656,
              "end": 726,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 671,
                  "end": 682,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 675,
                    "end": 681,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 676,
                        "end": 680,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 677,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 679,
                          "end": 680,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 683,
                  "end": 708,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 687,
                    "end": 707,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 688,
                        "end": 706,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 688,
                          "end": 697,
                          "decorators": [],
                          "name": "overwrite",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 699,
                          "end": 706,
                          "raw": "\"world\"",
                          "value": "world"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 709,
                  "end": 723,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 713,
                    "end": 722,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 714,
                        "end": 721,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 714,
                          "end": 715,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 717,
                          "end": 721,
                          "raw": "true",
                          "value": true
                        }
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 657,
                "end": 670,
                "name": "OverWriteAttr"
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
      "start": 727,
      "end": 765,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 731,
          "end": 765,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 731,
            "end": 733,
            "decorators": [],
            "name": "x5",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 736,
            "end": 765,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 736,
              "end": 765,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 751,
                  "end": 762,
                  "argument": {
                    "type": "Identifier",
                    "start": 755,
                    "end": 761,
                    "decorators": [],
                    "name": "anyobj",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 737,
                "end": 750,
                "name": "OverWriteAttr"
              },
              "selfClosing": true
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
