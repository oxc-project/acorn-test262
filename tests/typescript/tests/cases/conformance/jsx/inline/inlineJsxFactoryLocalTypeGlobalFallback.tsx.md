__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 403,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 367,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 21,
            "end": 365,
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
              "end": 365,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 45,
                  "end": 113,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 72,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 73,
                    "end": 113,
                    "body": [
                      {
                        "type": "TSIndexSignature",
                        "start": 87,
                        "end": 103,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 88,
                            "end": 97,
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 89,
                              "end": 97,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 91,
                                "end": 97
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 98,
                          "end": 102,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 100,
                            "end": 102,
                            "members": []
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
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 122,
                  "end": 237,
                  "id": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 139,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 140,
                    "end": 237,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 154,
                        "end": 171,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 164,
                          "decorators": [],
                          "name": "__domBrand",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 170,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 166,
                            "end": 170
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 184,
                        "end": 204,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 192,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 192,
                          "end": 203,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 194,
                            "end": 203,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 194,
                              "end": 201,
                              "typeName": {
                                "type": "Identifier",
                                "start": 194,
                                "end": 201,
                                "decorators": [],
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 217,
                        "end": 227,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 222,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 222,
                          "end": 226,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 224,
                            "end": 226,
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
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 246,
                  "end": 297,
                  "id": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 281,
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 282,
                    "end": 297,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 284,
                        "end": 295,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 284,
                          "end": 289,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 289,
                          "end": 294,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 291,
                            "end": 294
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
                  "type": "TSInterfaceDeclaration",
                  "start": 306,
                  "end": 359,
                  "id": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 340,
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 341,
                    "end": 359,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 343,
                        "end": 357,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 343,
                          "end": 351,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 351,
                          "end": 356,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 353,
                            "end": 356
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 368,
      "end": 403,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 375,
        "end": 403,
        "id": {
          "type": "Identifier",
          "start": 384,
          "end": 387,
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 389,
          "end": 402,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 391,
            "end": 402,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 391,
              "end": 402,
              "left": {
                "type": "Identifier",
                "start": 391,
                "end": 394,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 395,
                "end": 402,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 425,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 379,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 379,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "predom",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 24,
          "end": 379,
          "body": [
            {
              "type": "TSModuleDeclaration",
              "start": 30,
              "end": 377,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 43,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 44,
                "end": 377,
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 54,
                    "end": 122,
                    "id": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 81,
                      "decorators": [],
                      "name": "IntrinsicElements",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 82,
                      "end": 122,
                      "body": [
                        {
                          "type": "TSIndexSignature",
                          "start": 96,
                          "end": 112,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 97,
                              "end": 106,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 98,
                                "end": 106,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 100,
                                  "end": 106
                                }
                              }
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 107,
                            "end": 111,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 109,
                              "end": 111,
                              "members": []
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
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 131,
                    "end": 249,
                    "id": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 148,
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 149,
                      "end": 249,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 163,
                          "end": 183,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 176,
                            "decorators": [],
                            "name": "__predomBrand",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 176,
                            "end": 182,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 178,
                              "end": 182
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 196,
                          "end": 216,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 204,
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 204,
                            "end": 215,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 206,
                              "end": 215,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 206,
                                "end": 213,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 206,
                                  "end": 213,
                                  "decorators": [],
                                  "name": "Element",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 229,
                          "end": 239,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 234,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 234,
                            "end": 238,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 236,
                              "end": 238,
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
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 258,
                    "end": 309,
                    "id": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 293,
                      "decorators": [],
                      "name": "ElementAttributesProperty",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 294,
                      "end": 309,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 296,
                          "end": 307,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 296,
                            "end": 301,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 301,
                            "end": 306,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 303,
                              "end": 306
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
                    "type": "TSInterfaceDeclaration",
                    "start": 318,
                    "end": 371,
                    "id": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 352,
                      "decorators": [],
                      "name": "ElementChildrenAttribute",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 353,
                      "end": 371,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 355,
                          "end": 369,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 355,
                            "end": 363,
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 363,
                            "end": 368,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 365,
                              "end": 368
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    "declare": false
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 380,
      "end": 425,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 387,
        "end": 425,
        "id": {
          "type": "Identifier",
          "start": 396,
          "end": 402,
          "decorators": [],
          "name": "predom",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 404,
          "end": 424,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 406,
            "end": 424,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 406,
              "end": 424,
              "left": {
                "type": "TSQualifiedName",
                "start": 406,
                "end": 416,
                "left": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 412,
                  "decorators": [],
                  "name": "predom",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 416,
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 417,
                "end": 424,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 79,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 28,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "decorators": [],
            "name": "predom",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "decorators": [],
            "name": "predom",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 55,
        "value": "./renderer2",
        "raw": "\"./renderer2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 56,
      "end": 78,
      "declaration": {
        "type": "JSXElement",
        "start": 71,
        "end": 78,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 71,
          "end": 74,
          "name": {
            "type": "JSXIdentifier",
            "start": 72,
            "end": 73,
            "name": "h"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 74,
          "end": 78,
          "name": {
            "type": "JSXIdentifier",
            "start": 76,
            "end": 77,
            "name": "h"
          }
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 162,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 16,
      "end": 48,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 25,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 48,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 87,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 56,
          "end": 67,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 67,
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 86,
        "value": "./component",
        "raw": "\"./component\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 111,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 96,
            "decorators": [],
            "name": "elem",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 99,
            "end": 110,
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 112,
          "end": 116,
          "decorators": [],
          "name": "elem",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "JSXElement",
          "start": 119,
          "end": 126,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 119,
            "end": 122,
            "name": {
              "type": "JSXIdentifier",
              "start": 120,
              "end": 121,
              "name": "h"
            },
            "typeArguments": null,
            "attributes": [],
            "selfClosing": false
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 122,
            "end": 126,
            "name": {
              "type": "JSXIdentifier",
              "start": 124,
              "end": 125,
              "name": "h"
            }
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
