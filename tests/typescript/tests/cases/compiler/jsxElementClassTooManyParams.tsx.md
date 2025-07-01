__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 47
              },
              "declare": false,
              "start": 27,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 47
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicClassAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 93
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 100
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 94,
                    "end": 100
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TOther",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 108
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSNeverKeyword",
                      "start": 109,
                      "end": 114
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 102,
                    "end": 114
                  }
                ],
                "start": 93,
                "end": 115
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 138
                        },
                        "typeArguments": null,
                        "start": 132,
                        "end": 138
                      },
                      "start": 130,
                      "end": 138
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 126,
                    "end": 139
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 152
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TOther",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 161
                        },
                        "typeArguments": null,
                        "start": 155,
                        "end": 161
                      },
                      "start": 153,
                      "end": 161
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 148,
                    "end": 162
                  }
                ],
                "start": 116,
                "end": 168
              },
              "declare": false,
              "start": 59,
              "end": 168
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 52,
            "end": 168
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 202
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 218
                  },
                  "typeArguments": null,
                  "start": 211,
                  "end": 218
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 219,
                "end": 221
              },
              "declare": false,
              "start": 180,
              "end": 221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 173,
            "end": 221
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 268
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
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 276
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 278,
                        "end": 280
                      },
                      "start": 276,
                      "end": 280
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 271,
                    "end": 281
                  }
                ],
                "start": 269,
                "end": 283
              },
              "declare": false,
              "start": 233,
              "end": 283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 226,
            "end": 283
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 329
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
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 340
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 342,
                        "end": 344
                      },
                      "start": 340,
                      "end": 344
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 332,
                    "end": 345
                  }
                ],
                "start": 330,
                "end": 347
              },
              "declare": false,
              "start": 295,
              "end": 347
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 288,
            "end": 347
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 388
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 389,
                "end": 391
              },
              "declare": false,
              "start": 359,
              "end": 391
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 352,
            "end": 391
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 430
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 439,
                            "end": 445
                          },
                          "start": 437,
                          "end": 445
                        },
                        "start": 434,
                        "end": 445
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 455
                        },
                        "typeArguments": null,
                        "start": 448,
                        "end": 455
                      },
                      "start": 446,
                      "end": 455
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 433,
                    "end": 455
                  }
                ],
                "start": 431,
                "end": 457
              },
              "declare": false,
              "start": 403,
              "end": 457
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 396,
            "end": 457
          }
        ],
        "start": 14,
        "end": 459
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 459
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElemClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 475
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
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
                    "start": 487,
                    "end": 488
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 490,
                      "end": 496
                    },
                    "start": 488,
                    "end": 496
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 487,
                  "end": 496
                }
              ],
              "start": 486,
              "end": 497
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 476,
            "end": 497
          }
        ],
        "start": 475,
        "end": 498
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 513
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 526
            },
            "optional": false,
            "computed": false,
            "start": 510,
            "end": 526
          },
          "typeArguments": null,
          "start": 510,
          "end": 526
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 544
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 560
                        },
                        "typeArguments": null,
                        "start": 559,
                        "end": 560
                      },
                      "start": 557,
                      "end": 560
                    },
                    "start": 552,
                    "end": 560
                  },
                  "readonly": false,
                  "static": false,
                  "start": 545,
                  "end": 560
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 562,
                "end": 564
              },
              "expression": false,
              "start": 544,
              "end": 564
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 533,
            "end": 564
          }
        ],
        "start": 527,
        "end": 566
      },
      "abstract": false,
      "declare": false,
      "start": 460,
      "end": 566
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
            "name": "elem",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 577
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemClass",
                "start": 581,
                "end": 590
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 591,
                    "end": 592
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 594,
                      "end": 596
                    },
                    "start": 593,
                    "end": 597
                  },
                  "start": 591,
                  "end": 597
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 598,
                    "end": 599
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 24,
                      "raw": "24",
                      "start": 601,
                      "end": 603
                    },
                    "start": 600,
                    "end": 604
                  },
                  "start": 598,
                  "end": 604
                }
              ],
              "selfClosing": true,
              "start": 580,
              "end": 607
            },
            "children": [],
            "closingElement": null,
            "start": 580,
            "end": 607
          },
          "definite": false,
          "start": 573,
          "end": 607
        }
      ],
      "declare": false,
      "start": 567,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 607
}
```
