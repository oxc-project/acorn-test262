__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 733,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 21,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
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
        "decorators": [],
        "name": "DiscriminatorTrue",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 125,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 127,
                        "end": 133
                      }
                    }
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
        "decorators": [],
        "name": "DiscriminatorFalse",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 203,
                      "end": 211,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 205,
                        "end": 211
                      }
                    }
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
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "DiscriminatorTrue",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "DiscriminatorFalse",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Comp",
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
          "start": 301,
          "end": 346,
          "decorators": [],
          "name": "props",
          "optional": false,
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
                    "decorators": [],
                    "name": "DiscriminatorTrue",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "DiscriminatorFalse",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 353,
              "end": 360,
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
      "type": "ExpressionStatement",
      "start": 383,
      "end": 426,
      "expression": {
        "type": "UnaryExpression",
        "start": 383,
        "end": 425,
        "operator": "void",
        "argument": {
          "type": "JSXElement",
          "start": 389,
          "end": 424,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 389,
            "end": 424,
            "name": {
              "type": "JSXIdentifier",
              "start": 390,
              "end": 394,
              "name": "Comp"
            },
            "typeArguments": null,
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 404,
                        "end": 405,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "start": 409,
                      "end": 420,
                      "callee": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 417,
                        "decorators": [],
                        "name": "parseInt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 418,
                          "end": 419,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  }
                }
              }
            ],
            "selfClosing": true
          },
          "children": [],
          "closingElement": null
        },
        "prefix": true
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
        "argument": {
          "type": "JSXElement",
          "start": 454,
          "end": 497,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 454,
            "end": 497,
            "name": {
              "type": "JSXIdentifier",
              "start": 455,
              "end": 459,
              "name": "Comp"
            },
            "typeArguments": null,
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 477,
                        "end": 478,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
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
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 491,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  }
                }
              }
            ],
            "selfClosing": true
          },
          "children": [],
          "closingElement": null
        },
        "prefix": true
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
        "argument": {
          "type": "JSXElement",
          "start": 563,
          "end": 610,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 563,
            "end": 610,
            "name": {
              "type": "JSXIdentifier",
              "start": 564,
              "end": 568,
              "name": "Comp"
            },
            "typeArguments": null,
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
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 590,
                        "end": 591,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
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
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 604,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  }
                }
              }
            ],
            "selfClosing": true
          },
          "children": [],
          "closingElement": null
        },
        "prefix": true
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
        "argument": {
          "type": "JSXElement",
          "start": 701,
          "end": 731,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 701,
            "end": 731,
            "name": {
              "type": "JSXIdentifier",
              "start": 702,
              "end": 706,
              "name": "Comp"
            },
            "typeArguments": null,
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 711,
                        "end": 712,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
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
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 725,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  }
                }
              }
            ],
            "selfClosing": true
          },
          "children": [],
          "closingElement": null
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
