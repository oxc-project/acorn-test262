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
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 41,
            "end": 68,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 48,
              "end": 68,
              "body": {
                "type": "TSInterfaceBody",
                "start": 66,
                "end": 68,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 58,
                "end": 65,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 145,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 94,
        "decorators": [],
        "name": "DiscriminatorTrue",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 97,
        "end": 145,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 103,
            "end": 114,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 107,
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "true",
                  "value": true
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 119,
            "end": 143,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 121,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 142,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 123,
                "end": 142,
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
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 147,
      "end": 223,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 170,
        "decorators": [],
        "name": "DiscriminatorFalse",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 173,
        "end": 223,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 192,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 183,
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                  "raw": "false",
                  "value": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 197,
            "end": 221,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 199,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 220,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 201,
                "end": 220,
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
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 225,
      "end": 277,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 235,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 238,
        "end": 276,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 238,
            "end": 255,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 238,
              "end": 255,
              "decorators": [],
              "name": "DiscriminatorTrue",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 258,
            "end": 276,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 258,
              "end": 276,
              "decorators": [],
              "name": "DiscriminatorFalse",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 279,
      "end": 361,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 300,
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null
      },
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 325,
                    "decorators": [],
                    "name": "DiscriminatorTrue",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 328,
                  "end": 346,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 346,
                    "decorators": [],
                    "name": "DiscriminatorFalse",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
          "typeArguments": null,
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
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 426,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 383,
        "end": 425,
        "argument": {
          "type": "JSXElement",
          "start": 389,
          "end": 424,
          "children": [],
          "closingElement": null,
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
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 409,
                      "end": 420,
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
                      "callee": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 417,
                        "decorators": [],
                        "name": "parseInt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
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
          }
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 499,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 448,
        "end": 498,
        "argument": {
          "type": "JSXElement",
          "start": 454,
          "end": 497,
          "children": [],
          "closingElement": null,
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
                    "raw": "false",
                    "value": false
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
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 482,
                      "end": 493,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 482,
                        "end": 491,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 483,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 491,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
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
          }
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 557,
      "end": 612,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 557,
        "end": 611,
        "argument": {
          "type": "JSXElement",
          "start": 563,
          "end": 610,
          "children": [],
          "closingElement": null,
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
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 595,
                      "end": 606,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 595,
                        "end": 604,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 596,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 604,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
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
          }
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 695,
      "end": 733,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 695,
        "end": 732,
        "argument": {
          "type": "JSXElement",
          "start": 701,
          "end": 731,
          "children": [],
          "closingElement": null,
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
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 716,
                      "end": 727,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 716,
                        "end": 725,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 717,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 725,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
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
          }
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
