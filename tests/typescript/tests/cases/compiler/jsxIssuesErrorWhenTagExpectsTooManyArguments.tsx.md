__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 95
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
              },
              "start": 103,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 102,
            "end": 112
          }
        ],
        "start": 96,
        "end": 114
      },
      "declare": false,
      "start": 78,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp4",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 132
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 147
              },
              "typeArguments": null,
              "start": 140,
              "end": 147
            },
            "start": 138,
            "end": 147
          },
          "start": 133,
          "end": 147
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 158,
              "end": 161
            },
            "start": 156,
            "end": 161
          },
          "start": 149,
          "end": 161
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 168,
              "end": 171
            },
            "start": 166,
            "end": 171
          },
          "start": 163,
          "end": 171
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "verybad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 182,
              "end": 185
            },
            "start": 180,
            "end": 185
          },
          "start": 173,
          "end": 185
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 201,
                  "end": 204
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 200,
                "end": 205
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 207,
                  "end": 210
                },
                "start": 205,
                "end": 211
              },
              "start": 200,
              "end": 211
            },
            "start": 193,
            "end": 212
          }
        ],
        "start": 187,
        "end": 214
      },
      "expression": false,
      "start": 116,
      "end": 214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp3",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 231
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 246
              },
              "typeArguments": null,
              "start": 239,
              "end": 246
            },
            "start": 237,
            "end": 246
          },
          "start": 232,
          "end": 246
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 257,
              "end": 260
            },
            "start": 255,
            "end": 260
          },
          "start": 248,
          "end": 260
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 267,
              "end": 270
            },
            "start": 265,
            "end": 270
          },
          "start": 262,
          "end": 270
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 286,
                  "end": 289
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 285,
                "end": 290
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 292,
                  "end": 295
                },
                "start": 290,
                "end": 296
              },
              "start": 285,
              "end": 296
            },
            "start": 278,
            "end": 297
          }
        ],
        "start": 272,
        "end": 299
      },
      "expression": false,
      "start": 215,
      "end": 299
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 316
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 331
              },
              "typeArguments": null,
              "start": 324,
              "end": 331
            },
            "start": 322,
            "end": 331
          },
          "start": 317,
          "end": 331
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 342,
              "end": 345
            },
            "start": 340,
            "end": 345
          },
          "start": 333,
          "end": 345
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 361,
                  "end": 364
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 360,
                "end": 365
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 367,
                  "end": 370
                },
                "start": 365,
                "end": 371
              },
              "start": 360,
              "end": 371
            },
            "start": 353,
            "end": 371
          }
        ],
        "start": 347,
        "end": 373
      },
      "expression": false,
      "start": 300,
      "end": 373
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 382
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp4",
                "start": 386,
                "end": 393
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 394,
                    "end": 395
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 397,
                      "end": 398
                    },
                    "start": 396,
                    "end": 399
                  },
                  "start": 394,
                  "end": 399
                }
              ],
              "selfClosing": true,
              "start": 385,
              "end": 401
            },
            "children": [],
            "closingElement": null,
            "start": 385,
            "end": 401
          },
          "definite": false,
          "start": 381,
          "end": 401
        }
      ],
      "declare": false,
      "start": 375,
      "end": 402
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 504
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp3",
                "start": 508,
                "end": 515
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 516,
                    "end": 517
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 519,
                      "end": 520
                    },
                    "start": 518,
                    "end": 521
                  },
                  "start": 516,
                  "end": 521
                }
              ],
              "selfClosing": true,
              "start": 507,
              "end": 523
            },
            "children": [],
            "closingElement": null,
            "start": 507,
            "end": 523
          },
          "definite": false,
          "start": 503,
          "end": 523
        }
      ],
      "declare": false,
      "start": 497,
      "end": 524
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 626
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp2",
                "start": 631,
                "end": 638
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 639,
                    "end": 640
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 642,
                      "end": 643
                    },
                    "start": 641,
                    "end": 644
                  },
                  "start": 639,
                  "end": 644
                }
              ],
              "selfClosing": true,
              "start": 630,
              "end": 646
            },
            "children": [],
            "closingElement": null,
            "start": 630,
            "end": 646
          },
          "definite": false,
          "start": 625,
          "end": 646
        }
      ],
      "declare": false,
      "start": 619,
      "end": 647
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTagWithOptionalNonJSXBits",
        "optional": false,
        "typeAnnotation": null,
        "start": 721,
        "end": 748
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 763
              },
              "typeArguments": null,
              "start": 756,
              "end": 763
            },
            "start": 754,
            "end": 763
          },
          "start": 749,
          "end": 763
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 774,
              "end": 777
            },
            "start": 772,
            "end": 777
          },
          "start": 765,
          "end": 777
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nonReactArg",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 793,
              "end": 799
            },
            "start": 791,
            "end": 799
          },
          "start": 779,
          "end": 799
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 805
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 813
            },
            "start": 802,
            "end": 813
          },
          "typeArguments": null,
          "start": 802,
          "end": 813
        },
        "start": 800,
        "end": 813
      },
      "body": null,
      "expression": false,
      "start": 704,
      "end": 814
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyTagWithOptionalNonJSXBits",
                "start": 826,
                "end": 853
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 854,
                    "end": 855
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 857,
                      "end": 858
                    },
                    "start": 856,
                    "end": 859
                  },
                  "start": 854,
                  "end": 859
                }
              ],
              "selfClosing": true,
              "start": 825,
              "end": 862
            },
            "children": [],
            "closingElement": null,
            "start": 825,
            "end": 862
          },
          "definite": false,
          "start": 821,
          "end": 862
        }
      ],
      "declare": false,
      "start": 815,
      "end": 863
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 908
}
```
