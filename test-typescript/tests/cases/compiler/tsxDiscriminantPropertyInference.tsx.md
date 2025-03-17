__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 734,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 21,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 41,
            "end": 68,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 48,
              "end": 68,
              "id": {
                "type": "Identifier",
                "start": 58,
                "end": 65,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 66,
                "end": 68,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 94,
        "name": "DiscriminatorTrue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 97,
        "end": 145,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 103,
            "end": 114,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 107,
              "name": "disc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 113,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 109,
                "end": 113,
                "literal": {
                  "type": "Literal",
                  "start": 109,
                  "end": 113,
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
            "start": 119,
            "end": 143,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 121,
              "name": "cb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 142,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 123,
                "end": 142,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 124,
                    "end": 133,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 125,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 127,
                        "end": 133
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 142,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 138,
                    "end": 142
                  }
                }
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
      "start": 147,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 170,
        "name": "DiscriminatorFalse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 173,
        "end": 223,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 192,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 183,
              "name": "disc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 191,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 186,
                "end": 191,
                "literal": {
                  "type": "Literal",
                  "start": 186,
                  "end": 191,
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
            "start": 197,
            "end": 221,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 199,
              "name": "cb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 220,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 201,
                "end": 220,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 202,
                    "end": 211,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 203,
                      "end": 211,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 205,
                        "end": 211
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 213,
                  "end": 220,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 216,
                    "end": 220
                  }
                }
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
      "start": 225,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 235,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 238,
        "end": 276,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 238,
            "end": 255,
            "typeName": {
              "type": "Identifier",
              "start": 238,
              "end": 255,
              "name": "DiscriminatorTrue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 258,
            "end": 276,
            "typeName": {
              "type": "Identifier",
              "start": 258,
              "end": 276,
              "name": "DiscriminatorFalse",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 279,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 300,
        "name": "Comp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 301,
          "end": 346,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 346,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 308,
              "end": 346,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 308,
                  "end": 325,
                  "typeName": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 325,
                    "name": "DiscriminatorTrue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 328,
                  "end": 346,
                  "typeName": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 346,
                    "name": "DiscriminatorFalse",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 347,
        "end": 360,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 349,
          "end": 360,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 349,
            "end": 360,
            "left": {
              "type": "Identifier",
              "start": 349,
              "end": 352,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 353,
              "end": 360,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 426,
      "expression": {
        "type": "UnaryExpression",
        "start": 383,
        "end": 425,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "JSXElement",
          "start": 389,
          "end": 424,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 389,
            "end": 424,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 395,
                "end": 399,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 395,
                  "end": 399,
                  "name": "disc"
                },
                "value": null
              },
              {
                "type": "JSXAttribute",
                "start": 400,
                "end": 421,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 400,
                  "end": 402,
                  "name": "cb"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 403,
                  "end": 421,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 404,
                    "end": 420,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 404,
                        "end": 405,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 409,
                      "end": 420,
                      "callee": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 417,
                        "name": "parseInt",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 418,
                          "end": 419,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 390,
              "end": 394,
              "name": "Comp"
            },
            "selfClosing": true,
            "typeArguments": null
          },
          "closingElement": null,
          "children": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 499,
      "expression": {
        "type": "UnaryExpression",
        "start": 448,
        "end": 498,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "JSXElement",
          "start": 454,
          "end": 497,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 454,
            "end": 497,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 460,
                "end": 472,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 460,
                  "end": 464,
                  "name": "disc"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 465,
                  "end": 472,
                  "expression": {
                    "type": "Literal",
                    "start": 466,
                    "end": 471,
                    "value": false,
                    "raw": "false"
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 473,
                "end": 494,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 473,
                  "end": 475,
                  "name": "cb"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 476,
                  "end": 494,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 477,
                    "end": 493,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 477,
                        "end": 478,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 482,
                      "end": 493,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 482,
                        "end": 491,
                        "object": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 483,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 491,
                          "name": "toFixed",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 455,
              "end": 459,
              "name": "Comp"
            },
            "selfClosing": true,
            "typeArguments": null
          },
          "closingElement": null,
          "children": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 557,
      "end": 612,
      "expression": {
        "type": "UnaryExpression",
        "start": 557,
        "end": 611,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "JSXElement",
          "start": 563,
          "end": 610,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 563,
            "end": 610,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 569,
                "end": 585,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 569,
                  "end": 573,
                  "name": "disc"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 574,
                  "end": 585,
                  "expression": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 584,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "start": 586,
                "end": 607,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 586,
                  "end": 588,
                  "name": "cb"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 589,
                  "end": 607,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 590,
                    "end": 606,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 590,
                        "end": 591,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 595,
                      "end": 606,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 595,
                        "end": 604,
                        "object": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 596,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 604,
                          "name": "toFixed",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 564,
              "end": 568,
              "name": "Comp"
            },
            "selfClosing": true,
            "typeArguments": null
          },
          "closingElement": null,
          "children": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 695,
      "end": 733,
      "expression": {
        "type": "UnaryExpression",
        "start": 695,
        "end": 732,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "JSXElement",
          "start": 701,
          "end": 731,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 701,
            "end": 731,
            "attributes": [
              {
                "type": "JSXAttribute",
                "start": 707,
                "end": 728,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 707,
                  "end": 709,
                  "name": "cb"
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "start": 710,
                  "end": 728,
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "start": 711,
                    "end": 727,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 711,
                        "end": 712,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "CallExpression",
                      "start": 716,
                      "end": 727,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 716,
                        "end": 725,
                        "object": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 717,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 725,
                          "name": "toFixed",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "start": 702,
              "end": 706,
              "name": "Comp"
            },
            "selfClosing": true,
            "typeArguments": null
          },
          "closingElement": null,
          "children": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
