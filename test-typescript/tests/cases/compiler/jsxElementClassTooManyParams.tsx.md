__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 607,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 459,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 459,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 47,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 44,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 45,
                "end": 47,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 168,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 59,
              "end": 168,
              "id": {
                "type": "Identifier",
                "start": 69,
                "end": 93,
                "name": "IntrinsicClassAttributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 93,
                "end": 115,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 94,
                    "end": 100,
                    "name": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 100,
                      "name": "TClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 102,
                    "end": 114,
                    "name": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 108,
                      "name": "TOther",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSNeverKeyword",
                      "start": 109,
                      "end": 114
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "body": {
                "type": "TSInterfaceBody",
                "start": 116,
                "end": 168,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 126,
                    "end": 139,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 129,
                      "name": "ref",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 132,
                        "end": 138,
                        "typeName": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 138,
                          "name": "TClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 162,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 152,
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 161,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 155,
                        "end": 161,
                        "typeName": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 161,
                          "name": "TOther",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 173,
            "end": 221,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 180,
              "end": 221,
              "id": {
                "type": "Identifier",
                "start": 190,
                "end": 202,
                "name": "ElementClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 211,
                  "end": 218,
                  "expression": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 218,
                    "name": "Element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 219,
                "end": 221,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 226,
            "end": 283,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 233,
              "end": 283,
              "id": {
                "type": "Identifier",
                "start": 243,
                "end": 268,
                "name": "ElementAttributesProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 269,
                "end": 283,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 271,
                    "end": 281,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 280,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 278,
                        "end": 280,
                        "members": []
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 288,
            "end": 347,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 295,
              "end": 347,
              "id": {
                "type": "Identifier",
                "start": 305,
                "end": 329,
                "name": "ElementChildrenAttribute",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 330,
                "end": 347,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 332,
                    "end": 345,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 340,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 340,
                      "end": 344,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 342,
                        "end": 344,
                        "members": []
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 352,
            "end": 391,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 359,
              "end": 391,
              "id": {
                "type": "Identifier",
                "start": 369,
                "end": 388,
                "name": "IntrinsicAttributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 389,
                "end": 391,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 396,
            "end": 457,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 403,
              "end": 457,
              "id": {
                "type": "Identifier",
                "start": 413,
                "end": 430,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 431,
                "end": 457,
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "start": 433,
                    "end": 455,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 434,
                        "end": 445,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 437,
                          "end": 445,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 439,
                            "end": 445
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 455,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 448,
                        "end": 455,
                        "typeName": {
                          "type": "Identifier",
                          "start": 448,
                          "end": 455,
                          "name": "Element",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "type": "ClassDeclaration",
      "start": 460,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 475,
        "name": "ElemClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 527,
        "end": 566,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 533,
            "end": 564,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 533,
              "end": 544,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 544,
              "end": 564,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 545,
                  "end": 560,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 560,
                    "name": "props",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 557,
                      "end": 560,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 559,
                        "end": 560,
                        "typeName": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 560,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 562,
                "end": 564,
                "body": []
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 475,
        "end": 498,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 476,
            "end": 497,
            "name": {
              "type": "Identifier",
              "start": 476,
              "end": 477,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 486,
              "end": 497,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 487,
                  "end": 496,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 488,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 488,
                    "end": 496,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 490,
                      "end": 496
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 510,
          "end": 526,
          "expression": {
            "type": "MemberExpression",
            "start": 510,
            "end": 526,
            "object": {
              "type": "Identifier",
              "start": 510,
              "end": 513,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 514,
              "end": 526,
              "name": "ElementClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 567,
      "end": 607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 577,
            "name": "elem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 580,
            "end": 607,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 580,
              "end": 607,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 591,
                  "end": 597,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 591,
                    "end": 592,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 593,
                    "end": 597,
                    "expression": {
                      "type": "Literal",
                      "start": 594,
                      "end": 596,
                      "value": 12,
                      "raw": "12"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 598,
                  "end": 604,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 598,
                    "end": 599,
                    "name": "y"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 600,
                    "end": 604,
                    "expression": {
                      "type": "Literal",
                      "start": 601,
                      "end": 603,
                      "value": 24,
                      "raw": "24"
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 581,
                "end": 590,
                "name": "ElemClass"
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
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
