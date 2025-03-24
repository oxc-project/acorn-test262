__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 507,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 207,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 207,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 205,
            "body": {
              "type": "TSInterfaceBody",
              "start": 54,
              "end": 205,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 60,
                  "end": 112,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 60,
                    "end": 72,
                    "raw": "\"ns:element\"",
                    "value": "ns:element"
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 74,
                      "end": 111,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 82,
                          "end": 105,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 82,
                            "end": 96,
                            "raw": "\"ns:attribute\"",
                            "value": "ns:attribute"
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 98,
                              "end": 104
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 117,
                  "end": 157,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 117,
                    "end": 151,
                    "raw": "\"ns:NamespacedUpcaseAlsoIntrinsic\"",
                    "value": "ns:NamespacedUpcaseAlsoIntrinsic"
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 153,
                      "end": 156
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 162,
                  "end": 201,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 162,
                    "end": 196,
                    "raw": "\"NS:NamespacedUpcaseAlsoIntrinsic\"",
                    "value": "NS:NamespacedUpcaseAlsoIntrinsic"
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 196,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 198,
                      "end": 201
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 53,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 256,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 220,
            "decorators": [],
            "name": "valid",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 223,
            "end": 256,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 223,
              "end": 256,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 235,
                  "end": 253,
                  "name": {
                    "type": "JSXNamespacedName",
                    "start": 235,
                    "end": 247,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 238,
                      "end": 247,
                      "name": "attribute"
                    },
                    "namespace": {
                      "type": "JSXIdentifier",
                      "start": 235,
                      "end": 237,
                      "name": "ns"
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "start": 248,
                    "end": 253,
                    "raw": "\"yep\"",
                    "value": "yep"
                  }
                }
              ],
              "name": {
                "type": "JSXNamespacedName",
                "start": 224,
                "end": 234,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 227,
                  "end": 234,
                  "name": "element"
                },
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 224,
                  "end": 226,
                  "name": "ns"
                }
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 276,
            "decorators": [],
            "name": "validUpcase1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 279,
            "end": 315,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 279,
              "end": 315,
              "attributes": [],
              "name": {
                "type": "JSXNamespacedName",
                "start": 280,
                "end": 312,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 283,
                  "end": 312,
                  "name": "NamespacedUpcaseAlsoIntrinsic"
                },
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 280,
                  "end": 282,
                  "name": "ns"
                }
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 374,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 335,
            "decorators": [],
            "name": "validUpcase2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 338,
            "end": 374,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 338,
              "end": 374,
              "attributes": [],
              "name": {
                "type": "JSXNamespacedName",
                "start": 339,
                "end": 371,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 342,
                  "end": 371,
                  "name": "NamespacedUpcaseAlsoIntrinsic"
                },
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 339,
                  "end": 341,
                  "name": "NS"
                }
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 405,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 391,
            "decorators": [],
            "name": "invalid1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 394,
            "end": 405,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 394,
              "end": 405,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 395,
                "end": 402,
                "name": "element"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 407,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 455,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 421,
            "decorators": [],
            "name": "invalid2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 424,
            "end": 455,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 424,
              "end": 455,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 436,
                  "end": 452,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 436,
                    "end": 445,
                    "name": "attribute"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 446,
                    "end": 452,
                    "raw": "\"nope\"",
                    "value": "nope"
                  }
                }
              ],
              "name": {
                "type": "JSXNamespacedName",
                "start": 425,
                "end": 435,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 428,
                  "end": 435,
                  "name": "element"
                },
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 425,
                  "end": 427,
                  "name": "ns"
                }
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 457,
      "end": 507,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 506,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 471,
            "decorators": [],
            "name": "invalid3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 474,
            "end": 506,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 474,
              "end": 506,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 486,
                  "end": 503,
                  "name": {
                    "type": "JSXNamespacedName",
                    "start": 486,
                    "end": 496,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 489,
                      "end": 496,
                      "name": "invalid"
                    },
                    "namespace": {
                      "type": "JSXIdentifier",
                      "start": 486,
                      "end": 488,
                      "name": "ns"
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "start": 497,
                    "end": 503,
                    "raw": "\"nope\"",
                    "value": "nope"
                  }
                }
              ],
              "name": {
                "type": "JSXNamespacedName",
                "start": 475,
                "end": 485,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 478,
                  "end": 485,
                  "name": "element"
                },
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 475,
                  "end": 477,
                  "name": "ns"
                }
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
