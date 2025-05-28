__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 908,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 95,
        "decorators": [],
        "name": "MyProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 96,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 112,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
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
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 132,
        "decorators": [],
        "name": "MyComp4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 133,
          "end": 147,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 138,
            "end": 147,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 147,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 147,
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 149,
          "end": 161,
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 161,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 158,
              "end": 161
            }
          }
        },
        {
          "type": "Identifier",
          "start": 163,
          "end": 171,
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 166,
            "end": 171,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 168,
              "end": 171
            }
          }
        },
        {
          "type": "Identifier",
          "start": 173,
          "end": 185,
          "decorators": [],
          "name": "verybad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 185,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 182,
              "end": 185
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 187,
        "end": 214,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 193,
            "end": 212,
            "argument": {
              "type": "JSXElement",
              "start": 200,
              "end": 211,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 200,
                "end": 205,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 201,
                  "end": 204,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 205,
                "end": 211,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 207,
                  "end": 210,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 215,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 231,
        "decorators": [],
        "name": "MyComp3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 232,
          "end": 246,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 237,
            "end": 246,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 239,
              "end": 246,
              "typeName": {
                "type": "Identifier",
                "start": 239,
                "end": 246,
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 248,
          "end": 260,
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 255,
            "end": 260,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 257,
              "end": 260
            }
          }
        },
        {
          "type": "Identifier",
          "start": 262,
          "end": 270,
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 265,
            "end": 270,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 267,
              "end": 270
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 272,
        "end": 299,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 278,
            "end": 297,
            "argument": {
              "type": "JSXElement",
              "start": 285,
              "end": 296,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 285,
                "end": 290,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 286,
                  "end": 289,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 290,
                "end": 296,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 292,
                  "end": 295,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 300,
      "end": 373,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 316,
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 317,
          "end": 331,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 331,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 324,
              "end": 331,
              "typeName": {
                "type": "Identifier",
                "start": 324,
                "end": 331,
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 333,
          "end": 345,
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 340,
            "end": 345,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 342,
              "end": 345
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 347,
        "end": 373,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 353,
            "end": 371,
            "argument": {
              "type": "JSXElement",
              "start": 360,
              "end": 371,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 360,
                "end": 365,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 361,
                  "end": 364,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 365,
                "end": 371,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 367,
                  "end": 370,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 375,
      "end": 402,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 382,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 385,
            "end": 401,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 385,
              "end": 401,
              "name": {
                "type": "JSXIdentifier",
                "start": 386,
                "end": 393,
                "name": "MyComp4"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 394,
                  "end": 399,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 394,
                    "end": 395,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 396,
                    "end": 399,
                    "expression": {
                      "type": "Literal",
                      "start": 397,
                      "end": 398,
                      "value": 2,
                      "raw": "2"
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
      "start": 497,
      "end": 524,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 523,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 504,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 507,
            "end": 523,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 507,
              "end": 523,
              "name": {
                "type": "JSXIdentifier",
                "start": 508,
                "end": 515,
                "name": "MyComp3"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 516,
                  "end": 521,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 516,
                    "end": 517,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 518,
                    "end": 521,
                    "expression": {
                      "type": "Literal",
                      "start": 519,
                      "end": 520,
                      "value": 2,
                      "raw": "2"
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
      "start": 619,
      "end": 647,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 626,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 630,
            "end": 646,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 630,
              "end": 646,
              "name": {
                "type": "JSXIdentifier",
                "start": 631,
                "end": 638,
                "name": "MyComp2"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 639,
                  "end": 644,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 639,
                    "end": 640,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 641,
                    "end": 644,
                    "expression": {
                      "type": "Literal",
                      "start": 642,
                      "end": 643,
                      "value": 2,
                      "raw": "2"
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
      "type": "TSDeclareFunction",
      "start": 704,
      "end": 814,
      "id": {
        "type": "Identifier",
        "start": 721,
        "end": 748,
        "decorators": [],
        "name": "MyTagWithOptionalNonJSXBits",
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
          "start": 749,
          "end": 763,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 754,
            "end": 763,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 756,
              "end": 763,
              "typeName": {
                "type": "Identifier",
                "start": 756,
                "end": 763,
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 765,
          "end": 777,
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 772,
            "end": 777,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 774,
              "end": 777
            }
          }
        },
        {
          "type": "Identifier",
          "start": 779,
          "end": 799,
          "decorators": [],
          "name": "nonReactArg",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 791,
            "end": 799,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 793,
              "end": 799
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 800,
        "end": 813,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 802,
          "end": 813,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 802,
            "end": 813,
            "left": {
              "type": "Identifier",
              "start": 802,
              "end": 805,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 806,
              "end": 813,
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
      "start": 815,
      "end": 863,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 862,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 825,
            "end": 862,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 825,
              "end": 862,
              "name": {
                "type": "JSXIdentifier",
                "start": 826,
                "end": 853,
                "name": "MyTagWithOptionalNonJSXBits"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 854,
                  "end": 859,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 854,
                    "end": 855,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 856,
                    "end": 859,
                    "expression": {
                      "type": "Literal",
                      "start": 857,
                      "end": 858,
                      "value": 2,
                      "raw": "2"
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
