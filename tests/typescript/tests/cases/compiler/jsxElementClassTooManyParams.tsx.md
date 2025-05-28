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
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "IntrinsicClassAttributes",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "TClass",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TOther",
                      "optional": false,
                      "typeAnnotation": null
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
              "extends": [],
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
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "TClass",
                          "optional": false,
                          "typeAnnotation": null
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
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "TOther",
                          "optional": false,
                          "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 211,
                  "end": 218,
                  "expression": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 218,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "IntrinsicAttributes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 437,
                          "end": 445,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 439,
                            "end": 445
                          }
                        }
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
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null
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
      "type": "ClassDeclaration",
      "start": 460,
      "end": 566,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 475,
        "decorators": [],
        "name": "ElemClass",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
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
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 514,
              "end": 526,
              "decorators": [],
              "name": "ElementClass",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 527,
        "end": 566,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 533,
            "end": 564,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 533,
              "end": 544,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 544,
              "end": 564,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "decorators": [],
                    "name": "props",
                    "optional": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 562,
                "end": 564,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 567,
      "end": 607,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 577,
            "decorators": [],
            "name": "elem",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 580,
            "end": 607,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 580,
              "end": 607,
              "name": {
                "type": "JSXIdentifier",
                "start": 581,
                "end": 590,
                "name": "ElemClass"
              },
              "typeArguments": null,
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
