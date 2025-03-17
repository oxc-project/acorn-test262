__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 521,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 481,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 481,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "dom",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 21,
          "end": 481,
          "body": [
            {
              "type": "TSModuleDeclaration",
              "start": 27,
              "end": 479,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 40,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 41,
                "end": 479,
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 51,
                    "end": 119,
                    "id": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 78,
                      "name": "IntrinsicElements",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 79,
                      "end": 119,
                      "body": [
                        {
                          "type": "TSIndexSignature",
                          "start": 93,
                          "end": 109,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 94,
                              "end": 103,
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 95,
                                "end": 103,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 97,
                                  "end": 103
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 104,
                            "end": 108,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 106,
                              "end": 108,
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
                    "start": 128,
                    "end": 261,
                    "id": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 145,
                      "name": "Element",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 146,
                      "end": 261,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 160,
                          "end": 177,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 170,
                            "name": "__domBrand",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 170,
                            "end": 176,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 172,
                              "end": 176
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 190,
                          "end": 251,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 195,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 195,
                            "end": 250,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 197,
                              "end": 250,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 215,
                                  "end": 236,
                                  "computed": false,
                                  "optional": true,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 215,
                                    "end": 223,
                                    "name": "children",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 224,
                                    "end": 235,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 226,
                                      "end": 235,
                                      "elementType": {
                                        "type": "TSTypeReference",
                                        "start": 226,
                                        "end": 233,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 226,
                                          "end": 233,
                                          "name": "Element",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
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
                    "start": 270,
                    "end": 351,
                    "id": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 292,
                      "name": "ElementClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "start": 301,
                        "end": 308,
                        "expression": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 308,
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
                      "start": 309,
                      "end": 351,
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "start": 323,
                          "end": 341,
                          "key": {
                            "type": "Identifier",
                            "start": 323,
                            "end": 329,
                            "name": "render",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 331,
                            "end": 340,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 333,
                              "end": 340,
                              "typeName": {
                                "type": "Identifier",
                                "start": 333,
                                "end": 340,
                                "name": "Element",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false
                        }
                      ]
                    },
                    "declare": false
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 360,
                    "end": 411,
                    "id": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 395,
                      "name": "ElementAttributesProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 396,
                      "end": 411,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 398,
                          "end": 409,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 398,
                            "end": 403,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 403,
                            "end": 408,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 405,
                              "end": 408
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
                    "start": 420,
                    "end": 473,
                    "id": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 454,
                      "name": "ElementChildrenAttribute",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 455,
                      "end": 473,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 457,
                          "end": 471,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 465,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 465,
                            "end": 470,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 467,
                              "end": 470
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
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 482,
      "end": 521,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 489,
        "end": 521,
        "id": {
          "type": "Identifier",
          "start": 498,
          "end": 501,
          "name": "dom",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 503,
          "end": 520,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 505,
            "end": 520,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 505,
              "end": 520,
              "left": {
                "type": "TSQualifiedName",
                "start": 505,
                "end": 512,
                "left": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 508,
                  "name": "dom",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 512,
                  "name": "JSX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 513,
                "end": 520,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "start": 0,
  "end": 533,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 487,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 487,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "name": "predom",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 24,
          "end": 487,
          "body": [
            {
              "type": "TSModuleDeclaration",
              "start": 30,
              "end": 485,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 43,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 44,
                "end": 485,
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 54,
                    "end": 122,
                    "id": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 81,
                      "name": "IntrinsicElements",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
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
                              "name": "e",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 98,
                                "end": 106,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 100,
                                  "end": 106
                                }
                              },
                              "decorators": [],
                              "optional": false
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
                    "end": 267,
                    "id": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 148,
                      "name": "Element",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 149,
                      "end": 267,
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
                            "name": "__predomBrand",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                          "end": 257,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 201,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 256,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 203,
                              "end": 256,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 221,
                                  "end": 242,
                                  "computed": false,
                                  "optional": true,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 221,
                                    "end": 229,
                                    "name": "children",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 230,
                                    "end": 241,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 232,
                                      "end": 241,
                                      "elementType": {
                                        "type": "TSTypeReference",
                                        "start": 232,
                                        "end": 239,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 232,
                                          "end": 239,
                                          "name": "Element",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
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
                    "start": 276,
                    "end": 357,
                    "id": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 298,
                      "name": "ElementClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [
                      {
                        "type": "TSInterfaceHeritage",
                        "start": 307,
                        "end": 314,
                        "expression": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 314,
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
                      "start": 315,
                      "end": 357,
                      "body": [
                        {
                          "type": "TSMethodSignature",
                          "start": 329,
                          "end": 347,
                          "key": {
                            "type": "Identifier",
                            "start": 329,
                            "end": 335,
                            "name": "render",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 337,
                            "end": 346,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 339,
                              "end": 346,
                              "typeName": {
                                "type": "Identifier",
                                "start": 339,
                                "end": 346,
                                "name": "Element",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false
                        }
                      ]
                    },
                    "declare": false
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 366,
                    "end": 417,
                    "id": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 401,
                      "name": "ElementAttributesProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 402,
                      "end": 417,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 404,
                          "end": 415,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 409,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 409,
                            "end": 414,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 411,
                              "end": 414
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
                    "start": 426,
                    "end": 479,
                    "id": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 460,
                      "name": "ElementChildrenAttribute",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 461,
                      "end": 479,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 463,
                          "end": 477,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 471,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 471,
                            "end": 476,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 473,
                              "end": 476
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
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 488,
      "end": 533,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 495,
        "end": 533,
        "id": {
          "type": "Identifier",
          "start": 504,
          "end": 510,
          "name": "predom",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 512,
          "end": 532,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 514,
            "end": 532,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 514,
              "end": 532,
              "left": {
                "type": "TSQualifiedName",
                "start": 514,
                "end": 524,
                "left": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 520,
                  "name": "predom",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 524,
                  "name": "JSX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 525,
                "end": 532,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "start": 19,
  "end": 679,
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
            "name": "predom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "name": "predom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 221,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 221,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 220,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 75,
              "name": "MySFC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 78,
              "end": 220,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 141,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 86,
                      "end": 141,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 87,
                          "end": 97,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 88,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 88,
                            "end": 96,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 90,
                              "end": 96
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 98,
                          "end": 108,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 99,
                            "end": 107,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 101,
                              "end": 107
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 109,
                          "end": 140,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 117,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 118,
                            "end": 140,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 120,
                              "end": 140,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 120,
                                "end": 138,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 120,
                                  "end": 138,
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "start": 120,
                                    "end": 130,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 120,
                                      "end": 126,
                                      "name": "predom",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 127,
                                      "end": 130,
                                      "name": "JSX",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 131,
                                    "end": 138,
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
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "JSXElement",
                "start": 146,
                "end": 220,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 146,
                  "end": 149,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 147,
                    "end": 148,
                    "name": "p"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 216,
                  "end": 220,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 218,
                    "end": 219,
                    "name": "p"
                  }
                },
                "children": [
                  {
                    "type": "JSXExpressionContainer",
                    "start": 149,
                    "end": 158,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 150,
                      "end": 157,
                      "object": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 155,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 157,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  {
                    "type": "JSXText",
                    "start": 158,
                    "end": 161,
                    "value": " + ",
                    "raw": " + "
                  },
                  {
                    "type": "JSXExpressionContainer",
                    "start": 161,
                    "end": 170,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 162,
                      "end": 169,
                      "object": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 167,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  {
                    "type": "JSXText",
                    "start": 170,
                    "end": 173,
                    "value": " = ",
                    "raw": " = "
                  },
                  {
                    "type": "JSXExpressionContainer",
                    "start": 173,
                    "end": 192,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 174,
                      "end": 191,
                      "left": {
                        "type": "MemberExpression",
                        "start": 174,
                        "end": 181,
                        "object": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 179,
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 181,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 184,
                        "end": 191,
                        "object": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 189,
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 191,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "JSXSpreadChild",
                    "start": 192,
                    "end": 216,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 196,
                      "end": 215,
                      "object": {
                        "type": "MemberExpression",
                        "start": 196,
                        "end": 206,
                        "object": {
                          "type": "ThisExpression",
                          "start": 196,
                          "end": 200
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 206,
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 215,
                        "name": "children",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 223,
      "end": 560,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 230,
        "end": 560,
        "id": {
          "type": "Identifier",
          "start": 236,
          "end": 243,
          "name": "MyClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 274,
          "end": 560,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 280,
              "end": 301,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 280,
                "end": 293,
                "name": "__predomBrand",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": true,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 294,
                "end": 300,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 296,
                  "end": 300
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 306,
              "end": 391,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 306,
                "end": 317,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 317,
                "end": 391,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 318,
                    "end": 387,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 387,
                      "name": "props",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 330,
                        "end": 387,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 332,
                          "end": 387,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 333,
                              "end": 343,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 333,
                                "end": 334,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 334,
                                "end": 342,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 336,
                                  "end": 342
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 344,
                              "end": 354,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 344,
                                "end": 345,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 345,
                                "end": 353,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 347,
                                  "end": 353
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 355,
                              "end": 386,
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 355,
                                "end": 363,
                                "name": "children",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 364,
                                "end": 386,
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "start": 366,
                                  "end": 386,
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "start": 366,
                                    "end": 384,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 366,
                                      "end": 384,
                                      "left": {
                                        "type": "TSQualifiedName",
                                        "start": 366,
                                        "end": 376,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 366,
                                          "end": 372,
                                          "name": "predom",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 373,
                                          "end": 376,
                                          "name": "JSX",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 377,
                                        "end": 384,
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
                              "accessibility": null,
                              "static": false
                            }
                          ]
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
                  "start": 389,
                  "end": 391,
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
            },
            {
              "type": "MethodDefinition",
              "start": 396,
              "end": 558,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 396,
                "end": 402,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 402,
                "end": 558,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 405,
                  "end": 558,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 415,
                      "end": 552,
                      "argument": {
                        "type": "JSXElement",
                        "start": 422,
                        "end": 551,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 422,
                          "end": 425,
                          "attributes": [],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 423,
                            "end": 424,
                            "name": "p"
                          },
                          "selfClosing": false,
                          "typeArguments": null
                        },
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "start": 547,
                          "end": 551,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 549,
                            "end": 550,
                            "name": "p"
                          }
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 425,
                            "end": 438,
                            "value": "\n            ",
                            "raw": "\n            "
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "start": 438,
                            "end": 452,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 439,
                              "end": 451,
                              "object": {
                                "type": "MemberExpression",
                                "start": 439,
                                "end": 449,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 439,
                                  "end": 443
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 449,
                                  "name": "props",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 450,
                                "end": 451,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          {
                            "type": "JSXText",
                            "start": 452,
                            "end": 455,
                            "value": " + ",
                            "raw": " + "
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "start": 455,
                            "end": 469,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 456,
                              "end": 468,
                              "object": {
                                "type": "MemberExpression",
                                "start": 456,
                                "end": 466,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 456,
                                  "end": 460
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 461,
                                  "end": 466,
                                  "name": "props",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 467,
                                "end": 468,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          {
                            "type": "JSXText",
                            "start": 469,
                            "end": 472,
                            "value": " = ",
                            "raw": " = "
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "start": 472,
                            "end": 501,
                            "expression": {
                              "type": "BinaryExpression",
                              "start": 473,
                              "end": 500,
                              "left": {
                                "type": "MemberExpression",
                                "start": 473,
                                "end": 485,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 473,
                                  "end": 483,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 473,
                                    "end": 477
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 478,
                                    "end": 483,
                                    "name": "props",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 484,
                                  "end": 485,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "start": 488,
                                "end": 500,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 488,
                                  "end": 498,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 488,
                                    "end": 492
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 493,
                                    "end": 498,
                                    "name": "props",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 500,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "JSXText",
                            "start": 501,
                            "end": 514,
                            "value": "\n            ",
                            "raw": "\n            "
                          },
                          {
                            "type": "JSXSpreadChild",
                            "start": 514,
                            "end": 538,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 518,
                              "end": 537,
                              "object": {
                                "type": "MemberExpression",
                                "start": 518,
                                "end": 528,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 518,
                                  "end": 522
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 523,
                                  "end": 528,
                                  "name": "props",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 529,
                                "end": 537,
                                "name": "children",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          {
                            "type": "JSXText",
                            "start": 538,
                            "end": 547,
                            "value": "\n        ",
                            "raw": "\n        "
                          }
                        ]
                      }
                    }
                  ]
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
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 255,
            "end": 273,
            "expression": {
              "type": "MemberExpression",
              "start": 255,
              "end": 273,
              "object": {
                "type": "MemberExpression",
                "start": 255,
                "end": 265,
                "object": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 261,
                  "name": "predom",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 265,
                  "name": "JSX",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 266,
                "end": 273,
                "name": "Element",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 561,
      "end": 654,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 568,
        "end": 654,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 574,
            "end": 654,
            "id": {
              "type": "Identifier",
              "start": 574,
              "end": 578,
              "name": "tree",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXElement",
              "start": 581,
              "end": 654,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 581,
                "end": 600,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 588,
                    "end": 593,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 588,
                      "end": 589,
                      "name": "x"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 590,
                      "end": 593,
                      "expression": {
                        "type": "Literal",
                        "start": 591,
                        "end": 592,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  {
                    "type": "JSXAttribute",
                    "start": 594,
                    "end": 599,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 594,
                      "end": 595,
                      "name": "y"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 596,
                      "end": 599,
                      "expression": {
                        "type": "Literal",
                        "start": 597,
                        "end": 598,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 582,
                  "end": 587,
                  "name": "MySFC"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 646,
                "end": 654,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 648,
                  "end": 653,
                  "name": "MySFC"
                }
              },
              "children": [
                {
                  "type": "JSXElement",
                  "start": 600,
                  "end": 623,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 600,
                    "end": 623,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 609,
                        "end": 614,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 609,
                          "end": 610,
                          "name": "x"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 611,
                          "end": 614,
                          "expression": {
                            "type": "Literal",
                            "start": 612,
                            "end": 613,
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 615,
                        "end": 620,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 615,
                          "end": 616,
                          "name": "y"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 617,
                          "end": 620,
                          "expression": {
                            "type": "Literal",
                            "start": 618,
                            "end": 619,
                            "value": 4,
                            "raw": "4"
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 601,
                      "end": 608,
                      "name": "MyClass"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                {
                  "type": "JSXElement",
                  "start": 623,
                  "end": 646,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 623,
                    "end": 646,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 632,
                        "end": 637,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 632,
                          "end": 633,
                          "name": "x"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 634,
                          "end": 637,
                          "expression": {
                            "type": "Literal",
                            "start": 635,
                            "end": 636,
                            "value": 5,
                            "raw": "5"
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 638,
                        "end": 643,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 638,
                          "end": 639,
                          "name": "y"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 640,
                          "end": 643,
                          "expression": {
                            "type": "Literal",
                            "start": 641,
                            "end": 642,
                            "value": 6,
                            "raw": "6"
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 624,
                      "end": 631,
                      "name": "MyClass"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 656,
      "end": 678,
      "declaration": {
        "type": "JSXElement",
        "start": 671,
        "end": 678,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 671,
          "end": 674,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 672,
            "end": 673,
            "name": "h"
          },
          "selfClosing": false,
          "typeArguments": null
        },
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 674,
          "end": 678,
          "name": {
            "type": "JSXIdentifier",
            "start": 676,
            "end": 677,
            "name": "h"
          }
        },
        "children": []
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
  "end": 1009,
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
            "name": "dom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "dom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 111,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 56,
          "end": 67,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 67,
            "name": "prerendered",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 70,
          "end": 75,
          "imported": {
            "type": "Identifier",
            "start": 70,
            "end": 75,
            "name": "MySFC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 70,
            "end": 75,
            "name": "MySFC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 77,
          "end": 84,
          "imported": {
            "type": "Identifier",
            "start": 77,
            "end": 84,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 77,
            "end": 84,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 86,
          "end": 90,
          "imported": {
            "type": "Identifier",
            "start": 86,
            "end": 90,
            "name": "tree",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 86,
            "end": 90,
            "name": "tree",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 97,
        "end": 110,
        "value": "./component",
        "raw": "\"./component\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 120,
            "name": "elem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 123,
            "end": 134,
            "name": "prerendered",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 136,
          "end": 140,
          "name": "elem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "JSXElement",
          "start": 143,
          "end": 150,
          "openingElement": {
            "type": "JSXOpeningElement",
            "start": 143,
            "end": 146,
            "attributes": [],
            "name": {
              "type": "JSXIdentifier",
              "start": 144,
              "end": 145,
              "name": "h"
            },
            "selfClosing": false,
            "typeArguments": null
          },
          "closingElement": {
            "type": "JSXClosingElement",
            "start": 146,
            "end": 150,
            "name": {
              "type": "JSXIdentifier",
              "start": 148,
              "end": 149,
              "name": "h"
            }
          },
          "children": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 200,
            "name": "DOMSFC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 203,
            "end": 334,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 204,
                "end": 263,
                "name": "props",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 209,
                  "end": 263,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 211,
                    "end": 263,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 212,
                        "end": 222,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 213,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 213,
                          "end": 221,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 215,
                            "end": 221
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 223,
                        "end": 233,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 223,
                          "end": 224,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 224,
                          "end": 232,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 226,
                            "end": 232
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 234,
                        "end": 262,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 242,
                          "name": "children",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 243,
                          "end": 262,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 245,
                            "end": 262,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 245,
                              "end": 260,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 245,
                                "end": 260,
                                "left": {
                                  "type": "TSQualifiedName",
                                  "start": 245,
                                  "end": 252,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 245,
                                    "end": 248,
                                    "name": "dom",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 249,
                                    "end": 252,
                                    "name": "JSX",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 253,
                                  "end": 260,
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
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 268,
              "end": 334,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 268,
                "end": 271,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 269,
                  "end": 270,
                  "name": "p"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 330,
                "end": 334,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 332,
                  "end": 333,
                  "name": "p"
                }
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 271,
                  "end": 280,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 272,
                    "end": 279,
                    "object": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 277,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                {
                  "type": "JSXText",
                  "start": 280,
                  "end": 283,
                  "value": " + ",
                  "raw": " + "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 283,
                  "end": 292,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 284,
                    "end": 291,
                    "object": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 289,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 291,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                {
                  "type": "JSXText",
                  "start": 292,
                  "end": 295,
                  "value": " = ",
                  "raw": " = "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 295,
                  "end": 314,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 296,
                    "end": 313,
                    "left": {
                      "type": "MemberExpression",
                      "start": 296,
                      "end": 303,
                      "object": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 301,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 303,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "start": 306,
                      "end": 313,
                      "object": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 311,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 313,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 314,
                  "end": 330,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 315,
                    "end": 329,
                    "object": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 320,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 329,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 337,
      "end": 624,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 351,
        "name": "DOMClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 379,
        "end": 624,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 385,
            "end": 403,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 395,
              "name": "__domBrand",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 402,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 398,
                "end": 402
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 490,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 419,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 419,
              "end": 490,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 420,
                  "end": 486,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 486,
                    "name": "props",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 432,
                      "end": 486,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 434,
                        "end": 486,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 435,
                            "end": 445,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 435,
                              "end": 436,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 436,
                              "end": 444,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 438,
                                "end": 444
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 446,
                            "end": 456,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 446,
                              "end": 447,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 447,
                              "end": 455,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 449,
                                "end": 455
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 457,
                            "end": 485,
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 457,
                              "end": 465,
                              "name": "children",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 466,
                              "end": 485,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 468,
                                "end": 485,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 468,
                                  "end": 483,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 468,
                                    "end": 483,
                                    "left": {
                                      "type": "TSQualifiedName",
                                      "start": 468,
                                      "end": 475,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 468,
                                        "end": 471,
                                        "name": "dom",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 472,
                                        "end": 475,
                                        "name": "JSX",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 476,
                                      "end": 483,
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
                            "accessibility": null,
                            "static": false
                          }
                        ]
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
                "start": 488,
                "end": 490,
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
          },
          {
            "type": "MethodDefinition",
            "start": 495,
            "end": 622,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 501,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 501,
              "end": 622,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 504,
                "end": 622,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 514,
                    "end": 616,
                    "argument": {
                      "type": "JSXElement",
                      "start": 521,
                      "end": 615,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 521,
                        "end": 524,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 522,
                          "end": 523,
                          "name": "p"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 611,
                        "end": 615,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 613,
                          "end": 614,
                          "name": "p"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXExpressionContainer",
                          "start": 524,
                          "end": 538,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 525,
                            "end": 537,
                            "object": {
                              "type": "MemberExpression",
                              "start": 525,
                              "end": 535,
                              "object": {
                                "type": "ThisExpression",
                                "start": 525,
                                "end": 529
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 530,
                                "end": 535,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 536,
                              "end": 537,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 538,
                          "end": 541,
                          "value": " + ",
                          "raw": " + "
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "start": 541,
                          "end": 555,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 542,
                            "end": 554,
                            "object": {
                              "type": "MemberExpression",
                              "start": 542,
                              "end": 552,
                              "object": {
                                "type": "ThisExpression",
                                "start": 542,
                                "end": 546
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 547,
                                "end": 552,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 553,
                              "end": 554,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        {
                          "type": "JSXText",
                          "start": 555,
                          "end": 558,
                          "value": " = ",
                          "raw": " = "
                        },
                        {
                          "type": "JSXExpressionContainer",
                          "start": 558,
                          "end": 587,
                          "expression": {
                            "type": "BinaryExpression",
                            "start": 559,
                            "end": 586,
                            "left": {
                              "type": "MemberExpression",
                              "start": 559,
                              "end": 571,
                              "object": {
                                "type": "MemberExpression",
                                "start": 559,
                                "end": 569,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 559,
                                  "end": 563
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 564,
                                  "end": 569,
                                  "name": "props",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 570,
                                "end": 571,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "start": 574,
                              "end": 586,
                              "object": {
                                "type": "MemberExpression",
                                "start": 574,
                                "end": 584,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 574,
                                  "end": 578
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 579,
                                  "end": 584,
                                  "name": "props",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 585,
                                "end": 586,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "JSXSpreadChild",
                          "start": 587,
                          "end": 611,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 591,
                            "end": 610,
                            "object": {
                              "type": "MemberExpression",
                              "start": 591,
                              "end": 601,
                              "object": {
                                "type": "ThisExpression",
                                "start": 591,
                                "end": 595
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 596,
                                "end": 601,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 602,
                              "end": 610,
                              "name": "children",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                ]
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
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 363,
          "end": 378,
          "expression": {
            "type": "MemberExpression",
            "start": 363,
            "end": 378,
            "object": {
              "type": "MemberExpression",
              "start": 363,
              "end": 370,
              "object": {
                "type": "Identifier",
                "start": 363,
                "end": 366,
                "name": "dom",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 367,
                "end": 370,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 371,
              "end": 378,
              "name": "Element",
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
      "start": 670,
      "end": 761,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 676,
          "end": 761,
          "id": {
            "type": "Identifier",
            "start": 676,
            "end": 681,
            "name": "_tree",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 684,
            "end": 761,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 684,
              "end": 704,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 692,
                  "end": 697,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 692,
                    "end": 693,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 694,
                    "end": 697,
                    "expression": {
                      "type": "Literal",
                      "start": 695,
                      "end": 696,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 698,
                  "end": 703,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 698,
                    "end": 699,
                    "name": "y"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 700,
                    "end": 703,
                    "expression": {
                      "type": "Literal",
                      "start": 701,
                      "end": 702,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 685,
                "end": 691,
                "name": "DOMSFC"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 752,
              "end": 761,
              "name": {
                "type": "JSXIdentifier",
                "start": 754,
                "end": 760,
                "name": "DOMSFC"
              }
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 704,
                "end": 728,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 704,
                  "end": 728,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 714,
                      "end": 719,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 714,
                        "end": 715,
                        "name": "x"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 716,
                        "end": 719,
                        "expression": {
                          "type": "Literal",
                          "start": 717,
                          "end": 718,
                          "value": 3,
                          "raw": "3"
                        }
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 720,
                      "end": 725,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 720,
                        "end": 721,
                        "name": "y"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 722,
                        "end": 725,
                        "expression": {
                          "type": "Literal",
                          "start": 723,
                          "end": 724,
                          "value": 4,
                          "raw": "4"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 705,
                    "end": 713,
                    "name": "DOMClass"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXElement",
                "start": 728,
                "end": 752,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 728,
                  "end": 752,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 738,
                      "end": 743,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 738,
                        "end": 739,
                        "name": "x"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 740,
                        "end": 743,
                        "expression": {
                          "type": "Literal",
                          "start": 741,
                          "end": 742,
                          "value": 5,
                          "raw": "5"
                        }
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 744,
                      "end": 749,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 744,
                        "end": 745,
                        "name": "y"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 746,
                        "end": 749,
                        "expression": {
                          "type": "Literal",
                          "start": 747,
                          "end": 748,
                          "value": 6,
                          "raw": "6"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 729,
                    "end": 737,
                    "name": "DOMClass"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 795,
      "end": 888,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 801,
          "end": 888,
          "id": {
            "type": "Identifier",
            "start": 801,
            "end": 812,
            "name": "_brokenTree",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 815,
            "end": 888,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 815,
              "end": 834,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 822,
                  "end": 827,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 822,
                    "end": 823,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 824,
                    "end": 827,
                    "expression": {
                      "type": "Literal",
                      "start": 825,
                      "end": 826,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 828,
                  "end": 833,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 828,
                    "end": 829,
                    "name": "y"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 830,
                    "end": 833,
                    "expression": {
                      "type": "Literal",
                      "start": 831,
                      "end": 832,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 816,
                "end": 821,
                "name": "MySFC"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 880,
              "end": 888,
              "name": {
                "type": "JSXIdentifier",
                "start": 882,
                "end": 887,
                "name": "MySFC"
              }
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 834,
                "end": 857,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 834,
                  "end": 857,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 843,
                      "end": 848,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 843,
                        "end": 844,
                        "name": "x"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 845,
                        "end": 848,
                        "expression": {
                          "type": "Literal",
                          "start": 846,
                          "end": 847,
                          "value": 3,
                          "raw": "3"
                        }
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 849,
                      "end": 854,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 849,
                        "end": 850,
                        "name": "y"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 851,
                        "end": 854,
                        "expression": {
                          "type": "Literal",
                          "start": 852,
                          "end": 853,
                          "value": 4,
                          "raw": "4"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 835,
                    "end": 842,
                    "name": "MyClass"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXElement",
                "start": 857,
                "end": 880,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 857,
                  "end": 880,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 866,
                      "end": 871,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 866,
                        "end": 867,
                        "name": "x"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 868,
                        "end": 871,
                        "expression": {
                          "type": "Literal",
                          "start": 869,
                          "end": 870,
                          "value": 5,
                          "raw": "5"
                        }
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 872,
                      "end": 877,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 872,
                        "end": 873,
                        "name": "y"
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "start": 874,
                        "end": 877,
                        "expression": {
                          "type": "Literal",
                          "start": 875,
                          "end": 876,
                          "value": 6,
                          "raw": "6"
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 858,
                    "end": 865,
                    "name": "MyClass"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 946,
      "end": 1008,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 952,
          "end": 1008,
          "id": {
            "type": "Identifier",
            "start": 952,
            "end": 964,
            "name": "_brokenTree2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 967,
            "end": 1008,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 967,
              "end": 987,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 975,
                  "end": 980,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 975,
                    "end": 976,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 977,
                    "end": 980,
                    "expression": {
                      "type": "Literal",
                      "start": 978,
                      "end": 979,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 981,
                  "end": 986,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 981,
                    "end": 982,
                    "name": "y"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 983,
                    "end": 986,
                    "expression": {
                      "type": "Literal",
                      "start": 984,
                      "end": 985,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 968,
                "end": 974,
                "name": "DOMSFC"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 999,
              "end": 1008,
              "name": {
                "type": "JSXIdentifier",
                "start": 1001,
                "end": 1007,
                "name": "DOMSFC"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 987,
                "end": 993,
                "expression": {
                  "type": "Identifier",
                  "start": 988,
                  "end": 992,
                  "name": "tree",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "JSXExpressionContainer",
                "start": 993,
                "end": 999,
                "expression": {
                  "type": "Identifier",
                  "start": 994,
                  "end": 998,
                  "name": "tree",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
