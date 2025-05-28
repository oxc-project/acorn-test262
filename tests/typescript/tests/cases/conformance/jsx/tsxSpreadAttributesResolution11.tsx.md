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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 49,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 85,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 85,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 82,
                  "end": 83,
                  "value": 2,
                  "raw": "2"
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
      "start": 86,
      "end": 166,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 166,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "value": true,
                          "raw": "true"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 108,
                    "end": 125,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 117,
                      "decorators": [],
                      "name": "overwrite",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 117,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 119,
                        "end": 125
                      }
                    },
                    "accessibility": null,
                    "static": false
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 139,
                  "end": 143,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 149,
                "end": 164,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 158,
                  "decorators": [],
                  "name": "overwrite",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 160,
                  "end": 164,
                  "value": "hi",
                  "raw": "\"hi\""
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
      "type": "TSInterfaceDeclaration",
      "start": 168,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 182,
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "start": 198,
            "end": 205,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": true,
                  "raw": "true"
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
              "decorators": [],
              "name": "overwrite",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 250,
        "decorators": [],
        "name": "OverWriteAttr",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 259,
        "end": 274,
        "object": {
          "type": "Identifier",
          "start": 259,
          "end": 264,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 265,
          "end": 274,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
              "optional": false,
              "typeAnnotation": null
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
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 285,
        "end": 342,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 291,
            "end": 340,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 297,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 340,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 318,
                          "end": 321,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 322,
                          "end": 327,
                          "value": "Hello",
                          "raw": "Hello"
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
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 360,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 359,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 367,
      "end": 428,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 372,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 375,
            "end": 428,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 375,
              "end": 428,
              "name": {
                "type": "JSXIdentifier",
                "start": 376,
                "end": 389,
                "name": "OverWriteAttr"
              },
              "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
                    "value": "hi",
                    "raw": "\"hi\""
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
      "start": 429,
      "end": 475,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 475,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 438,
            "end": 475,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 438,
              "end": 475,
              "name": {
                "type": "JSXIdentifier",
                "start": 439,
                "end": 452,
                "name": "OverWriteAttr"
              },
              "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 476,
      "end": 548,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 548,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 482,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 485,
            "end": 548,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 485,
              "end": 548,
              "name": {
                "type": "JSXIdentifier",
                "start": 486,
                "end": 499,
                "name": "OverWriteAttr"
              },
              "typeArguments": null,
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
                      "value": 3,
                      "raw": "3"
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
                    "value": "hi",
                    "raw": "\"hi\""
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
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 536,
                          "end": 537,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 539,
                          "end": 543,
                          "value": true,
                          "raw": "true"
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
      "start": 549,
      "end": 646,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 558,
            "end": 646,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 558,
              "end": 646,
              "name": {
                "type": "JSXIdentifier",
                "start": 559,
                "end": 572,
                "name": "OverWriteAttr"
              },
              "typeArguments": null,
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
                    "value": "hi",
                    "raw": "\"hi\""
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
                    "optional": false,
                    "typeAnnotation": null
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
                      "value": 3,
                      "raw": "3"
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 609,
                          "end": 610,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 612,
                          "end": 616,
                          "value": true,
                          "raw": "true"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 618,
                        "end": 622,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 618,
                          "end": 619,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 621,
                          "end": 622,
                          "value": 2,
                          "raw": "2"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 624,
                        "end": 641,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 624,
                          "end": 633,
                          "decorators": [],
                          "name": "overwrite",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 634,
                          "end": 641,
                          "value": "world",
                          "raw": "\"world\""
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
      "start": 647,
      "end": 726,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 726,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 653,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 656,
            "end": 726,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 656,
              "end": 726,
              "name": {
                "type": "JSXIdentifier",
                "start": 657,
                "end": 670,
                "name": "OverWriteAttr"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 677,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 679,
                          "end": 680,
                          "value": 2,
                          "raw": "2"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 688,
                          "end": 697,
                          "decorators": [],
                          "name": "overwrite",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 699,
                          "end": 706,
                          "value": "world",
                          "raw": "\"world\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 714,
                          "end": 715,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 717,
                          "end": 721,
                          "value": true,
                          "raw": "true"
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
      "start": 727,
      "end": 765,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 731,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 731,
            "end": 733,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 736,
            "end": 765,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 736,
              "end": 765,
              "name": {
                "type": "JSXIdentifier",
                "start": 737,
                "end": 750,
                "name": "OverWriteAttr"
              },
              "typeArguments": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
